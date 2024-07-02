import{_ as s,o as n,c as t,a}from"./app-D9Gw5LDz.js";const e={},p=a(`<h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h1><p>接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。</p><p>下面两个是等效的声明, 示例 A 使用内联注解，示例 B 使用接口形式：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 示例 A</span></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">const</span> myPoint<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例 B</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">const</span> myPoint<span class="token operator">:</span> Point<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>示例 B 的好处在于，如果有人创建了一个基于 <code>myPoint</code> 的库来添加新成员, 那么他可以轻松将此成员添加到 <code>myPoint</code> 的现有声明中:</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// Lib a.d.ts</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span></span>
<span class="line">  y<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">const</span> myPoint<span class="token operator">:</span> Point</span>
<span class="line"></span>
<span class="line"><span class="token comment">// Lib b.d.ts</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  z<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Your code</span></span>
<span class="line">myPoint<span class="token punctuation">.</span>z <span class="token comment">// Allowed!</span></span>
<span class="line"></span></code></pre></div><p>TypeScript 接口是开放式的，这是 TypeScript 的一个重要原则，它允许你使用接口来模仿 JavaScript 的可扩展性。</p><h2 id="类可以实现接口" tabindex="-1"><a class="header-anchor" href="#类可以实现接口"><span>类可以实现接口</span></a></h2><p>如果你希望在类中使用必须要被遵循的接口（类）或别人定义的对象结构，可以使用 <code>implements</code> 关键字来确保其兼容性：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyPoint</span> <span class="token keyword">implements</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// Same as Point</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>基本上，在 <code>implements（实现）</code> 存在的情况下，该外部 <code>Point</code> 接口的任何更改都将导致代码库中的编译错误，因此可以轻松地使其保持同步：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// New member</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyPoint</span> <span class="token keyword">implements</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ERROR : missing member \`z\`</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>注意，<code>implements</code> 限制了类实例的结构，如下所示:</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">let</span> foo<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>但像 <code>foo: Point = MyPoint</code> 这样的代码，与其并不是一回事。</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><h3 id="并非每个接口都是很容易实现的" tabindex="-1"><a class="header-anchor" href="#并非每个接口都是很容易实现的"><span>并非每个接口都是很容易实现的</span></a></h3><p>接口旨在声明 JavaScript 中可能存在的任意结构。</p><p>思考以下例子，可以使用 <code>new</code> 调用某些内容：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Crazy</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    hello<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>你可能会有下面这样的代码：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">CrazyClass</span> <span class="token keyword">implements</span> <span class="token class-name">Crazy</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Because</span></span>
<span class="line"><span class="token keyword">const</span> crazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CrazyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// crazy would be { hello:123 }</span></span>
<span class="line"></span></code></pre></div><p>你可以使用接口声明所有“疯狂的”的 JavaScript 代码，甚至可以安全地在 TypeScript 中使用它们。但这并不意味着你可以使用 TypeScript 类来实现它们。</p>`,23),o=[p];function i(l,c){return n(),t("div",null,o)}const r=s(e,[["render",i],["__file","interfaces.html.vue"]]),m=JSON.parse('{"path":"/git/ts-book/docs/typings/interfaces.html","title":"接口","lang":"zh-CN","frontmatter":{"description":"接口 接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。 下面两个是等效的声明, 示例 A 使用内联注解，示例 B 使用接口形式： 示例 B 的好处在于，如果有人创建了一个基于 myPoint 的库来添加新成员, 那么他可以轻松将此成员添加到 myPoint 的现有声明中: TypeScript 接口是开放式的，这是 ...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/typings/interfaces.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"接口"}],["meta",{"property":"og:description","content":"接口 接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。 下面两个是等效的声明, 示例 A 使用内联注解，示例 B 使用接口形式： 示例 B 的好处在于，如果有人创建了一个基于 myPoint 的库来添加新成员, 那么他可以轻松将此成员添加到 myPoint 的现有声明中: TypeScript 接口是开放式的，这是 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2020-03-12T23:40:24.000Z"}],["meta",{"property":"article:modified_time","content":"2020-03-12T23:40:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2020-03-12T23:40:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"类可以实现接口","slug":"类可以实现接口","link":"#类可以实现接口","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[{"level":3,"title":"并非每个接口都是很容易实现的","slug":"并非每个接口都是很容易实现的","link":"#并非每个接口都是很容易实现的","children":[]}]}],"git":{"createdTime":1534163754000,"updatedTime":1584056424000,"contributors":[{"name":"jkchao","email":"jkchaom@gmail.com","commits":9},{"name":"itxuye","email":"itxuye@gmail.com","commits":2},{"name":"knorien","email":"zhangjinwei0320@hotmail.com","commits":1},{"name":"whincwu","email":"whincwu@163.com","commits":1},{"name":"阿卡琳","email":"hufan.akarin@Gmail.com","commits":1}]},"excerpt":"\\n<p>接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。</p>\\n<p>下面两个是等效的声明, 示例 A 使用内联注解，示例 B 使用接口形式：</p>\\n<div class=\\"language-typescript\\" data-highlighter=\\"prismjs\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"line\\"><span class=\\"token comment\\">// 示例 A</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">declare</span> <span class=\\"token keyword\\">const</span> myPoint<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span> x<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span> y<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// 示例 B</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Point</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  x<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">  y<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">declare</span> <span class=\\"token keyword\\">const</span> myPoint<span class=\\"token operator\\">:</span> Point<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}');export{r as comp,m as data};
