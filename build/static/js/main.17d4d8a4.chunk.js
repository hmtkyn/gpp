(this.webpackJsonpgpp=this.webpackJsonpgpp||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/icon-warning.dbbe10f5.svg"},29:function(e,t,n){e.exports=n.p+"static/media/icon-warning-close.dd30afdd.svg"},33:function(e,t,n){e.exports=n.p+"static/media/account_circle-24px.8693d46b.svg"},34:function(e,t,n){e.exports=n.p+"static/media/control-up-24px.254cd103.svg"},35:function(e,t,n){e.exports=n.p+"static/media/control-down-24px.837f7245.svg"},36:function(e,t,n){e.exports=n.p+"static/media/control-right-24px.d29587a8.svg"},37:function(e,t,n){e.exports=n.p+"static/media/control-left-24px.5ad11dc4.svg"},38:function(e,t,n){e.exports=n.p+"static/media/control-fill-24px.798e613f.svg"},39:function(e,t,n){e.exports=n.p+"static/media/control-delete-24px.a0fb6549.svg"},40:function(e,t,n){e.exports=n.p+"static/media/icon-up-24px.254cd103.svg"},41:function(e,t,n){e.exports=n.p+"static/media/icon-right-24px.67bf7c32.svg"},42:function(e,t,n){e.exports=n.p+"static/media/icon-down-24px.a926fe25.svg"},43:function(e,t,n){e.exports=n.p+"static/media/icon-left-24px.8819f158.svg"},44:function(e,t,n){e.exports=n.p+"static/media/icon-fill-24px.af194c1b.svg"},45:function(e,t,n){e.exports=n(80)},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),o=n.n(r),i=n(7),l=(n(50),n(51),n(3)),s=n(5),u={user:{name:"",country:"",totalTime:""}},m=Object(a.createContext)(u),d="set_user",f=function(e,t){switch(t.type){case d:return Object(s.a)({},e,{user:t.payload});default:return e}},p=function(e){var t=e.children,n=Object(a.useReducer)(f,u),r=Object(l.a)(n,2),o=r[0],i=r[1];var s={user:o.user,setUser:function(e){i({type:d,payload:e})}};return c.a.createElement(m.Provider,{value:s},t)},v=n(11),E={question:{id:"",object:"",title:"",answer:[]},answer:[],totalTime:{second:0,minute:0,hour:0}},b=Object(a.createContext)(E),g="set_answer",h="add_answer",w="set_question",j="set_totaltime",x=function(e,t){switch(t.type){case g:return Object(s.a)({},e,{answer:t.payload});case h:return Object(s.a)({},e,{answer:[].concat(Object(v.a)(e.answer),[t.payload])});case w:return Object(s.a)({},e,{question:t.payload});case j:return Object(s.a)({},e,{totalTime:t.payload});default:return e}},y=function(e){var t=e.children,n=Object(a.useReducer)(x,E),r=Object(l.a)(n,2),o=r[0],i=r[1];return c.a.createElement(b.Provider,{value:{answer:o.answer,setAnswer:function(e){i({type:g,payload:e})},addAnswer:function(e){i({type:h,payload:e})},question:o.question,setQuestion:function(e){i({type:w,payload:e})},totalTime:o.totalTime,setTotalTime:function(e){i({type:j,payload:e})}}},t)},O=n(28),N=n.n(O),k=n(29),C=n.n(k);n(52);var S=function(){return c.a.createElement("div",{className:"notice notice-warning"},c.a.createElement("div",{className:"notice-header"},c.a.createElement("img",{src:N.a,alt:"icon"}),c.a.createElement("h3",null,"Uyar\u0131"),c.a.createElement("img",{src:C.a,alt:"icon"})),c.a.createElement("p",null,"L\xfctfen bu uygulamay\u0131 \xe7\xf6z\xfcn\xfcrl\xfc\u011f\xfc minimum ",c.a.createElement("b",null,"600x600")," piksel olan cihazlarda kullan\u0131n\u0131z."))};n(53);var T=function(){var e=Object(a.useContext)(m),t=e.user,n=e.setUser,r=Object(a.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],d=Object(a.useState)(""),f=Object(l.a)(d,2),p=f[0],v=f[1];return t.name=s,t.country=p,c.a.createElement("div",{id:"login"},c.a.createElement(S,null),c.a.createElement("div",{className:"login-form"},c.a.createElement("h1",null,"GPP Application"),c.a.createElement("h3",null,"Welcome"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(t)}},c.a.createElement("div",{className:"form-row"},c.a.createElement("label",{htmlFor:"#login-name"},"Name"),c.a.createElement("input",{required:!0,type:"text",id:"login-name",defaultValue:"",onChange:function(e){return u(e.target.value)},placeholder:"Name"})),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",{htmlFor:"#login-country"},"Country"),c.a.createElement("select",{required:!0,id:"login-country",onChange:function(e){return v(e.target.value)}},c.a.createElement("option",{defaultValue:"0"},"Select a Country"),c.a.createElement("option",{defaultValue:"Turkey"},"Turkey"),c.a.createElement("option",{defaultValue:"Canada"},"Canada"),c.a.createElement("option",{defaultValue:"BAE"},"BAE"),c.a.createElement("option",{defaultValue:"USA"},"USA"))),s.length>0&&p.length>0?c.a.createElement("div",{className:"form-row button"},c.a.createElement(i.b,{to:"/question"},c.a.createElement("button",{id:"login-button"},"Sign in"))):c.a.createElement("div",{className:"form-row button disable"},c.a.createElement(i.b,{to:"/question"},c.a.createElement("button",{id:"login-button",disabled:!0},"Sign in"))))))},q=n(16),A=n.n(q),F=n(31),W=n(32),P=n.n(W),U=(n(77),n(33)),B=n.n(U);n(78);var V=function(e){var t=e.name,n=e.hour,a=e.minute,r=e.second;return c.a.createElement("div",{id:"header"},c.a.createElement("div",{className:"total-time"},"Total time = ",n,":",a,":",r),c.a.createElement("div",{className:"account"},c.a.createElement("img",{src:B.a,alt:"Account Icon"}),c.a.createElement("span",null,t)))},_=function(e){var t=e.object,n=e.title;return c.a.createElement("div",{className:"question-area"},c.a.createElement("div",{className:"object"},c.a.createElement("img",{src:t,alt:n})),c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,n)))},I=n(34),L=n.n(I),z=n(35),R=n.n(z),Y=n(36),D=n.n(Y),J=n(37),Q=n.n(J),G=n(38),M=n.n(G),$=n(39),H=n.n($);n(79);var K=function(){var e=Object(a.useContext)(b),t=e.setAnswer,n=e.addAnswer,r=e.setTotalTime,o=e.question,i=e.answer,u=Object(a.useState)({second:0,minute:0,hour:0}),m=Object(l.a)(u,2),d=m[0],f=m[1],p=Object(a.useState)(!1),E=Object(l.a)(p,2),g=E[0],h=E[1],w=Object(a.useState)(!1),j=Object(l.a)(w,2),x=j[0],y=j[1],O=Object(a.useState)([]),N=Object(l.a)(O,2),k=N[0],C=N[1],S=Object(a.useState)(!1),T=Object(l.a)(S,2),q=T[0],A=T[1];return Object(a.useEffect)((function(){var e;return g&&(e=setInterval((function(){f((function(e){return Object(s.a)({},e,{second:e.second+1})})),59===d.second&&(f((function(e){return Object(s.a)({},e,{second:0})})),f((function(e){return Object(s.a)({},e,{minute:e.minute+1})})),59===d.minute&&(f((function(e){return Object(s.a)({},e,{minute:0})})),f((function(e){return Object(s.a)({},e,{hour:e.hour+1})})))),r(d)}),1e3)),function(){return clearInterval(e)}}),[g,d]),c.a.createElement("div",{id:"controls"},i.length>0&&x&&d.second>0?c.a.createElement("div",{id:"answer-success",className:q?"show":"hide"},"You have successfully completed in ",d.hour<10?"0"+d.hour:d.hour,":",d.minute<10?"0"+d.minute:d.minute,":",d.second<10?"0"+d.second:d.second," time."):c.a.createElement("div",{id:"answer-error",className:q?"show":"hide"},"You failed in ",d.hour<10?"0"+d.hour:d.hour,":",d.minute<10?"0"+d.minute:d.minute,":",d.second<10?"0"+d.second:d.second," time."),g?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"actions vertical-line box"},c.a.createElement("button",{className:"control-vertical",id:"delete",onClick:function(){return C([]),t([])}},c.a.createElement("img",{src:H.a,alt:"delete"}))),c.a.createElement("div",{className:"directions vertical-line box"},c.a.createElement("div",{className:"top"},c.a.createElement("button",{className:"control-vertical",id:"up",onClick:function(){return C([].concat(Object(v.a)(k),[C("up")])),n("up")}},c.a.createElement("img",{src:L.a,alt:"up"}))),c.a.createElement("div",{className:"bottom"},c.a.createElement("button",{className:"control-vertical",id:"left",onClick:function(){return n("left")}},c.a.createElement("img",{src:Q.a,alt:"left"})),c.a.createElement("button",{className:"control-vertical",id:"down",onClick:function(){return n("down")}},c.a.createElement("img",{src:R.a,alt:"down"})),c.a.createElement("button",{className:"control-vertical",id:"right",onClick:function(){return n("right")}},c.a.createElement("img",{src:D.a,alt:"right"})))),c.a.createElement("div",{className:"fills vertical-line box"},c.a.createElement("button",{className:"control-vertical",id:"fill",onClick:function(){return n("fill")}},c.a.createElement("img",{src:M.a,alt:"fill"}))),c.a.createElement("div",{className:"next box"},c.a.createElement("button",{className:"primary-button",id:"next",onClick:function(){h(!1),r({hour:0,minute:0,second:0}),y(function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(o.answer,i)),A(!0)}},"Bitir"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"primary-button",onClick:function(){h(!g),A(!1)}},"Start")))};var X=function(e){var t=e.key,n=e.action,a=e.step,r=e.object,o=e.title;return c.a.createElement("div",{key:t,className:"column"},c.a.createElement("div",{className:"icon icon-"+n},c.a.createElement("span",null,a,"."),c.a.createElement("img",{src:r,alt:o})))},Z=n(40),ee=n.n(Z),te=n(41),ne=n.n(te),ae=n(42),ce=n.n(ae),re=n(43),oe=n.n(re),ie=n(44),le=n.n(ie),se=function(e){var t=e.action,n=e.step;switch(t){case"fill":return c.a.createElement(X,{object:le.a,action:t,step:n,title:"fill"});case"up":return c.a.createElement(X,{object:ee.a,action:t,step:n,title:"up"});case"right":return c.a.createElement(X,{object:ne.a,action:t,step:n,title:"right"});case"down":return c.a.createElement(X,{object:ce.a,action:t,step:n,title:"down"});case"left":return c.a.createElement(X,{object:oe.a,action:t,step:n,title:"left"});default:return""}};var ue=function(){var e=Object(a.useContext)(m).user,t=Object(a.useContext)(b),n=t.question,r=t.answer,o=t.setQuestion,i=t.totalTime;return Object(a.useEffect)((function(){function e(){return(e=Object(F.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P()("/api/questions.json");case 3:return t=e.sent,n=t.data[0],e.abrupt("return",o(n));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(V,{name:e.name,hour:i.hour<10?"0"+i.hour:i.hour,minute:i.minute<10?"0"+i.minute:i.minute,second:i.second<10?"0"+i.second:i.second}),c.a.createElement(S,null),c.a.createElement("div",{className:"question"},c.a.createElement(_,{object:n.object,title:n.title}),c.a.createElement("div",{className:"answer",id:"answer"},c.a.createElement("span",{className:"label"},"Your Answer:"),c.a.createElement("div",{id:"answer-area"},r.length>0?r.map((function(e,t){return c.a.createElement(se,{action:e,key:t,step:t+1})})):""))),c.a.createElement(K,null))},me=n(1);var de=function(){return c.a.createElement(p,null,c.a.createElement(y,null,c.a.createElement(me.c,null,c.a.createElement(me.a,{path:"/",component:T,exact:!0}),c.a.createElement(me.a,{path:"/question",component:ue,exact:!0}))))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(de,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):pe(t,e)}))}}(),ve()}},[[45,1,2]]]);
//# sourceMappingURL=main.17d4d8a4.chunk.js.map