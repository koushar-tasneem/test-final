(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),b=n,d=l["".concat(p,".").concat(b)]||l[b]||f[b]||a;return r?o.a.createElement(d,c(c({ref:t},u),{},{components:r})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var u=2;u<a;u++)p[u]=r[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},886:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(2837)),p=["components"],c={},i={unversionedId:"puppeteer.tracing.stop",id:"version-5.4.0/puppeteer.tracing.stop",isDocsHomePage:!1,title:"puppeteer.tracing.stop",description:"Home &gt; puppeteer &gt; Tracing &gt; stop",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.tracing.stop.md",slug:"/puppeteer.tracing.stop",permalink:"/test-final/docs/puppeteer.tracing.stop",version:"5.4.0"},u=[{value:"Tracing.stop() method",id:"tracingstop-method",children:[]}],s={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,p);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/test-final/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.tracing"},"Tracing")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.tracing.stop"},"stop")),Object(a.b)("h2",{id:"tracingstop-method"},"Tracing.stop() method"),Object(a.b)("p",null,"Stops a trace started with the ",Object(a.b)("inlineCode",{parentName:"p"},"start")," method."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"stop(): Promise<Buffer>;\n")),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","Buffer",">"),Object(a.b)("p",null,"Promise which resolves to buffer with trace data."))}l.isMDXComponent=!0}}]);