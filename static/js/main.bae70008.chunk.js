(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),i=n.n(r),s=n(8),a=n(3),u=(n(13),n(0));function o(e){var t=e.card,n=e.isOpened,c=e.onClick;return Object(u.jsx)("div",{className:"card ".concat(n&&"card_active"),onClick:function(){c(t)},children:n&&t.text})}var j=n(7);function l(e){var t=e.expiryTimestamp,n=e.pauseTimer,r=e.startNewGame,i=Object(j.useTimer)({expiryTimestamp:t,onExpire:function(){return console.warn("onExpire called")}}),s=i.seconds,a=i.minutes,o=i.start,l=i.restart,d=i.pause;return Object(c.useEffect)((function(){n||d()}),[n]),Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:0},children:[Object(u.jsxs)("div",{style:{fontSize:"20px",margin:"10px"},children:[Object(u.jsx)("span",{children:a}),":",Object(u.jsx)("span",{children:s})]}),Object(u.jsx)("button",{className:"App__button",onClick:function(){o(),r()},children:"\u0421\u0422\u0410\u0420\u0422"}),Object(u.jsx)("button",{className:"App__button",onClick:function(){var e=new Date;e.setSeconds(e.getSeconds()+600),l(e),r()},children:"\u041d\u041e\u0412\u0410\u042f \u0418\u0413\u0420\u0410"})]})}var d=function(e){for(var t=[],n=1;n<=e;n++)n>e/2?t.push({id:n,text:n-e/2}):t.push({id:n,text:n});return t};n(15);function b(){var e=Object(c.useState)(16),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),j=Object(a.a)(i,2),b=j[0],f=j[1],p=Object(c.useState)([]),m=Object(a.a)(p,2),x=m[0],O=m[1],h=Object(c.useState)(!0),v=Object(a.a)(h,2),g=v[0],S=v[1],y=new Date;y.setSeconds(y.getSeconds()+600);var N=d(n);return Object(c.useEffect)((function(){1===b.length&&setTimeout((function(){return f([])}),5e3),b.length>1&&function(){if(b[0].text===b[1].text){var e=x.filter((function(e){return e.text!==b[0].text}));setTimeout((function(){return O(e)}),2e3)}2!==x.length&&setTimeout((function(){return f([])}),1e3)}()}),[b]),Object(c.useEffect)((function(){0===x.length&&S(!1)}),[x]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Memory Game"}),Object(u.jsx)("div",{className:"App__btn-group",children:Object(u.jsx)(l,{pauseTimer:g,expiryTimestamp:y,startNewGame:function(){S(!0);var e=function(e){return e.sort((function(){return Math.random()-.5}))}(N);O(e)}})}),Object(u.jsxs)("label",{children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a",Object(u.jsx)("input",{className:"App__number",type:"number",min:"4",max:"50",value:n,onChange:function(e){return function(e){r(e.target.value)}(e)}})]}),Object(u.jsxs)("ul",{className:"cards-list",children:[x.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(o,{isOpened:b.some((function(t){return t.id===e.id})),card:e,onClick:function(e){return function(e){b.length<2&&f((function(t){return[].concat(Object(s.a)(t),[e])}))}(e)}},e.id)})}))," "]})]})}var f=document.getElementById("root");i.a.render(Object(u.jsx)(c.StrictMode,{children:Object(u.jsx)(b,{})}),f)}},[[16,1,2]]]);
//# sourceMappingURL=main.bae70008.chunk.js.map