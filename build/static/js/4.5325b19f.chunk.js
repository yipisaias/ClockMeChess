(this["webpackJsonpclock-me-chess"]=this["webpackJsonpclock-me-chess"]||[]).push([[4],{103:function(e,t,r){e.exports={Container:"Home_Container__2DrPw"}},122:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),s=r(117),a=r(56),i=(r(78),r(73)),o=r(90),u=(r(99),r(114)),l=r(115),j=r(123),d=r(124),b=r(121),p=r(4),O=function(){return Object(p.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"1em",height:"1em",viewBox:"0 0 320 320",style:{enableBackground:"new 0 0 320 320"},fill:"currentColor",xmlSpace:"preserve",children:[Object(p.jsx)("path",{d:"M288,0H32C14.368,0,0,14.368,0,32v256c0,17.632,14.368,32,32,32h256c17.632,0,32-14.368,32-32V32\r\nC320,14.368,305.632,0,288,0z"}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{})]})},f=function(e){var t=e.style;return Object(p.jsx)(b.a,{component:O,style:t})},h=r(101),x=r(102),m=r(118),g=r(116),y={display:"block",margin:"auto",width:"fit-content",textAlign:"center",paddingLeft:5,paddingBottom:20,fontSize:"4.75em"},v=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).state={centesimos:0,segundos:0,stop:!0,tParcial:"",parciais:[]},n}return Object(x.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.incrementar()}),10)}},{key:"zerarCronometro",value:function(){this.state.centesimos=0,this.state.segundos=0,this.state.tParcial=""}},{key:"parcial",value:function(){var e=this.state,t=e.segundos,r=e.centesimos,n="".concat(Math.floor(t/10),":").concat(t%10).concat(r,"\n\n");this.setState((function(e){return{tParcial:e.tParcial+n}})),this.setState((function(e){return Object(o.a)({},e.parciais.push(e.tParcial))}))}},{key:"pararTempo",value:function(){var e=this.state.stop;this.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{stop:!e})}))}},{key:"incrementar",value:function(){var e=this;!1===this.state.stop&&this.setState((function(t){return t.centesimos>=9&&(e.zerar(),e.incrementarSegundos(t)),{centesimos:t.centesimos+1}}))}},{key:"incrementarSegundos",value:function(e){this.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{segundos:e.segundos+1})}))}},{key:"zerar",value:function(){this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{centesimos:0})}))}},{key:"render",value:function(){var e=this.state,t=e.centesimos,r=e.segundos,n=this.props.style;return Object(p.jsxs)("div",{style:Object(o.a)(Object(o.a)({},y),n),children:[Math.floor(r/10),":",r%10,"",t]})}}]),r}(c.a.Component),k=r(80),C=r.n(k),w={backgroundColor:C.a.default,border:"4px solid ".concat(C.a.primary),width:"85%",maxWidth:300,height:"40%",margin:"auto",cursor:"auto"},S={backgroundColor:C.a.secondary,width:140,margin:"auto",padding:"5px 0px",display:"flex",justifyContent:"space-around",alignItems:"center"},z={height:"90%",padding:0,borderColor:C.a.secondary},P={color:C.a.disabled,fontSize:"3em",display:"block"},F={display:"flex",justifyContent:"space-between"},R=r(103),T=r.n(R),B=null;var J=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),r=Object(n.useRef)(null),s=Object(n.useRef)(null),a=Object(n.useState)(null),b=Object(l.a)(a,2),O=b[0],h=b[1],x=Object(n.useState)(!0),m=Object(l.a)(x,2),g=m[0],y=m[1],k=Object(n.useState)({disabled:!0,style:P}),R=Object(l.a)(k,2),J=R[0],M=R[1],_=function(e,t){e.pararTempo(),!0===e.state.stop&&(e.parcial(),t.zerarCronometro(),t.pararTempo())},E=function(){e.current.state.stop&&t.current.state.stop||(e.current.state.stop?t.current.state.stop||(B=t.current,h(s.current)):(B=e.current,h(r.current))),B.pararTempo(),y(!g)};return Object(n.useEffect)((function(){r.current.onclick=function(){e.current.state.stop?s.current.disabled=!0:(r.current.disabled=!0,s.current.disabled=!1),_(e.current,t.current),M((function(e){return{disabled:!1,style:Object(o.a)(Object(o.a)({},e.style),{},{color:C.a.primary})}}))},s.current.onclick=function(){t.current.state.stop?r.current.disabled=!0:(s.current.disabled=!0,r.current.disabled=!1),_(t.current,e.current),M((function(e){return{disabled:!1,style:Object(o.a)(Object(o.a)({},e.style),{},{color:C.a.primary})}}))}}),[r,s]),Object(n.useEffect)((function(){null!==O&&(O.disabled=!g)}),[g]),Object(p.jsxs)("div",{className:T.a.Container,style:{backgroundColor:C.a.background,borderColor:C.a.primary},children:[Object(p.jsx)(i.a,{type:"primary",shape:"circle",style:w,ref:r,children:Object(p.jsx)(v,{style:{transform:"rotate(180deg)"},ref:e})}),Object(p.jsxs)("div",{style:S,children:[Object(p.jsx)(i.a,{ghost:!0,disabled:J.disabled,style:z,onClick:E,children:c.a.createElement(g?j.a:d.a,{style:J.style})}),Object(p.jsx)(i.a,{ghost:!0,disabled:J.disabled,style:z,onClick:function(){E(),u.a.info({title:"Resultados",content:Object(p.jsxs)("div",{style:F,children:[Object(p.jsxs)("div",{children:["Jogador 1 ",Object(p.jsx)("br",{}),e.current.state.parciais.map((function(t){var r=e.current.state.parciais.indexOf(t);return Object(p.jsxs)("span",{children:[t," ",Object(p.jsx)("br",{})]},r)}))]}),Object(p.jsxs)("div",{children:["Jogador 2 ",Object(p.jsx)("br",{}),t.current.state.parciais.map((function(e){var r=t.current.state.parciais.indexOf(e);return Object(p.jsxs)("span",{children:[e," ",Object(p.jsx)("br",{})]},r)}))]})]}),onOk:function(){window.location.reload()}}),e.current.zerarCronometro(),t.current.zerarCronometro(),e.current.state.parciais=[],t.current.state.parciais=[]},children:Object(p.jsx)(f,{style:Object(o.a)(Object(o.a)({},J.style),{},{fontSize:"2.5em",marginTop:2})})})]}),Object(p.jsx)(i.a,{type:"primary",shape:"circle",style:w,ref:s,children:Object(p.jsx)(v,{ref:t})})]})};t.default=function(){return Object(p.jsx)(s.a,{children:Object(p.jsx)(a.c,{children:Object(p.jsx)(a.a,{exact:!0,path:"/",component:J})})})}},80:function(e,t){e.exports={default:"#808080",secondary:"#FFBF00",primary:"#FF0000",background:"#000000",disabled:"#262626"}}}]);
//# sourceMappingURL=4.5325b19f.chunk.js.map