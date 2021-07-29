(window.webpackJsonp=window.webpackJsonp||[]).push([[2314],{2387:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(2837)),p=["components"],c={},i={unversionedId:"puppeteer.page.evaluatehandle",id:"version-6.0.0/puppeteer.page.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.page.evaluatehandle",description:"Home &gt; puppeteer &gt; Page &gt; evaluateHandle",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.page.evaluatehandle.md",slug:"/puppeteer.page.evaluatehandle",permalink:"/test-final/docs/6.0.0/puppeteer.page.evaluatehandle",version:"6.0.0"},o=[{value:"Page.evaluateHandle() method",id:"pageevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],u={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,p);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.page"},"Page")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.page.evaluatehandle"},"evaluateHandle")),Object(l.b)("h2",{id:"pageevaluatehandle-method"},"Page.evaluateHandle() method"),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandlerType extends JSHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<HandlerType>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),Object(l.b)("td",{parentName:"tr",align:null},"a function that is run within the page")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"args"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(l.b)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<","HandlerType",">"),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"The only difference between ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.page.evaluate"},"page.evaluate")," and ",Object(l.b)("inlineCode",{parentName:"p"},"page.evaluateHandle")," is that ",Object(l.b)("inlineCode",{parentName:"p"},"evaluateHandle")," will return the value wrapped in an in-page object."),Object(l.b)("p",null,"If the function passed to ",Object(l.b)("inlineCode",{parentName:"p"},"page.evaluteHandle")," returns a Promise, the function will wait for the promise to resolve and return its value."),Object(l.b)("p",null,"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"),Object(l.b)("h2",{id:"example-1"},"Example 1"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"const aHandle = await page.evaluateHandle('document')\n\n")),Object(l.b)("h2",{id:"example-2"},"Example 2"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.jshandle"},"JSHandle")," instances can be passed as arguments to the ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"const aHandle = await page.evaluateHandle(() => document.body);\nconst resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);\nconsole.log(await resultHandle.jsonValue());\nawait resultHandle.dispose();\n\n")),Object(l.b)("p",null,"Most of the time this function returns a ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.jshandle"},"JSHandle"),", but if ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a reference to an element, you instead get an ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.elementhandle"},"ElementHandle")," back:"),Object(l.b)("h2",{id:"example-3"},"Example 3"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"const button = await page.evaluateHandle(() => document.querySelector('button'));\n// can call `click` because `button` is an `ElementHandle`\nawait button.click();\n\n")),Object(l.b)("p",null,"The TypeScript definitions assume that ",Object(l.b)("inlineCode",{parentName:"p"},"evaluateHandle")," returns a ",Object(l.b)("inlineCode",{parentName:"p"},"JSHandle"),", but if you know it's going to return an ",Object(l.b)("inlineCode",{parentName:"p"},"ElementHandle"),", pass it as the generic argument:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"const button = await page.evaluateHandle<ElementHandle>(...);\n\n")))}b.isMDXComponent=!0},2837:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),b=u(a),s=n,m=b["".concat(p,".").concat(s)]||b[s]||d[s]||l;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var o=2;o<l;o++)p[o]=a[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);