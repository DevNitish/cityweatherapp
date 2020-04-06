(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),o=t(48),i=t(20),s=t(146),m=t(149),d=t(151),p=t(152),u=t(153),E=t(69),g=t.n(E);const f=Object(s.a)(e=>({root:{flexGrow:1},menuButton:{marginRight:e.spacing(3),paddingRight:e.spacing(1)},title:{flexGrow:1,align:"left"}}));function h(e){const a=f();return r.a.createElement("div",{className:a.root},r.a.createElement(m.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(p.a,{variant:"h6",className:a.title},e.name,r.a.createElement("span",{className:a.menuButton},r.a.createElement(g.a,null))),r.a.createElement(u.a,{style:{width:"9rem"},variant:"contained",onClick:e.changeView,color:"secondary"},e.view?"Weather App":"City App"))))}var b=t(159),y=t(154),w=t(162),v=t(70),x=t.n(v);var O=t(45),j=t.n(O);const S=Object(s.a)(e=>({root:{width:"100%",margin:"1rem"},media:{height:"3rem",paddingTop:"56.25%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}));var C=Object(o.b)(e=>({cityArr:e.cityArr.cities}),{fetchCities:e=>e=>{j.a.get("https://www.mocky.io/v2/5e8a053a3100006800d39f64").then(a=>{console.log("fetch called: ",a.data),e({type:"FETCH_CITIES",payload:a.data})}).catch(e=>{console.log("fetch err: ",e)})}})(function(e){const a=S(),t=r.a.useState(!1),c=Object(i.a)(t,2),l=c[0],o=c[1];Object(n.useEffect)(()=>{e.fetchCities()},[]);const s=e=>(a,t)=>{o(!!t&&e)};return console.log("props,: ",e.cityArr),r.a.createElement("div",{className:a.root},e.cityArr.map(e=>r.a.createElement(b.a,{expanded:l===e.id,onChange:s(e.id)},r.a.createElement(w.a,{expandIcon:r.a.createElement(x.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},r.a.createElement(p.a,{className:a.heading},r.a.createElement("b",null,e.name)),r.a.createElement(p.a,null,e.shortDes)),r.a.createElement(y.a,null,r.a.createElement(p.a,null,e.des)))))}),N=t(158),T=t(160),A=t(157),B=t(155),I=t(156);const k=Object(s.a)({root:{flexGrow:1,margin:"1rem"},title:{fontSize:14},pos:{marginBottom:12}});function G(e){const a=k();return r.a.createElement(B.a,{className:a.root},r.a.createElement(I.a,null,r.a.createElement(p.a,{className:a.title,color:"textSecondary",gutterBottom:!0},e.data.list[0].dt_txt.substring(0,10)),r.a.createElement(p.a,{variant:"h5",component:"h2"},e.data.city.name," (",e.data.city.country,")"),r.a.createElement(p.a,{className:a.pos,color:"textSecondary"},r.a.createElement("b",null,"Max:")," ",e.data.list[0].main.temp_max,"\u2103 \xa0 ",r.a.createElement("b",null,"Min"),": ",e.data.list[0].main.temp_min,"\u2103"),r.a.createElement(p.a,{variant:"body2",component:"p"},e.data.list[0].weather[0].description,"\xa0with wind speed: ",e.data.list[0].wind.speed," meter/sec")))}var _=t(71),D=t.n(_);const R=Object(s.a)(e=>({formControl:{marginTop:e.spacing(.5),width:"auto"},cardStyle:{paddingTop:e.spacing(3),margin:"0.5rem"},root:{flexGrow:1}})),z=function(e){return console.log("show data",e),e.data&&200==e.data.cod?r.a.createElement(G,{data:e.data}):e.data&&e.data.err?r.a.createElement(p.a,{style:{color:"red"}},e.data.err||""):r.a.createElement("p",null)};var H=function(e){const a=R(),t=Object(n.useState)(""),c=Object(i.a)(t,2),l=c[0],o=c[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),d=m[0],p=m[1],E=Object(n.useState)(!1),g=Object(i.a)(E,2),f=g[0],h=g[1];return r.a.createElement("div",{className:a.root},r.a.createElement(B.a,{className:a.cardStyle},r.a.createElement("from",{autoComplete:"off"},r.a.createElement(T.a,{className:a.formControl},r.a.createElement(N.a,{id:"standard-basic",onChange:e=>o(e.target.value),value:l,label:"City"}),r.a.createElement(A.a,null,"Type: Delhi, Bengaluru, or 10001,us")),r.a.createElement("br",null),r.a.createElement(T.a,{className:a.formControl},r.a.createElement(u.a,{disabled:!l,variant:"contained",onClick:e=>{e.preventDefault(),h(!0),p(null),console.log(" query ",l),j.a.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:l,APPID:"fc58ba73fc193a3d2fdf7f1e0f35d074",units:"metric"}}).then(e=>{console.log("fetch data: ",e.data),h(!1),p(e.data)}).catch(e=>{p({err:"Something went wrong try again!"}),h(!1),console.log("fetch err: ",e)})},color:"primary"},"Send",r.a.createElement(D.a,null)))),r.a.createElement("br",null),r.a.createElement("br",null),f?r.a.createElement(A.a,{style:{padding:"0.5rem",color:"blue"}},"loading..."):r.a.createElement("div",null,r.a.createElement(z,{data:d}))))};t(109);const M=Object(s.a)(e=>({root:{flexGrow:1,overflow:"hidden",margin:e.spacing(3),padding:e.spacing(0,3)},paper:{maxWidth:400,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)}}));function W(){const e=M(),a=Object(n.useState)(!0),t=Object(i.a)(a,2),c=t[0],l=t[1];return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(h,{name:"World is my Oyster",view:c,changeView:()=>l(!c)}),r.a.createElement("div",{className:e.root},c?r.a.createElement(C,null):r.a.createElement(H,null)))}var q=t(23),F=t(72),J=t(73);const P={cities:[]};var V=Object(q.c)({cityArr:function(e=P,a){switch(a.type){case"FETCH_CITIES":return Object(J.a)({},e,{cities:a.payload});default:return e}}});const K=[F.a];var L=Object(q.d)(V,{},Object(q.a)(...K));const Q=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:L},r.a.createElement(W,null))),Q)},81:function(e,a,t){e.exports=t(110)}},[[81,1,2]]]);
//# sourceMappingURL=main.a7d6acb8.chunk.js.map