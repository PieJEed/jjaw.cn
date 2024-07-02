import{_ as i,r as o,o as n,c as l,b as t,e,d as p,a}from"./app-D9Gw5LDz.js";const c={},r=t("h1",{id:"types",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#types"},[t("span",null,"@types")])],-1),d={href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>这意味着，你可以非常高效地使用这些库，而无须在单独的窗口打开相应文档以确保输入的正确性。</p><h2 id="使用-types" tabindex="-1"><a class="header-anchor" href="#使用-types"><span>使用 <code>@types</code></span></a></h2><p>你可以通过 <code>npm</code> 来安装使用 <code>@types</code>，例如为 <code>jquery</code> 添加声明文件：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @types/jquery --save-dev</span>
<span class="line"></span></code></pre></div><p><code>@types</code> 支持全局和模块类型定义。</p><h3 id="全局-types" tabindex="-1"><a class="header-anchor" href="#全局-types"><span>全局 <code>@types</code></span></a></h3><p>默认情况下，TypeScript 会自动包含支持全局使用的任何声明定义。例如，对于 jquery，你应该能够在项目中开始全局使用 <code>$</code>。</p><h3 id="模块-types" tabindex="-1"><a class="header-anchor" href="#模块-types"><span>模块 <code>@types</code></span></a></h3><p>安装完之后，不需要特别的配置，你就可以像使用模块一样使用它：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> $ <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 现在你可以此模块中任意使用$了 :)</span></span>
<span class="line"></span></code></pre></div><h2 id="控制全局" tabindex="-1"><a class="header-anchor" href="#控制全局"><span>控制全局</span></a></h2><p>可以看出，对于某些团队而言，拥有允许全局使用的定义是一个问题。因此，你可以通过配置 <code>tsconfig.json</code> 的 <code>compilerOptions.types</code> 选项，引入有意义的类型：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;types&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;jquery&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>如上例所示，通过配置 <code>compilerOptions.types: [ &quot;jquery&quot; ]</code> 后，只允许使用 <code>jquery</code> 的 <code>@types</code> 包，即使这个人安装了另一个声明文件，比如 <code>npm install @types/node</code>，它的全局变量（例如 <code>process</code>）也不会泄漏到你的代码中，直到你将它们添加到 tsconfig.json 类型选项。</p>`,14);function m(g,y){const s=o("ExternalLinkIcon");return n(),l("div",null,[r,t("p",null,[e("毫无疑问，"),t("a",d,[e("DefinitelyTyped"),p(s)]),e(" 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。")]),k])}const b=i(c,[["render",m],["__file","types.html.vue"]]),u=JSON.parse('{"path":"/git/ts-book/docs/typings/types.html","title":"@types","lang":"zh-CN","frontmatter":{"description":"@types 毫无疑问，DefinitelyTyped 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。 这意味着，你可以非常高效地使用这些库，而无须在单独的窗口打开相应文档以确保输入的正确性。 使用 @types 你可以通过 npm 来安装使用 @types，例如为 jquery 添加声明文件： @...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/typings/types.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"@types"}],["meta",{"property":"og:description","content":"@types 毫无疑问，DefinitelyTyped 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。 这意味着，你可以非常高效地使用这些库，而无须在单独的窗口打开相应文档以确保输入的正确性。 使用 @types 你可以通过 npm 来安装使用 @types，例如为 jquery 添加声明文件： @..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2020-02-24T12:24:22.000Z"}],["meta",{"property":"article:modified_time","content":"2020-02-24T12:24:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@types\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2020-02-24T12:24:22.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用 @types","slug":"使用-types","link":"#使用-types","children":[{"level":3,"title":"全局 @types","slug":"全局-types","link":"#全局-types","children":[]},{"level":3,"title":"模块 @types","slug":"模块-types","link":"#模块-types","children":[]}]},{"level":2,"title":"控制全局","slug":"控制全局","link":"#控制全局","children":[]}],"git":{"createdTime":1533973275000,"updatedTime":1582547062000,"contributors":[{"name":"jkchao","email":"jkchaom@gmail.com","commits":9},{"name":"Eve","email":"948832626@qq.com","commits":1},{"name":"PeakX","email":"cycanmo@gmail.com","commits":1},{"name":"阿卡琳","email":"hufan.akarin@Gmail.com","commits":1}]},"excerpt":"\\n<p>毫无疑问，<a href=\\"https://github.com/borisyankov/DefinitelyTyped\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">DefinitelyTyped</a> 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。</p>\\n<p>这意味着，你可以非常高效地使用这些库，而无须在单独的窗口打开相应文档以确保输入的正确性。</p>\\n<h2>使用 <code>@types</code></h2>\\n<p>你可以通过 <code>npm</code> 来安装使用 <code>@types</code>，例如为 <code>jquery</code> 添加声明文件：</p>","autoDesc":true,"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}');export{b as comp,u as data};
