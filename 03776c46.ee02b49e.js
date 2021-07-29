(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),p=t(7),o=(t(0),t(2837)),a=["components"],i={},c={unversionedId:"puppeteer.puppeteer.errors",id:"version-6.0.0/puppeteer.puppeteer.errors",isDocsHomePage:!1,title:"puppeteer.puppeteer.errors",description:"Home &gt; puppeteer &gt; Puppeteer &gt; errors",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.puppeteer.errors.md",slug:"/puppeteer.puppeteer.errors",permalink:"/test-final/docs/6.0.0/puppeteer.puppeteer.errors",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.puppeteer.devices",permalink:"/test-final/docs/6.0.0/puppeteer.puppeteer.devices"},next:{title:"puppeteer.puppeteer.networkconditions",permalink:"/test-final/docs/6.0.0/puppeteer.puppeteer.networkconditions"}},u=[{value:"Puppeteer.errors property",id:"puppeteererrors-property",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:u};function l(e){var r=e.components,t=Object(p.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.puppeteer"},"Puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.puppeteer.errors"},"errors")),Object(o.b)("h2",{id:"puppeteererrors-property"},"Puppeteer.errors property"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"get errors(): PuppeteerErrors;\n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Puppeteer methods might throw errors if they are unable to fulfill a request. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"page.waitForSelector(selector[, options])")," might fail if the selector doesn't match any nodes during the given timeframe."),Object(o.b)("p",null,"For certain types of errors Puppeteer uses specific error classes. These classes are available via ",Object(o.b)("inlineCode",{parentName:"p"},"puppeteer.errors"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example of handling a timeout error:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof puppeteer.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n\n")))}l.isMDXComponent=!0},2837:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),p=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var u=p.a.createContext({}),s=function(e){var r=p.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return p.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return p.a.createElement(p.a.Fragment,{},r)}},b=p.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),b=n,m=l["".concat(a,".").concat(b)]||l[b]||f[b]||o;return t?p.a.createElement(m,i(i({ref:r},u),{},{components:t})):p.a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return p.a.createElement.apply(null,a)}return p.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);