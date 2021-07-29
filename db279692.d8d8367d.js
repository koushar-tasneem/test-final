(window.webpackJsonp=window.webpackJsonp||[]).push([[2386],{2459:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(2837)),p=["components"],i={},l={unversionedId:"puppeteer.page.waitforrequest",id:"puppeteer.page.waitforrequest",isDocsHomePage:!1,title:"puppeteer.page.waitforrequest",description:"Home &gt; puppeteer &gt; Page &gt; waitForRequest",source:"@site/docs\\puppeteer.page.waitforrequest.md",slug:"/puppeteer.page.waitforrequest",permalink:"/test-final/docs/next/puppeteer.page.waitforrequest",version:"current"},c=[{value:"Page.waitForRequest() method",id:"pagewaitforrequest-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitforrequest"},"waitForRequest")),Object(o.b)("h2",{id:"pagewaitforrequest-method"},"Page.waitForRequest() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitForRequest(urlOrPredicate: string | ((req: HTTPRequest) => boolean | Promise<boolean>), options?: {\n        timeout?: number;\n    }): Promise<HTTPRequest>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"urlOrPredicate"),Object(o.b)("td",{parentName:"tr",align:null},"string ","|"," ((req: ",Object(o.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.httprequest"},"HTTPRequest"),") =",">"," boolean ","|"," Promise","<","boolean",">",")"),Object(o.b)("td",{parentName:"tr",align:null},"A URL or predicate to wait for")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},"{ timeout?: number; }"),Object(o.b)("td",{parentName:"tr",align:null},"Optional waiting parameters")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.httprequest"},"HTTPRequest"),">"),Object(o.b)("p",null,"Promise which resolves to the matched response"),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Optional Waiting Parameters have:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timeout"),": Maximum wait time in milliseconds, defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"30")," seconds, pass ",Object(o.b)("inlineCode",{parentName:"li"},"0")," to disable the timeout. The default value can be changed by using the ",Object(o.b)("a",{parentName:"li",href:"/test-final/docs/next/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method.")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const firstResponse = await page.waitForResponse(\n'https://example.com/resource'\n);\nconst finalResponse = await page.waitForResponse(\n(response) =>\nresponse.url() === 'https://example.com' && response.status() === 200\n);\nconst finalResponse = await page.waitForResponse(async (response) => {\nreturn (await response.text()).includes('<html>');\n});\nreturn finalResponse.ok();\n\n")))}u.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},c),{},{components:r})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);