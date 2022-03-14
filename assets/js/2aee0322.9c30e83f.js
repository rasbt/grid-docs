"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[9180],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7074:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],l={description:"Sets the cluster context for the user."},a="Setting Cluster Contexts",u={unversionedId:"platform/custom-cloud-credentials/grid-cluster-context",id:"platform/custom-cloud-credentials/grid-cluster-context",title:"Setting Cluster Contexts",description:"Sets the cluster context for the user.",source:"@site/docs/platform/custom-cloud-credentials/grid-cluster-context.md",sourceDirName:"platform/custom-cloud-credentials",slug:"/platform/custom-cloud-credentials/grid-cluster-context",permalink:"/platform/custom-cloud-credentials/grid-cluster-context",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/custom-cloud-credentials/grid-cluster-context.md",tags:[],version:"current",lastUpdatedAt:1647291111,formattedLastUpdatedAt:"3/14/2022",frontMatter:{description:"Sets the cluster context for the user."},sidebar:"tutorialSidebar",previous:{title:"adding-custom-cloud-credentials",permalink:"/platform/custom-cloud-credentials/adding-custom-cloud-credentials"},next:{title:"Troubleshooting Bring Your Own Cluster (BYOC)",permalink:"/platform/custom-cloud-credentials/troubleshooting"}},s=[],d={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"setting-cluster-contexts"},"Setting Cluster Contexts"),(0,c.kt)("p",null,"With multi-cluster availability, if you are working against a particular cluster, it's easier to set the\ncluster context so all your CLI actions (including creation of a resource such as Run or Session) are going\nagainst that cluster. Apart from the easiness this command brings, it also help you avoid mistakes such\nas scheduling to a wrong cluster.\n*Please Note: This feature will evolve to include more elaborate cluster management in the near-term future."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"$ grid user set-cluster-context <cluster-name>\n")),(0,c.kt)("p",null,"Note that  By default, the cluster context is set to the global cluster. You can find what's the currently\nset cluster context by the ",(0,c.kt)("inlineCode",{parentName:"p"},"grid user"),"command which should print the user information along with the current\ncontext into the terminal. Also, For finding the cluster name, you  can use ",(0,c.kt)("inlineCode",{parentName:"p"},"grid cluster")," to list all the\navailable clusters"),(0,c.kt)("p",null,"If you want to schedule resources on a cluster which is not your cluster context, you can use the ",(0,c.kt)("inlineCode",{parentName:"p"},"--cluster")," argument\ninto all the creation commands."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"grid run --cluster <cluster name>\ngrid session create --cluster <cluster name>\n")),(0,c.kt)("p",null,"Or if you're using config file set the ",(0,c.kt)("inlineCode",{parentName:"p"},".compute.provider.cluster")," field to the cluster name you've just provisioned. Note\nthat, only cluster context will enable you to view the resources in a desired cluster. Other approaches are only for helping\nin creation."))}p.isMDXComponent=!0}}]);