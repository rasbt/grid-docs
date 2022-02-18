"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[2196],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3665:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={description:"Frequently asked questions about Sessions"},u="FAQ",c={unversionedId:"features/sessions/faq",id:"features/sessions/faq",title:"FAQ",description:"Frequently asked questions about Sessions",source:"@site/docs/features/sessions/faq.md",sourceDirName:"features/sessions",slug:"/features/sessions/faq",permalink:"/features/sessions/faq",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/sessions/faq.md",tags:[],version:"current",lastUpdatedAt:1645225840,formattedLastUpdatedAt:"2/18/2022",frontMatter:{description:"Frequently asked questions about Sessions"},sidebar:"tutorialSidebar",previous:{title:"Julia and R languages in Sessions",permalink:"/features/sessions/using-julia-and-r-languages-in-sessions"},next:{title:"\u26a1Runs",permalink:"/features/runs/"}},p=[{value:"Why can&#39;t I push to my remote repository?",id:"why-cant-i-push-to-my-remote-repository",children:[],level:2},{value:"&quot;I can&#39;t access my private Github repository&quot;",id:"i-cant-access-my-private-github-repository",children:[],level:2}],l={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"why-cant-i-push-to-my-remote-repository"},"Why can't I push to my remote repository?"),(0,o.kt)("p",null,"If you're having trouble pushing to the repo the recommended solution is to clone the repo via https and try pushing again. "),(0,o.kt)("h2",{id:"i-cant-access-my-private-github-repository"},'"I can\'t access my private Github repository"'),(0,o.kt)("p",null,"If you're having trouble with access to private Github repos, try the following:"," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you're logged into Grid with Google and have not linked a Github account already, ",(0,o.kt)("strong",{parentName:"p"},"then link your Github account to Grid in the Grid UI in Settings")," > ",(0,o.kt)("strong",{parentName:"p"},"Integrations.")),(0,o.kt)("hr",{parentName:"li"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you've already linked your Github account to Grid, but have not granted private repo access to Grid, then ",(0,o.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/sessions/github-login#access-private-github-repos"},"grant private repo access to Github in your Grid Settings.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure to ",(0,o.kt)("strong",{parentName:"p"},"log out and log back in after granting access.")),(0,o.kt)("hr",{parentName:"li"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you're having trouble accessing an organization repo, then make sure to also ",(0,o.kt)("strong",{parentName:"p"},"grant organization access when granting private repo access in the Grid settings.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(8265).Z})))),(0,o.kt)("p",null,"In some cases, you may need to approve the application in Github. Follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization"},"these instructions")," on how to do that, if necessary."," "))}d.isMDXComponent=!0},8265:function(e,t,r){t.Z=r.p+"assets/images/org_access-8239d6536ddd412c91fb759e4e052b06.png"}}]);