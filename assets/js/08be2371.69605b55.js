"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[7121],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5405:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={description:"Create a low-latency, highly-scalable auto-versioned dataset."},s="grid datastore",d={unversionedId:"products/global-cli-configs/cli-api/grid-datastores",id:"products/global-cli-configs/cli-api/grid-datastores",title:"grid datastore",description:"Create a low-latency, highly-scalable auto-versioned dataset.",source:"@site/docs/products/global-cli-configs/cli-api/grid-datastores.md",sourceDirName:"products/global-cli-configs/cli-api",slug:"/products/global-cli-configs/cli-api/grid-datastores",permalink:"/products/global-cli-configs/cli-api/grid-datastores",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/products/global-cli-configs/cli-api/grid-datastores.md",tags:[],version:"current",lastUpdatedAt:1644507787,formattedLastUpdatedAt:"2/10/2022",frontMatter:{description:"Create a low-latency, highly-scalable auto-versioned dataset."}},c=[{value:"create",id:"create",children:[{value:"--source",id:"--source",children:[],level:3},{value:"<strong>--name</strong>",id:"--name",children:[],level:3},{value:"<strong>--grid_credential</strong>",id:"--grid_credential",children:[],level:3},{value:"<strong>--compression</strong>",id:"--compression",children:[],level:3}],level:2},{value:"delete",id:"delete",children:[{value:"--name",id:"--name-1",children:[],level:3},{value:"<strong>--version</strong>",id:"--version",children:[],level:3}],level:2},{value:"list",id:"list",children:[],level:2},{value:"resume",id:"resume",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grid-datastore"},"grid datastore"),(0,o.kt)("p",null,"To create a low-latency, auto-versioned dataset, create a datastore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create --source ./my_dataset --name my_datastore_name\n")),(0,o.kt)("p",null,"Attach a datastore into a Run or Session with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid run --datastore_name my_datastore_name \\\n           --datastore_version 1 \\\n           my_script.py\n           --my_data /opt/datastore\n")),(0,o.kt)("h2",{id:"create"},"create"),(0,o.kt)("p",null,"Creates a datastore. Datastores are directories that are compressed into and mounted into your experiment environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create --source path/to/data --name datastore_name\n")),(0,o.kt)("h3",{id:"--source"},"--source"),(0,o.kt)("p",null,"Source directory you want to create a datastore from. This directory can contain multiple files and multiple directories."),(0,o.kt)("h3",{id:"--name"},(0,o.kt)("strong",{parentName:"h3"},"--name")),(0,o.kt)("p",null,"Name of the dataset. It's name work as a unique ID."),(0,o.kt)("h3",{id:"--grid_credential"},(0,o.kt)("strong",{parentName:"h3"},"--grid_credential")),(0,o.kt)("p",null,"Cloud credential ID to use."),(0,o.kt)("h3",{id:"--compression"},(0,o.kt)("strong",{parentName:"h3"},"--compression")),(0,o.kt)("p",null,"Compresses datastores with GZIP when flag is passed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create \\\n    --source path/to/data \\\n    --name datastore_name \\\n    --compression\n")),(0,o.kt)("h2",{id:"delete"},"delete"),(0,o.kt)("p",null,"Deletes an existing datastore."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore delete --name my_datastore --version x\n")),(0,o.kt)("h3",{id:"--name-1"},"--name"),(0,o.kt)("p",null,"Name of datastore to delete. You will also need to supply a ",(0,o.kt)("inlineCode",{parentName:"p"},"--version"),"."),(0,o.kt)("h3",{id:"--version"},(0,o.kt)("strong",{parentName:"h3"},"--version")),(0,o.kt)("p",null,"Version of the datastore to delete. You will also need to supply a ",(0,o.kt)("inlineCode",{parentName:"p"},"--name"),"."),(0,o.kt)("h2",{id:"list"},"list"),(0,o.kt)("p",null,"Lists all available datastores."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore list\n")),(0,o.kt)("h2",{id:"resume"},"resume"),(0,o.kt)("p",null,"Resumes uploading a datastore"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"grid datastore command lists all available datastores"))))}u.isMDXComponent=!0}}]);