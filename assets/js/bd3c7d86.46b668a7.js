"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3159],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=i,h=g["".concat(p,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5609:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return g}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={description:"Run PyTorch Lightning scripts in Grid"},p="Running PyTorch Lightning",c={unversionedId:"examples/frameworks/running-pytorch-lightning",id:"examples/frameworks/running-pytorch-lightning",title:"Running PyTorch Lightning",description:"Run PyTorch Lightning scripts in Grid",source:"@site/docs/examples/frameworks/running-pytorch-lightning.md",sourceDirName:"examples/frameworks",slug:"/examples/frameworks/running-pytorch-lightning",permalink:"/examples/frameworks/running-pytorch-lightning",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/examples/frameworks/running-pytorch-lightning.md",tags:[],version:"current",lastUpdatedAt:1644507787,formattedLastUpdatedAt:"2/10/2022",frontMatter:{description:"Run PyTorch Lightning scripts in Grid"},sidebar:"tutorialSidebar",previous:{title:"Stop experiments",permalink:"/products/mobile/stop-experiments"},next:{title:"Running Tensorflow or Keras",permalink:"/examples/frameworks/running-tensorflow-or-keras"}},l=[{value:"Example",id:"example",children:[],level:2}],u={toc:l};function g(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-pytorch-lightning"},"Running PyTorch Lightning"),(0,a.kt)("p",null,"Running ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PyTorchLightning/pytorch-lightning"},"PyTorch Lightning")," scripts and  ",(0,a.kt)("a",{parentName:"p",href:"https://www.grid.ai/what-are-hyperparameter-sweeps-and-why-are-they-important-to-production-machine-learning"},"hyper parameter sweeps")," in Grid is easy using CLI or the Web UI. Grid and Lightning are optimized to work together!"),(0,a.kt)("p",null,"Both CPU and GPU instances are supported with all necessary system drivers pre-installed and set up, so you can take advantage of multiprocessing and compute acceleration hardware with no additional configuration."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In the Web UI Dashboard view, click on Hello CIFAR-10 demo, this invokes the New Run dialog pre-populated with this script: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gridai/hello_mnists/blob/master/pl_cifar10.py"},"https://github.com/gridai/hello_mnists/blob/master/pl_cifar10.py")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(548).Z})),(0,a.kt)("p",null,'Choose the machines you want to run the program on, the hyper parameter strategy, optionally any script arguments such as learning rate specified as numpy distribution: --learning_rate "uniform(1e-5, 1e-3, 8)" and Start Run'),(0,a.kt)("p",null,"As the experiments start running, view the metrics and artifacts as well as invoke Tensorboard in the Runs view"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3237).Z})),(0,a.kt)("p",null,"If using CLI is your preference, you can follow the CLI ",(0,a.kt)("a",{parentName:"p",href:"/start-here/typical-workflow-cli-user"},"tutorial ")))}g.isMDXComponent=!0},548:function(e,t,n){t.Z=n.p+"assets/images/grid-dashboard-76208c316251e7cee4635798dba3e8d2.png"},3237:function(e,t,n){t.Z=n.p+"assets/images/lightning-metrics-0a8b760caa36e8880d5fe3014660d550.png"}}]);