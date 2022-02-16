"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[5412],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8365:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={description:"Tutorial shows how to train 3D Image Classification Models using the Keras API in the TensorFlow 2.2.2 Library and the MosMedData CT Scan Dataset."},l="MosMedData 3D Image Classification",d={unversionedId:"examples/vision/mosmeddata-3d-image-classification",id:"examples/vision/mosmeddata-3d-image-classification",title:"MosMedData 3D Image Classification",description:"Tutorial shows how to train 3D Image Classification Models using the Keras API in the TensorFlow 2.2.2 Library and the MosMedData CT Scan Dataset.",source:"@site/docs/examples/vision/mosmeddata-3d-image-classification.md",sourceDirName:"examples/vision",slug:"/examples/vision/mosmeddata-3d-image-classification",permalink:"/examples/vision/mosmeddata-3d-image-classification",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/examples/vision/mosmeddata-3d-image-classification.md",tags:[],version:"current",lastUpdatedAt:1645053639,formattedLastUpdatedAt:"2/16/2022",frontMatter:{description:"Tutorial shows how to train 3D Image Classification Models using the Keras API in the TensorFlow 2.2.2 Library and the MosMedData CT Scan Dataset."}},c=[{value:'Goal <a id="goal"></a>',id:"goal-",children:[],level:2},{value:'Tutorial time <a id="tutorial-time"></a>',id:"tutorial-time-",children:[],level:2},{value:'Task: 3D Image Classification <a id="task-3d-image-classification"></a>',id:"task-3d-image-classification-",children:[],level:2},{value:'Step 2: Start a RUN from the CLI <a id="step-2-start-a-run"></a>',id:"step-2-start-a-run-from-the-cli-",children:[{value:"1. Install and Sign into the Grid CLI",id:"1-install-and-sign-into-the-grid-cli",children:[],level:3},{value:"2. Clone the repo",id:"2-clone-the-repo",children:[],level:3},{value:"3. Use the CLI to start a Grid Run",id:"3-use-the-cli-to-start-a-grid-run",children:[],level:3}],level:2},{value:'Step 3: View Model Run Metrics and Artifacts in Grid Web <a id="step-3-use-the-model-for-predictions"></a>',id:"step-3-view-model-run-metrics-and-artifacts-in-grid-web-",children:[{value:"1. Login to Grid.ai and Click &quot;Get Started with Grid&quot;",id:"1-login-to-gridai-and-click-get-started-with-grid",children:[],level:3},{value:"2. Select our Run and view Experiment Metrics",id:"2-select-our-run-and-view-experiment-metrics",children:[],level:3},{value:"3. Download Artifacts from Grid Run",id:"3-download-artifacts-from-grid-run",children:[],level:3}],level:2},{value:'Advanced Keras/TF Cuda Version Configuration <a id="bonus-cli-equivalent"></a>',id:"advanced-kerastf-cuda-version-configuration-",children:[{value:"1. Identify the Corresponding Compatible Tensorflow/Keras Cuda Version",id:"1-identify-the-corresponding-compatible-tensorflowkeras-cuda-version",children:[],level:3},{value:"2. Create a YAML Action Config in the same directory as your Train Script",id:"2-create-a-yaml-action-config-in-the-same-directory-as-your-train-script",children:[],level:3},{value:"3. Pass the YAML Config to the Grid Run Command",id:"3-pass-the-yaml-config-to-the-grid-run-command",children:[],level:3}],level:2}],m={toc:c};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mosmeddata-3d-image-classification"},"MosMedData 3D Image Classification"),(0,r.kt)("h2",{id:"goal-"},"Goal ",(0,r.kt)("a",{id:"goal"})),(0,r.kt)("p",null,"This example covers a 3D Image Classification task using Keras\u200c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What is 3D Image Classification from CT Scans"),(0,r.kt)("li",{parentName:"ol"},"Training the Keras model using ",(0,r.kt)("inlineCode",{parentName:"li"},"train.py")," script from the CLI"),(0,r.kt)("li",{parentName:"ol"},"View Artifacts and Grid Weights in Keras and Inference Model")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This tutorial shows how to perform a Grid Run with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tensorflow/tensorflow/releases/tag/v2.2.2"},(0,r.kt)("strong",{parentName:"a"},"Tensorflow 2.2.2"))," ",(0,r.kt)("strong",{parentName:"p"},"library from the Grid CLI.")))),(0,r.kt)("h2",{id:"tutorial-time-"},"Tutorial time ",(0,r.kt)("a",{id:"tutorial-time"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"15 minutes"),"\u200c"),(0,r.kt)("h2",{id:"task-3d-image-classification-"},"Task: 3D Image Classification ",(0,r.kt)("a",{id:"task-3d-image-classification"})),(0,r.kt)("p",null,"\u200c",(0,r.kt)("em",{parentName:"p"},"3D Image Classification")," is the task of classifying volumetric data such as 3D Models or Medical CT Scans from collections of 2D images."),(0,r.kt)("p",null,"The example shows the steps needed to build a 3D convolutional neural network ","(","CNN",")"," to predict the presence of viral pneumonia in computer tomography ","(","CT",")"," scans. 2D CNNs are commonly used to process RGB images ","(","3 channels",")",". A 3D CNN is simply the 3D equivalent: it takes as input a 3D volume or a sequence of 2D frames ","(","e.g. slices in a CT scan",")",", 3D CNNs are a powerful model for learning representations for volumetric data. It uses a subset of the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.06465"},"MosMedData: Chest CT Scans with COVID-19 Related Findings"),". This dataset consists of lung CT scans with COVID-19 related findings, as well as without such findings."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information please see the ",(0,r.kt)("a",{parentName:"p",href:"https://keras.io/examples/vision/3D_image_classification/"},"original Keras tutorial"),".\u200c\n::"),(0,r.kt)("h2",{parentName:"div",id:"dataset-mosmeddata-"},"Dataset: MosMedData ",(0,r.kt)("a",{id:"dataset-mosmeddata"})),(0,r.kt)("p",{parentName:"div"},"The MosMedData: Chest CT Scans with COVID-19 Related Findings Dataset ","(",(0,r.kt)("a",{parentName:"p",href:"https://www.medrxiv.org/content/10.1101/2020.05.20.20100362v1"},(0,r.kt)("em",{parentName:"a"},"reference")),")"," consists of lung CT scans with COVID-19 related findings, as well as without such findings.\u200c"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Image Source: https://keras.io/examples/vision/3D_image_classification/#introduction\u200c",src:a(8747).Z})),(0,r.kt)("h2",{parentName:"div",id:"step-1-kerastensorflow-model-script-"},"Step 1: Keras/Tensorflow Model Script ",(0,r.kt)("a",{id:"step-1-model"})),(0,r.kt)("p",{parentName:"div"},"Grid supports Keras/Tensorflow runs from the CLI. For this demo, we're going to be using the code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aribornstein/Keras-3D-Image-Classification/blob/main/train.py"},"here")," sourced from the Keras 3D Image Classification from CT Scans demo by ",(0,r.kt)("a",{parentName:"p",href:"https://hasibzunair.github.io/"},"Hasib Zunair")," from the Keras IO examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/keras-team/keras-io/tree/master/examples"},"repo")," with minor modifications for ",(0,r.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/tensorboard"},"TensorBoard")," integration. ","[",(0,r.kt)("a",{parentName:"p",href:"https://keras.io/examples/vision/3D_image_classification/"},"Reference"),"]"))),(0,r.kt)("p",null,"When using the Keras Tensorboard callback make sure to set the log","_","dir to './lightning","_","logs/keras'\n:::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tb_callback = tf.keras.callbacks.TensorBoard(log_dir='./lightning_logs/keras')\n")),(0,r.kt)("h2",{id:"step-2-start-a-run-from-the-cli-"},"Step 2: Start a RUN from the CLI ",(0,r.kt)("a",{id:"step-2-start-a-run"})),(0,r.kt)("p",null,"Training this model on Grid has 4 simple steps:\u200c"),(0,r.kt)("h3",{id:"1-install-and-sign-into-the-grid-cli"},"1. Install and Sign into the Grid CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"pip install -U lightning-grid\ngrid login\n")),(0,r.kt)("h3",{id:"2-clone-the-repo"},"2. Clone the repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u200cgit clone https://github.com/aribornstein/Keras-3D-Image-Classification.git\ncd Keras-3D-Image-Classification\n")),(0,r.kt)("h3",{id:"3-use-the-cli-to-start-a-grid-run"},"3. Use the CLI to start a Grid Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"grid run train.py\n--instance_type g4dn.xlarge\n--framework tensorflow\n--gpus 1\n--max_epochs 5\u200c\n")),(0,r.kt)("p",null,"This command tells grid to run our train script with the following configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A 1xT4 ","(","16 GB",")"," $0.68/h ","(","g4dn.xlarge",")"," Accelerator ",(0,r.kt)("inlineCode",{parentName:"li"},"--instance_type g4dn.xlarge")),(0,r.kt)("li",{parentName:"ul"},"Use the built-in GPU on the Accelerator",(0,r.kt)("inlineCode",{parentName:"li"},"--gpus 1")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow as the grid framework ",(0,r.kt)("inlineCode",{parentName:"li"},"--framework tensorflow")),(0,r.kt)("li",{parentName:"ul"},"Provide the run arguments ",(0,r.kt)("inlineCode",{parentName:"li"},"--max_epochs 5"))),(0,r.kt)("p",null,"After running the CLI command above you should see this message.\u200c"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6161).Z})),(0,r.kt)("h2",{id:"step-3-view-model-run-metrics-and-artifacts-in-grid-web-"},"Step 3: View Model Run Metrics and Artifacts in Grid Web ",(0,r.kt)("a",{id:"step-3-use-the-model-for-predictions"})),(0,r.kt)("p",null,"In this step, we log into the Grid Web Account to see our Metrics and Download the Grid weights"),(0,r.kt)("h3",{id:"1-login-to-gridai-and-click-get-started-with-grid"},"1. Login to ",(0,r.kt)("a",{parentName:"h3",href:"https://www.grid.ai/"},"Grid.ai"),' and Click "Get Started with Grid"'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1478).Z})),(0,r.kt)("h3",{id:"2-select-our-run-and-view-experiment-metrics"},"2. Select our Run and view Experiment Metrics"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(950).Z})),(0,r.kt)("h3",{id:"3-download-artifacts-from-grid-run"},"3. Download Artifacts from Grid Run"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4658).Z})),(0,r.kt)("p",null,"Congratulations you have successfully run your first Tensorflow/Keras script with Grid."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If using the Web UI to run this tutorial, simply copy and paste the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aribornstein/Keras-3D-Image-Classification/blob/main/train.py"},"github script"),' and choose "tensorflow" in the framework selection drop down'))),(0,r.kt)("p",null,"Here's a video of using Keras/TF example in Web UI"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.loom.com/share/f00e6b67df9a49709886bc9beebff3dd"},"https://www.loom.com/share/f00e6b67df9a49709886bc9beebff3dd")),(0,r.kt)("h2",{id:"advanced-kerastf-cuda-version-configuration-"},"Advanced Keras/TF Cuda Version Configuration ",(0,r.kt)("a",{id:"bonus-cli-equivalent"})),(0,r.kt)("p",null,"Grid currently supports native Cuda integration for TensorFlow version 2.2.0. Support for more versions is on the roadmap however if you need to train with a different version of TensorFlow or Keras and use Cuda you can configure your run as follows using an ",(0,r.kt)("a",{parentName:"p",href:"/products/runs/actions"},"Actions")," YAML configuration as follows."),(0,r.kt)("h3",{id:"1-identify-the-corresponding-compatible-tensorflowkeras-cuda-version"},"1. Identify the Corresponding Compatible Tensorflow/Keras Cuda Version"),(0,r.kt)("p",null,"You can look at the updated table maintained by google ",(0,r.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/install/source#gpu"},"here"),"."),(0,r.kt)("h3",{id:"2-create-a-yaml-action-config-in-the-same-directory-as-your-train-script"},"2. Create a YAML Action Config in the same directory as your Train Script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Main compute configuration.\ncompute:\n\n  # Add cloud configuration here.\n  provider:\n\n    credentials: PUT-GRID-KEY-HERE # Cloud key ID\n    region: us-east-1              # Cloud region\n    vendor: aws                    # Vendor, only aws\n\n  # Training configuration.\n  train:\n\n    cpus: 1                        # Number of CPUs\n    disk_size: 200                 # Disk size\n    gpus: 1                        # Number of GPUs\n    instance: g4dn.xlarge          # AWS instance type\n    memory: null                   # RAM memory\n    nodes: 0                       # Nodes to start with\n    scale_down_seconds: 1800       # Second in between every scaling down evaluation\n    datastore_name: null           # Datastore name to use\n    datastore_version: null        # Datastore version number\n    datastore_mount_dir: null      # Where to mount the datastore\n\n    actions:\n      on_before_training_start:\n        - conda install tensorflow-gpu==tensorflow-version-number cudatoolkit=corresponding-cuda-version-number -c anaconda -y\n        - pip install tensorflow-gpu==tensorflow-version-number\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be sure to specify the following parameters in the Yaml Config above"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Grid API Key"),(0,r.kt)("li",{parentName:"ol"},"Tensorflow Version Number"),(0,r.kt)("li",{parentName:"ol"},"Corresponding Cuda Version Number")),(0,r.kt)("h3",{id:"3-pass-the-yaml-config-to-the-grid-run-command"},"3. Pass the YAML Config to the Grid Run Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grid run train.py --config config.yml\n")))}p.isMDXComponent=!0},4658:function(e,t,a){t.Z=a.p+"assets/images/mosmeddata-artifacts-b0419fb60fd6df1dc7c621bfc7fbc90c.png"},8747:function(e,t,a){t.Z=a.p+"assets/images/mosmeddata-chest-scans-b90a89b774fe3505a0c4351f9f771e20.png"},1478:function(e,t,a){t.Z=a.p+"assets/images/mosmeddata-get-started-with-grid-544067a353471efe1a8511bc20531756.png"},950:function(e,t,a){t.Z=a.p+"assets/images/mosmeddata-metrics-04e36010f202999e340badd6bc0c1e5f.png"},6161:function(e,t,a){t.Z=a.p+"assets/images/mosmeddata-run-summary-e1b104860d08440d838f677e1cb2e446.png"}}]);