(window.webpackJsonp=window.webpackJsonp||[]).push([[1469],{1542:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(2837)),c=["components"],p={},i={unversionedId:"puppeteer.browserfetcher.download",id:"version-5.4.0/puppeteer.browserfetcher.download",isDocsHomePage:!1,title:"puppeteer.browserfetcher.download",description:"Home &gt; puppeteer &gt; BrowserFetcher &gt; download",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.browserfetcher.download.md",slug:"/puppeteer.browserfetcher.download",permalink:"/test-final/docs/puppeteer.browserfetcher.download",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.browserfetcher.candownload",permalink:"/test-final/docs/puppeteer.browserfetcher.candownload"},next:{title:"puppeteer.browserfetcher.host",permalink:"/test-final/docs/puppeteer.browserfetcher.host"}},l=[{value:"BrowserFetcher.download() method",id:"browserfetcherdownload-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/test-final/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.browserfetcher"},"BrowserFetcher")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.browserfetcher.download"},"download")),Object(a.b)("h2",{id:"browserfetcherdownload-method"},"BrowserFetcher.download() method"),Object(a.b)("p",null,"Initiates a GET request to download the revision from the host."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"download(revision: string, progressCallback?: (x: number, y: number) => void): Promise<BrowserFetcherRevisionInfo>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"revision"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},"The revision to download.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"progressCallback"),Object(a.b)("td",{parentName:"tr",align:null},"(x: number, y: number) =",">"," void"),Object(a.b)("td",{parentName:"tr",align:null},"A function that will be called with two arguments: How many bytes have been downloaded and the total number of bytes of the download.")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<",Object(a.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.browserfetcherrevisioninfo"},"BrowserFetcherRevisionInfo"),">"),Object(a.b)("p",null,"A promise with revision information when the revision is downloaded and extracted."),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"This method is affected by the current ",Object(a.b)("inlineCode",{parentName:"p"},"product"),"."))}s.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return r?o.a.createElement(f,p(p({ref:t},l),{},{components:r})):o.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);