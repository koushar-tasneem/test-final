(window.webpackJsonp=window.webpackJsonp||[]).push([[1607],{1680:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),l=(a(0),a(2837)),b=["components"],p={},c={unversionedId:"puppeteer.frame",id:"puppeteer.frame",isDocsHomePage:!1,title:"puppeteer.frame",description:"Home &gt; puppeteer &gt; Frame",source:"@site/docs\\puppeteer.frame.md",slug:"/puppeteer.frame",permalink:"/test-final/docs/next/puppeteer.frame",version:"current"},i=[{value:"Frame class",id:"frame-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Methods",id:"methods",children:[]}],o={toc:i};function m(e){var t=e.components,a=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.frame"},"Frame")),Object(l.b)("h2",{id:"frame-class"},"Frame class"),Object(l.b)("p",null,"At every point of time, page exposes its current frame tree via the ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.mainframe"},"page.mainFrame")," and ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.frame.childframes"},"frame.childFrames")," methods."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Frame \n")),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Frame")," object lifecycles are controlled by three events that are all dispatched on the page object:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"./puppeteer.pageemittedevents.frameattached.md"},"PageEmittedEvents.FrameAttached"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"./puppeteer.pageemittedevents.framenavigated.md"},"PageEmittedEvents.FrameNavigated"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"./puppeteer.pageemittedevents.framedetached.md"},"PageEmittedEvents.FrameDetached")))),Object(l.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(l.b)("inlineCode",{parentName:"p"},"Frame")," class."),Object(l.b)("h2",{id:"example-1"},"Example 1"),Object(l.b)("p",null,"An example of dumping frame tree:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com/chrome/browser/canary.html');\n  dumpFrameTree(page.mainFrame(), '');\n  await browser.close();\n\n  function dumpFrameTree(frame, indent) {\n    console.log(indent + frame.url());\n    for (const child of frame.childFrames()) {\n    dumpFrameTree(child, indent + '  ');\n    }\n  }\n})();\n\n")),Object(l.b)("h2",{id:"example-2"},"Example 2"),Object(l.b)("p",null,"An example of getting text from an iframe element:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const frame = page.frames().find(frame => frame.name() === 'myframe');\nconst text = await frame.$eval('.selector', element => element.textContent);\nconsole.log(text);\n\n")),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame._"},"$(selector)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method queries the frame for the given selector.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.__"},"$$(selector)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This runs ",Object(l.b)("code",null,"document.querySelectorAll")," in the frame and returns the result.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.__eval"},"$$eval(selector, pageFunction, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame._eval"},"$eval(selector, pageFunction, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame._x"},"$x(expression)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method evaluates the given XPath expression and returns the results.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.addscripttag"},"addScriptTag(options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Adds a ",Object(l.b)("code",null,"<","script",">")," tag into the page with the desired url or content.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.addstyletag"},"addStyleTag(options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Adds a ",Object(l.b)("code",null,"<","link rel=",'"',"stylesheet",'"',">")," tag into the page with the desired url or a ",Object(l.b)("code",null,"<","style type=",'"',"text/css",'"',">")," tag with the content.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.childframes"},"childFrames()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.click"},"click(selector, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method clicks the first element found that matches ",Object(l.b)("code",null,"selector"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.content"},"content()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.evaluate"},"evaluate(pageFunction, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.evaluatehandle"},"evaluateHandle(pageFunction, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.executioncontext"},"executionContext()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.focus"},"focus(selector)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method fetches an element with ",Object(l.b)("code",null,"selector")," and focuses it.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.goto"},"goto(url, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.hover"},"hover(selector)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method fetches an element with ",Object(l.b)("code",null,"selector"),", scrolls it into view if needed, and then uses ",Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.isdetached"},"isDetached()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.name"},"name()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.parentframe"},"parentFrame()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.select"},"select(selector, values)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Triggers a ",Object(l.b)("code",null,"change")," and ",Object(l.b)("code",null,"input")," event once all the provided options have been selected.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.setcontent"},"setContent(html, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Set the content of the frame.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.tap"},"tap(selector)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method fetches an element with ",Object(l.b)("code",null,"selector"),", scrolls it into view if needed, and then uses ",Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.page.touchscreen"},"Page.touchscreen")," to tap in the center of the element.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.title"},"title()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.type"},"type(selector, text, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Sends a ",Object(l.b)("code",null,"keydown"),", ",Object(l.b)("code",null,"keypress"),"/",Object(l.b)("code",null,"input"),", and ",Object(l.b)("code",null,"keyup")," event for each character in the text.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.url"},"url()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.waitfor"},"waitFor(selectorOrFunctionOrTimeout, options, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.waitforfunction"},"waitForFunction(pageFunction, options, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.waitfornavigation"},"waitForNavigation(options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.waitforselector"},"waitForSelector(selector, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.waitfortimeout"},"waitForTimeout(milliseconds)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Causes your script to wait for the given number of milliseconds.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.frame.waitforxpath"},"waitForXPath(xpath, options)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},2837:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=o(a),u=n,s=m["".concat(b,".").concat(u)]||m[u]||d[u]||l;return a?r.a.createElement(s,p(p({ref:t},i),{},{components:a})):r.a.createElement(s,p({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,b[1]=p;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);