"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[6647],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=a.createContext({}),u=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):d(d({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||l[f]||n;return r?a.createElement(m,d(d({ref:e},p),{},{components:r})):a.createElement(m,d({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,d=new Array(n);d[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,d[1]=i;for(var u=2;u<n;u++)d[u]=r[u];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1618:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),d=["components"],i={},c="Periodic upload",u={unversionedId:"products/add-data-to-grid-datastores/periodic-upload",id:"products/add-data-to-grid-datastores/periodic-upload",title:"Periodic upload",description:"Upload on a timer",source:"@site/docs/products/add-data-to-grid-datastores/periodic-upload.md",sourceDirName:"products/add-data-to-grid-datastores",slug:"/products/add-data-to-grid-datastores/periodic-upload",permalink:"/products/add-data-to-grid-datastores/periodic-upload",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/products/add-data-to-grid-datastores/periodic-upload.md",tags:[],version:"current",lastUpdatedAt:1644507787,formattedLastUpdatedAt:"2/10/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create from a cluster",permalink:"/products/add-data-to-grid-datastores/create-from-a-cluster"},next:{title:"FAQ",permalink:"/products/add-data-to-grid-datastores/datastore-faq"}},p=[{value:"Upload on a timer",id:"upload-on-a-timer",children:[],level:2}],l={toc:p};function s(t){var e=t.components,r=(0,o.Z)(t,d);return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"periodic-upload"},"Periodic upload"),(0,n.kt)("h2",{id:"upload-on-a-timer"},"Upload on a timer"),(0,n.kt)("p",null,"In certain cases, your data might change hourly and you might want to update your datastore. You can configure your crontab to do this automatically."),(0,n.kt)("p",null,"Here's an example that uploads a new version of a datastore every hour:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#write out current crontab\ncrontab -l > mycron\n\n#run datastore upload every hour every day\necho "0 * * * * grid datastore create --source data/path --name dataset" >> mycron    \n\n#install new cron file\ncrontab mycron\nrm mycron\n')))}s.isMDXComponent=!0}}]);