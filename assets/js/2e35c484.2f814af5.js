"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9117],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(t),y=n,m=g["".concat(o,".").concat(y)]||g[y]||u[y]||i;return t?r.createElement(m,l(l({ref:a},c),{},{components:t})):r.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=y;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[g]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},11531:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(58168),n=(t(96540),t(15680));const i={id:"SingleValueData",title:"Interface: SingleValueData<HorzScaleItem>",sidebar_label:"SingleValueData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/SingleValueData",id:"api/interfaces/SingleValueData",title:"Interface: SingleValueData<HorzScaleItem>",description:"A base interface for a data point of single-value series.",source:"@site/docs/api/interfaces/SingleValueData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SingleValueData",permalink:"/lightweight-charts/docs/next/api/interfaces/SingleValueData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SingleValueData",title:"Interface: SingleValueData<HorzScaleItem>",sidebar_label:"SingleValueData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"Overrides",id:"overrides",level:4},{value:"value",id:"value",level:3},{value:"customValues",id:"customvalues",level:3},{value:"Inherited from",id:"inherited-from",level:4}],c={toc:s},g="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A base interface for a data point of single-value series."),(0,n.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"HorzScaleItem")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time")))))),(0,n.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"SingleValueData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/AreaData"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BaselineData"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HistogramData"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LineData"},(0,n.yg)("inlineCode",{parentName:"a"},"LineData"))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"time"},"time"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"time"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem")),(0,n.yg)("p",null,"The time of the data."),(0,n.yg)("h4",{id:"overrides"},"Overrides"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},"WhitespaceData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData#time"},"time")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"value"},"value"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"value"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"Price value of the data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"customvalues"},"customValues"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"customValues"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"Record"),"<",(0,n.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"unknown"),">"),(0,n.yg)("p",null,"Additional custom values which will be ignored by the library, but\ncould be used by plugins."),(0,n.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},"WhitespaceData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData#customvalues"},"customValues")))}u.isMDXComponent=!0}}]);