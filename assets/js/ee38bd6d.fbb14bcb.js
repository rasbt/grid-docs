"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[5042],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,u[1]=l;for(var o=2;o<a;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7466:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),u=["components"],l={title:"Failed Runs",sidebar_label:"Failed Runs"},s="Failed Runs",o={unversionedId:"features/runs/Analyzing Runs/failed-runs",id:"features/runs/Analyzing Runs/failed-runs",title:"Failed Runs",description:"Grid Run failures can happen during build or during experiment runtime.",source:"@site/docs/features/runs/2_Analyzing Runs/5_failed-runs.md",sourceDirName:"features/runs/2_Analyzing Runs",slug:"/features/runs/Analyzing Runs/failed-runs",permalink:"/features/runs/Analyzing Runs/failed-runs",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/2_Analyzing Runs/5_failed-runs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Failed Runs",sidebar_label:"Failed Runs"},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/features/runs/Analyzing Runs/metric-charts"},next:{title:"FAQ",permalink:"/features/runs/faq"}},c=[{value:"Build failures",id:"build-failures",children:[],level:2},{value:"Script Failures",id:"script-failures",children:[],level:2},{value:"Using the CLI to get logs",id:"using-the-cli-to-get-logs",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"failed-runs"},"Failed Runs"),(0,a.kt)("p",null,"Grid Run failures can happen during build or during experiment runtime. "),(0,a.kt)("h2",{id:"build-failures"},"Build failures"),(0,a.kt)("p",null,"To see build failures, view the build logs tab on the UI."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3125).Z})),(0,a.kt)("p",null,"Failures at this stage can happen because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependencies fail to install"),(0,a.kt)("li",{parentName:"ul"},"An action can fail"),(0,a.kt)("li",{parentName:"ul"},"Something goes wrong when executing your script")),(0,a.kt)("h2",{id:"script-failures"},"Script Failures"),(0,a.kt)("p",null,"If the build completes but your script has a failure (i.e.: a bug in the code that causes exception), you can view the Stdout logs for more information. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1958).Z})),(0,a.kt)("p",null,"Failures here can happen because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Passing the wrong script arguments"),(0,a.kt)("li",{parentName:"ul"},"Out of memory"),(0,a.kt)("li",{parentName:"ul"},"Issue accessing the data"),(0,a.kt)("li",{parentName:"ul"},"A bug in your script that throws an exception")),(0,a.kt)("h2",{id:"using-the-cli-to-get-logs"},"Using the CLI to get logs"),(0,a.kt)("p",null,"To view logs for an experiment use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"grid logs the-experiment-name\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you have additional questions about Runs, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/faq"},"FAQ"),". The section is periodically updated this with common questions from the Grid community."))))}d.isMDXComponent=!0},3125:function(e,t,n){t.Z=n.p+"assets/images/build_logs-467608fa185f53efc1d83860db637c71.gif"},1958:function(e,t,n){t.Z=n.p+"assets/images/stdout_logs-bc4cf38190719a7a1383598b04557ffa.gif"}}]);