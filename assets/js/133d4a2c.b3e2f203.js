"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[121],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),p=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?s.createElement(m,a(a({ref:t},l),{},{components:n})):s.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var s=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],i={description:"ssh to an interactive session to carry out prototyping, debugging workflows"},c="SSH into a Session",p={unversionedId:"features/sessions/how-to-ssh-into-a-session",id:"features/sessions/how-to-ssh-into-a-session",title:"SSH into a Session",description:"ssh to an interactive session to carry out prototyping, debugging workflows",source:"@site/docs/features/sessions/how-to-ssh-into-a-session.md",sourceDirName:"features/sessions",slug:"/features/sessions/how-to-ssh-into-a-session",permalink:"/features/sessions/how-to-ssh-into-a-session",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/sessions/how-to-ssh-into-a-session.md",tags:[],version:"current",lastUpdatedAt:1646932679,formattedLastUpdatedAt:"3/10/2022",frontMatter:{description:"ssh to an interactive session to carry out prototyping, debugging workflows"},sidebar:"tutorialSidebar",previous:{title:"JupyterLab with Sessions",permalink:"/features/sessions/jupyterlab-with-sessions"},next:{title:"VSCode with Sessions",permalink:"/features/sessions/vscode-with-sessions"}},l=[{value:"Step 0: Create an SSH Key",id:"step-0-create-an-ssh-key",children:[],level:2},{value:"Step 1: Add the SSH key",id:"step-1-add-the-ssh-key",children:[],level:2},{value:"Step 2: Launch the session",id:"step-2-launch-the-session",children:[],level:2},{value:"Step 3: Login to the interactive session",id:"step-3-login-to-the-interactive-session",children:[],level:2}],u={toc:l};function d(e){var t=e.components,i=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ssh-into-a-session"},"SSH into a Session"),(0,r.kt)("h2",{id:"step-0-create-an-ssh-key"},"Step 0: Create an SSH Key"),(0,r.kt)("p",null,"Create an ssh key from the computer you'd like to connect from (skip this step if you already have a key)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# make the ssh key (if you don\'t have one)\nssh-keygen -t ed25519 -C "your_email@example.com"\nor\nssh-keygen -b 2048 -t rsa -q -N ""\n')),(0,r.kt)("h2",{id:"step-1-add-the-ssh-key"},"Step 1: Add the SSH key"),(0,r.kt)("p",null,"Here we assume to have SSH keys named ",(0,r.kt)("em",{parentName:"p"},"ed25519.pub,")," which are the default used by the command above."),(0,r.kt)("p",null,"We're going to add the key and name it ",(0,r.kt)("em",{parentName:"p"},"lit_key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# add the keys to grid\ngrid ssh-keys add lit_key ~/.ssh/id_ed25519.pub\nor\ngrid ssh-keys add key_1 ~/.ssh/id_rsa.pub\n")),(0,r.kt)("p",null,"If you go to ",(0,r.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/settings?tabId=ssh"},"settings"),", you'll see the key"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3584).Z})),(0,r.kt)("h2",{id:"step-2-launch-the-session"},"Step 2: Launch the session"),(0,r.kt)("p",null,"Use the CLI or Web interface to create and launch session"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grid session create --instance_type 2_m60_8gb --name happy-owl-123\n")),(0,r.kt)("h2",{id:"step-3-login-to-the-interactive-session"},"Step 3: Login to the interactive session"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grid session ssh happy-owl-123\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6604).Z})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can clone any Github repositories into a Session using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-using-the-command-line"},"HTTPS cloning method")," (SSH method of cloning will not work)."))))}d.isMDXComponent=!0},3584:function(e,t,n){t.Z=n.p+"assets/images/ssh-keys-14db574b5799227c6b02f44d7f65ef51.png"},6604:function(e,t,n){t.Z=n.p+"assets/images/how-to-ssh-into-session-2f592085760f27204ee6045c5922469e.gif"}}]);