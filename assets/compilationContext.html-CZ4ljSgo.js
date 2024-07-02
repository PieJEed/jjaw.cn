import{_ as s,o as n,c as t,a}from"./app-D9Gw5LDz.js";const o={},p=a(`<h1 id="编译上下文" tabindex="-1"><a class="header-anchor" href="#编译上下文"><span>编译上下文</span></a></h1><p>编译上下文算是一个比较花哨的术语，可以用它来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文还包含有正在被使用的编译选项的信息。定义这种逻辑分组，一个比较好的方式是使用 <code>tsconfig.json</code> 文件。</p><h2 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json"><span>tsconfig.json</span></a></h2><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h3><p>开始使用 <code>tsconfig.json</code> 是一件比较容易的事，你仅仅需要写下：</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>例如，在项目的根目录下创建一个空 JSON 文件。通过这种方式，TypeScript 将 会把此目录和子目录下的所有 .ts 文件作为编译上下文的一部分，它还会包含一部分默认的编译选项。</p><h3 id="编译选项" tabindex="-1"><a class="header-anchor" href="#编译选项"><span>编译选项</span></a></h3><p>你可以通过 <code>compilerOptions</code> 来定制你的编译选项：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 基本选项 */</span></span>
<span class="line">    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 指定 ECMAScript 目标版本: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES6&#39;/&#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;</span></span>
<span class="line">    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>                  <span class="token comment">// 指定使用模块: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;</span></span>
<span class="line">    <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                             <span class="token comment">// 指定要包含在编译中的库文件</span></span>
<span class="line">    <span class="token string-property property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 允许编译 javascript 文件</span></span>
<span class="line">    <span class="token string-property property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 报告 javascript 文件中的错误</span></span>
<span class="line">    <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>                     <span class="token comment">// 指定 jsx 代码的生成: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;</span></span>
<span class="line">    <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// 生成相应的 &#39;.d.ts&#39; 文件</span></span>
<span class="line">    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">// 生成相应的 &#39;.map&#39; 文件</span></span>
<span class="line">    <span class="token string-property property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 将输出文件合并为一个文件</span></span>
<span class="line">    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">// 指定输出目录</span></span>
<span class="line">    <span class="token string-property property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 用来控制输出目录结构 --outDir.</span></span>
<span class="line">    <span class="token string-property property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 删除编译后的所有的注释</span></span>
<span class="line">    <span class="token string-property property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// 不生成输出文件</span></span>
<span class="line">    <span class="token string-property property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 从 tslib 导入辅助工具函数</span></span>
<span class="line">    <span class="token string-property property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// 将每个文件作为单独的模块 （与 &#39;ts.transpileModule&#39; 类似）.</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 严格的类型检查选项 */</span></span>
<span class="line">    <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// 启用所有严格类型检查选项</span></span>
<span class="line">    <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 在表达式和声明上有隐含的 any类型时报错</span></span>
<span class="line">    <span class="token string-property property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// 启用严格的 null 检查</span></span>
<span class="line">    <span class="token string-property property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 当 this 表达式值为 any 类型的时候，生成一个错误</span></span>
<span class="line">    <span class="token string-property property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// 以严格模式检查每个模块，并在每个文件里加入 &#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 额外的检查 */</span></span>
<span class="line">    <span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 有未使用的变量时，抛出错误</span></span>
<span class="line">    <span class="token string-property property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">// 有未使用的参数时，抛出错误</span></span>
<span class="line">    <span class="token string-property property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>             <span class="token comment">// 并不是所有函数里的代码都有返回值时，抛出错误</span></span>
<span class="line">    <span class="token string-property property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">// 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 模块解析选项 */</span></span>
<span class="line">    <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// 选择模块解析策略： &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)</span></span>
<span class="line">    <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 用于解析非相对模块名称的基目录</span></span>
<span class="line">    <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>                           <span class="token comment">// 模块名到基于 baseUrl 的路径映射的列表</span></span>
<span class="line">    <span class="token string-property property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                        <span class="token comment">// 根文件夹列表，其组合内容表示项目运行时的结构内容</span></span>
<span class="line">    <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">// 包含类型声明的文件列表</span></span>
<span class="line">    <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                           <span class="token comment">// 需要包含的类型声明文件名列表</span></span>
<span class="line">    <span class="token string-property property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 允许从没有设置默认导出的模块中默认导入。</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* Source Map Options */</span></span>
<span class="line">    <span class="token string-property property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                    <span class="token comment">// 指定调试器应该找到 TypeScript 文件而不是源文件的位置</span></span>
<span class="line">    <span class="token string-property property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 指定调试器应该找到映射文件而不是生成文件的位置</span></span>
<span class="line">    <span class="token string-property property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件</span></span>
<span class="line">    <span class="token string-property property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 其他选项 */</span></span>
<span class="line">    <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 启用装饰器</span></span>
<span class="line">    <span class="token string-property property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>          <span class="token comment">// 为装饰器提供元数据的支持</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>关于这些（或者更多）编译选项，稍后将会讨论。</p><h3 id="typescript-编译" tabindex="-1"><a class="header-anchor" href="#typescript-编译"><span>TypeScript 编译</span></a></h3><p>好的 IDE 支持对 TypeScript 的即时编译。但是，如果你想在使用 <code>tsconfig.json</code> 时从命令行手动运行 TypeScript 编译器，你可以通过以下方式：</p><ul><li>运行 tsc，它会在当前目录或者是父级目录寻找 <code>tsconfig.json</code> 文件。</li><li>运行 <code>tsc -p ./path-to-project-directory</code> 。当然，这个路径可以是绝对路径，也可以是相对于当前目录的相对路径。</li></ul><p>你甚至可以使用 <code>tsc -w</code> 来启用 TypeScript 编译器的观测模式，在检测到文件改动之后，它将重新编译。</p><h2 id="指定文件" tabindex="-1"><a class="header-anchor" href="#指定文件"><span>指定文件</span></a></h2><p>你也可以显式指定需要编译的文件：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;./some/file.ts&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>你还可以使用 <code>include</code> 和 <code>exclude</code> 选项来指定需要包含的文件和排除的文件：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;./folder&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;./folder/**/*.spec.ts&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;./folder/someSubFolder&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">注意</p><p>使用 <code>globs</code>：<code>**/*</code> （一个示例用法：<code>some/folder/**/*</code>）意味着匹配所有的文件夹和所有文件（扩展名为 <code>.ts/.tsx</code>，当开启了 <code>allowJs: true</code> 选项时，扩展名可以是 <code>.js/.jsx</code>）。</p></div>`,21),e=[p];function l(i,c){return n(),t("div",null,e)}const k=s(o,[["render",l],["__file","compilationContext.html.vue"]]),u=JSON.parse('{"path":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文","lang":"zh-CN","frontmatter":{"description":"编译上下文 编译上下文算是一个比较花哨的术语，可以用它来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文还包含有正在被使用的编译选项的信息。定义这种逻辑分组，一个比较好的方式是使用 tsconfig.json 文件。 tsconfig.json 基础 开始使用 tsconfig.json 是一...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/project/compilationContext.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"编译上下文"}],["meta",{"property":"og:description","content":"编译上下文 编译上下文算是一个比较花哨的术语，可以用它来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文还包含有正在被使用的编译选项的信息。定义这种逻辑分组，一个比较好的方式是使用 tsconfig.json 文件。 tsconfig.json 基础 开始使用 tsconfig.json 是一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2020-07-01T09:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2020-07-01T09:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编译上下文\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2020-07-01T09:35:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"tsconfig.json","slug":"tsconfig-json","link":"#tsconfig-json","children":[{"level":3,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":3,"title":"编译选项","slug":"编译选项","link":"#编译选项","children":[]},{"level":3,"title":"TypeScript 编译","slug":"typescript-编译","link":"#typescript-编译","children":[]}]},{"level":2,"title":"指定文件","slug":"指定文件","link":"#指定文件","children":[]}],"git":{"createdTime":1533711742000,"updatedTime":1593596100000,"contributors":[{"name":"jkchao","email":"jkchaom@gmail.com","commits":4},{"name":"Charlie An","email":"1481988258@qq.com","commits":1},{"name":"Payton","email":"jmgarden@qq.com","commits":1},{"name":"chenwangji","email":"694093637@qq.com","commits":1},{"name":"zongzi531","email":"zongzi.xy@gmail.com","commits":1},{"name":"阿卡琳","email":"437376068@qq.com","commits":1},{"name":"阿卡琳","email":"hufan.akarin@Gmail.com","commits":1},{"name":"项鸿伟","email":"734824565@qq.com","commits":1}]},"excerpt":"\\n<p>编译上下文算是一个比较花哨的术语，可以用它来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文还包含有正在被使用的编译选项的信息。定义这种逻辑分组，一个比较好的方式是使用 <code>tsconfig.json</code> 文件。</p>\\n<h2>tsconfig.json</h2>\\n<h3>基础</h3>\\n<p>开始使用 <code>tsconfig.json</code> 是一件比较容易的事，你仅仅需要写下：</p>\\n<div class=\\"language-json\\" data-highlighter=\\"prismjs\\" data-ext=\\"json\\" data-title=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"line\\"><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}');export{k as comp,u as data};
