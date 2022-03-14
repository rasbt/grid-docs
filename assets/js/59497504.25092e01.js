"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[9281],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},i),{},{components:r})):n.createElement(m,s({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},284:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return i},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],l={},u="Create from a cluster",c={unversionedId:"features/datastores/create-from-a-cluster",id:"features/datastores/create-from-a-cluster",title:"Create from a cluster",description:"Upload from a cluster",source:"@site/docs/features/datastores/create-from-a-cluster.md",sourceDirName:"features/datastores",slug:"/features/datastores/create-from-a-cluster",permalink:"/features/datastores/create-from-a-cluster",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/datastores/create-from-a-cluster.md",tags:[],version:"current",lastUpdatedAt:1647291111,formattedLastUpdatedAt:"3/14/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create from a Session",permalink:"/features/datastores/create-from-a-session"},next:{title:"Periodic upload",permalink:"/features/datastores/periodic-upload"}},i=[{value:"Upload from a cluster",id:"upload-from-a-cluster",children:[],level:2}],p={toc:i};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-from-a-cluster"},"Create from a cluster"),(0,o.kt)("h2",{id:"upload-from-a-cluster"},"Upload from a cluster"),(0,o.kt)("p",null,"Use these instructions to upload from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Corporate cluster."),(0,o.kt)("li",{parentName:"ul"},"Academic cluster.")),(0,o.kt)("p",null,"First, start screen on the jump node (to run jobs in the background)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"screen -S upload\n")),(0,o.kt)("p",null,"If your jump node allows a memory-intensive process, then skip this step. Otherwise, request an interactive machine. Here's an example using SLURM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"srun --qos=batch --mem-per-cpu=10000 --ntasks=4 --time=12:00:00 --pty bash\n")),(0,o.kt)("p",null,"Once the job starts, install and log into Grid (get your username and ssh keys from the ",(0,o.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/settings"},"settings page"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# install\npip install lightning-grid --upgrade\n\n# login\ngrid login --username YOUR_USERNAME --key YOUR_KEY\n")),(0,o.kt)("p",null,"Next, use the Datastores command to upload any folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create imagenet_folder --name imagenet\n")),(0,o.kt)("p",null,"You can safely close your ssh connection to the cluster (the screen will keep things running in the background)."))}d.isMDXComponent=!0}}]);