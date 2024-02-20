var m=Object.defineProperty;var _=(r,t,o)=>t in r?m(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var a=(r,t,o)=>(_(r,typeof t!="symbol"?t+"":t,o),o);import{P as f,T as w}from"./lightweight-charts.production-315717c2.js";import{g as b}from"./sample-data-c7d89ab8.js";import{f as S}from"./full-width-c985ee69.js";const C={...f,lowColor:"rgb(50, 50, 255)",highColor:"rgb(255, 50, 50)",lowValue:0,highValue:100,opacity:.8};function h(r){const t=r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(!t)throw new Error("Invalid RGB string");return[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]}class x{constructor(t,o){a(this,"color1");a(this,"color2");this.color1=h(t),this.color2=h(o)}createInterpolator(t,o){const s=o-t,i=[this.color2[0]-this.color1[0],this.color2[1]-this.color1[1],this.color2[2]-this.color1[2]];return l=>{const e=(l-t)/s;return`rgb(${[Math.round(this.color1[0]+i[0]*e),Math.round(this.color1[1]+i[1]*e),Math.round(this.color1[2]+i[2]*e)].join(",")})`}}}class I{constructor(){a(this,"_data",null);a(this,"_options",null)}draw(t){t.useBitmapCoordinateSpace(o=>this._drawImpl(o))}update(t,o){this._data=t,this._options=o}_drawImpl(t){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const o=this._options,s=new x(o.lowColor,o.highColor).createInterpolator(o.lowValue,o.highValue),i=this._data.bars.map(e=>({color:s(e.originalData.value),x:e.x})),l=this._data.barSpacing/2;for(let e=this._data.visibleRange.from;e<this._data.visibleRange.to;e++){const n=i[e],c=S(n.x,l,t.horizontalPixelRatio),p=0,g=t.bitmapSize.height;t.context.fillStyle=n.color||"rgba(0, 0, 0, 0)",t.context.fillRect(c.position,p,c.length,g)}}}class R{constructor(){a(this,"_renderer");this._renderer=new I}priceValueBuilder(t){return[NaN]}isWhitespace(t){return t.value===void 0}renderer(){return this._renderer}update(t,o){this._renderer.update(t,o)}defaultOptions(){return C}}const d=window.chart=w("chart",{autoSize:!0}),u=b(),V=new R,v=d.addCustomSeries(V,{lowValue:0,highValue:1e3});v.setData(u);const B=d.addLineSeries({color:"black"});B.setData(u);
