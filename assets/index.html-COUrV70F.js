import{_ as s,r as i,o as t,c as r,b as a,e,d as l,a as p}from"./app-D9Gw5LDz.js";const c="/assets/img-B2uWL4Vg.webp",o="/assets/img_1-i33osFnv.webp",d={},h=p('<h1 id="onlinerewards-在线奖励" tabindex="-1"><a class="header-anchor" href="#onlinerewards-在线奖励"><span>OnlineRewards-在线奖励</span></a></h1><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h1><p>一款基于bukkit的在线奖励插件。</p><p>上手简单，规则高度自定义，支持多个服务器数据同步。</p><h2 id="为什么上手简单" tabindex="-1"><a class="header-anchor" href="#为什么上手简单"><span>为什么上手简单？</span></a></h2><p>只需要会编辑reward.yml配置文件即可满足大多数奖励需求。</p><h2 id="为什么规则高度自定义" tabindex="-1"><a class="header-anchor" href="#为什么规则高度自定义"><span>为什么规则高度自定义？</span></a></h2><p>除了reward.yml配置文件之外，插件可以允许你自己设计数据库，自己编写SQL查询语句。编写的语句可以直接配置为规则，所以除了默认给出的规则外，还能自定义各种各样的高级规则。</p><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h2><ul><li>多奖励</li><li>多规则</li><li>分组权限</li><li>高度自定义规则</li></ul><h2 id="展示" tabindex="-1"><a class="header-anchor" href="#展示"><span>展示</span></a></h2><p><img src="'+c+'" alt="img.webp" loading="lazy"><img src="'+o+`" alt="img_1.webp" loading="lazy"></p><h1 id="进度" tabindex="-1"><a class="header-anchor" href="#进度"><span>进度</span></a></h1><ol><li>完成数据库设计（完成）</li><li>完成数据的查询和添加方法（完成）</li><li>完成玩家在线数据记录（完成）</li><li>完成玩家在线数据查询（完成）</li><li>完成奖励自定义配置 (完成)</li><li>完成命令方式的奖励领取 (完成)</li><li>完成奖励领取和查询GUI （完成）</li></ol><h1 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h1><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h2><p>reward.yml -奖励配置文件</p><p>language.yml - 语言文件</p><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶"><span>进阶</span></a></h2><p>SQLinitialization.yml -数据库初始化文件</p><p>SQLOnlineDataQueryRule.yml -在线时间查询规则文件 reward.yml中的OnlineRule规则来自此文件。</p><p>SQLrecord.yml -在线时间，奖励领取记录规则文件</p><p>SQLRewardDataQueryRul.yml -奖励领取情况查询规则文件 reward.yml中的RewardRule规则来自此文件。</p><h2 id="默认配置文件奖励规则" tabindex="-1"><a class="header-anchor" href="#默认配置文件奖励规则"><span>默认配置文件奖励规则</span></a></h2><ul><li>每日奖励</li><li>每月奖励</li><li>每年奖励</li></ul><h2 id="如何配置" tabindex="-1"><a class="header-anchor" href="#如何配置"><span>如何配置</span></a></h2><p>reward.yml的默认配置可以很其实的依次类推，但是有几个规则配置容易糊涂。下面重点介绍规则配置OnlineRule和RewardRule和OnlineTime</p><p>OnlineTime 是需要达到的在线时间，单位是秒</p><p>OnlineRule 是在线时间查询规则。默认的配置文件有四个规则toDay，thisMonth，thisYear，all(今天，本月，本年，全部)。</p><p>RewardRule 是领取情况查询规则。默认的配置文件有四个规则toDay，thisMonth，thisYear，all(今天，本月，本年，全部)。</p><h3 id="例子1" tabindex="-1"><a class="header-anchor" href="#例子1"><span>例子1</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line">OnlineTime<span class="token punctuation">:</span><span class="token number">30</span></span>
<span class="line">OnlineRule<span class="token punctuation">:</span>toDay</span>
<span class="line">RewardRule<span class="token punctuation">:</span>toDay</span>
<span class="line"></span></code></pre></div><p>今天的在线时间达到30秒才可以领取，今天只可以领取一次，明天达到30秒就可以再次领取。</p><h3 id="例子2" tabindex="-1"><a class="header-anchor" href="#例子2"><span>例子2</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line">OnlineTime<span class="token punctuation">:</span><span class="token number">30</span></span>
<span class="line">OnlineRule<span class="token punctuation">:</span>toDay</span>
<span class="line">RewardRule<span class="token punctuation">:</span>thisMonth</span>
<span class="line"></span></code></pre></div><p>今天的在线时间达到30秒才可以领取，但是本月只可以领取一次，下个月才可以再次领取。</p><h3 id="例子3" tabindex="-1"><a class="header-anchor" href="#例子3"><span>例子3</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line">OnlineTime<span class="token punctuation">:</span><span class="token number">30</span></span>
<span class="line">OnlineRule<span class="token punctuation">:</span>thisMonth</span>
<span class="line">RewardRule<span class="token punctuation">:</span>toDay</span>
<span class="line"></span></code></pre></div><p>本月的在线时间达到30秒就可以领取，只要本月的在线时间达到30秒，接下来每天都可以领取一次这个奖励。</p><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2>`,40),m={href:"https://ci.pmcs.xyz/job/jian-ai-ai/job/OnlineRewards/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://jq.qq.com/?_wv=1027&k=LyeQlfSK",target:"_blank",rel:"noopener noreferrer"};function g(y,w){const n=i("ExternalLinkIcon");return t(),r("div",null,[h,a("p",null,[e("预览版本："),a("a",m,[e("OnlineRewards [简简爱的插件构建] [Jenkins]"),l(n)]),e(" （感谢艾利格兰特提供的自动构建）")]),a("p",null,[e("建议与反馈-插件实验室："),a("a",u,[e("PlugClub / 插件实验室"),l(n)]),e(" （群号:820131534）")])])}const R=s(d,[["render",g],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/2024/2/25/OnlineRewards/","title":"OnlineRewards / 在线奖励","lang":"zh-CN","frontmatter":{"permalinkPattern":"2024/2/25/OnlineRewards/","title":"OnlineRewards / 在线奖励","description":"简单易用且强大的在线奖励插件，上手简单，规则高度自定义，支持多个服务器数据同步。","star":true,"tags":["mc插件"],"comment":true,"head":[["meta",{"property":"og:url","content":"https://jjaw.cn/2024/2/25/OnlineRewards/"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"OnlineRewards / 在线奖励"}],["meta",{"property":"og:description","content":"简单易用且强大的在线奖励插件，上手简单，规则高度自定义，支持多个服务器数据同步。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-30T16:00:00.000Z"}],["meta",{"property":"article:tag","content":"mc插件"}],["meta",{"property":"article:modified_time","content":"2022-06-30T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OnlineRewards / 在线奖励\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-30T16:00:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"为什么上手简单？","slug":"为什么上手简单","link":"#为什么上手简单","children":[]},{"level":2,"title":"为什么规则高度自定义？","slug":"为什么规则高度自定义","link":"#为什么规则高度自定义","children":[]},{"level":2,"title":"功能","slug":"功能","link":"#功能","children":[]},{"level":2,"title":"展示","slug":"展示","link":"#展示","children":[]},{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"进阶","slug":"进阶","link":"#进阶","children":[]},{"level":2,"title":"默认配置文件奖励规则","slug":"默认配置文件奖励规则","link":"#默认配置文件奖励规则","children":[]},{"level":2,"title":"如何配置","slug":"如何配置","link":"#如何配置","children":[{"level":3,"title":"例子1","slug":"例子1","link":"#例子1","children":[]},{"level":3,"title":"例子2","slug":"例子2","link":"#例子2","children":[]},{"level":3,"title":"例子3","slug":"例子3","link":"#例子3","children":[]}]},{"level":2,"title":"下载","slug":"下载","link":"#下载","children":[]}],"git":{"isRoot":true,"createdTime":1656604800000,"updatedTime":1656604800000,"contributors":[{"name":"jjaw","email":"jjaw@jjaw.cn","commits":1}]},"excerpt":"\\n<h1>介绍</h1>\\n<p>一款基于bukkit的在线奖励插件。</p>\\n<p>上手简单，规则高度自定义，支持多个服务器数据同步。</p>\\n<h2>为什么上手简单？</h2>\\n<p>只需要会编辑reward.yml配置文件即可满足大多数奖励需求。</p>\\n<h2>为什么规则高度自定义？</h2>\\n<p>除了reward.yml配置文件之外，插件可以允许你自己设计数据库，自己编写SQL查询语句。编写的语句可以直接配置为规则，所以除了默认给出的规则外，还能自定义各种各样的高级规则。</p>\\n<h2>功能</h2>\\n<ul>\\n<li>多奖励</li>\\n<li>多规则</li>\\n<li>分组权限</li>\\n<li>高度自定义规则</li>\\n</ul>","github_edit":{"filePathRelative":"articles/1-旧站文章迁移/9-OnlineRewards/OnlineRewards.md"}}');export{R as comp,b as data};
