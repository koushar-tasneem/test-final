(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),c=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,O=d["".concat(l,".").concat(s)]||d[s]||u[s]||p;return n?r.a.createElement(O,o(o({ref:t},i),{},{components:n})):r.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},510:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),p=(n(0),n(2837)),l=["components"],o={},b={unversionedId:"puppeteer.pdfoptions",id:"version-10.0.0/puppeteer.pdfoptions",isDocsHomePage:!1,title:"puppeteer.pdfoptions",description:"Home &gt; puppeteer &gt; PDFOptions",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.pdfoptions.md",slug:"/puppeteer.pdfoptions",permalink:"/test-final/docs/10.0.0/puppeteer.pdfoptions",version:"10.0.0"},i=[{value:"PDFOptions interface",id:"pdfoptions-interface",children:[]},{value:"Properties",id:"properties",children:[]}],c={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,l);return Object(p.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions"},"PDFOptions")),Object(p.b)("h2",{id:"pdfoptions-interface"},"PDFOptions interface"),Object(p.b)("p",null,"Valid options to configure PDF generation via ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.page.pdf"},"Page.pdf()"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export interface PDFOptions \n")),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Property"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.displayheaderfooter"},"displayHeaderFooter?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Whether to show the header and footer.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.footertemplate"},"footerTemplate?")),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," HTML template for the print footer. Has the same constraints and support for special classes as ",Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.headertemplate"},"PDFOptions.headerTemplate"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.format"},"format?")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.paperformat"},"PaperFormat")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.headertemplate"},"headerTemplate?")),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," HTML template for the print header. Should be valid HTML with the following classes used to inject values into them: - ",Object(p.b)("code",null,"date")," formatted print date- ",Object(p.b)("code",null,"title")," document title- ",Object(p.b)("code",null,"url")," document location- ",Object(p.b)("code",null,"pageNumber")," current page number- ",Object(p.b)("code",null,"totalPages")," total pages in the document")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.height"},"height?")),Object(p.b)("td",{parentName:"tr",align:null},"string ","|"," number"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Sets the height of paper. You can pass in a number or a string with a unit.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.landscape"},"landscape?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Whether to print in landscape orientation.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.margin"},"margin?")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfmargin"},"PDFMargin")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Set the PDF margins.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.omitbackground"},"omitBackground?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Hides default white background and allows generating pdfs with transparency.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.pageranges"},"pageRanges?")),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Paper ranges to print, e.g. ",Object(p.b)("code",null,"1-5, 8, 11-13"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.path"},"path?")),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," The path to save the file to.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.prefercsspagesize"},"preferCSSPageSize?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Give any CSS ",Object(p.b)("code",null,"@page")," size declared in the page priority over what is declared in the ",Object(p.b)("code",null,"width")," or ",Object(p.b)("code",null,"height")," or ",Object(p.b)("code",null,"format")," option.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.printbackground"},"printBackground?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Set to ",Object(p.b)("code",null,"true")," to print background graphics.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.scale"},"scale?")),Object(p.b)("td",{parentName:"tr",align:null},"number"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Scales the rendering of the web page. Amount must be between ",Object(p.b)("code",null,"0.1")," and ",Object(p.b)("code",null,"2"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.pdfoptions.width"},"width?")),Object(p.b)("td",{parentName:"tr",align:null},"string ","|"," number"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Sets the width of paper. You can pass in a number or a string with a unit.")))))}d.isMDXComponent=!0}}]);