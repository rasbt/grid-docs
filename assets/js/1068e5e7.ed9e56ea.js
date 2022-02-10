"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[5926],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9334:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],u={description:"Use this to save money on runs"},s="Lowering costs (BETA)",c={unversionedId:"products/runs/interruptible-machines",id:"products/runs/interruptible-machines",title:"Lowering costs (BETA)",description:"Use this to save money on runs",source:"@site/docs/products/runs/interruptible-machines.md",sourceDirName:"products/runs",slug:"/products/runs/interruptible-machines",permalink:"/products/runs/interruptible-machines",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/products/runs/interruptible-machines.md",tags:[],version:"current",lastUpdatedAt:1644507787,formattedLastUpdatedAt:"2/10/2022",frontMatter:{description:"Use this to save money on runs"},sidebar:"tutorialSidebar",previous:{title:"Machines",permalink:"/products/runs/machines"},next:{title:"\ud83c\udd95 Auto Resume Experiments",permalink:"/products/runs/auto-resume-experiments"}},l=[{value:"Interruptible machines",id:"interruptible-machines",children:[{value:"Enable via the UI",id:"enable-via-the-ui",children:[],level:3},{value:"Enable via the CLI",id:"enable-via-the-cli",children:[],level:3}],level:2},{value:"Prepare code for interruptible",id:"prepare-code-for-interruptible",children:[],level:2},{value:"Restarting interrupted jobs",id:"restarting-interrupted-jobs",children:[],level:2}],p={toc:l};function d(e){var t=e.components,u=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lowering-costs-beta"},"Lowering costs (BETA)"),(0,a.kt)("h2",{id:"interruptible-machines"},"Interruptible machines"),(0,a.kt)("p",null,"Cloud machines are normally expensive. However, if your job can support being interrupted at any time (ie: fine tuning, model that can be restarted) then you could use the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"spot instances"))," feature in Grid."),(0,a.kt)("h3",{id:"enable-via-the-ui"},"Enable via the UI"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1684).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2847).Z})),(0,a.kt)("h3",{id:"enable-via-the-cli"},"Enable via the CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --use_spot pl_mnist.py\n")),(0,a.kt)("h2",{id:"prepare-code-for-interruptible"},"Prepare code for interruptible"),(0,a.kt)("p",null,"To take advantage of interruptible machines, make sure your code does a few things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You are saving checkpoints or any state you need. Grid automatically picks these up into your artifacts."),(0,a.kt)("li",{parentName:"ol"},"Make sure your code can be restarted from a checkpoint or state file.")),(0,a.kt)("h2",{id:"restarting-interrupted-jobs"},"Restarting interrupted jobs"),(0,a.kt)("p",null,"Once the machine is interrupted, your job on Grid will stop. If you want to continue running your code do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to your experiment artifacts."),(0,a.kt)("li",{parentName:"ol"},"copy the link to the state files (or checkpoint) that you need."),(0,a.kt)("li",{parentName:"ol"},"Resubmit the job with the path to that file.")),(0,a.kt)("p",null,"For example, assume your script has an argument called ",(0,a.kt)("strong",{parentName:"p"},"--ck_path")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --use_spot main.py --ck_path https://grid.ai/url/to/checkpoint.ckpt\n")))}d.isMDXComponent=!0},1684:function(e,t,r){t.Z=r.p+"assets/images/spot-2b35f4c22b8f4756c30b37a6107e53da.gif"},2847:function(e,t,r){t.Z=r.p+"assets/images/usespot-27ab84c4438fc5420f159306f72c4866.png"}}]);