(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(20),n(2)),l=n(14),i=n(3),s=n.n(i),m="/api/persons",f=function(){return s.a.get(m).then((function(e){return e.data}))},p=function(e){return s.a.post("".concat(m),e).then((function(e){return e.data})).catch((function(e){throw console.log(e.response.data),e}))},d=function(e){return s.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},b=function(e,t){return s.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){var t=e.errorMessage,n=e.message,a=e.show;return""===n&&""===t?null:""!==t?r.a.createElement("div",null,a&&r.a.createElement("div",{className:"errormessage"}," ",t," ")):""!==n?r.a.createElement("div",null,a&&r.a.createElement("div",{className:"message"}," ",n," ")):void 0};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=function(e){var t=e.people,n=e.setPeople,o=e.show,c=e.setShow,i=Object(a.useState)(""),s=Object(u.a)(i,2),m=s[0],f=s[1],d=Object(a.useState)(""),g=Object(u.a)(d,2),O=g[0],E=g[1],w=Object(a.useState)(""),j=Object(u.a)(w,2),y=j[0],P=j[1],S=Object(a.useState)(""),k=Object(u.a)(S,2),C=k[0],D=k[1];return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:m,onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:O,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault();var a={name:m,number:O};if(t.some((function(e){return e.name===m}))){if(window.confirm("".concat(m," is already in the phonebook, replace existing number?"))){var r=t.find((function(e){return e.name===m})),o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{number:O});b(r.id,o).then((function(e){n(t.map((function(t){return t.name!==m?t:e}))),console.log(o,e)})).catch((function(e){console.log("ilmeni virhe:",e.message),D("".concat(m," was already deleted from server"),e.message),c(!0),setTimeout((function(){D(""),c(!1)}),3e3),n(t.filter((function(e){return e.name!==m})))}))}f(""),E("")}else p(a).then((function(e){n(t.concat(e)),P("Added: ".concat(m)),c(!0),setTimeout((function(){P(""),c(!1)}),3e3)})).catch((function(e){console.log("ilmeni virhe:",e.message),D(e.message),c(!0),setTimeout((function(){D(""),c(!1)}),3e3)})),f(""),E("")}},"add")),r.a.createElement(h,{message:y,errorMessage:C,show:o})))},O=function(e){var t=e.person,n=e.deletePerson;return r.a.createElement("p",null,t.name," ",t.number," ",r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(t.name," ?"))&&n()}},"delete"))},E=function(e){var t=e.people,n=e.setPeople,o=Object(a.useState)(!0),c=Object(u.a)(o,2),l=c[0],i=c[1],s=Object(a.useState)(""),m=Object(u.a)(s,2),f=m[0],p=m[1],b=l?t:t.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())})),h=function(e){d(e).then(n(t.filter((function(t){return t.id!==e}))))};return r.a.createElement("div",null,r.a.createElement("div",null,"filter shown names by ",r.a.createElement("input",{value:f,onChange:function(e){p(e.target.value),i(!1)}})),r.a.createElement("div",null,b.map((function(e){return r.a.createElement(O,{key:e.name,person:e,deletePerson:function(){return h(e.id)}})}))))},w=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),l=Object(u.a)(c,2),i=l[0],s=l[1];return Object(a.useEffect)((function(){f().then((function(e){o(e),console.log("data vastaanotettu ja puhelinluettelo alustettu")}))}),[]),console.log("palautui",n.length,"henkil\xf6\xe4"),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("h3",null,"Numbers"),r.a.createElement(E,{people:n,setPeople:o,show:i,setShow:s}),r.a.createElement("h3",null,"Add new name"),r.a.createElement(g,{people:n,setPeople:o,show:i,setShow:s}))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f82882f4.chunk.js.map