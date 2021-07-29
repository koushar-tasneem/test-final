(window.webpackJsonp=window.webpackJsonp||[]).push([[1811],{1885:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(2837)),o=["components"],p={},c={unversionedId:"puppeteer.frame.waitfornavigation",id:"puppeteer.frame.waitfornavigation",isDocsHomePage:!1,title:"puppeteer.frame.waitfornavigation",description:"Home &gt; puppeteer &gt; Frame &gt; waitForNavigation",source:"@site/docs\\puppeteer.frame.waitfornavigation.md",slug:"/puppeteer.frame.waitfornavigation",permalink:"/test-final/docs/next/puppeteer.frame.waitfornavigation",version:"current"},l=[{value:"Frame.waitForNavigation() method",id:"framewaitfornavigation-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.frame"},"Frame")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.frame.waitfornavigation"},"waitForNavigation")),Object(i.b)("h2",{id:"framewaitfornavigation-method"},"Frame.waitForNavigation() method"),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"waitForNavigation(options?: {\n        timeout?: number;\n        waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];\n    }): Promise<HTTPResponse | null>;\n")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"options"),Object(i.b)("td",{parentName:"tr",align:null},"{ timeout?: number; waitUntil?: ",Object(i.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")," ","|"," ",Object(i.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent"),"[","]","; }"),Object(i.b)("td",{parentName:"tr",align:null},"options to configure when the navigation is consided finished.")))),Object(i.b)("b",null,"Returns:"),Object(i.b)("p",null,"Promise","<",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),Object(i.b)("p",null,"a promise that resolves when the frame navigates to a new URL."),Object(i.b)("h2",{id:"remarks"},"Remarks"),Object(i.b)("p",null,"This resolves when the frame navigates to a new URL. It is useful for when you run code which will indirectly cause the frame to navigate. Consider this example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const [response] = await Promise.all([\n  // The navigation promise resolves after navigation has finished\n  frame.waitForNavigation(),\n  // Clicking the link will indirectly cause a navigation\n  frame.click('a.my-link'),\n]);\n\n")),Object(i.b)("p",null,"Usage of the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," to change the URL is considered a navigation."))}s.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(o,".").concat(f)]||s[f]||b[f]||i;return n?a.a.createElement(m,p(p({ref:t},l),{},{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);