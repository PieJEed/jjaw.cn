import{_ as i,r as l,o,c,b as e,d as t,w as a,a as p,e as n}from"./app-D1Sw9Xs8.js";const r={},u=p(`<h1 id="挂载-github-releases" tabindex="-1"><a class="header-anchor" href="#挂载-github-releases"><span>挂载 GitHub Releases</span></a></h1><p>将 GitHub Releases 挂载到 FList 上</p><h2 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法"><span>配置方法</span></a></h2><p>将 <code>jianjianai</code> 的 <code>FList</code> 仓库挂载到根目录 <code>/</code> 下</p><ul><li>mountPath: 挂载路径,就是将文件源中的文件放到什么路径下</li><li>analysis: 文件源分析器，这里使用的是 <code>githubReleasesFilesAnalysis</code>，用于解析 GitHub Releases 中的文件</li></ul><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  mountPath<span class="token operator">:</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  analysis<span class="token operator">:</span><span class="token function">githubReleasesFilesAnalysis</span><span class="token punctuation">(</span><span class="token punctuation">{</span>user<span class="token operator">:</span><span class="token string">&quot;jianjianai&quot;</span><span class="token punctuation">,</span> repository<span class="token operator">:</span><span class="token string">&quot;FList&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>这样就把 <code>jianjianai</code> 的 <code>FList</code> 仓库挂载到了根目录 <code>/</code> 下了。</p><h2 id="githubreleasesfilesanalysis-特性" tabindex="-1"><a class="header-anchor" href="#githubreleasesfilesanalysis-特性"><span>githubReleasesFilesAnalysis 特性</span></a></h2><p><code>githubReleasesFilesAnalysis</code> 会将 <code>GitHub Releases</code> 中的每个标签解析为一个目录，标签下发行的文件放到这个目录中。例如:</p><ul><li><code>v1.0</code> -&gt; <code>/v1.0</code></li><li><code>v1.1</code> -&gt; <code>/v1.1</code></li></ul><p>如果想要将文件放到<code>/</code>下可以将标签名称命名为 <code>root</code>,在 <code>root</code> 标签下的文件会被放到 <code>/</code> 下。</p><p>如果想要将文件放到更深的目录下，则可以在标签中使用<code>/</code>。例如</p><ul><li><code>v1.0/test</code> -&gt; <code>/v1.0/test</code></li><li><code>test/test2</code> -&gt; <code>/test/test2</code></li></ul><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><p>如果直接从GitHub下载速度可能不佳。</p><p>并且由于跨域的原因，PDF，TXT，这些文件无法预览，只能下载。（视频图片音频可以预览）。</p><p><strong>建议配置下载代理,</strong> 可以加速下载和解决跨域问题。</p><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>`,18);function d(g,h){const s=l("RouteLink");return o(),c("div",null,[u,e("ul",null,[e("li",null,[t(s,{to:"/articles/11-Flist/5-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%86%99%E6%B3%95/3-%E4%BB%A3%E7%90%86.html"},{default:a(()=>[n("-> 配置下载代理")]),_:1})]),e("li",null,[t(s,{to:"/articles/11-Flist/6-%E9%83%A8%E7%BD%B2%E5%88%B0%E8%87%AA%E5%B7%B1%E5%96%9C%E6%AC%A2%E7%9A%84%E5%B9%B3%E5%8F%B0.html"},{default:a(()=>[n("-> 部署到自己喜欢的平台")]),_:1})])])])}const k=i(r,[["render",d],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/2024/8/3/flist-config-mount-git-hub-releases/","title":"FList - 挂载 GitHub Releases","lang":"zh-CN","frontmatter":{"permalinkPattern":"2024/8/3/flist-config-mount-git-hub-releases/","title":"FList - 挂载 GitHub Releases","star":false,"comment":true,"description":"挂载 GitHub Releases 将 GitHub Releases 挂载到 FList 上 配置方法 将 jianjianai 的 FList 仓库挂载到根目录 / 下 mountPath: 挂载路径,就是将文件源中的文件放到什么路径下 analysis: 文件源分析器，这里使用的是 githubReleasesFilesAnalysis，用于解...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/2024/8/3/flist-config-mount-git-hub-releases/"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"FList - 挂载 GitHub Releases"}],["meta",{"property":"og:description","content":"挂载 GitHub Releases 将 GitHub Releases 挂载到 FList 上 配置方法 将 jianjianai 的 FList 仓库挂载到根目录 / 下 mountPath: 挂载路径,就是将文件源中的文件放到什么路径下 analysis: 文件源分析器，这里使用的是 githubReleasesFilesAnalysis，用于解..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-06T09:12:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-06T09:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FList - 挂载 GitHub Releases\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-06T09:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置方法","slug":"配置方法","link":"#配置方法","children":[]},{"level":2,"title":"githubReleasesFilesAnalysis 特性","slug":"githubreleasesfilesanalysis-特性","link":"#githubreleasesfilesanalysis-特性","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"下一步","slug":"下一步","link":"#下一步","children":[]}],"git":{"isRoot":true,"createdTime":1722689734000,"updatedTime":1722935574000,"contributors":[{"name":"jjaw","email":"jjaw@jjaw.cn","commits":2}]},"excerpt":"\\n<p>将 GitHub Releases 挂载到 FList 上</p>\\n<h2>配置方法</h2>\\n<p>将 <code>jianjianai</code> 的 <code>FList</code> 仓库挂载到根目录 <code>/</code> 下</p>\\n<ul>\\n<li>mountPath: 挂载路径,就是将文件源中的文件放到什么路径下</li>\\n<li>analysis: 文件源分析器，这里使用的是 <code>githubReleasesFilesAnalysis</code>，用于解析 GitHub Releases 中的文件</li>\\n</ul>\\n<div class=\\"language-typescript\\" data-highlighter=\\"prismjs\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"line\\"><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  mountPath<span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"/\\"</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">  analysis<span class=\\"token operator\\">:</span><span class=\\"token function\\">githubReleasesFilesAnalysis</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>user<span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"jianjianai\\"</span><span class=\\"token punctuation\\">,</span> repository<span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"FList\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"github_edit":{"filePathRelative":"articles/11-Flist/5-配置文件写法/2-挂载/1-GitHub-Releases.md"},"navPage":[{"title":"介绍","link":"/2024/8/3/flist-introduce/"},{"title":"快速开始","link":"/2024/8/3/flist-fast-start/"},{"title":"使用趁手的工具编辑配置文件","link":"/2024/8/3/flist-edit-config/","items":[{"title":"直接在GitHub上修改","link":"/2024/8/3/flist-online-git-hub/"},{"title":"下载代码本地修改(不推荐)","link":"/2024/8/3/flist-loclhost/"},{"title":"在线IDE编辑器修改(推荐)","link":"/2024/8/3/flist-online-ide/","items":[{"title":"Gitpod","link":"/2024/8/3/flist-online-gitpod/"},{"title":"StackBlitz","link":"/2024/8/3/flist-online-stack-blitz/"}]}]},{"title":"了解配置文件的写法","link":"/2024/8/3/flist-config-wite/","items":[{"title":"基础","link":"/2024/8/3/flist-config-base/"},{"title":"挂载文件","link":"/2024/8/3/flist-config-mount/","items":[{"title":"GitHub Releases","link":"/2024/8/3/flist-config-mount-git-hub-releases/"},{"title":"Gitee 发行版","link":"/2024/8/6/flist-config-mount-gitee-releases/"},{"title":"Hugging Face Datasets","link":"/2024/8/3/flist-config-mount-hugging-face-fatasets/"},{"title":"URL 下载地址","link":"/2024/8/3/flist-config-mount-down-url/"}]},{"title":"配置代理","link":"/2024/8/3/flist-config-porxy/","items":[{"title":"Cloudflare Pages","link":"/2024/8/3/flist-config-porxy-git-hub-releases/"},{"title":"Vercel","link":"/2024/8/3/flist-config-porxy-vercel/"},{"title":"Netlify","link":"/2024/8/5/flist-config-porxy-netlify/"}]}]},{"title":"部署到自己喜欢的平台","link":"/2024/8/3/flist-deploy/","items":[{"title":"Cloudflare Pages (推荐！功能完整)","link":"/2024/8/3/flist-deploy-cloudflare-pages/"},{"title":"Vercel (推荐！功能完整)","link":"/2024/8/3/flist-deploy-vercel/"},{"title":"Netlify (推荐！功能完整)","link":"/2024/8/5/flist-deploy-netlify/"},{"title":"GitHub Pages","link":"/2024/8/3/flist-deploy-git-hub-pages/"}]}]}');export{k as comp,m as data};
