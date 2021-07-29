(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,b=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var u=2;u<o;u++)p[u]=r[u];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},478:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(2837)),p=["components"],c={},i={unversionedId:"puppeteer.frame.name",id:"version-6.0.0/puppeteer.frame.name",isDocsHomePage:!1,title:"puppeteer.frame.name",description:"Home &gt; puppeteer &gt; Frame &gt; name",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.frame.name.md",slug:"/puppeteer.frame.name",permalink:"/test-final/docs/6.0.0/puppeteer.frame.name",version:"6.0.0"},u=[{value:"Frame.name() method",id:"framename-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:u};function m(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.frame.name"},"name")),Object(o.b)("h2",{id:"framename-method"},"Frame.name() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"name(): string;\n")),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"string"),Object(o.b)("p",null,"the frame's ",Object(o.b)("inlineCode",{parentName:"p"},"name")," attribute as specified in the tag."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"If the name is empty, it returns the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," attribute instead."),Object(o.b)("p",null,"Note: This value is calculated once when the frame is created, and will not update if the attribute is changed later."))}m.isMDXComponent=!0}}]);