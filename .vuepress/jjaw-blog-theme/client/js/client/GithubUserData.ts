

type GithubUser = {
    img: string,
    githubName:string, //github用户名称
    githubPage:string// github主页链接
}
/**
 * 获取某邮箱的github用户的信息
 */
export async function getGitHubUserInfoByEmail(email:string) {
    let githubUser:GithubUser|null = null;
    let locKey = `github_user_${email}`;
    let locItem = localStorage.getItem(locKey);
    if("null"==locItem){
        return null;
    }
    if(locItem){
        try{
            githubUser = JSON.parse(locItem);
        }catch(error){
            console.warn(error);
        }
    }
    if(!githubUser && email.endsWith("@users.noreply.github.com")){
        let userInfo = email.substring(0,email.indexOf("@")).split("+",2);
        let userID = userInfo[0];
        let userName = userInfo[1];
        githubUser = {
            img: `https://avatars.githubusercontent.com/u/${userID}?v=4`,
            githubName: userName,
            githubPage: `https://github.com/${userName}`
        }

        // 不用存了，因为不用去github搜索，直接重新解析就行
        // localStorage.setItem(locKey,JSON.stringify(githubUser));
    }
    if(!githubUser){
        const url = new URL("https://api.github.com/search/users");
        url.searchParams.append("per_page","1");
        url.searchParams.append("q",`${email} in:email`);
        let r = await fetch(url);
        if(!r.ok){
            return null;
        }
        let json = await r.json();
        if(!json.items?.length){ // 用户不存在
            localStorage.setItem(locKey,"null");
            return null;
        }
        let user = json.items[0];
        githubUser = {
            img:user.avatar_url as string,
            githubName:user.login  as string, //github用户名称
            githubPage: user.html_url  as string// github主页链接
        }
        localStorage.setItem(locKey,JSON.stringify(githubUser));
    }
    return githubUser
}