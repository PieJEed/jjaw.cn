import { Plugin } from "vuepress";
import { App } from "vuepress/core";
import { fs, path } from "vuepress/utils";
import { glob } from 'glob'

export function navAataPagePlugin(ignore:string[] = ['node_modules/**','.vuepress/**','.github','package.json']): Plugin {
    return {
        name: "nav-data-page",
        onInitialized: async (app: App) => {
            const pachUrlpachMap = new Map<string, Object>();
            const jsonFiles = await glob('**/nav.json', { ignore });
            await Promise.all(jsonFiles.map(async (file)=>{
                try{
                    const jsonString = await fs.readFile(file, { encoding: 'utf8' });
                    const jsonData = JSON.parse(jsonString);
                    const filePath = path.dirname(file);
                    pachUrlpachMap.set(filePath,jsonData);
                }catch(eror){
                    throw new Error(`解析json文件出错! \n ${file} \n ${eror}`);
                }
            }));
            // console.log(pachUrlpachMap);
            // 设置有效的页面
            for (const page of app.pages) {
                if (!page.filePathRelative) {
                    continue;
                }
                const dirPath = path.dirname(page.filePathRelative);
                const navPageData = pachUrlpachMap.get(dirPath);
                if (!navPageData) {
                    continue;
                }
                page.data["navPage"] = navPageData;
            }
        }
    }
}