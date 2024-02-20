"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8028],{15680:(e,n,i)=>{i.d(n,{xA:()=>g,yg:()=>d});var a=i(96540);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function t(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,l=function(e,n){if(null==e)return{};var i,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):t(t({},n),e)),i},g=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var i=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=s(i),c=l,d=y["".concat(p,".").concat(c)]||y[c]||u[c]||r;return i?a.createElement(d,t(t({ref:n},g),{},{components:i})):a.createElement(d,t({ref:n},g))}));function d(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=i.length,t=new Array(r);t[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:l,t[1]=o;for(var s=2;s<r;s++)t[s]=i[s];return a.createElement.apply(null,t)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},67391:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=i(58168),l=(i(96540),i(15680));const r={id:"SeriesOptionsCommon",title:"Interface: SeriesOptionsCommon",sidebar_label:"SeriesOptionsCommon",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},t=void 0,o={unversionedId:"api/interfaces/SeriesOptionsCommon",id:"version-3.8/api/interfaces/SeriesOptionsCommon",title:"Interface: SeriesOptionsCommon",description:"Represents options common for all types of series",source:"@site/versioned_docs/version-3.8/api/interfaces/SeriesOptionsCommon.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesOptionsCommon",permalink:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsCommon",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"SeriesOptionsCommon",title:"Interface: SeriesOptionsCommon",sidebar_label:"SeriesOptionsCommon",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"lastValueVisible",id:"lastvaluevisible",level:3},{value:"title",id:"title",level:3},{value:"priceScaleId",id:"pricescaleid",level:3},{value:"visible",id:"visible",level:3},{value:"priceLineVisible",id:"pricelinevisible",level:3},{value:"priceLineSource",id:"pricelinesource",level:3},{value:"priceLineWidth",id:"pricelinewidth",level:3},{value:"priceLineColor",id:"pricelinecolor",level:3},{value:"priceLineStyle",id:"pricelinestyle",level:3},{value:"priceFormat",id:"priceformat",level:3},{value:"baseLineVisible",id:"baselinevisible",level:3},{value:"baseLineColor",id:"baselinecolor",level:3},{value:"baseLineWidth",id:"baselinewidth",level:3},{value:"baseLineStyle",id:"baselinestyle",level:3},{value:"autoscaleInfoProvider",id:"autoscaleinfoprovider",level:3},{value:"scaleMargins",id:"scalemargins",level:3}],g={toc:s},y="wrapper";function u(e){let{components:n,...i}=e;return(0,l.yg)(y,(0,a.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Represents options common for all types of series"),(0,l.yg)("h2",{id:"properties"},"Properties"),(0,l.yg)("h3",{id:"lastvaluevisible"},"lastValueVisible"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"lastValueVisible"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")),(0,l.yg)("p",null,"Visibility of the label with the latest visible price on the price scale."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"title"},"title"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"title"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"You can name series when adding it to a chart. This name will be displayed on the label next to the last value label."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"''")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pricescaleid"},"priceScaleId"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"priceScaleId"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"Target price scale to bind new series to."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"'right'")," if right scale is visible and ",(0,l.yg)("inlineCode",{parentName:"p"},"'left'")," otherwise"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"visible"},"visible"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"visible"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")),(0,l.yg)("p",null,"Visibility of the series.\nIf the series is hidden, everything including price lines, baseline, price labels and markers, will also be hidden.\nPlease note that hiding a series is not equivalent to deleting it, since hiding does not affect the timeline at all, unlike deleting where the timeline can be changed (some points can be deleted)."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pricelinevisible"},"priceLineVisible"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"priceLineVisible"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")),(0,l.yg)("p",null,"Show the price line. Price line is a horizontal line indicating the last price of the series."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pricelinesource"},"priceLineSource"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"priceLineSource"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/PriceLineSource"},(0,l.yg)("inlineCode",{parentName:"a"},"PriceLineSource"))),(0,l.yg)("p",null,"The source to use for the value of the price line."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/PriceLineSource#lastbar"},"LastBar")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pricelinewidth"},"priceLineWidth"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"priceLineWidth"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#linewidth"},(0,l.yg)("inlineCode",{parentName:"a"},"LineWidth"))),(0,l.yg)("p",null,"Width of the price line."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"1")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pricelinecolor"},"priceLineColor"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"priceLineColor"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"Color of the price line.\nBy default, its color is set by the last bar color (or by line color on Line and Area charts)."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"''")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pricelinestyle"},"priceLineStyle"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"priceLineStyle"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LineStyle"},(0,l.yg)("inlineCode",{parentName:"a"},"LineStyle"))),(0,l.yg)("p",null,"Price line style."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LineStyle#dashed"},"Dashed")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"priceformat"},"priceFormat"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"priceFormat"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#priceformat"},(0,l.yg)("inlineCode",{parentName:"a"},"PriceFormat"))),(0,l.yg)("p",null,"Price format."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"{ type: 'price', precision: 2, minMove: 0.01 }")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"baselinevisible"},"baseLineVisible"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"baseLineVisible"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")),(0,l.yg)("p",null,"Visibility of base line. Suitable for percentage and ",(0,l.yg)("inlineCode",{parentName:"p"},"IndexedTo100")," scales."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"baselinecolor"},"baseLineColor"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"baseLineColor"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"Color of the base line in ",(0,l.yg)("inlineCode",{parentName:"p"},"IndexedTo100")," mode."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"'#B2B5BE'")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"baselinewidth"},"baseLineWidth"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"baseLineWidth"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#linewidth"},(0,l.yg)("inlineCode",{parentName:"a"},"LineWidth"))),(0,l.yg)("p",null,"Base line width. Suitable for percentage and ",(0,l.yg)("inlineCode",{parentName:"p"},"IndexedTo10")," scales."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"1")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"baselinestyle"},"baseLineStyle"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"baseLineStyle"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LineStyle"},(0,l.yg)("inlineCode",{parentName:"a"},"LineStyle"))),(0,l.yg)("p",null,"Base line style. Suitable for percentage and indexedTo100 scales."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LineStyle#solid"},"Solid")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"autoscaleinfoprovider"},"autoscaleInfoProvider"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"autoscaleInfoProvider"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#autoscaleinfoprovider"},(0,l.yg)("inlineCode",{parentName:"a"},"AutoscaleInfoProvider"))),(0,l.yg)("p",null,"Override the default ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/AutoscaleInfo"},"AutoscaleInfo")," provider.\nBy default, the chart scales data automatically based on visible data range.\nHowever, for some reasons one could require overriding this behavior."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"undefined")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,l.yg)("p",null,"Use price range from 0 to 100 regardless the current visible range"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"const firstSeries = chart.addLineSeries({\n    autoscaleInfoProvider: () => ({\n        priceRange: {\n            minValue: 0,\n            maxValue: 100,\n        },\n    }),\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,l.yg)("p",null,"Adding a small pixel margins to the price range"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"const firstSeries = chart.addLineSeries({\n    autoscaleInfoProvider: () => ({\n        priceRange: {\n            minValue: 0,\n            maxValue: 100,\n        },\n        margins: {\n            above: 10,\n            below: 10,\n        },\n    }),\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,l.yg)("p",null,"Using the default implementation to adjust the result"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"const firstSeries = chart.addLineSeries({\n    autoscaleInfoProvider: original => {\n        const res = original();\n        if (res !== null) {\n            res.priceRange.minValue -= 10;\n            res.priceRange.maxValue += 10;\n        }\n        return res;\n    },\n});\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"scalemargins"},"scaleMargins"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"scaleMargins"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/PriceScaleMargins"},(0,l.yg)("inlineCode",{parentName:"a"},"PriceScaleMargins"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,l.yg)("p",null,"Use ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi#pricescale"},"priceScale")," method of the series to apply options instead."))}u.isMDXComponent=!0}}]);