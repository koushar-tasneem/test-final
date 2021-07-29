(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(2837)),p=["components"],i={},c={unversionedId:"puppeteer.browser.waitfortarget",id:"puppeteer.browser.waitfortarget",isDocsHomePage:!1,title:"puppeteer.browser.waitfortarget",description:"Home &gt; puppeteer &gt; Browser &gt; waitForTarget",source:"@site/docs\\puppeteer.browser.waitfortarget.md",slug:"/puppeteer.browser.waitfortarget",permalink:"/test-final/docs/next/puppeteer.browser.waitfortarget",version:"current",sidebar:"docs",previous:{title:"puppeteer.browser.useragent",permalink:"/test-final/docs/next/puppeteer.browser.useragent"},next:{title:"puppeteer.browser.wsendpoint",permalink:"/test-final/docs/next/puppeteer.browser.wsendpoint"}},l=[{value:"Browser.waitForTarget() method",id:"browserwaitfortarget-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],b={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.browser"},"Browser")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.browser.waitfortarget"},"waitForTarget")),Object(o.b)("h2",{id:"browserwaitfortarget-method"},"Browser.waitForTarget() method"),Object(o.b)("p",null,"Searches for a target in all browser contexts."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitForTarget(predicate: (x: Target) => boolean, options?: WaitForTargetOptions): Promise<Target>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"predicate"),Object(o.b)("td",{parentName:"tr",align:null},"(x: ",Object(o.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.target"},"Target"),") =",">"," boolean"),Object(o.b)("td",{parentName:"tr",align:null},"A function to be run for every target.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.waitfortargetoptions"},"WaitForTargetOptions")),Object(o.b)("td",{parentName:"tr",align:null})))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.target"},"Target"),">"),Object(o.b)("p",null,"The first target found that matches the ",Object(o.b)("inlineCode",{parentName:"p"},"predicate")," function."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example of finding a target for a page opened via ",Object(o.b)("inlineCode",{parentName:"p"},"window.open"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browser.waitForTarget(target => target.url() === 'https://www.example.com/');\n\n")))}u.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);