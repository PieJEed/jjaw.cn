import{_ as a,o as e,c as t,a as s}from"./app-D9Gw5LDz.js";const n={},l=s(`<h1 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置"><span>页面配置</span></a></h1><h3 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern"><span>permalinkPattern</span></a></h3><p><code>permalinkPattern</code> 页面路径，建议使用创建日期和页面名称来命名.例如:<code>2023/11/25/example/</code> 。这样即使移动文件位置也能保证路径不会修改。 页面路径修改会影响搜索引擎索引。大量页面404会影响网站权重的哦。</p><p>如果没有设置<code>permalinkPattern</code>选项则会使用文件相对路径例如文件在 <code>articles/test/1.md</code> 则页面路径为 <code>articles/test/1</code></p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> 2023/11/25/example/</span>
<span class="line"></span></code></pre></div><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h3><p><code>title</code> 页面标题，不多说啦！</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> 标题，页面标题</span>
<span class="line"></span></code></pre></div><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>description</span></a></h3><p><code>description</code> 摘要或简介，不多说啦！</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> 描述，页面描述</span>
<span class="line"></span></code></pre></div><h3 id="star" tabindex="-1"><a class="header-anchor" href="#star"><span>star</span></a></h3><p><code>star</code> 是否是收藏页面，如果是收藏页将在首页展示。没有这个选项或这个选项为false都不会在首页展示。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">star</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre></div><h3 id="tags" tabindex="-1"><a class="header-anchor" href="#tags"><span>tags</span></a></h3><p><code>tags</code> 标签，给页面加标签。没有这个选项则不加标签。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;例子&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;例子&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;小例子&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><h3 id="sitemap" tabindex="-1"><a class="header-anchor" href="#sitemap"><span>sitemap</span></a></h3><p><code>sitemap</code> 页面是否收录sitemap，sitemap是一个网站页面地图，搜索引擎使用sitemap来抓取网站中的全部页面，不写入sitemap的页面可能不会被搜索引擎抓取。 没有这个选项或者为true都会将页面加入sitemap。</p><p>下面这个例子是不将页面加入sitemap哦。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">sitemap</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> </span>
<span class="line"></span></code></pre></div><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>comment</span></a></h3><p><code>comment</code> 是否启用评论区，没有这个选项或者为false都是不启用评论区。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">comment</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre></div>`,25),p=[l];function i(c,o){return e(),t("div",null,p)}const d=a(n,[["render",i],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/test/0/","title":"0-例子页面","lang":"zh-CN","frontmatter":{"permalinkPattern":"test/0/","title":"0-例子页面","description":"这就是一个例子页面","sitemap":false,"head":[["meta",{"property":"og:url","content":"https://jjaw.cn/test/0/"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"0-例子页面"}],["meta",{"property":"og:description","content":"这就是一个例子页面"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-12T16:50:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-12T16:50:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0-例子页面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-12T16:50:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"permalinkPattern","slug":"permalinkpattern","link":"#permalinkpattern","children":[]},{"level":3,"title":"title","slug":"title","link":"#title","children":[]},{"level":3,"title":"description","slug":"description","link":"#description","children":[]},{"level":3,"title":"star","slug":"star","link":"#star","children":[]},{"level":3,"title":"tags","slug":"tags","link":"#tags","children":[]},{"level":3,"title":"sitemap","slug":"sitemap","link":"#sitemap","children":[]},{"level":3,"title":"comment","slug":"comment","link":"#comment","children":[]}],"git":{"isRoot":true,"createdTime":1702396928000,"updatedTime":1702399800000,"contributors":[{"name":"jjaw","email":"jjaw@jjaw.cn","commits":2}]},"excerpt":"\\n<h3>permalinkPattern</h3>\\n<p><code>permalinkPattern</code> 页面路径，建议使用创建日期和页面名称来命名.例如:<code>2023/11/25/example/</code> 。这样即使移动文件位置也能保证路径不会修改。\\n页面路径修改会影响搜索引擎索引。大量页面404会影响网站权重的哦。</p>\\n<p>如果没有设置<code>permalinkPattern</code>选项则会使用文件相对路径例如文件在 <code>articles/test/1.md</code> 则页面路径为 <code>articles/test/1</code></p>","github_edit":{"filePathRelative":"articles/1-test/0-页面配置.md"},"navPage":[{"title":"测试列表","link":"#","items":[{"title":"例子","link":"/example/"},{"title":"例子页面","link":"/test/0/"},{"title":"测试1","link":"/test/1/"},{"title":"测试2","link":"/test/2/"},{"title":"测试3","link":"/test/3/"},{"title":"测试4","link":"/test/4/"},{"title":"测试5","link":"/test/5/"}]}]}');export{d as comp,m as data};
