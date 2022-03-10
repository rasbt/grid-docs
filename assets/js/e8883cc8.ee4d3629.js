"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3145],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,s(s({ref:t},d),{},{components:a})):r.createElement(f,s({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4672:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],i={description:"How to create datastores."},l="Create",c={unversionedId:"features/datastores/create",id:"features/datastores/create",title:"Create",description:"How to create datastores.",source:"@site/docs/features/datastores/create.md",sourceDirName:"features/datastores",slug:"/features/datastores/create",permalink:"/features/datastores/create",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/datastores/create.md",tags:[],version:"current",lastUpdatedAt:1646932679,formattedLastUpdatedAt:"3/10/2022",frontMatter:{description:"How to create datastores."},sidebar:"tutorialSidebar",previous:{title:"\u26a1Datastores",permalink:"/features/datastores/"},next:{title:"Create from a Session",permalink:"/features/datastores/create-from-a-session"}},d=[{value:"Small datasets",id:"small-datasets",children:[],level:2},{value:"Large datasets (1 GB+)",id:"large-datasets-1-gb",children:[],level:2},{value:"Datastores from .zip",id:"datastores-from-zip",children:[],level:2}],u={toc:d};function p(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create"},"Create"),(0,o.kt)("h2",{id:"small-datasets"},"Small datasets"),(0,o.kt)("p",null,"You can use the UI to create datastores for datasets smaller than 1GB (files or folder)."),(0,o.kt)("p",null,"Select the file or folder and click upload."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(310).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can still use the CLI for these datastores!"))),(0,o.kt)("h2",{id:"large-datasets-1-gb"},"Large datasets (1 GB+)"),(0,o.kt)("p",null,"For datasets larger than 1 GB, use the CLI."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have a datastore that is 1Gb+, we suggest creating an Interactive Session and uploading the datastore from there. Internet speed is much faster in Interactive Sessions, so upload times will be shorter."))),(0,o.kt)("p",null,"First, install the grid CLI and login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install lightning-grid --upgrade\ngrid login\n")),(0,o.kt)("p",null,"Next, use the datastores command to upload any folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create --source imagenet_folder --name imagenet\n")),(0,o.kt)("p",null,"Note that you will need at least as much free space as the size of your dataset on the disk hosting your home folder, for the internal preparation of the upload."),(0,o.kt)("p",null,"This method can work from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A laptop."),(0,o.kt)("li",{parentName:"ul"},"An interactive session."),(0,o.kt)("li",{parentName:"ul"},"Any machine with an internet connection and Grid installed."),(0,o.kt)("li",{parentName:"ul"},"A Corporate cluster."),(0,o.kt)("li",{parentName:"ul"},"An Academic cluster.")),(0,o.kt)("h2",{id:"datastores-from-zip"},"Datastores from .zip"),(0,o.kt)("p",null,"For any datasets from a .zip, .tar or tar.gz that DO NOT require any post-processing, feel free to use the Web UI."),(0,o.kt)("p",null,"The link will be downloaded, extracted and automatically mounted for you. You can use an interactive Session to verify for yourself."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5436).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can still use the CLI for these datastores!"))),(0,o.kt)("p",null,'Datastores go through a number of statuses such as optimizing, processing uploading. These are internal and a status of "succeeded" indicates that datastore is ready to be used.'),(0,o.kt)("p",null,"On the CLI, grid datastore command shows which Datastores are available to be used."))}p.isMDXComponent=!0},310:function(e,t,a){t.Z=a.p+"assets/images/ds_upload-a8d2254f80a929fbffcf18597604a088.gif"},5436:function(e,t,a){t.Z=a.p+"assets/images/zip_ds-8833ac452f666fc71bf7ade8c708c3a6.gif"}}]);