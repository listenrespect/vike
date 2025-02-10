import{j as e,i as r,L as o,o as t}from"../chunks/chunk-C0d5W_85.js";import{L as l}from"../chunks/chunk-DGBFQysE.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BdOKdNKy.js";/* empty css                      */const a=[{pageSectionId:"verbose-errors",pageSectionLevel:2,pageSectionTitle:"Verbose errors"},{pageSectionId:"digging-into-node-modules",pageSectionLevel:2,pageSectionTitle:"Digging into `node_modules/`"},{pageSectionId:"debug-flags",pageSectionLevel:2,pageSectionTitle:"Debug flags"},{pageSectionId:"vike-flags",pageSectionLevel:3,pageSectionTitle:"Vike flags"},{pageSectionId:"vite-flags",pageSectionLevel:3,pageSectionTitle:"Vite flags"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function i(n){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:["In general, if you run into any issues with Vike, we recommend that you ",e.jsx(l,{href:"/faq#how-can-i-reach-out-for-help",children:"reach out to us"}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"If you report a Vike bug, then we quickly fix it (usually within 24 hours)."}),`
`]}),`
`,e.jsx(s.p,{children:"That said, you can also dig into issues yourself."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"In some situations, you may want to dig into a problem yourself. For example, if we ask you to provide a minimal reproduction, it might be quicker to dig into Vike's source code instead."}),`
`]}),`
`,e.jsx("h2",{id:"verbose-errors",children:"Verbose errors"}),`
`,e.jsxs(s.p,{children:["Vike prettifies transpilation errors, such as errors thrown by ",e.jsx(s.a,{href:"https://esbuild.github.io/",children:"esbuild"})," and ",e.jsx(s.a,{href:"https://babeljs.io/",children:"Babel"}),"."]}),`
`,e.jsxs(s.p,{children:["While Vike is careful about not removing relevant information, it may mistakenly do so. In that case ",e.jsx(s.a,{href:"https://github.com/vikejs/vike/issues/new",children:"create a new GitHub issue"}),". Until a Vike maintainer fixes the issue you can use the debug flag ",e.jsx(s.code,{children:"DEBUG=vike:error"}),"."]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"shell","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"shell","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# - Show verbose original errors"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# - Show infinite stack traces (`Error.stackTraceLimit = Infinity`)"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:"vike:error"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]})]})})}),`
`,e.jsx(s.p,{children:"For even more information:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"shell","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"shell","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Usually only used by Vike maintainers"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:"vike:error,vike:log"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]})]})})}),`
`,e.jsxs("h2",{id:"digging-into-node-modules",children:["Digging into ",e.jsx("code",{children:"node_modules/"})]}),`
`,e.jsx(s.p,{children:"The quickest way to dig into Vike is by:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Directly modifying the built code at ",e.jsx(s.code,{children:"node_modules/vike/dist/esm/**/*.js"}),", for example to:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Inject ",e.jsx(s.code,{children:"console.log()"})," to gather insights."]}),`
`,e.jsx(s.li,{children:"Try to fix the bug."}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Reading the TypeScript source code (",e.jsx(s.code,{children:"$ git clone git@github.com:vikejs/vike"}),"), to understand how the code works."]}),`
`]}),`
`,e.jsxs(s.p,{children:["The trick here is to directly modify the built code at ",e.jsx(s.code,{children:"node_modules/"}),", while using the TypeScript source code to navigate and read code."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["We recommend directly manipulating ",e.jsx(s.code,{children:"node_modules/vike/dist/esm/**/*.js"})," because it's simpler and quicker than building Vike. That said, you can also build and then link Vike:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" git"}),e.jsx(s.span,{style:{color:"#032F62"},children:" clone"}),e.jsx(s.span,{style:{color:"#032F62"},children:" git@github.com:vikejs/vike"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" cd"}),e.jsx(s.span,{style:{color:"#032F62"},children:" vike/vike/"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" pnpm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" install"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" pnpm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" cd"}),e.jsx(s.span,{style:{color:"#032F62"},children:" ../../my-app/"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" pnpm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" link"}),e.jsx(s.span,{style:{color:"#032F62"},children:" ../vike/vike/"})]})]})})}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"It may sound scary to dig into foreign source code, but it's sometimes quicker to find the root cause of your problem than treating Vike as a black box. Also:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"It's more interesting. (Open Source is usually well-written and pleasurable to read.)"}),`
`,e.jsx(s.li,{children:"You may end up being able to make a PR solving your problem and help the whole community."}),`
`]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"We recommend this practice not only for Vike, but also for other tools such as Vite."}),`
`]}),`
`,e.jsx("h2",{id:"debug-flags",children:"Debug flags"}),`
`,e.jsx("h3",{id:"vike-flags",children:"Vike flags"}),`
`,e.jsx(s.p,{children:"You can use Vike's debug logs to gather insights."}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"shell","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"shell","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Inspect Vike's routing"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:"vike:routing"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Inspect errors"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:"vike:error"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Inspect logs"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:"vike:log"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Combination"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Inspect HTTP Streaming"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:"vike:stream"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:"vike:log,vike:error,vike:stream"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["These debug logs allow you to understand how Vike thinks of your app. For example, to figure out why your app returns a ",e.jsx(s.code,{children:"404"}),", use ",e.jsx(s.code,{children:"vike:routing"}),"."]}),`
`]}),`
`,e.jsx(s.p,{children:"There are more debug logs but these aren't user-friendly as they are meant for Vike maintainers."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["For more debug logs, add a comment at ",e.jsx(s.a,{href:"https://github.com/vikejs/vike/issues/249",children:"#249"}),"."]}),`
`]}),`
`,e.jsx("h3",{id:"vite-flags",children:"Vite flags"}),`
`,e.jsxs(s.p,{children:["To enable Vite's debug logs, set the environment variable ",e.jsx(s.code,{children:"DEBUG"})," to ",e.jsx(s.code,{children:"vite:*"}),"."]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"shell","data-theme":"github-light",children:e.jsx(s.code,{"data-language":"shell","data-theme":"github-light",style:{display:"grid"},children:e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" DEBUG=vite:"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"*"}),e.jsx(s.span,{style:{color:"#032F62"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]})})})}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(l,{href:"/error-tracking"}),`
`]}),`
`]})]})}function d(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:a},Symbol.toStringTag,{value:"Module"})),v={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/debug/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:r}}};export{v as configValuesSerialized};
