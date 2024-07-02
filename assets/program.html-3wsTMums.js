import{_ as e,r as s,o as l,c as n,b as t,e as o,d as c,w as r,a as p}from"./app-D9Gw5LDz.js";const m={},a=t("h1",{id:"程序",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#程序"},[t("span",null,"程序")])],-1),d=t("code",null,"program.ts",-1),k=t("code",null,"Program",-1),g=t("code",null,"SourceFile",-1),h=p('<h2 id="compilerhost-的使用" tabindex="-1"><a class="header-anchor" href="#compilerhost-的使用"><span><code>CompilerHost</code> 的使用</span></a></h2><p>CompilerHost 是与操作环境（OE, Operating Enviornment）进行交互的机制：</p><p><code>Program</code> <em>-使用-&gt;</em> <code>CompilerHost</code> <em>-使用-&gt;</em> <code>System</code></p><p>用 <code>CompilerHost</code> 作中间层的原因是可以让接口对 <code>Program</code> 的需求进行细粒度的调整，而无需考虑操作环境的需求。（例如：<code>Program</code> 无需关心 <code>System</code> 的 <code>fileExists</code> 函数）</p><p>对<code>System</code>而言还有其他的使用者（比如测试）</p><h2 id="sourcefile" tabindex="-1"><a class="header-anchor" href="#sourcefile"><span>SourceFile</span></a></h2><p>程序有个 API，用于获取 SourceFile：<code>getSourceFiles(): SourceFile[];</code>。得到的每个元素均是一棵抽象语法树的根节点（称做 <code>SourceFile</code>）</p>',7);function b(y,u){const i=s("RouteLink");return l(),n("div",null,[a,t("p",null,[o("程序定义在 "),d,o(" 中。"),c(i,{to:"/git/ts-book/docs/project/compilationContext.html"},{default:r(()=>[o("编译上下文")]),_:1}),o("在 TypeScript 编译器中被视为一个 "),k,o("，它包含 "),g,o(" 和编译选项")]),h])}const S=e(m,[["render",b],["__file","program.html.vue"]]),T=JSON.parse('{"path":"/git/ts-book/docs/compiler/program.html","title":"程序","lang":"zh-CN","frontmatter":{"description":"程序 程序定义在 program.ts 中。在 TypeScript 编译器中被视为一个 Program，它包含 SourceFile 和编译选项 CompilerHost 的使用 CompilerHost 是与操作环境（OE, Operating Enviornment）进行交互的机制： Program -使用-> CompilerHost -使用-...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/compiler/program.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"程序"}],["meta",{"property":"og:description","content":"程序 程序定义在 program.ts 中。在 TypeScript 编译器中被视为一个 Program，它包含 SourceFile 和编译选项 CompilerHost 的使用 CompilerHost 是与操作环境（OE, Operating Enviornment）进行交互的机制： Program -使用-> CompilerHost -使用-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2018-09-18T01:53:48.000Z"}],["meta",{"property":"article:modified_time","content":"2018-09-18T01:53:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"程序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2018-09-18T01:53:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CompilerHost 的使用","slug":"compilerhost-的使用","link":"#compilerhost-的使用","children":[]},{"level":2,"title":"SourceFile","slug":"sourcefile","link":"#sourcefile","children":[]}],"git":{"createdTime":1537098059000,"updatedTime":1537235628000,"contributors":[{"name":"hopalay","email":"hopalay@qq.com","commits":3}]},"excerpt":"\\n<p>程序定义在 <code>program.ts</code> 中。<a href=\\"/git/ts-book/docs/project/compilationContext.html\\" target=\\"_blank\\">编译上下文</a>在 TypeScript 编译器中被视为一个 <code>Program</code>，它包含 <code>SourceFile</code> 和编译选项</p>\\n<h2><code>CompilerHost</code> 的使用</h2>\\n<p>CompilerHost 是与操作环境（OE, Operating Enviornment）进行交互的机制：</p>","autoDesc":true,"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}');export{S as comp,T as data};
