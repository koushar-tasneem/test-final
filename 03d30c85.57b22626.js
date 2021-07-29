(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(2837)),i=["components"],p={},c={unversionedId:"puppeteer.page.waitfor",id:"puppeteer.page.waitfor",isDocsHomePage:!1,title:"puppeteer.page.waitfor",description:"Home &gt; puppeteer &gt; Page &gt; waitFor",source:"@site/docs\\puppeteer.page.waitfor.md",slug:"/puppeteer.page.waitfor",permalink:"/test-final/docs/next/puppeteer.page.waitfor",version:"current"},l=[{value:"Page.waitFor() method",id:"pagewaitfor-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitfor"},"waitFor")),Object(o.b)("h2",{id:"pagewaitfor-method"},"Page.waitFor() method"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),Object(o.b)("p",{parentName:"blockquote"},"Don't use this method directly. Instead use the more explicit methods available: ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitforselector"},"Page.waitForSelector()"),", ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitforxpath"},"Page.waitForXPath()"),", ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitforfunction"},"Page.waitForFunction()")," or ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitfortimeout"},"Page.waitForTimeout()"),".")),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitFor(selectorOrFunctionOrTimeout: string | number | Function, options?: {\n        visible?: boolean;\n        hidden?: boolean;\n        timeout?: number;\n        polling?: string | number;\n    }, ...args: SerializableOrJSHandle[]): Promise<JSHandle>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"selectorOrFunctionOrTimeout"),Object(o.b)("td",{parentName:"tr",align:null},"string ","|"," number ","|"," Function"),Object(o.b)("td",{parentName:"tr",align:null},"a selector, predicate or timeout to wait for.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},"{ visible?: boolean; hidden?: boolean; timeout?: number; polling?: string ","|"," number; }"),Object(o.b)("td",{parentName:"tr",align:null},"optional waiting parameters.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"args"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(o.b)("td",{parentName:"tr",align:null},"arguments to pass to ",Object(o.b)("code",null,"pageFunction"),".")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.jshandle"},"JSHandle"),">"),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"This method behaves differently depending on the first parameter. If it's a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),", it will be treated as a ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," or ",Object(o.b)("inlineCode",{parentName:"p"},"xpath")," (if the string starts with ",Object(o.b)("inlineCode",{parentName:"p"},"//"),"). This method then is a shortcut for ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitforselector"},"Page.waitForSelector()")," or ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitforxpath"},"Page.waitForXPath()"),"."),Object(o.b)("p",null,"If the first argument is a function this method is a shortcut for ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.waitforfunction"},"Page.waitForFunction()"),"."),Object(o.b)("p",null,"If the first argument is a ",Object(o.b)("inlineCode",{parentName:"p"},"number"),", it's treated as a timeout in milliseconds and the method returns a promise which resolves after the timeout."))}u.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return r?a.a.createElement(d,p(p({ref:t},l),{},{components:r})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);