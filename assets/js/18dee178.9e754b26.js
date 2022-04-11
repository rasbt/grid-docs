"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[582],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="Using YAML",l={unversionedId:"features/runs/yaml-configs/yaml-api",id:"features/runs/yaml-configs/yaml-api",title:"Using YAML",description:"In addition to CLI parameters, Grid supports the use of YML files so you don't have to pass in many parameters in all occasions. If you don't change compute parameters often, we suggest you create a Grid config file and use that instead.",source:"@site/docs/features/runs/17_yaml-configs/2_yaml-api.md",sourceDirName:"features/runs/17_yaml-configs",slug:"/features/runs/yaml-configs/yaml-api",permalink:"/features/runs/yaml-configs/yaml-api",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/17_yaml-configs/2_yaml-api.md",tags:[],version:"current",lastUpdatedAt:1649678463,formattedLastUpdatedAt:"4/11/2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"YAML configs",permalink:"/features/runs/yaml-configs/README"},next:{title:"FAQ",permalink:"/features/runs/faq"}},u=[{value:"Grid Spec Overview",id:"grid-spec-overview",children:[],level:2},{value:"Creating Runs With a Config File",id:"creating-runs-with-a-config-file",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-yaml"},"Using YAML"),(0,i.kt)("p",null,"In addition to CLI parameters, Grid supports the use of YML files so you don't have to pass in many parameters in all occasions. If you don't change compute parameters often, we suggest you create a Grid config file and use that instead."),(0,i.kt)("h2",{id:"grid-spec-overview"},"Grid Spec Overview"),(0,i.kt)("p",null,"The following YML file contains a commented version of every YML key. You need to provide these keys when writing a config file and change the properties to what you need."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use either ",(0,i.kt)("a",{parentName:"p",href:"/platform/Custom%20Cloud%20Credentials/grid-cluster-context"},"cluster context")," or make sure to place your cluster ID in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster")," field, replacing the ",(0,i.kt)("strong",{parentName:"p"},"XXXXXX")," placeholder."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'# Main compute configuration.\ncompute:\n\n  # Add cloud configuration here.\n  provider:\n\n    cluster: XXXXXX           # Cluster ID\n\n  # Training configuration.\n  train:\n\n    cpus: 1                       # Number of CPUs\n    gpus: 0                       # Number of GPUs\n    instance: t2.xlarge           # AWS instance type\n    datastore_name: null          # Datastore name to use\n    datastore_version: null       # Datastore version number\n    datastore_mount_dir: null     # Where to mount the datastore\n    use_spot: false               # If we should use spot instances\n    framework: "lightning"        # Which framework to use\n\n    # Pass in environment variables\n    environment:\n      MY_ENVIRONMENT_VARIABLE: "example"\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Flags in grid YML files have a 1-to-1 mapping with ",(0,i.kt)("inlineCode",{parentName:"p"},"grid run")," flags"))),(0,i.kt)("p",null,"In addition to the parameters above, you can also run arbitrary commands on different stages of you training operation."),(0,i.kt)("h2",{id:"creating-runs-with-a-config-file"},"Creating Runs With a Config File"),(0,i.kt)("p",null,"You can create a Run with a config file instead of passing CLI arguments. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run --config my_config.yml script.py\n")))}d.isMDXComponent=!0}}]);