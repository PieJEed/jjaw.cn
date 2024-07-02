import{_ as D,g as i,h as u,r as I,o as w,c as S,d as p,w as d,e as t,a as r,b as a,n as m,t as v,i as h,v as k,j as U,p as A,f as P}from"./app-D9Gw5LDz.js";const l="/assets/%E5%8E%9F%E7%A5%9E-bwG8u9YC.webp",Z={__name:"index.html",setup(b,{expose:n}){n();const y=i("absolute"),s=i("left"),g=i("1px"),f=i("top"),o=i("1px"),e=u(()=>`position: ${y.value};
    ${s.value}:${g.value};
    ${f.value}:${o.value};`),V=u(()=>`img.ys{
    ${e.value}
}`),x=i("relative"),_=i("12px"),C=u(()=>`position:${x.value};
    top:${_.value};`),E=u(()=>`img.ys{
    ${C.value}
}`),N=i(!0),z=i(!0),T=i("1px"),B=i("1px"),j={test1p:y,test1x:s,test1xin:g,test1y:f,test1yin:o,test1style:e,test1code:V,test2p:x,test2y:_,test2style:C,test2code:E,test3ap:N,test3bp:z,test4x:T,test4y:B,ref:i,computed:u};return Object.defineProperty(j,"__isScriptSetup",{enumerable:!1,value:!0}),j}},c=b=>(A("data-v-52c36b61"),b=b(),P(),b),F=r('<h1 id="原神启动-css动画详解。" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#原神启动-css动画详解。" data-v-52c36b61><span data-v-52c36b61>原神启动!!! css动画详解。</span></a></h1><h2 id="前情" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#前情" data-v-52c36b61><span data-v-52c36b61>前情</span></a></h2><p data-v-52c36b61>最近原神启动非常火，突然有一天我想随时随地原神启动。就想能不能用网页做一个原神启动呢？ 有想法就要立即去做，于是很轻松这个效果就做好了。但是原神启动之后应该跳转到哪呢？ 思考了很久，觉得那就跳转到一个教程页面吧，让大家都可以自己动手原神启动一下岂不是很完美？</p><h2 id="条件" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#条件" data-v-52c36b61><span data-v-52c36b61>条件</span></a></h2><p data-v-52c36b61>这个教程非常基础，很适合初学者，但是还是需要一些基础知识。</p><ul data-v-52c36b61><li data-v-52c36b61>html class(类) 的用法。</li><li data-v-52c36b61>css 选择器 的用法和一些简单的属性。</li></ul><h2 id="基础知识" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#基础知识" data-v-52c36b61><span data-v-52c36b61>基础知识</span></a></h2><h3 id="了解position的三个属性和常见的搭配" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#了解position的三个属性和常见的搭配" data-v-52c36b61><span data-v-52c36b61>了解<code data-v-52c36b61>position</code>的三个属性和常见的搭配</span></a></h3><p data-v-52c36b61><code data-v-52c36b61>position</code> 通常需要和 <code data-v-52c36b61>top</code>,<code data-v-52c36b61>bottom</code> ,<code data-v-52c36b61>left</code>,<code data-v-52c36b61>right</code> 这四个属性配合起来一起使用。</p><ul data-v-52c36b61><li data-v-52c36b61><code data-v-52c36b61>top</code> 代表当前元素上方的距离。</li><li data-v-52c36b61><code data-v-52c36b61>bottom</code> 代表当前元素下方的距离。</li><li data-v-52c36b61><code data-v-52c36b61>left</code>,<code data-v-52c36b61>right</code> 以此类推，分别代表左边和右边。</li></ul><div class="hint-container tip" data-v-52c36b61><p class="hint-container-title" data-v-52c36b61>小知识</p><p data-v-52c36b61>通常，在使用<code data-v-52c36b61>top</code>时不使用<code data-v-52c36b61>bottom</code>,在使用<code data-v-52c36b61>left</code>时不使用<code data-v-52c36b61>right</code>。</p></div><h4 id="fixed" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#fixed" data-v-52c36b61><span data-v-52c36b61>fixed</span></a></h4><p data-v-52c36b61>将 <code data-v-52c36b61>position</code> 设为 <code data-v-52c36b61>fixed</code> 则会相对于当前网页的窗口进行定位。<code data-v-52c36b61>top</code>则表示从网页窗口的最上面到当前元素的距离。 <code data-v-52c36b61>left</code>则代表从网页窗口的最左边到当前元素的距离。<code data-v-52c36b61>bottom</code>,<code data-v-52c36b61>right</code> 以此类推，分别代表最下方和最右方。</p>',13),M={class:"try1div"},O={style:{position:"relative",flex:"1",border:"0.1rem solid var(--color)","min-height":"5rem"}},R={style:{flex:"1",margin:"0"}},G={style:{flex:"1"}},J=c(()=>a("br",null,null,-1)),Y=c(()=>a("br",null,null,-1)),q=r('<h4 id="relative" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#relative" data-v-52c36b61><span data-v-52c36b61>relative</span></a></h4><p data-v-52c36b61>将 <code data-v-52c36b61>position</code> 设为 <code data-v-52c36b61>relative</code> 则会相对于当前位置进行定位。<code data-v-52c36b61>top</code>则表示向下便宜的距离。 <code data-v-52c36b61>left</code>则代表向右便宜的距离。<code data-v-52c36b61>bottom</code>,<code data-v-52c36b61>right</code> 以此类推，分别代表向上偏移和向左偏移。</p><div class="hint-container tip" data-v-52c36b61><p class="hint-container-title" data-v-52c36b61>小知识</p><p data-v-52c36b61>将 <code data-v-52c36b61>position</code> 设为 <code data-v-52c36b61>relative</code> 后，元素位置偏移后，依然会占有原来的位置。</p></div>',3),H={class:"try1div"},K={style:{border:"0.1rem solid var(--color)",flex:"1","min-height":"5rem",position:"relative"}},L=c(()=>a("p",null,"yyds!",-1)),Q=c(()=>a("p",null,"yyds!",-1)),W={style:{flex:"1",margin:"0"}},X={style:{flex:"1"}},$=c(()=>a("br",null,null,-1)),aa=r('<h4 id="absolute" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#absolute" data-v-52c36b61><span data-v-52c36b61>absolute</span></a></h4><p data-v-52c36b61>将 <code data-v-52c36b61>position</code> 设为 <code data-v-52c36b61>absolute</code> 则会相对于祖宗设置为 <code data-v-52c36b61>relative</code> 的元素进行定位,如果没有符合条件的祖宗元素则会相对于整个网页进行定位。<code data-v-52c36b61>top</code>则表示从这个元素的最上面到当前元素的距离。 <code data-v-52c36b61>left</code>则代表从这个的最左边到当前元素的距离。<code data-v-52c36b61>bottom</code>,<code data-v-52c36b61>right</code> 以此类推，分别代表最下方和最右方。</p>',2),ta={class:"try1div"},sa=c(()=>a("img",{class:"ys",style:{height:"2rem","z-index":"100",position:"absolute",top:"10px",left:"10px"},src:l},null,-1)),na={style:{flex:"1",margin:"0"}},ea={key:0},ca=r('<h3 id="了解transform中的translate-x-y" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#了解transform中的translate-x-y" data-v-52c36b61><span data-v-52c36b61>了解<code data-v-52c36b61>transform</code>中的<code data-v-52c36b61>translate(x,y)</code></span></a></h3><p data-v-52c36b61><code data-v-52c36b61>transform</code>中的<code data-v-52c36b61>translate(x,y)</code>和<code data-v-52c36b61>position</code>使用<code data-v-52c36b61>relative</code>时很相似，都是相对于自己当前位置进行偏移,<code data-v-52c36b61>x</code>和<code data-v-52c36b61>left</code>的用法很相似,<code data-v-52c36b61>y</code>和<code data-v-52c36b61>top</code>的用法很相似。</p>',2),oa={class:"try1div"},la={style:{border:"0.1rem solid var(--color)",flex:"1","min-height":"5rem"}},ia={style:{flex:"1",margin:"0"}},pa={style:{flex:"1"}},da=c(()=>a("br",null,null,-1)),ra=r('<h2 id="完美的的居中" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#完美的的居中" data-v-52c36b61><span data-v-52c36b61>完美的的居中</span></a></h2><p data-v-52c36b61>要实现元素启动动画,首先要了解如何使用css将图片居中显示。 下面将介绍几种将图片完美居中的几种方式。</p><h3 id="左右居中" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#左右居中" data-v-52c36b61><span data-v-52c36b61>左右居中</span></a></h3><h4 id="方式一-使用margin-auto" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#方式一-使用margin-auto" data-v-52c36b61><span data-v-52c36b61>方式一，使用<code data-v-52c36b61>margin: auto;</code></span></a></h4><p data-v-52c36b61>给元素设置 <code data-v-52c36b61>margin: auto;</code> 即可相对父元素左右居中。</p><div class="hint-container important" data-v-52c36b61><p class="hint-container-title" data-v-52c36b61>注意</p><p data-v-52c36b61>元素仅在 <code data-v-52c36b61>display: block;</code> 时 <code data-v-52c36b61>margin: auto;</code> 才会将元素相对于父元素左右居中。 <code data-v-52c36b61>&lt;img&gt;</code> 标签默认值为<code data-v-52c36b61>display: inline-block; </code>所以不会生效，需要指定<code data-v-52c36b61>display: block;</code>才能居中。</p></div>',6),va=c(()=>a("div",{class:"try1div"},[a("div",{style:{border:"0.1rem solid var(--color)",flex:"2","min-height":"5rem"}},[a("img",{class:"ys",style:{height:"3rem",margin:"auto",display:"block"},src:l})]),a("pre",{style:{flex:"1",margin:"0"}},`img.ys{
    display: block;
    margin: auto;
}`)],-1)),ba=r('<h4 id="方式二-position-absolute-left-50-transform-translate-50-0" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#方式二-position-absolute-left-50-transform-translate-50-0" data-v-52c36b61><span data-v-52c36b61>方式二，<code data-v-52c36b61>position:absolute;</code> + <code data-v-52c36b61>left:50%;</code>+ <code data-v-52c36b61>transform:translate(-50%,0);</code></span></a></h4><ol data-v-52c36b61><li data-v-52c36b61>给需要相对于居中的祖宗元素设置<code data-v-52c36b61>position: relative;</code></li><li data-v-52c36b61>使用<code data-v-52c36b61>position:absolute;</code>相较于父元素进行定位。</li><li data-v-52c36b61>使用<code data-v-52c36b61>left:50%</code>向右平移相对于定位元素宽的50%</li></ol>',2),ua=c(()=>a("div",{class:"try1div"},[a("div",{style:{border:"0.1rem solid var(--color)",flex:"2","min-height":"5rem",position:"relative"}},[a("img",{class:"ys",style:{height:"3rem",position:"absolute",left:"50%"},src:l})]),a("pre",{style:{flex:"1",margin:"0"}},`img.ys{
    position: absolute;
    left: 50%;
}`)],-1)),ma=c(()=>a("ol",{start:"4"},[a("li",null,[t("使用"),a("code",null,"transform:translate(-50%,0);"),t("向左平移自己的50%。")])],-1)),ha=c(()=>a("div",{class:"try1div"},[a("div",{style:{border:"0.1rem solid var(--color)",flex:"2","min-height":"5rem",position:"relative"}},[a("img",{class:"ys",style:{height:"3rem",position:"absolute",left:"50%",transform:"translate(-50%,0)"},src:l})]),a("pre",{style:{flex:"1",margin:"0"}},`img.ys{
    position: absolute;
    left: 50%;
    transform:translate(-50%,0);
}`)],-1)),ka=r('<div class="hint-container tip" data-v-52c36b61><p class="hint-container-title" data-v-52c36b61>小知识</p><ul data-v-52c36b61><li data-v-52c36b61><code data-v-52c36b61>left:50%;</code> 是相较于定位的元素的宽度的50%。</li><li data-v-52c36b61><code data-v-52c36b61>transform:translate(50%,0);</code> 是自身宽度的50%。</li></ul><p data-v-52c36b61>两者的百分比参考对象是不同的。利用这些特性也可以完美居中。</p></div><h3 id="上下居中" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#上下居中" data-v-52c36b61><span data-v-52c36b61>上下居中</span></a></h3><h4 id="方式-position-absolute-top-50-transform-translate-0-50" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#方式-position-absolute-top-50-transform-translate-0-50" data-v-52c36b61><span data-v-52c36b61>方式 <code data-v-52c36b61>position:absolute;</code> + <code data-v-52c36b61>top:50%;</code>+ <code data-v-52c36b61>transform:translate(0,-50%);</code></span></a></h4><p data-v-52c36b61>和<a href="#%E6%96%B9%E5%BC%8F%E4%BA%8C-position-absolute-left-50-transform-translate-50-0" data-v-52c36b61>左右居中的方式二</a>同理， 所以不用多解释了吧，直接上代码！</p>',4),ya=c(()=>a("div",{style:{border:"0.1rem solid var(--color)",flex:"2","min-height":"8rem",position:"relative"}},[a("img",{class:"ys",style:{height:"3rem",position:"absolute",top:"50%",transform:"translate(0,-50%)"},src:l})],-1)),ga=c(()=>a("div",{class:"language-css","data-highlighter":"prismjs","data-ext":"css","data-title":"css"},[a("pre",{class:"language-css"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token selector"},"img.ys"),a("span",{class:"token punctuation"},"{")]),t(`
`),a("span",{class:"line"},[t("    "),a("span",{class:"token property"},"position"),a("span",{class:"token punctuation"},":"),t(" absolute"),a("span",{class:"token punctuation"},";")]),t(`
`),a("span",{class:"line"},[t("    "),a("span",{class:"token property"},"top"),a("span",{class:"token punctuation"},":"),t(" 50%"),a("span",{class:"token punctuation"},";")]),t(`
`),a("span",{class:"line"},[t("    "),a("span",{class:"token property"},"transform"),a("span",{class:"token punctuation"},":"),a("span",{class:"token function"},"translate"),a("span",{class:"token punctuation"},"("),t("0"),a("span",{class:"token punctuation"},","),t("-50%"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";")]),t(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}")]),t(`
`),a("span",{class:"line"})])])],-1)),fa=c(()=>a("h3",{id:"结合起来上下左右居中",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#结合起来上下左右居中"},[a("span",null,"结合起来上下左右居中")])],-1)),xa=c(()=>a("div",{style:{border:"0.1rem solid var(--color)",flex:"2","min-height":"8rem",position:"relative"}},[a("img",{class:"ys",style:{height:"3rem",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"},src:l})],-1)),_a=c(()=>a("div",{class:"language-css","data-highlighter":"prismjs","data-ext":"css","data-title":"css"},[a("pre",{class:"language-css"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token selector"},"img.ys"),a("span",{class:"token punctuation"},"{")]),t(`
`),a("span",{class:"line"},[t("    "),a("span",{class:"token property"},"position"),a("span",{class:"token punctuation"},":"),t(" absolute"),a("span",{class:"token punctuation"},";")]),t(`
`),a("span",{class:"line"},[t("    "),a("span",{class:"token property"},"left"),a("span",{class:"token punctuation"},":"),t(" 50%"),a("span",{class:"token punctuation"},";")]),t(`
`),a("span",{class:"line"},[t("    "),a("span",{class:"token property"},"top"),a("span",{class:"token punctuation"},":"),t(" 50%"),a("span",{class:"token punctuation"},";")]),t(`
`),a("span",{class:"line"},[t("    "),a("span",{class:"token property"},"transform"),a("span",{class:"token punctuation"},":"),a("span",{class:"token function"},"translate"),a("span",{class:"token punctuation"},"("),t("-50%"),a("span",{class:"token punctuation"},","),t("-50%"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";")]),t(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}")]),t(`
`),a("span",{class:"line"})])])],-1)),Ca=r('<h2 id="原神启动还缺少点灵魂-动画" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#原神启动还缺少点灵魂-动画" data-v-52c36b61><span data-v-52c36b61>原神启动还缺少点灵魂 “动画”</span></a></h2><div class="dorkd-title" data-v-52c36b61><div class="hint-container tip" data-v-52c36b61><p class="hint-container-title" data-v-52c36b61>warning</p><p data-v-52c36b61>接下来建议关闭深色模式浏览，虽然此页面已经对深色模式进行了适配，但是使用深色模式原神启动总感觉缺少点味道，不够还原。 为了最好的观看体验，建议关闭深色模式观看。</p></div></div><p data-v-52c36b61>已经利用之前的知识将 “原神” 居中了。看起来已经有点那个味道了。接下来将添加动画，为它注入灵魂。 使用 <code data-v-52c36b61>animation</code> 属性来为图片设置动画。使用 <code data-v-52c36b61>@keyframes</code> 来定义动画。</p>',3),ja=c(()=>a("div",{style:{border:"0.1rem solid var(--color)","min-height":"24rem",position:"relative"}},[a("img",{class:"ys",style:{height:"10rem",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"},src:l})],-1)),wa=r(`<h3 id="了解-keyframes" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#了解-keyframes" data-v-52c36b61><span data-v-52c36b61>了解<code data-v-52c36b61>@keyframes</code></span></a></h3><p data-v-52c36b61><code data-v-52c36b61>@keyframes</code> 用于定义动画的关键帧,关键帧可以在不同的css属性之间过渡。</p><p data-v-52c36b61>最简单的用法,定义一个<code data-v-52c36b61>ysstart</code>动画,使不透明的从100%降到0%</p><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css" data-v-52c36b61><pre class="language-css" data-v-52c36b61><code data-v-52c36b61><span class="line" data-v-52c36b61><span class="token atrule" data-v-52c36b61><span class="token rule" data-v-52c36b61>@keyframes</span> ysstart</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>from</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>100%</span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>to</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>0%</span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61></span></code></pre></div><p data-v-52c36b61>或者可以这样写。</p><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css" data-v-52c36b61><pre class="language-css" data-v-52c36b61><code data-v-52c36b61><span class="line" data-v-52c36b61><span class="token atrule" data-v-52c36b61><span class="token rule" data-v-52c36b61>@keyframes</span> ysstart</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>0%</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>100%</span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>100%</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>0%</span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61></span></code></pre></div><div class="hint-container tip" data-v-52c36b61><p class="hint-container-title" data-v-52c36b61>推荐</p><p data-v-52c36b61>我更推荐使用百分比写法,这种写法更加自由。</p></div><h3 id="了解-animation" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#了解-animation" data-v-52c36b61><span data-v-52c36b61>了解 <code data-v-52c36b61>animation</code></span></a></h3><p data-v-52c36b61><code data-v-52c36b61>animation</code>有许多属性，这里只介绍我们用到的。</p><ul data-v-52c36b61><li data-v-52c36b61><code data-v-52c36b61>animation-name</code> 指定由@keyframes描述的关键帧名称。</li><li data-v-52c36b61><code data-v-52c36b61>animation-duration</code> 设置动画一个周期的时长。</li><li data-v-52c36b61><code data-v-52c36b61>animation-iteration-count</code> 设置动画重复次数，可以指定 infinite 无限次重复动画</li><li data-v-52c36b61><code data-v-52c36b61>animation-timing-function</code> 设置动画速度，即通过建立加速度曲线，设置动画在关键帧之间是如何变化。</li></ul><p data-v-52c36b61>例如</p><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css" data-v-52c36b61><pre class="language-css" data-v-52c36b61><code data-v-52c36b61><span class="line" data-v-52c36b61><span class="token selector" data-v-52c36b61>img.ys</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-name</span><span class="token punctuation" data-v-52c36b61>:</span>ysstart<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* ysstart 是动画的名称 */</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-duration</span><span class="token punctuation" data-v-52c36b61>:</span> 3s<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* 动画共持续3秒 */</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-iteration-count</span><span class="token punctuation" data-v-52c36b61>:</span> 1<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* 动画只播放1次 */</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-timing-function</span><span class="token punctuation" data-v-52c36b61>:</span> linear<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* 匀速播放 */</span></span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61></span></code></pre></div><p data-v-52c36b61>或者可以缩写</p><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css" data-v-52c36b61><pre class="language-css" data-v-52c36b61><code data-v-52c36b61><span class="line" data-v-52c36b61><span class="token selector" data-v-52c36b61>img.ys</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation</span><span class="token punctuation" data-v-52c36b61>:</span>ysstart 3s 1 linear<span class="token punctuation" data-v-52c36b61>;</span> </span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61></span></code></pre></div><div class="hint-container tip" data-v-52c36b61><p class="hint-container-title" data-v-52c36b61>小知识</p><p data-v-52c36b61>缩写可以不按照顺序书写,例如这样也是对的。</p><div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css" data-v-52c36b61><pre class="language-css" data-v-52c36b61><code data-v-52c36b61><span class="line" data-v-52c36b61><span class="token selector" data-v-52c36b61>img.ys</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation</span><span class="token punctuation" data-v-52c36b61>:</span>linear 1 ysstart 3s<span class="token punctuation" data-v-52c36b61>;</span> </span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61></span></code></pre></div></div><h3 id="将两者集合-开始注入灵魂" tabindex="-1" data-v-52c36b61><a class="header-anchor" href="#将两者集合-开始注入灵魂" data-v-52c36b61><span data-v-52c36b61>将两者集合,开始注入灵魂</span></a></h3><p data-v-52c36b61>将之前用<code data-v-52c36b61>@keyframes</code>定义的关键帧和<code data-v-52c36b61>animation</code>集合。这样就实现了不透明度从100%到0%的渐变效果。</p>`,17),Sa=c(()=>a("div",{style:{border:"0.1rem solid var(--color)","min-height":"24rem",position:"relative"}},[a("img",{class:"ys ys-d1",style:{height:"10rem",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"},src:l})],-1)),Va=r(`<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css" data-v-52c36b61><pre class="language-css" data-v-52c36b61><code data-v-52c36b61><span class="line" data-v-52c36b61><span class="token atrule" data-v-52c36b61><span class="token rule" data-v-52c36b61>@keyframes</span> ysstart</span><span class="token punctuation" data-v-52c36b61>{</span> <span class="token comment" data-v-52c36b61>/* 定义 ysstart 动画关键帧 */</span></span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>0%</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>100%<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* 不透明度100% */</span></span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>100%</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>0%<span class="token punctuation" data-v-52c36b61>;</span></span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61><span class="token selector" data-v-52c36b61>img.ys</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-name</span><span class="token punctuation" data-v-52c36b61>:</span>ysstart<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* ysstart 是动画的名称 */</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-duration</span><span class="token punctuation" data-v-52c36b61>:</span> 3s<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* 动画共持续3秒 */</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-iteration-count</span><span class="token punctuation" data-v-52c36b61>:</span> 1<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* 动画一直重复播放 */</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-timing-function</span><span class="token punctuation" data-v-52c36b61>:</span> linear<span class="token punctuation" data-v-52c36b61>;</span> <span class="token comment" data-v-52c36b61>/* 匀速播放 */</span></span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61></span></code></pre></div><p data-v-52c36b61>接下来,简单修改一下,将持续时间增加到6秒,再添加一个淡出的过程。是不是就很有感觉了？</p>`,2),Ea=c(()=>a("div",{style:{border:"0.1rem solid var(--color)","min-height":"24rem",position:"relative"}},[a("img",{class:"ys ys-d2",style:{height:"10rem",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"},src:l})],-1)),Na=r(`<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css" data-v-52c36b61><pre class="language-css" data-v-52c36b61><code data-v-52c36b61><span class="line" data-v-52c36b61><span class="token atrule" data-v-52c36b61><span class="token rule" data-v-52c36b61>@keyframes</span> ysstart</span><span class="token punctuation" data-v-52c36b61>{</span> </span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>0%</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>0%<span class="token punctuation" data-v-52c36b61>;</span></span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>50%</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>100%<span class="token punctuation" data-v-52c36b61>;</span></span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61>    <span class="token selector" data-v-52c36b61>100%</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>        <span class="token property" data-v-52c36b61>opacity</span><span class="token punctuation" data-v-52c36b61>:</span>0%<span class="token punctuation" data-v-52c36b61>;</span></span>
<span class="line" data-v-52c36b61>    <span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61><span class="token selector" data-v-52c36b61>img.ys-d2</span><span class="token punctuation" data-v-52c36b61>{</span></span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-name</span><span class="token punctuation" data-v-52c36b61>:</span>ysstart<span class="token punctuation" data-v-52c36b61>;</span> </span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-duration</span><span class="token punctuation" data-v-52c36b61>:</span> 6s<span class="token punctuation" data-v-52c36b61>;</span> </span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-iteration-count</span><span class="token punctuation" data-v-52c36b61>:</span> infinite<span class="token punctuation" data-v-52c36b61>;</span> </span>
<span class="line" data-v-52c36b61>    <span class="token property" data-v-52c36b61>animation-timing-function</span><span class="token punctuation" data-v-52c36b61>:</span> linear<span class="token punctuation" data-v-52c36b61>;</span> </span>
<span class="line" data-v-52c36b61><span class="token punctuation" data-v-52c36b61>}</span></span>
<span class="line" data-v-52c36b61></span></code></pre></div><div class="start-main" data-v-52c36b61><img class="yuanimg" src="`+l+'" data-v-52c36b61><div class="yuantext" data-v-52c36b61><p data-v-52c36b61>抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p><p data-v-52c36b61>此界面仅用于学习和交流</p></div></div>',2);function za(b,n,y,s,g,f){const o=I("Demo");return w(),S("div",null,[F,p(o,{title:"试一试"},{default:d(()=>[a("div",M,[a("div",O,[a("img",{class:"ys",style:m([{height:"2rem","z-index":"100"},s.test1style]),src:l},null,4)]),a("pre",R,v(s.test1code),1),a("div",G,[t(" 左右 "),a("button",{onClick:n[0]||(n[0]=e=>s.test1x="left")},"left"),t(),a("button",{onClick:n[1]||(n[1]=e=>s.test1x="right")},"right"),h(a("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=e=>s.test1xin=e)},null,512),[[k,s.test1xin]]),J,t(" 上下 "),a("button",{onClick:n[3]||(n[3]=e=>s.test1y="top")},"top"),t(),a("button",{onClick:n[4]||(n[4]=e=>s.test1y="bottom")},"bottom"),h(a("input",{type:"text","onUpdate:modelValue":n[5]||(n[5]=e=>s.test1yin=e)},null,512),[[k,s.test1yin]]),Y,t(" 定位 "),a("button",{onClick:n[6]||(n[6]=e=>s.test1p="fixed")},"fixed"),t(),a("button",{onClick:n[7]||(n[7]=e=>s.test1p="relative")},"relative"),a("button",{onClick:n[8]||(n[8]=e=>s.test1p="absolute")},"absolute")])])]),_:1}),q,p(o,{title:"试一试"},{default:d(()=>[a("div",H,[a("div",K,[L,a("p",null,[t("绝了！"),a("img",{class:"ys",style:m([{height:"2rem","z-index":"100"},s.test2style]),src:l},null,4),t("启动！")]),Q]),a("pre",W,v(s.test2code),1),a("div",X,[t(" 偏移 "),a("button",{onClick:n[9]||(n[9]=e=>s.test2y="0px")},"0px"),t(),a("button",{onClick:n[10]||(n[10]=e=>s.test2y="12px")},"12px"),t(),a("button",{onClick:n[11]||(n[11]=e=>s.test2y="30px")},"30px"),t(),a("button",{onClick:n[12]||(n[12]=e=>s.test2y="60px")},"60px"),$,t(" 定位 "),a("button",{onClick:n[13]||(n[13]=e=>s.test2p="fixed")},"fixed"),t(),a("button",{onClick:n[14]||(n[14]=e=>s.test2p="relative")},"relative"),t(),a("button",{onClick:n[15]||(n[15]=e=>s.test2p="absolute")},"absolute")])])]),_:1}),aa,p(o,{title:"试一试"},{default:d(()=>[a("div",ta,[a("div",{style:m([{border:"0.1rem solid var(--color)",flex:"2","min-height":"8rem"},s.test3ap?"position: relative;":""])},[t("a "),a("div",{style:m([{border:"0.1rem solid var(--color)","min-height":"4rem",width:"70%"},s.test3bp?"position: relative;":""])},[t("b "),sa],4)],4),a("pre",na,"div.a"+v(s.test3ap?`{
    position: relative;
}`:`{

}`)+`
div.b`+v(s.test3bp?`{
    position: relative;
}`:`{

}`)+`
img.ys:{
    position:absolute;
    top:10px;
    left:10px;
}`,1)]),a("div",null,[a("button",{onClick:n[16]||(n[16]=e=>s.test3ap=!s.test3ap)},"添加删除a absolute"),a("button",{onClick:n[17]||(n[17]=e=>s.test3bp=!s.test3bp)},"添加删除b absolute"),!s.test3ap&&!s.test3bp?(w(),S("span",ea,"将网页滑到最上面，看左上角，可以找到图片哦！")):U("",!0)])]),_:1}),ca,p(o,{title:"试一试"},{default:d(()=>[a("div",oa,[a("div",la,[a("img",{class:"ys",style:m([{height:"2rem","z-index":"100",position:"relative"},`transform:translate(${s.test4x},${s.test4y});`]),src:l},null,4)]),a("pre",ia,`img.ys:{
    transform:translate(`+v(s.test4x)+","+v(s.test4y)+`);
}`,1),a("div",pa,[t(" x"),h(a("input",{type:"text","onUpdate:modelValue":n[18]||(n[18]=e=>s.test4x=e)},null,512),[[k,s.test4x]]),da,t(" y"),h(a("input",{type:"text","onUpdate:modelValue":n[19]||(n[19]=e=>s.test4y=e)},null,512),[[k,s.test4y]])])])]),_:1}),ra,p(o,{title:"效果演示"},{default:d(()=>[va]),_:1}),ba,p(o,{title:"效果演示"},{default:d(()=>[ua]),_:1}),t(" ::: important 问题 这时候你会发现,向右移多了自己的50%宽度。并没有完美得居中。所以还需要第4步骤,将多移的50%移回来。 这时候之前讲到的```transform:translate(x,y);```就要发挥用途了。 ::: "),ma,p(o,{title:"效果演示"},{default:d(()=>[ha]),_:1}),ka,p(o,{title:"效果演示"},{default:d(()=>[ya,ga]),_:1}),fa,p(o,{title:"效果演示"},{default:d(()=>[xa,_a]),_:1}),Ca,p(o,{title:"效果演示"},{default:d(()=>[ja]),_:1}),wa,p(o,{title:"效果演示"},{default:d(()=>[Sa]),_:1}),Va,p(o,{title:"效果演示"},{default:d(()=>[Ea]),_:1}),Na])}const Ba=D(Z,[["render",za],["__scopeId","data-v-52c36b61"],["__file","index.html.vue"]]),Da=JSON.parse('{"path":"/2023/11/28/ysstart/","title":"原神启动!!! css动画详解。纯css动画实现原神启动，简单秒懂.","lang":"zh-CN","frontmatter":{"permalinkPattern":"2023/11/28/ysstart/","title":"原神启动!!! css动画详解。纯css动画实现原神启动，简单秒懂.","description":"纯css动画实现原神启动，简单秒懂，零基础。互动教程理解更透彻。","tags":["前端","css","整活"],"star":true,"head":[["meta",{"name":"keywords","content":"css动画 fixed"}],["meta",{"property":"og:url","content":"https://jjaw.cn/2023/11/28/ysstart/"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"原神启动!!! css动画详解。纯css动画实现原神启动，简单秒懂."}],["meta",{"property":"og:description","content":"纯css动画实现原神启动，简单秒懂，零基础。互动教程理解更透彻。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-24T22:13:14.000Z"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:tag","content":"整活"}],["meta",{"property":"article:modified_time","content":"2024-02-24T22:13:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原神启动!!! css动画详解。纯css动画实现原神启动，简单秒懂.\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-24T22:13:14.000Z\\",\\"author\\":[]}"]],"comment":true},"headers":[{"level":2,"title":"前情","slug":"前情","link":"#前情","children":[]},{"level":2,"title":"条件","slug":"条件","link":"#条件","children":[]},{"level":2,"title":"基础知识","slug":"基础知识","link":"#基础知识","children":[{"level":3,"title":"了解position的三个属性和常见的搭配","slug":"了解position的三个属性和常见的搭配","link":"#了解position的三个属性和常见的搭配","children":[]},{"level":3,"title":"了解transform中的translate(x,y)","slug":"了解transform中的translate-x-y","link":"#了解transform中的translate-x-y","children":[]}]},{"level":2,"title":"完美的的居中","slug":"完美的的居中","link":"#完美的的居中","children":[{"level":3,"title":"左右居中","slug":"左右居中","link":"#左右居中","children":[]},{"level":3,"title":"上下居中","slug":"上下居中","link":"#上下居中","children":[]},{"level":3,"title":"结合起来上下左右居中","slug":"结合起来上下左右居中","link":"#结合起来上下左右居中","children":[]}]},{"level":2,"title":"原神启动还缺少点灵魂 “动画”","slug":"原神启动还缺少点灵魂-动画","link":"#原神启动还缺少点灵魂-动画","children":[{"level":3,"title":"了解@keyframes","slug":"了解-keyframes","link":"#了解-keyframes","children":[]},{"level":3,"title":"了解 animation","slug":"了解-animation","link":"#了解-animation","children":[]},{"level":3,"title":"将两者集合,开始注入灵魂","slug":"将两者集合-开始注入灵魂","link":"#将两者集合-开始注入灵魂","children":[]}]}],"git":{"isRoot":true,"createdTime":1701604245000,"updatedTime":1708812794000,"contributors":[{"name":"jjaw","email":"jjaw@jjaw.cn","commits":8}]},"excerpt":"\\n<h2>前情</h2>\\n<p>最近原神启动非常火，突然有一天我想随时随地原神启动。就想能不能用网页做一个原神启动呢？\\n有想法就要立即去做，于是很轻松这个效果就做好了。但是原神启动之后应该跳转到哪呢？\\n思考了很久，觉得那就跳转到一个教程页面吧，让大家都可以自己动手原神启动一下岂不是很完美？</p>\\n<h2>条件</h2>\\n<p>这个教程非常基础，很适合初学者，但是还是需要一些基础知识。</p>\\n<ul>\\n<li>html class(类) 的用法。</li>\\n<li>css 选择器 的用法和一些简单的属性。</li>\\n</ul>\\n<h2>基础知识</h2>\\n<h3>了解<code>position</code>的三个属性和常见的搭配</h3>","github_edit":{"filePathRelative":"articles/3-css原神启动效果/原神启动.md"}}');export{Ba as comp,Da as data};
