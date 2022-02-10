"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3172],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],l={description:"Tutorial shows how to train self supervised learning model using Grid, PyTorch Lightning"},o="SIMCLR",p={unversionedId:"examples/self-supervised-learning-1/self-supervised-learning",id:"examples/self-supervised-learning-1/self-supervised-learning",title:"SIMCLR",description:"Tutorial shows how to train self supervised learning model using Grid, PyTorch Lightning",source:"@site/docs/examples/self-supervised-learning-1/self-supervised-learning.md",sourceDirName:"examples/self-supervised-learning-1",slug:"/examples/self-supervised-learning-1/self-supervised-learning",permalink:"/examples/self-supervised-learning-1/self-supervised-learning",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/examples/self-supervised-learning-1/self-supervised-learning.md",tags:[],version:"current",lastUpdatedAt:1644507787,formattedLastUpdatedAt:"2/10/2022",frontMatter:{description:"Tutorial shows how to train self supervised learning model using Grid, PyTorch Lightning"}},u=[{value:"Goal",id:"goal",children:[],level:2},{value:"Overview",id:"overview",children:[{value:"Dataset",id:"dataset",children:[],level:3},{value:"Model",id:"model",children:[],level:3}],level:2},{value:"Step 1: Start a new Run",id:"step-1-start-a-new-run",children:[],level:2},{value:"Step 2: Visualize the experiments",id:"step-2-visualize-the-experiments",children:[],level:2},{value:"Step 3: Download artifacts",id:"step-3-download-artifacts",children:[],level:2},{value:"Bonus: Run on CLI with 8 GPUs",id:"bonus-run-on-cli-with-8-gpus",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simclr"},"SIMCLR"),(0,a.kt)("h2",{id:"goal"},"Goal"),(0,a.kt)("p",null,"This example covers the Self supervised learning deep learning task."),(0,a.kt)("p",null,"Tutorial time: 5 minutes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start New Run with 1 GPU"),(0,a.kt)("li",{parentName:"ol"},"Visualize Experiments"),(0,a.kt)("li",{parentName:"ol"},"Download artifacts"),(0,a.kt)("li",{parentName:"ol"},"Update to run with 8 GPUs")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In Self supervised learning ","(","SSL",")",", input data is not provided with labels. Rather, input data is divided into parts where some parts are suppressed with a mask and then model is trained to predict the data that is missing. ",(0,a.kt)("a",{parentName:"p",href:"https://pytorch-lightning-bolts.readthedocs.io/en/latest/self_supervised_models.html"},"Self supervised "),"methods for image classification are becoming popular, this tutorial shows an example"),(0,a.kt)("p",null,"We will be using this repository: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gridai/lightning-simclr"},"https://github.com/gridai/lightning-simclr")," an implementation in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PyTorchLightning/pytorch-lightning"},"PyTorch Lightning "),"framework"),(0,a.kt)("h3",{id:"dataset"},"Dataset"),(0,a.kt)("p",null,"The dataset used is ",(0,a.kt)("a",{parentName:"p",href:"https://www.cs.toronto.edu/~kriz/cifar.html"},"CIFAR-10"),", collection of images in 10 different classes. However there is no need to upload data for this example, the repository includes functions to download"),(0,a.kt)("h3",{id:"model"},"Model"),(0,a.kt)("p",null,"A Simple Framework for Contrastive Learning of Visual Representations ","(",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2002.05709"},"SimCLR"),")"," is used for this example. If you are interested to see the code it is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gridai/lightning-simclr"},"here")),(0,a.kt)("h2",{id:"step-1-start-a-new-run"},"Step 1: Start a new Run"),(0,a.kt)("p",null,"Use the Web Interface, select New Run and choose this script: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gridai/lightning-simclr/blob/master/src/train.py"},"https://github.com/gridai/lightning-simclr/blob/master/src/train.py")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4702).Z})),(0,a.kt)("p",null,"Add script arguments to set batch size, number of workers etc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    --batch_size 256 \\\n    --num_workers 16 \\\n    --exclude_bn_bias \\\n    --max_epochs 800\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4185).Z})),(0,a.kt)("p",null,"Model starts to train."),(0,a.kt)("h2",{id:"step-2-visualize-the-experiments"},"Step 2: Visualize the experiments"),(0,a.kt)("p",null,"Visualize training on the Web interface, see metrics and download checkpoints from the run"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4210).Z})),(0,a.kt)("h2",{id:"step-3-download-artifacts"},"Step 3: Download artifacts"),(0,a.kt)("p",null,"Navigate to experiment details and download the artifacts"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6422).Z})),(0,a.kt)("h2",{id:"bonus-run-on-cli-with-8-gpus"},"Bonus: Run on CLI with 8 GPUs"),(0,a.kt)("p",null,"Run same example with 8 V100, notice how fast model trains"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"grid run \\\n    --instance_type 1_v100_16gb \\\n    --gpus 8 \\\n    src/train.py \\\n    --gpus 8 \\\n    --batch_size 256 \\\n    --num_workers 16 \\\n    --exclude_bn_bias \\\n    --max_epochs 800\n")))}d.isMDXComponent=!0},6422:function(e,t,n){t.Z=n.p+"assets/images/self-supervised-artifacts-371eb5ce568ca532bcb9e9a1924ff1b8.png"},4210:function(e,t,n){t.Z=n.p+"assets/images/self-supervised-metrics-fba98b310a7b9e797c553affa941525d.gif"},4702:function(e,t,n){t.Z=n.p+"assets/images/self-supervised-new-run-944451841be991d1833b28cf7884878a.png"},4185:function(e,t,n){t.Z=n.p+"assets/images/self-supervised-script-arguments-8b4a89d57fef9aa76c46b61d0820ec2d.png"}}]);