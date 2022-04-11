"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[1567],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),f=o,y=p["".concat(l,".").concat(f)]||p[f]||c[f]||n;return a?r.createElement(y,i(i({ref:t},u),{},{components:a})):r.createElement(y,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5373:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],s={sidebar_position:1.5,title:"FAQ",sidebar_label:"FAQ"},l="FAQ",d={unversionedId:"features/datastores/datastore-faq",id:"features/datastores/datastore-faq",title:"FAQ",description:"Data is private",source:"@site/docs/features/datastores/datastore-faq.md",sourceDirName:"features/datastores",slug:"/features/datastores/datastore-faq",permalink:"/features/datastores/datastore-faq",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/datastores/datastore-faq.md",tags:[],version:"current",lastUpdatedAt:1649678463,formattedLastUpdatedAt:"4/11/2022",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5,title:"FAQ",sidebar_label:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Periodic Upload",permalink:"/features/datastores/periodic-upload"},next:{title:"Overview",permalink:"/features/sessions/"}},u=[{value:"Data is private",id:"data-is-private",children:[],level:2},{value:"Data retention",id:"data-retention",children:[],level:2},{value:"Public vs private data",id:"public-vs-private-data",children:[],level:2},{value:"Does Grid charge for Data Storage?",id:"does-grid-charge-for-data-storage",children:[],level:2},{value:"Does Grid have a limit on Datastore size?",id:"does-grid-have-a-limit-on-datastore-size",children:[],level:2},{value:"Where does Grid mount my Datastore in a Session or Run?",id:"where-does-grid-mount-my-datastore-in-a-session-or-run",children:[],level:2},{value:"Is there a way to see what files are in a datastore?",id:"is-there-a-way-to-see-what-files-are-in-a-datastore",children:[],level:2},{value:"How does Grid store/access my data?",id:"how-does-grid-storeaccess-my-data",children:[],level:2}],c={toc:u};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h2",{id:"data-is-private"},"Data is private"),(0,n.kt)("p",null,"Any datastore you upload to Grid can only be accessed ",(0,n.kt)("strong",{parentName:"p"},"by you"),". Grid does not look at or manipulate your data in anyway."),(0,n.kt)("h2",{id:"data-retention"},"Data retention"),(0,n.kt)("p",null,"If you delete your account, data will be deleted immediately."),(0,n.kt)("h2",{id:"public-vs-private-data"},"Public vs private data"),(0,n.kt)("p",null,"When you create a datastore, you certify that you have the rights to that data. Only you have access to your datastore. It's up to you to make sure you have the rights to access that data."),(0,n.kt)("h2",{id:"does-grid-charge-for-data-storage"},"Does Grid charge for Data Storage?"),(0,n.kt)("p",null,"Grid does not charge for storing data. However, there is a limit of 25 datastores."),(0,n.kt)("h2",{id:"does-grid-have-a-limit-on-datastore-size"},"Does Grid have a limit on Datastore size?"),(0,n.kt)("p",null,"Yes Grid DataStore max size is 1.5 TB. For security reasons, we only allow you to upload data for 12 hours continuously. If your data is too big to upload in a 12 hour period, it will stop uploading. Initiating ",(0,n.kt)("inlineCode",{parentName:"p"},"grid datastore create <args...>")," again will resume the upload."),(0,n.kt)("h2",{id:"where-does-grid-mount-my-datastore-in-a-session-or-run"},"Where does Grid mount my Datastore in a Session or Run?"),(0,n.kt)("p",null,"By default Grid mounts datastores to ",(0,n.kt)("inlineCode",{parentName:"p"},"/datastores"),". This can be customized via cli with the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--datastore_mount_dir")," arugment."),(0,n.kt)("h2",{id:"is-there-a-way-to-see-what-files-are-in-a-datastore"},"Is there a way to see what files are in a datastore?"),(0,n.kt)("p",null,"Create an interactive session with the datastore mounted, then you will be able to browse the data including folders and files using JupyterLab or SSH"),(0,n.kt)("h2",{id:"how-does-grid-storeaccess-my-data"},"How does Grid store/access my data?"),(0,n.kt)("p",null,"Grid will have access to your account data for operational purposes. If we do need access to your account for debugging purposes, we will notify you."),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{className:"text-align-left"},"Data type"),(0,n.kt)("th",{className:"text-align-left"},"Grid Access"),(0,n.kt)("th",{className:"text-align-left"},"Storage"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{className:"text-align-left"},"Datasets"),(0,n.kt)("td",{className:"text-align-left"},(0,n.kt)("p",null,"Only your account can access your data."),(0,n.kt)("p",null,"Grid and its service providers only access your data for operational purposes, including providing the services and support to you.")),(0,n.kt)("td",{className:"text-align-left"},"S3")),(0,n.kt)("tr",null,(0,n.kt)("td",{className:"text-align-left"},"Artifacts"),(0,n.kt)("td",{className:"text-align-left"},"Grid only reads metadata."),(0,n.kt)("td",{className:"text-align-left"},"S3")),(0,n.kt)("tr",null,(0,n.kt)("td",{className:"text-align-left"},"Metadata"),(0,n.kt)("td",{className:"text-align-left"},"Information about your jobs (no code, no data)."),(0,n.kt)("td",{className:"text-align-left"},"Database")))))}p.isMDXComponent=!0}}]);