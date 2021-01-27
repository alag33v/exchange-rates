(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{48:function(n,e,t){"use strict";t.r(e);var c=t(1),r=t(0),a=t.n(r),i=t(18),o=t.n(i),s=t(13),l=t(5),p=t(30),d=t(23),x=t.n(d),u=t(31),b=t(26),f=t(9),j="exchange/GET_RATES",h="exchange/GET_COUNTRIES",g="exchange/GET_DATE",O="exchange/CHANGE_CURRENCY",y="exchange/FAVORITE_CURRENCIES",m={rates:{},countries:[],base:"CAD",date:"",favorite:[]},v=Object(s.c)({exchange:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(f.a)(Object(f.a)({},n),{},{rates:e.payload});case h:return Object(f.a)(Object(f.a)({},n),{},{countries:Object(b.a)(e.payload)});case g:return Object(f.a)(Object(f.a)({},n),{},{date:e.payload});case O:return Object(f.a)(Object(f.a)({},n),{},{base:e.payload});case y:return Object(f.a)(Object(f.a)({},n),{},{favorite:[].concat(Object(b.a)(n.favorite),[e.payload])});default:return n}}}),w=t(17),_=t(3),k=t(10),E=t(11);function N(){var n=Object(k.a)(["\n  h1 {\n    font-size: 36px;\n    text-align: center;\n  }\n\n  ul {\n    display: flex;\n    justify-content: space-around;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  a {\n    font-size: 20px;\n    text-transform: uppercase;\n    text-decoration: none;\n    display: inline-block;\n    color: #000;\n    padding: 20px 30px;\n    margin: 10px 20px;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    letter-spacing: 2px;\n\n    background-size: 200% auto;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n    transition: 0.5s;\n\n    &:hover {\n      color: #fff;\n      background-color: #4830f0;\n    }\n\n    &:active {\n      background-color: #2e10f0;\n    }\n  }\n\n  .active {\n    color: #fff;\n    background-color: #4830f0;\n  }\n"]);return N=function(){return n},n}var z=E.b.header(N()),S=function(){return Object(c.jsxs)(z,{children:[Object(c.jsx)("h1",{children:"Exchange Rates"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)(w.b,{to:"/exchange-rates",children:Object(c.jsx)("li",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442"})}),Object(c.jsx)(w.b,{to:"/calculator",children:Object(c.jsx)("li",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0430\u043b\u044e\u0442"})})]})]})};function T(){var n=Object(k.a)(["\n  .favorites {\n    display: flex;\n    align-items: center;\n    margin: 25px 0;\n\n    h3 {\n      font-size: 20px;\n      margin: 0 10px;\n    }\n\n    &__image {\n      width: 18px;\n      display: inline-block;\n    }\n\n    ul {\n      display: flex;\n      flex-wrap: wrap;\n      padding: 0;\n    }\n\n    &__item {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 16px;\n\n      width: 80px;\n      margin: 5px;\n      padding: 5px;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n    }\n  }\n\n  h2 {\n    font-size: 28px;\n    text-align: center;\n  }\n\n  .country {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0;\n\n    li {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: 20px;\n      font-weight: 700;\n      list-style: none;\n      width: 180px;\n      padding: 15px;\n      margin: 10px 15px;\n      border: 1px solid #ccc;\n      border-radius: 10px;\n      position: relative;\n    }\n\n    span {\n      display: block;\n      margin: 5px 0;\n    }\n\n    button {\n      font-size: 16px;\n      text-decoration: none;\n      color: #000;\n      display: inline-block;\n      border: 1px solid #ccc;\n      border-radius: 8px;\n      padding: 10px 30px;\n      margin: 10px 20px;\n      position: relative;\n      overflow: hidden;\n      transition: 0.2s ease-in-out;\n      cursor: pointer;\n      outline: none;\n\n      &::before {\n        content: '';\n        background: linear-gradient(\n          90deg,\n          rgba(255, 255, 255, 0.1),\n          rgba(255, 255, 255, 0.5)\n        );\n        height: 50px;\n        width: 50px;\n        position: absolute;\n        top: -8px;\n        left: -75px;\n        transform: skewX(-45deg);\n      }\n\n      &:hover {\n        color: #fff;\n        background: #4830f0;\n      }\n\n      &:hover:before {\n        left: 150px;\n        transition: 0.5s ease-in-out;\n      }\n    }\n\n    img {\n      width: 20px;\n      display: inline-block;\n      top: 10px;\n      right: 10px;\n      position: absolute;\n      cursor: pointer;\n    }\n\n    .active {\n      background-color: #00fa9a;\n\n      button {\n        color: #fff;\n        background: #4830f0;\n        border: 1px solid #000;\n      }\n    }\n  }\n"]);return T=function(){return n},n}var R=E.b.div(T()),C=t.p+"static/media/star.de82f684.svg",D=function(){var n=Object(l.c)((function(n){return n.exchange.countries})),e=Object(l.c)((function(n){return n.exchange.base})),t=Object(l.c)((function(n){return n.exchange.favorite})),r=Object(l.b)(),a=function(n){r(function(n){return{type:O,payload:n}}(n))},i=function(n){r(function(n){return{type:y,payload:n}}(n))};return Object(c.jsxs)(R,{children:[Object(c.jsxs)("div",{className:"favorites",children:[Object(c.jsx)("img",{className:"favorites__image",src:C,alt:"star"}),Object(c.jsx)("h3",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435:"}),Object(c.jsx)("ul",{children:t.map((function(n,e){return Object(c.jsx)("li",{className:"favorites__item",children:n},e)}))})]}),Object(c.jsx)("h2",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442"}),Object(c.jsx)("ul",{className:"country",children:n.map((function(n,t){return Object(c.jsxs)("li",{className:e===n?"active":"",children:[Object(c.jsx)("span",{children:n}),Object(c.jsx)("button",{onClick:function(){return a(n)},children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"},t),Object(c.jsx)("img",{src:C,alt:"star",onClick:function(){return i(n)}})]},t)}))})]})},I=t(35);function A(){var n=Object(k.a)(["\n  h2 {\n    font-size: 28px;\n    text-align: center;\n    margin-top: 50px;\n  }\n\n  .base-currency,\n  .get {\n    font-size: 20px;\n    font-weight: 400;\n    text-align: center;\n    list-style: none;\n    width: 400px;\n    padding: 15px 20px;\n    margin: 15px auto;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n\n    span {\n      font-weight: 700;\n    }\n  }\n\n  form {\n    text-align: center;\n  }\n\n  .currency-selection {\n    display: flex;\n    justify-content: center;\n\n    input {\n      font-size: 20px;\n      text-align: center;\n      display: block;\n      width: 240px;\n      border: 1px solid #ccc;\n      padding: 10px 20px;\n    }\n\n    select {\n      width: 60px;\n      border: 1px solid #ccc;\n      border-left: none;\n    }\n  }\n\n  button {\n    font-size: 16px;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-decoration: none;\n    letter-spacing: 2px;\n    color: #000;\n    display: inline-block;\n    width: 300px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    padding: 10px 30px;\n    margin: 15px 20px;\n    transition: 0.2s ease-in-out;\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n      color: #fff;\n      background: #4830f0;\n    }\n\n    &:active {\n      background-color: #2e10f0;\n    }\n  }\n\n  h4 {\n    font-size: 20px;\n    text-align: center;\n  }\n"]);return A=function(){return n},n}var U=E.b.header(A()),X=function(){var n=Object(r.useState)(0),e=Object(I.a)(n,2),t=e[0],a=e[1],i=Object(l.c)((function(n){return n.exchange.rates})),o=Object(l.c)((function(n){return n.exchange.countries})),s=Object(l.c)((function(n){return n.exchange.date})),p=Object(l.c)((function(n){return n.exchange.base}));return Object(c.jsxs)(U,{children:[Object(c.jsxs)("h2",{children:["\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043e\u0431\u043c\u0435\u043d\u0430 \u043d\u0430 ",s]}),Object(c.jsxs)("div",{className:"base-currency",children:["\u042f \u0445\u043e\u0447\u0443 \u043e\u0431\u043c\u0435\u043d\u044f\u0442\u044c \u0432\u0430\u043b\u044e\u0442\u0443 ",Object(c.jsx)("span",{children:p})]}),Object(c.jsx)("div",{className:"get",children:"\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"}),Object(c.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.elements["count-currency"].value,t=n.target.elements["type-currency"].value,c=e*i[p],r=1*i[t];a(c/r)},children:[Object(c.jsxs)("div",{className:"currency-selection",children:[Object(c.jsx)("input",{type:"number",name:"count-currency",min:"0",step:"any"}),Object(c.jsx)("select",{name:"type-currency",children:o.map((function(n,e){return Object(c.jsx)("option",{value:n,children:n},e)}))})]}),Object(c.jsx)("button",{type:"submit",children:"\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c"})]}),Object(c.jsxs)("h4",{children:["\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",t.toFixed(2)," ",p]})]})};function G(){var n=Object(k.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, \n  *::before, \n  *::after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Open Sans', sans-serif;\n    max-width: 1170px;\n    margin: auto;\n    padding: 0 15px;\n    min-height: 100vh;\n  }\n"]);return G=function(){return n},n}var V=Object(E.a)(G()),F=function(){var n=Object(l.b)();return Object(r.useEffect)((function(){n(function(){var n=Object(u.a)(x.a.mark((function n(e){var t,c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.exchangeratesapi.io/latest");case 2:return t=n.sent,n.next=5,t.json();case 5:c=n.sent,e((i=c.rates,{type:j,payload:i})),e((a=Object.keys(c.rates),{type:h,payload:a})),e((r=c.date,{type:g,payload:r}));case 9:case"end":return n.stop()}var r,a,i}),n)})));return function(e){return n.apply(this,arguments)}}())}),[n]),Object(c.jsxs)(w.a,{children:[Object(c.jsx)(V,{}),Object(c.jsx)(S,{}),Object(c.jsxs)(_.c,{children:[Object(c.jsx)(_.a,{exact:!0,path:"/exchange-rates",component:D}),Object(c.jsx)(_.a,{exact:!0,path:"/calculator",component:X})]})]})},J=Object(s.e)(v,Object(s.d)(Object(s.a)(p.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(Object(c.jsx)(l.a,{store:J,children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(F,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.09aaaa72.chunk.js.map