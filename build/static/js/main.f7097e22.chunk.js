(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),u=(n(20),n(4)),l=n(2),i=n(3),m=n.n(i),f=function(e){var t=e.change,n=e.value,a=e.list;return o.a.createElement("div",null,"filter shown with: ",o.a.createElement("input",{onChange:t,value:n}),o.a.createElement("ul",null,a.map((function(e){return o.a.createElement("li",{key:e.number},e.name," ",o.a.createElement("strong",null,e.number))}))))},s=function(e){var t=e.submit,n=e.nameOnChange,a=e.nameData,r=e.numberOnChange,c=e.numberData;return o.a.createElement("form",{onSubmit:t},"name: ",o.a.createElement("input",{onChange:n,value:a}),o.a.createElement("div",null,"number: ",o.a.createElement("input",{onChange:r,value:c})),o.a.createElement("button",{type:"submit"},"add"))},d=function(e){return o.a.createElement("li",{key:e.key}," ",e.data.name," ",o.a.createElement("strong",null,e.data.number),o.a.createElement("button",{onClick:e.handleDelete},"Delete"))},h=function(e){var t=e.message;return null===t?null:o.a.createElement("div",{className:"addNotif"},t)},b=function(e){var t=e.message;return null===t?null:o.a.createElement("div",{className:"alertNotif"},t)},g="/api/persons",v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),v=i[0],E=i[1],p=Object(a.useState)(""),O=Object(l.a)(p,2),y=O[0],w=O[1],j=Object(a.useState)(""),k=Object(l.a)(j,2),D=k[0],C=k[1],S=Object(a.useState)([]),T=Object(l.a)(S,2),N=T[0],I=T[1],x=Object(a.useState)(null),B=Object(l.a)(x,2),J=B[0],W=B[1],A=Object(a.useState)(null),M=Object(l.a)(A,2),P=M[0],$=M[1];Object(a.useEffect)((function(){m.a.get(g).then((function(e){r(e.data)})).catch((function(){W("Data not found in directory"),setTimeout((function(){return W(null)}),3e3)}))}),[]);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(h,{message:J}),o.a.createElement(b,{message:P}),o.a.createElement(f,{change:function(e){if(console.log(e.target.value),C(e.target.value),0===D.length)I([]);else{var t=e.target.value,a=n.filter((function(e){return e.name.includes(t)})).filter((function(e){return!N.includes(e)}));I(a)}},value:D,list:N}),o.a.createElement(s,{submit:function(e){e.preventDefault();var t=v,a=y,o=[],c=[],l={name:v,number:y};if(""!==t.length&&""!==a){if(o=n.filter((function(e){return e.name===t})),c=n.filter((function(e){return e.number===a})),0===o.length&&0===c.length)m.a.post(g,l).then((function(e){return e.data})).then((function(e){W('Contact "'.concat(l.name,'" added to directory.')),setTimeout((function(){return W(null)}),3e3),r(n.concat(l))})).catch((function(){W("Data not found in directory"),setTimeout((function(){W(null)}),3e3)}));else{var i=0!==o.length;if(0!==c.length&&window.alert("".concat(a," already exists in the database")),i)if(window.confirm("".concat(t," is already added to the phonebook, replace the old number with the new one?"))){var f=n.find((function(e){return e.name===v})),s=Object(u.a)(Object(u.a)({},f),{},{number:y});m.a.put("".concat(g,"/").concat(f.id),s).then((function(e){return r(n.map((function(t){return t.name===l.name?e.data:t})))})).catch((function(){W("Data not found in directory"),setTimeout((function(){return W(null)}),3e3)}))}}E(""),w("")}},nameOnChange:function(e){console.log(e.target.value),E(e.target.value)},nameData:v,numberOnChange:function(e){console.log(e.target.value),w(e.target.value)},numberData:y}),o.a.createElement("h2",null,"Numbers"),o.a.createElement("ul",null,n.map((function(e){return o.a.createElement(d,{key:e.id,data:e,handleDelete:function(){return function(e){var t=n.filter((function(t){return t.id!==e.id}));window.confirm("Are you sure you want to delete ".concat(e.name))&&(console.log(t),r(t),m.a.delete("".concat(g,"/").concat(e.id)).then((function(){$("Contact ".concat(e.name," deleted from directory")),setTimeout((function(){return $(null)}),3e3)})).catch((function(){console.log("Information already removed from directory."),$("Information for ".concat(e.name," has already been removed from the directory")),setTimeout((function(){$(null)}),3e3)})))}(e)}})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f7097e22.chunk.js.map