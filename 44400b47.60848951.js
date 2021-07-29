(window.webpackJsonp=window.webpackJsonp||[]).push([[743],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,d=l["".concat(a,".").concat(f)]||l[f]||b[f]||p;return r?o.a.createElement(d,c(c({ref:t},i),{},{components:r})):o.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var i=2;i<p;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},816:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),p=(r(0),r(2837)),a=["components"],c={},s={unversionedId:"puppeteer.browsercontext.pages",id:"version-5.4.0/puppeteer.browsercontext.pages",isDocsHomePage:!1,title:"puppeteer.browsercontext.pages",description:"Home &gt; puppeteer &gt; BrowserContext &gt; pages",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.browsercontext.pages.md",slug:"/puppeteer.browsercontext.pages",permalink:"/test-final/docs/puppeteer.browsercontext.pages",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.browsercontext.overridepermissions",permalink:"/test-final/docs/puppeteer.browsercontext.overridepermissions"},next:{title:"puppeteer.browsercontext.targets",permalink:"/test-final/docs/puppeteer.browsercontext.targets"}},i=[{value:"BrowserContext.pages() method",id:"browsercontextpages-method",children:[]}],u={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,a);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/test-final/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.browsercontext.pages"},"pages")),Object(p.b)("h2",{id:"browsercontextpages-method"},"BrowserContext.pages() method"),Object(p.b)("p",null,"An array of all pages inside the browser context."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"pages(): Promise<Page[]>;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.page"},"Page"),"[","]",">"),Object(p.b)("p",null,"Promise which resolves to an array of all open pages. Non visible pages, such as ",Object(p.b)("inlineCode",{parentName:"p"},'"background_page"'),", will not be listed here. You can find them using ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.target.page"},"the target page"),"."))}l.isMDXComponent=!0}}]);