(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),s=t(3),u=t(6),o=t(2),i=t(4),a=t.n(i),l="/api/persons",d=function(){return a.a.get(l).then((function(e){return e.data}))},j=function(e){return a.a.post(l,e).then((function(e){return e.data}))},f=function(e){var n="".concat(l,"/").concat(e);return a.a.delete(n).then((function(e){return e.data}))},b=function(e){var n="".concat(l,"/").concat(e.id);return a.a.put(n,e).then((function(e){return e.data}))},h=(t(38),t(0)),m=function(e){var n=e.numbers,t=e.persons,c=e.setPersons,r=e.setErrorMessage;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(O,{number:e,deleteNumber:function(){return n=e.id,s=e.name,console.log("Deleting "+n),void(window.confirm("Delete ".concat(s," ?"))&&(f(n).then((function(e){c(t.filter((function(e){return e.id!==n}))),r("Deleted ".concat(s," successfully"))})).catch((function(e){c(t.filter((function(e){return e.id!==n}))),r("".concat(s," was already removed from server"))})),setTimeout((function(){r(null)}),5e3),d().then((function(e){c(e)}))));var n,s}},e.id)}))})},O=function(e){var n=e.number,t=e.deleteNumber;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("p",{children:[n.name," ",n.number," ",Object(h.jsx)("button",{onClick:t,children:"delete"})]},n.name)})},v=function(e){var n=e.filter,t=e.setNewFilter;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{value:n,onChange:function(e){t(e.target.value)}})]})},p=function(e){var n=e.persons,t=e.setPersons,c=e.newName,r=e.setNewName,s=e.newPhone,o=e.setNewPhone,i=e.setErrorMessage,a=function(){return n.some((function(e){return e.name===c}))},l=function(e,n,t){j(t).then((function(c){n(e.concat(c)),i("Added ".concat(t.name," successfully"))})),setTimeout((function(){i(null)}),5e3)},d=function(){if(window.confirm("".concat(c," is already added to phonebook, replace the old number with a new one?"))){var e=n.find((function(e){return e.name===c})),r=Object(u.a)(Object(u.a)({},e),{},{number:s}),o=e.id;b(r).then((function(e){t(n.map((function(n){return n.id!==o?n:e}))),i("Updated ".concat(r.name," successfully"))})),setTimeout((function(){i(null)}),5e3)}};return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var u={name:c,number:s};a()?d():l(n,t,u),r(""),o("")},children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:c,onChange:function(e){r(e.target.value)}})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:s,onChange:function(e){o(e.target.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.message;return console.log(n),null===n?null:(console.log(n.includes("successfully")),n.includes("successfully")?Object(h.jsx)("div",{className:"success",children:n}):Object(h.jsx)("div",{className:"error",children:n}))},w=function(){var e=Object(o.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),u=Object(s.a)(r,2),i=u[0],a=u[1],l=Object(o.useState)(""),j=Object(s.a)(l,2),f=j[0],b=j[1],O=Object(o.useState)(""),w=Object(s.a)(O,2),g=w[0],N=w[1],y=Object(o.useState)(null),P=Object(s.a)(y,2),E=P[0],S=P[1];Object(o.useEffect)((function(){d().then((function(e){c(e)}))}),[]),console.log("render",t.length,"persons");var k=""===g?t:t.filter((function(e){return e.name.includes(g)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(x,{message:E}),Object(h.jsx)(v,{filter:g,setNewFilter:N}),Object(h.jsx)("h3",{children:"add a new"}),Object(h.jsx)(p,{persons:t,setPersons:c,newName:i,setNewName:a,newPhone:f,setNewPhone:b,setErrorMessage:S}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(m,{numbers:k,persons:t,setPersons:c,setErrorMessage:S})]})};r.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c7206783.chunk.js.map