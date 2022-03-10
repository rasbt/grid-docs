"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[427],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={description:"Distributed (Multi node) training is a method of scaling models and data to multiple devices for parallel execution"},s="Multi-node training (Beta)",u={unversionedId:"features/runs/multi-node",id:"features/runs/multi-node",title:"Multi-node training (Beta)",description:"Distributed (Multi node) training is a method of scaling models and data to multiple devices for parallel execution",source:"@site/docs/features/runs/multi-node.md",sourceDirName:"features/runs",slug:"/features/runs/multi-node",permalink:"/features/runs/multi-node",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/multi-node.md",tags:[],version:"current",lastUpdatedAt:1646932679,formattedLastUpdatedAt:"3/10/2022",frontMatter:{description:"Distributed (Multi node) training is a method of scaling models and data to multiple devices for parallel execution"},sidebar:"tutorialSidebar",previous:{title:"Running Experiments With a Dockerfile",permalink:"/features/runs/running-experiments-with-a-dockerfile"},next:{title:"FAQ",permalink:"/features/runs/faq"}},c=[{value:"When should you use multi-node?",id:"when-should-you-use-multi-node",children:[],level:2},{value:"Using CLI",id:"using-cli",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multi-node-training-beta"},"Multi-node training (Beta)"),(0,a.kt)("p",null,"This is a currently an experimental feature. We welcome the community to try it out and provide feedback to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@grid.ai."},"support@grid.ai.")," Multi-node or distributed training allows you to train a single model across more than one machine."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Note:")," At this time multi-node training is only supported for the Lightning framework."))),(0,a.kt)("p",null,"Early access to multi-node is now available, send us a message on community slack: gridai-community.slack.com or email at ",(0,a.kt)("a",{parentName:"p",href:"mailto:product@grid.ai"},"product@grid.ai")," with feedback"),(0,a.kt)("p",null,"We are continuing to improve this beta feature and feedback is greatly appreciated! Grid support for distributed training is for torch-based frameworks only at this time. If 4 GPUs are requested, then 4 images with 2 CPUs and 1 GPU each will run in a distributed manner."),(0,a.kt)("h2",{id:"when-should-you-use-multi-node"},"When should you use multi-node?"),(0,a.kt)("p",null,"Multi-node training allows you to run an experiment across multiple machines, therefore leveraging more GPUs that a single machine can offer."),(0,a.kt)("p",null,"However, running multi-node training doesn't always make your experiment run faster, as there is overhead of communicating and synchronizing between all the nodes to ensure a correct training output."),(0,a.kt)("p",null,"We recommend you try out multi-node with a few epochs and see if the speed up is there before running a full training."),(0,a.kt)("h2",{id:"using-cli"},"Using CLI"),(0,a.kt)("p",null,"Starting a multi node run in CLI is the same as how you run any other script, Grid calculates number of gpus and nodes for you. simply specify how many GPUs you will use per experiment."),(0,a.kt)("p",null,"For example --gpus 8 --instance","_","type 4","_","v100","_","32gb will automatically trigger multi node training"),(0,a.kt)("p",null,"Prior to being able to run the below you will need to clone a fork of the Pytorch-lightning repo (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/filintod/pytorch-lightning"},"https://github.com/filintod/pytorch-lightning"),"). For convenience the code to do so is below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git clone https://github.com/PyTorchLightning/pytorch-lightning.git\ncd pytorch_lightning\nprintf "torchvision==0.11.1 \\njsonargparse==4.1.0" >> requirements.txt\n')),(0,a.kt)("p",null,"Example of 1 node 1 GPU :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grid run \\\n--name single-node-test \\\n--strategy grid_search \\\n--instance_type g4dn.xlarge \\\n--framework lightning \\\n--gpus 1 \\\npl_examples/basic_examples/mnist_examples/image_classifier_5_lightning_datamodule.py \\\n--trainer.gpus 1 \\\n--trainer.strategy 'ddp' \\\n--trainer.max_epochs 50\n")),(0,a.kt)("p",null,"Example of 4 nodes 4 GPUs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grid run \\\n--name 4-node-test \\\n--strategy grid_search \\\n--instance_type g4dn.xlarge \\\n--framework lightning \\\n--gpus 4 \\\npl_examples/basic_examples/mnist_examples/image_classifier_5_lightning_datamodule.py \\\n--trainer.gpus 4 \\\n--trainer.strategy 'ddp' \\\n--trainer.max_epochs 50\n")),(0,a.kt)("p",null,"The results can be viewed in the same fashion as grid runs."))}p.isMDXComponent=!0}}]);