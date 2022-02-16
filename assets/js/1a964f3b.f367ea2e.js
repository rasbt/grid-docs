"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[255],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4332:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var n=r(7462),i=r(3366),o=r(7294),a=r(3905),c=r(2859),l=function(e){return o.createElement("div",{className:"termy"},o.createElement(c.Z,null),e.children)},s=["components"],u={sidebar_position:1,sidebar_label:"Getting started"},d="Introduction To the CLI",p={unversionedId:"cli/getting_started",id:"cli/getting_started",title:"Introduction To the CLI",description:"\u26a1 Grid comes with a fully-featured Command Line Interface (CLI). Provides a 1:1 matching experience to the Web UI.",source:"@site/docs/cli/getting_started.md",sourceDirName:"cli",slug:"/cli/getting_started",permalink:"/cli/getting_started",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/cli/getting_started.md",tags:[],version:"current",lastUpdatedAt:1645053639,formattedLastUpdatedAt:"2/16/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting started"}},f=[{value:"How to install",id:"how-to-install",children:[],level:2},{value:"Everything starts by logging in",id:"everything-starts-by-logging-in",children:[],level:2}],g={toc:f};function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-the-cli"},"Introduction To the CLI"),(0,a.kt)("p",null,"\u26a1 Grid comes with a fully-featured Command Line Interface (CLI). Provides a 1:1 matching experience to the Web UI."),(0,a.kt)("h2",{id:"how-to-install"},"How to install"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO"),": actually write this"),(0,a.kt)("h2",{id:"everything-starts-by-logging-in"},"Everything starts by logging in"),(0,a.kt)("p",null,"Create your account at ",(0,a.kt)("a",{parentName:"p",href:"https://platform.grid.ai"},"https://platform.grid.ai")," and login to the SDK with your username."),(0,a.kt)(l,{mdxType:"Termy"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"main.sh","main.sh":!0},"$ grid login\n\nPlease provide your Grid or GitHub username: foo-user\n\nPlease provide your Grid API key: abc-def-ghi-jkl\n\nLogin successful. Welcome to Grid.\n"))))}m.isMDXComponent=!0}}]);