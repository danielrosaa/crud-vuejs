(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],a=(r("5c0b"),r("2877")),i={},c=Object(a["a"])(i,s,o,!1,null,null,null),u=c.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"adicionar"},[r("h4",{staticStyle:{"margin-bottom":"5px","text-align":"center"}},[e._v("Adicionar usuário")]),r("hr",{staticStyle:{width:"100%",margin:"0","margin-bottom":"10px"}}),r("form",[r("transition",{attrs:{name:"fade"}},[e.error?r("div",{staticClass:"error"},[e._v(" Todos os campos são necessários ")]):e._e()]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"nome"}},[e._v("Nome")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.nome,expression:"nome"}],attrs:{type:"text",id:"nome"},domProps:{value:e.nome},on:{input:function(t){t.target.composing||(e.nome=t.target.value)}}})]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"tel"}},[e._v("Telefone")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"}],attrs:{type:"text",id:"tel"},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value)}}})]),r("button",{staticClass:"success",on:{click:function(t){return t.preventDefault(),e.addUser(t)}}},[e._v("Adicionar")])],1)]),r("div",{staticClass:"lista"},[r("ul",[r("transition-group",{attrs:{duration:300,name:"remove"}},e._l(e.users,(function(e){return r("li",{key:e.id,staticClass:"remove-item"},[r("user",{attrs:{user:e}})],1)})),0)],1)])])},m=[],p=r("5530"),f=r("2f62"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user",class:e.alterado&&"alterado"},[r("div",[e._v(" "+e._s(e.user.name)+" ")]),r("div",[e._v(" "+e._s(e.user.phone)+" ")]),r("div",{staticClass:"actions"},[r("button",{staticClass:"info",on:{click:function(t){e.showEdit=!0}}},[r("fa-icon",{attrs:{icon:"edit"}})],1),r("button",{staticClass:"danger",on:{click:function(t){return e.removeUser(e.user.id)}}},[r("fa-icon",{attrs:{icon:"trash"}})],1)]),r("transition",{attrs:{name:"fade"}},[e.showEdit?r("div",{staticClass:"modal"},[r("form",[r("div",{staticClass:"fechar",on:{click:function(t){e.showEdit=!1}}},[e._v("x")]),r("h4",[e._v("Atualizar usuário")]),r("transition",{attrs:{name:"fade"}},[e.error?r("div",{staticClass:"error"},[e._v(" Todos os campos são necessários ")]):e._e()]),r("label",{attrs:{for:"nome"}},[e._v("Nome")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.nome,expression:"nome"}],attrs:{type:"text",id:"nome"},domProps:{value:e.nome},on:{input:function(t){t.target.composing||(e.nome=t.target.value)}}}),r("label",{attrs:{for:"tel"}},[e._v("Telefone")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"}],attrs:{type:"text",id:"tel"},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value)}}}),r("button",{staticClass:"success",on:{click:function(t){return t.preventDefault(),e.editUser({nome:e.nome,tel:e.tel},e.user.id)}}},[e._v(" Alterar ")])],1)]):e._e()])],1)},h=[],b=(r("b0c0"),r("ecee")),g=r("c074");b["c"].add(g["a"],g["b"]);var _={props:["user"],data:function(){return{showEdit:!1,nome:null,tel:null,alterado:!1,error:!1}},methods:{removeUser:function(e){this.remove=!0,this.$store.dispatch("removeUser",e)},editUser:function(e,t){var r=this;""!==this.nome&&""!==this.tel?(this.$store.dispatch("editUser",[e,t]),this.showEdit=!1,this.alterado=!0,this.error=!1,setTimeout((function(){r.alterado=!1}),1500)):this.error=!0}},mounted:function(){this.nome=this.user.name,this.tel=this.user.phone}},w=_,y=(r("780a"),Object(a["a"])(w,v,h,!1,null,"516c6b87",null)),x=y.exports,U={components:{User:x},computed:Object(p["a"])({},Object(f["b"])(["users"])),data:function(){return{nome:"",tel:"",error:!1}},methods:{resetForm:function(){this.nome="",this.tel=""},addUser:function(){var e={name:this.nome,phone:this.tel};""!==this.nome&&""!==this.tel?(this.$store.dispatch("addUser",e),this.resetForm(),this.error=!1):this.error=!0}},mounted:function(){this.$store.dispatch("loadUsers")}},O=U,j=(r("57fb"),Object(a["a"])(O,d,m,!1,null,"48030801",null)),C=j.exports;n["a"].use(l["a"]);var k=[{path:"/",name:"Crud",component:C}],E=new l["a"]({mode:"history",base:"/",routes:k}),P=E,S=(r("99af"),r("4160"),r("a434"),r("159b"),r("2909")),T=(r("96cf"),r("1da1")),$=r("bc3a"),N=r.n($);n["a"].use(f["a"]);var A=new f["a"].Store({state:{users:[]},mutations:{saveUsers:function(e,t){e.users=t}},actions:{loadUsers:function(e){return Object(T["a"])(regeneratorRuntime.mark((function t(){var r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,N.a.get("users");case 4:n=t.sent,s=n.data,r("saveUsers",s.reverse()),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error("Error getting users from API",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},addUser:function(e,t){var r=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,n.prev=1,n.next=4,N.a.post("users",{name:t.name,phone:t.phone});case 4:o=n.sent,a=o.data,s("saveUsers",[a].concat(Object(S["a"])(r.state.users))),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.error("Error trying to add user",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},removeUser:function(e,t){var r=this,n=e.commit;try{N.a.delete("/users/".concat(t)),this.state.users.forEach((function(e,n){e.id===t&&r.state.users.splice(n,1)})),n("saveUsers",this.state.users)}catch(s){console.error("Error trying to delete user",s)}},editUser:function(e,t){var r=e.commit,n=t[1],s=t[0];try{N.a.put("/users/".concat(n),{name:s.nome,phone:s.tel}),this.state.users.forEach((function(e){e.id===n&&(e.name=s.nome,e.phone=s.tel)})),r("saveUsers",this.state.users)}catch(o){console.error("Error trying to update user",o)}}}}),R=r("ad3d");N.a.defaults.baseURL="https://5f175a987c06c900160dc027.mockapi.io/api/v1/",n["a"].component("fa-icon",R["a"]),n["a"].config.productionTip=!1,new n["a"]({router:P,store:A,render:function(e){return e(u)}}).$mount("#app")},"57fb":function(e,t,r){"use strict";var n=r("d496"),s=r.n(n);s.a},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),s=r.n(n);s.a},6243:function(e,t,r){},"780a":function(e,t,r){"use strict";var n=r("6243"),s=r.n(n);s.a},"9c0c":function(e,t,r){},d496:function(e,t,r){}});
//# sourceMappingURL=app.f56c56eb.js.map