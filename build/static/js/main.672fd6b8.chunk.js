(this["webpackJsonpwiredcraft-frontend-test"]=this["webpackJsonpwiredcraft-frontend-test"]||[]).push([[0],{84:function(e,t,n){e.exports=n(95)},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),i=n.n(l),o=n(34),u=n(10),s=n(136),c=n(138),m=n(43),p=n(98),d=n(139),f=n(140),b=n(69),E=n.n(b),h=Object(p.a)((function(){return{iconStyles:{textAlign:"center"},textStyles:{marginLeft:"1rem",marginRight:"1rem"},linkStyles:{textDecoration:"none",color:"inherit"}}})),N=function(){var e=h();return r.a.createElement(s.a,{position:"static",color:"transparent"},r.a.createElement(c.a,{disableGutters:!0},r.a.createElement(d.a,{item:!0,xs:2,sm:1,className:e.iconStyles},r.a.createElement(E.a,null)),r.a.createElement(f.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(d.a,{item:!0,xs:2,sm:1,className:e.textStyles},r.a.createElement(o.b,{to:"/",className:e.linkStyles},r.a.createElement(m.a,null,"Reports"))),r.a.createElement(d.a,{item:!0,xs:4,sm:8}),r.a.createElement(f.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(d.a,{item:!0,xs:2,sm:1,className:e.textStyles},r.a.createElement(o.b,{to:"/overall",className:e.linkStyles},r.a.createElement(m.a,null,"Overall"))),r.a.createElement(f.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(d.a,{item:!0,xs:2,sm:1,className:e.textStyles},r.a.createElement(o.b,{to:"/specific",className:e.linkStyles},r.a.createElement(m.a,null,"Specific")))))},w=n(14),g=n(37),v=n(150),y=n(152),O=n(142),x=n(149),I=n(151),j=n(96),k=n(22),S=n(141),C=n(144),A=n(53),R=n.n(A),T=n(52),L=n.n(T),B=n(143),F=function(e){var t=e.township,n=e.townshipStyle;return r.a.createElement(S.a,{style:n,key:t.id,hover:!0},r.a.createElement(O.a,{component:"th",scope:"row",style:{paddingLeft:"4rem"}},t.name),r.a.createElement(O.a,null),r.a.createElement(O.a,null,t.lastInput),r.a.createElement(O.a,null,t.formNumbers),r.a.createElement(O.a,null,t.voterNumbers),r.a.createElement(O.a,null,t.update))},D=Object(B.a)((function(e){return{button:{padding:8,margin:"auto",textTransform:"none",textAlign:"center"},buttonText:Object(k.a)({},e.breakpoints.down("sm"),{display:"none"})}})),G=function(e){var t=e.district,n=e.districtStyle,a=e.open,l=e.handleOpenClick,i=e.areCommonElements,o=D(),u=[t.townships.map((function(e){return e})).flat(2).reduce((function(e,t){return{lastInput:e.lastInput+t.lastInput,formNumbers:e.formNumbers+t.formNumbers,voterNumbers:e.voterNumbers+t.voterNumbers,update:e.update+t.update}}))];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{style:n,hover:!0},r.a.createElement(O.a,{component:"th",scope:"row",style:{paddingLeft:"2rem"}},t.name),r.a.createElement(O.a,null,r.a.createElement(C.a,{"aria-label":"expand row",variant:"contained",className:o.button,endIcon:i(a,t.townships.map((function(e){return e})))?r.a.createElement(L.a,null):r.a.createElement(R.a,null),onClick:function(){l(t.townships.map((function(e){return e})))}},r.a.createElement("span",{className:o.buttonText},1===t.townships.length?"1 Township":"".concat(t.townships.length," Townships")))),u.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,e.lastInput),r.a.createElement(O.a,null,e.formNumbers),r.a.createElement(O.a,null,e.voterNumbers),r.a.createElement(O.a,null,e.update))}))),t.townships.map((function(e){return r.a.createElement(F,{township:e,townshipStyle:i(a,[e])?{display:"table-row"}:{display:"none"}})})))},M=Object(B.a)((function(e){return{button:{padding:8,margin:"auto",textTransform:"none",textAlign:"center"},buttonText:Object(k.a)({},e.breakpoints.down("sm"),{display:"none"})}})),Q=function(e){var t=e.region,n=e.open,a=e.handleOpenClick,l=e.areCommonElements,i=e.regionStyle,o=M(),u=[t.districts.map((function(e){return e.townships.map((function(e){return e}))})).flat(2).reduce((function(e,t){return{lastInput:e.lastInput+t.lastInput,formNumbers:e.formNumbers+t.formNumbers,voterNumbers:e.voterNumbers+t.voterNumbers,update:e.update+t.update}}))];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{style:i,hover:!0},r.a.createElement(O.a,null,t.name),r.a.createElement(O.a,null,r.a.createElement(C.a,{"aria-label":"expand row",variant:"contained",className:o.button,endIcon:l(n,t.districts.map((function(e){return e})))?r.a.createElement(L.a,null):r.a.createElement(R.a,null),onClick:function(){a(t.districts.map((function(e){return e})))}},r.a.createElement("span",{className:o.buttonText},1===t.districts.length?"1 District":"".concat(t.districts.length," Districts")))),u.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,e.lastInput),r.a.createElement(O.a,null,e.formNumbers),r.a.createElement(O.a,null,e.voterNumbers),r.a.createElement(O.a,null,e.update))}))),t.districts.map((function(e){return r.a.createElement(G,{district:e,districtStyle:l(n,[e])?{display:"table-row"}:{display:"none"},open:n,handleOpenClick:a,areCommonElements:l})})))},J=n(145),W=n(97),q=n(146),z=n(147),P=n(74),U=n(70),V=n.n(U),H=["Region","District","Township"],K=Object(B.a)((function(e){return{filterText:Object(k.a)({},e.breakpoints.down("sm"),{display:"none"})}})),X=function(e){var t=e.selectedIndex,n=e.handleMenuItemClick,l=Object(a.useState)(null),i=Object(g.a)(l,2),o=i[0],u=i[1],s=K();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{component:"nav","aria-label":"Filter tags"},r.a.createElement(W.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"set filter",onClick:function(e){u(e.currentTarget)}},r.a.createElement(q.a,{className:s.filterText,primary:"Set Filter"}),r.a.createElement(V.a,null))),r.a.createElement(P.a,{id:"lock-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){u(null)}},H.map((function(e,a){return r.a.createElement(z.a,{key:e,selected:a===t,onClick:function(e){return n(e,a)}},e)}))))},Y=n(71),Z=n.n(Y),$=Object(B.a)((function(e){return{button:{padding:12,margin:"auto",fontSize:"1rem",textTransform:"none"},buttonText:Object(k.a)({},e.breakpoints.down("sm"),{display:"none"})}})),_=function(e){var t=e.open,n=e.setSelectedIndex,a=e.setOpen,l=e.setQuery,i=e.Regions,o=$();return r.a.createElement(C.a,{onClick:function(){if(!t)return null;a(i.map((function(e){return e}))),l(""),n(0)},endIcon:r.a.createElement(Z.a,null),className:o.button},r.a.createElement(m.a,{className:o.buttonText},"Reset"))},ee=n(154),te=n(72),ne=n.n(te),ae=n(148),re=function(e){var t=e.Regions,n=e.setQuery,a=e.query,l=e.setOpen;return r.a.createElement(ee.a,{placeholder:"Search",style:{marginRight:".5rem"},InputLabelProps:{shrink:!0},variant:"standard",onChange:function(e){if(e.preventDefault(),n(e.target.value),t.map((function(e){return e.name.toLowerCase().includes(a)})).includes(!0))l(t.filter((function(e){return e.name.toLowerCase().includes(a)})));else if(t.map((function(e){return e.districts.map((function(e){return e.name.toLowerCase().includes(a)}))})).flat().includes(!0))l([].concat(Object(w.a)(t.filter((function(e){return e.districts.map((function(e){return e})).some((function(e){return e.name.toLowerCase().includes(a)}))}))),Object(w.a)(t.map((function(e){return e.districts.filter((function(e){return e.name.toLowerCase().includes(a)}))})).flat())));else{if(!t.map((function(e){return e.districts.map((function(e){return e.townships.map((function(e){return e.name.toLowerCase().includes(a)}))}))})).flat(2).includes(!0))return;l([].concat(Object(w.a)(t.filter((function(e){return e.districts.map((function(e){return e.townships.map((function(e){return e}))})).flat().some((function(e){return e.name.toLowerCase().includes(a)}))}))),Object(w.a)(t.map((function(e){return e.districts.map((function(e){return e}))})).flat().filter((function(e){return e.townships.map((function(e){return e})).flat(2).some((function(e){return e.name.toLowerCase().includes(a)}))}))),Object(w.a)(t.map((function(e){return e.districts.map((function(e){return e.townships.filter((function(e){return e.name.toLowerCase().includes(a)}))}))})).flat(2))))}},value:a,InputProps:{endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(ne.a,null))}})},le=function(e,t){var n=new Set(t);return e.some((function(e){return n.has(e)}))};function ie(e){var t=e.Regions,n=Object(a.useState)(""),l=Object(g.a)(n,2),i=l[0],o=l[1],u=Object(a.useState)(t.map((function(e){return e}))),s=Object(g.a)(u,2),c=s[0],m=s[1],p=Object(a.useState)(0),f=Object(g.a)(p,2),b=f[0],E=f[1],h=function(e){le(c,e)&&e.some((function(e){return void 0===e.townships}))?m(Object(w.a)(c.filter((function(t){return!e.some((function(e){return e.id===t.id}))})))):le(c,e)&&e.some((function(e){return void 0!==e.townships}))?m(Object(w.a)(c.filter((function(t){return!e.some((function(e){return e.id===t.id}))&&!e.map((function(e){return e.townships.map((function(e){return e}))})).flat(2).some((function(e){return e.id===t.id}))})))):m([].concat(Object(w.a)(c),Object(w.a)(e)))};return r.a.createElement(d.a,{container:!0,direction:"column",component:j.a},r.a.createElement(d.a,{item:!0,container:!0,spacing:2,direction:"row"},r.a.createElement(d.a,{item:!0,xs:2,md:2,style:{textAlign:"center",margin:"auto"}},r.a.createElement(X,{selectedIndex:b,handleMenuItemClick:function(e,n){E(n),0===n?m(t.map((function(e){return e}))):1===n?m([].concat(Object(w.a)(t.map((function(e){return e}))),Object(w.a)(t.map((function(e){return e.districts.map((function(e){return e}))})).flat()))):2===n&&m([].concat(Object(w.a)(t.map((function(e){return e}))),Object(w.a)(t.map((function(e){return e.districts.map((function(e){return e}))})).flat()),Object(w.a)(t.map((function(e){return e.districts.map((function(e){return e.townships.map((function(e){return e}))}))})).flat(2))))}})),r.a.createElement(d.a,{item:!0,xs:1,md:1,style:{textAlign:"center",margin:"auto"}},r.a.createElement(_,{open:c,setSelectedIndex:E,setOpen:m,setQuery:o,Regions:t})),r.a.createElement(d.a,{item:!0,xs:3,md:6}),r.a.createElement(d.a,{item:!0,xs:6,md:3,style:{margin:"auto"}},r.a.createElement(re,{Regions:t,setQuery:o,query:i,setOpen:m}))),r.a.createElement(d.a,{item:!0,container:!0},r.a.createElement(x.a,{style:{textAlign:"center"}},r.a.createElement(v.a,{"aria-label":"table",size:"small"},r.a.createElement(I.a,null,r.a.createElement(O.a,null,"Region"),r.a.createElement(O.a,null),r.a.createElement(O.a,null,"Last Input"),r.a.createElement(O.a,null,"Number of Forms"),r.a.createElement(O.a,null,"Number of Voters"),r.a.createElement(O.a,null,"Update")),r.a.createElement(y.a,null,t.map((function(e){return r.a.createElement(Q,{key:e.id,region:e,open:c,handleOpenClick:h,areCommonElements:le,regionStyle:le(c,[e])?{display:"table-row"}:{display:"none"}})})))))))}var oe=function(){return r.a.createElement("div",null,"Error, 404 not found.")},ue=n(73),se=n(155),ce=n(153),me=[{id:1,name:"Shan state",districts:[{id:10,name:"Aunglan",townships:[{id:100,name:"Loilen",lastInput:123456,formNumbers:342456,voterNumbers:123456,update:342456}]},{id:11,name:"Jeronimo",townships:[{id:110,name:"Anthem",lastInput:881123,formNumbers:123123,voterNumbers:1e4,update:33321},{id:111,name:"Mesa",lastInput:83133,formNumbers:33322,voterNumbers:1999,update:2200}]}]},{id:2,name:"River state",districts:[{id:20,name:"Old Aunglan",townships:[{id:200,name:"Greenwich",lastInput:30865,formNumbers:22012,voterNumbers:30865,update:11002}]},{id:21,name:"New Aunglan",townships:[{id:210,name:"Nolita",lastInput:30865,formNumbers:88131,voterNumbers:30865,update:21392}]},{id:22,name:"West Aunglan",townships:[{id:220,name:"South Bay",lastInput:30865,formNumbers:10231,voterNumbers:30865,update:23001}]},{id:23,name:"East Aunglan",townships:[{id:230,name:"Bridgeport",lastInput:30865,formNumbers:33921,voterNumbers:30865,update:15400},{id:231,name:"Brockford",lastInput:30865,formNumbers:33921,voterNumbers:30865,update:15400}]}]},{id:3,name:"River state",districts:[{id:30,name:"Old Aunglan",townships:[{id:300,name:"Greenwich",lastInput:30865,formNumbers:22012,voterNumbers:30865,update:11002}]},{id:31,name:"New Aunglan",townships:[{id:310,name:"Nolita",lastInput:30865,formNumbers:88131,voterNumbers:30865,update:21392}]},{id:32,name:"West Aunglan",townships:[{id:320,name:"South Bay",lastInput:30865,formNumbers:10231,voterNumbers:30865,update:23001}]},{id:33,name:"East Aunglan",townships:[{id:330,name:"Bridgeport",lastInput:30865,formNumbers:33921,voterNumbers:30865,update:15400},{id:331,name:"Brockford",lastInput:30865,formNumbers:33921,voterNumbers:30865,update:15400}]}]},{id:4,name:"River state",districts:[{id:40,name:"Old Aunglan",townships:[{id:400,name:"Greenwich",lastInput:30865,formNumbers:22012,voterNumbers:30865,update:11002}]},{id:41,name:"New Aunglan",townships:[{id:410,name:"Nolita",lastInput:30865,formNumbers:88131,voterNumbers:30865,update:21392}]},{id:42,name:"West Aunglan",townships:[{id:420,name:"South Bay",lastInput:30865,formNumbers:10231,voterNumbers:30865,update:23001}]},{id:43,name:"East Aunglan",townships:[{id:430,name:"Bridgeport",lastInput:30865,formNumbers:33921,voterNumbers:30865,update:15400},{id:431,name:"Brockford",lastInput:30865,formNumbers:33921,voterNumbers:30865,update:15400}]}]}],pe=Object(ue.a)();function de(){return r.a.createElement(o.a,null,r.a.createElement(ce.a,{theme:pe},r.a.createElement(d.a,{container:!0,direction:"column"},r.a.createElement(d.a,{item:!0,container:!0,direction:"row"},r.a.createElement(N,null)),r.a.createElement(d.a,{item:!0,container:!0},r.a.createElement(d.a,{item:!0,xs:!1,sm:2}),r.a.createElement(d.a,{item:!0,container:!0,xs:12,sm:8,style:{paddingTop:"2rem"}},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/wiredcraft-frontend-test/",render:function(e){return r.a.createElement(ie,Object.assign({},e,{Regions:me}))}}),r.a.createElement(u.a,{exact:!0,path:"/wiredcraft-frontend-test/overall",render:function(e){return r.a.createElement(ie,Object.assign({},e,{Regions:me}))}}),r.a.createElement(u.a,{exact:!0,path:"/wiredcraft-frontend-test/specific",render:function(e){return r.a.createElement(ie,Object.assign({},e,{Regions:me.slice(0,2)}))}}),r.a.createElement(u.a,{component:oe}))),r.a.createElement(d.a,{item:!0,container:!0,xs:!1,sm:2})))))}pe=Object(se.a)(pe),i.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.672fd6b8.chunk.js.map