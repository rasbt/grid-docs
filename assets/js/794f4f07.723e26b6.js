"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3964],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(t),g=a,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var o=2;o<i;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4072:function(e,n,t){var r=t(7294);n.Z=function(e){return r.createElement("video",{width:"100%",height:"320",controls:!0},r.createElement("source",{src:e.src,type:"video/mp4"}))}},7853:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),p=t(4072),s=["components"],l={description:"Tutorial shows how to use Runs to train large models using PyTorch Lightning and Grid"},o="GPT 10B+ params (8 GPUs)",u={unversionedId:"examples/nlp/gpt-10b+-params-8-gpus",id:"examples/nlp/gpt-10b+-params-8-gpus",title:"GPT 10B+ params (8 GPUs)",description:"Tutorial shows how to use Runs to train large models using PyTorch Lightning and Grid",source:"@site/docs/examples/nlp/gpt-10b+-params-8-gpus.md",sourceDirName:"examples/nlp",slug:"/examples/nlp/gpt-10b+-params-8-gpus",permalink:"/examples/nlp/gpt-10b+-params-8-gpus",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/examples/nlp/gpt-10b+-params-8-gpus.md",tags:[],version:"current",lastUpdatedAt:1644507787,formattedLastUpdatedAt:"2/10/2022",frontMatter:{description:"Tutorial shows how to use Runs to train large models using PyTorch Lightning and Grid"}},c=[{value:"GPT",id:"gpt",children:[],level:2},{value:"Run via the UI",id:"run-via-the-ui",children:[],level:2},{value:"Run via the CLI",id:"run-via-the-cli",children:[],level:2},{value:"1.7B params",id:"17b-params",children:[],level:2},{value:"<strong>10B params</strong>",id:"10b-params",children:[],level:2},{value:"<strong>20B params</strong>",id:"20b-params",children:[],level:2}],m={toc:c};function g(e){var n=e.components,l=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gpt-10b-params-8-gpus"},"GPT 10B+ params (8 GPUs)"),(0,i.kt)("h2",{id:"gpt"},"GPT"),(0,i.kt)("p",null,"In this tutorial, we'll train the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/karpathy/minGPT"},"Min-GPT by Andrej Karpathy")," across 8 GPUs. This model uses PyTorch Lightning + Deepspeed to scale the model up."),(0,i.kt)("p",null,"This model was adapted by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeanNaren"},"Sean Naren")," to use PyTorch Lightning + Deepspeed."),(0,i.kt)("p",null,"Time: ",(0,i.kt)("strong",{parentName:"p"},"2 minutes")),(0,i.kt)(p.Z,{src:"https://grid-docs.s3.us-east-2.amazonaws.com/min_gpt.mp4",mdxType:"Video"}),(0,i.kt)("h2",{id:"run-via-the-ui"},"Run via the UI"),(0,i.kt)("p",null,"The tutorial is extremely simple..."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find the path of the file we want to train ","(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeanNaren/minGPT/blob/stage3/train.py"},"https://github.com/SeanNaren/minGPT/blob/stage3/train.py"),")"),(0,i.kt)("li",{parentName:"ol"},"Paste it into the run dialog on the UI")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8913).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose a machine with 8 GPUs ","(","and make sure you are using all 8 GPUs per experiment",")")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(7119).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Paste the script arguments")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--n_layer 15 \\\n--n_head 16 \\\n--n_embd 3072 \\\n--gpus 8 \\\n--precision 16 \\\n--batch_size 1\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(5797).Z})),(0,i.kt)("h2",{id:"run-via-the-cli"},"Run via the CLI"),(0,i.kt)("p",null,"Make sure you have the grid CLI installed and you've logged in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pip install lightning-grid\ngrid login\n")),(0,i.kt)("p",null,"First, clone the repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/SeanNaren/minGPT.git\ncd minGPT\n")),(0,i.kt)("p",null,"For 1.7 B params, run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run \\\n--instance_type 8_K80_12gb \\\n--gpus 8 \\\ntrain.py \\\n--n_layer 15 \\\n--n_head 16 \\\n--n_embd 3072 \\\n--gpus 8 \\\n--precision 16 \\\n--batch_size 1\n")),(0,i.kt)("h2",{id:"17b-params"},"1.7B params"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run \\\n--instance_type 8_K80_12gb \\\n--gpus 8 \\\ntrain.py \\\n--n_layer 15 \\\n--n_head 16 \\\n--n_embd 3072 \\\n--gpus 8 \\\n--precision 16 \\\n--batch_size 1\n")),(0,i.kt)("h2",{id:"10b-params"},(0,i.kt)("strong",{parentName:"h2"},"10B params")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run \\\n--instance_type 8_v100_32gb \\\n--gpus 8 \\\ntrain.py \\\n--n_layer 15 \\\n--n_head 16 \\\n--n_embd 3072 \\\n--gpus 8 \\\n--precision 16 \\\n--batch_size 1\n")),(0,i.kt)("h2",{id:"20b-params"},(0,i.kt)("strong",{parentName:"h2"},"20B params")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run \\\n--instance_type 8_v100_32gb \\\n--gpus 8 \\\ntrain.py \\\n--n_layer 25 \\\n--n_head 16 \\\n--n_embd 3072 \\\n--gpus 8 \\\n--precision 16 \\\n--batch_size 1\n")))}g.isMDXComponent=!0},7119:function(e,n,t){n.Z=t.p+"assets/images/gpt-compute-725a7bbe5be0556a93a8087f28865a23.png"},8913:function(e,n,t){n.Z=t.p+"assets/images/gpt-github-repo-5bb9a25b1a09828d563807bfcc419c5c.png"},5797:function(e,n,t){n.Z=t.p+"assets/images/gpt-script-arguments-adc19081e52681b7d5bdee352d625958.png"}}]);