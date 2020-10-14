(function(t){function e(e){for(var n,c,i=e[0],s=e[1],u=e[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todo-list/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},4864:function(t,e,o){"use strict";var n=o("c1a9"),r=o.n(n);r.a},5590:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("AddTodo"),o("FilterTodos"),o("Todos")],1)])},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Todos")]),t._m(0),o("div",{staticClass:"todos"},t._l(t.allTodos,(function(e){return o("div",{key:e.id,staticClass:"todo",class:{"is-complete":e.completed},on:{dblclick:function(o){return t.onDoubleClick(e)}}},[t._v(" "+t._s(e.title)+" "),o("i",{staticClass:"fas fa-trash-alt",on:{click:function(o){return t.deleteTodo(e.id)}}})])})),0)])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"legend"},[o("span",[t._v("Double click to mark as complete")]),o("span",[o("span",{staticClass:"incomplete-box"}),t._v(" = Incomplete ")]),o("span",[o("span",{staticClass:"complete-box"}),t._v(" = Complete ")])])}],s=o("5530"),u=o("2f62"),d={name:"Todos",methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["fetchTodos","deleteTodo","updateTodo"])),{},{onDoubleClick:function(t){var e={title:t.title,id:t.id,completed:!t.completed};this.updateTodo(e)}}),computed:Object(u["c"])(["allTodos"]),created:function(){this.fetchTodos()}},l=d,p=(o("ee12"),o("2877")),f=Object(p["a"])(l,c,i,!1,null,"46948004",null),m=f.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Add Todo")]),o("div",{staticClass:"add"},[o("form",{on:{submit:t.onSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{attrs:{type:"submit",value:"submit"}})])])])},h=[],b={name:"AddTodo",data:function(){return{title:""}},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["addTodo"])),{},{onSubmit:function(t){t.preventDefault(),this.addTodo(this.title)}})},T=b,_=(o("9659"),Object(p["a"])(T,v,h,!1,null,"1bfbc363",null)),g=_.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._v(" Filter Todos: "),o("select",{on:{change:function(e){t.filterTodos(parseInt(e.target.options[e.target.selectedIndex].innerText))}}},[o("option",{attrs:{value:"200"}},[t._v("200")]),o("option",{attrs:{value:"100"}},[t._v("100")]),o("option",{attrs:{value:"50"}},[t._v("50")]),o("option",{attrs:{value:"20"}},[t._v("20")]),o("option",{attrs:{value:"10"}},[t._v("10")]),o("option",{attrs:{value:"5"}},[t._v("5")])])])},w=[],O={name:"FilterTodos",methods:Object(u["b"])(["filterTodos"])},x=O,y=(o("4864"),Object(p["a"])(x,j,w,!1,null,null,null)),k=y.exports,C={name:"App",components:{Todos:m,AddTodo:g,FilterTodos:k}},R=C,P=(o("034f"),Object(p["a"])(R,r,a,!1,null,null,null)),S=P.exports,A=(o("4de4"),o("c740"),o("a434"),o("96cf"),o("1da1")),$=o("bc3a"),E=o.n($),D={todos:[]},F={allTodos:function(){return D.todos}},I={fetchTodos:function(t){return Object(A["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,e.next=3,E.a.get("https://jsonplaceholder.typicode.com/todos");case 3:n=e.sent,o("setTodos",n.data);case 5:case"end":return e.stop()}}),e)})))()},addTodo:function(t,e){return Object(A["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.commit,o.next=3,E.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1});case 3:r=o.sent,n("newTodo",r.data);case 5:case"end":return o.stop()}}),o)})))()},deleteTodo:function(t,e){return Object(A["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.commit,o.next=3,E.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e));case 3:n("removeTodo",e);case 4:case"end":return o.stop()}}),o)})))()},filterTodos:function(t,e){return Object(A["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.commit,o.next=3,E.a.get("https://jsonplaceholder.typicode.com/todos/?_limit=".concat(e));case 3:r=o.sent,n("setTodos",r.data);case 5:case"end":return o.stop()}}),o)})))()},updateTodo:function(t,e){return Object(A["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.commit,o.next=3,E.a.put("https://jsonplaceholder.typicode.com/todos/".concat(e.id),e);case 3:r=o.sent,n("updateTodo",r.data);case 5:case"end":return o.stop()}}),o)})))()}},M={setTodos:function(t,e){return t.todos=e},newTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter((function(t){return t.id!==e}))},updateTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));-1!==o&&t.todos.splice(o,1,e)}},J={state:D,getters:F,actions:I,mutations:M};n["a"].use(u["a"]);var N=new u["a"].Store({modules:{todos:J}});n["a"].config.productionTip=!1,new n["a"]({store:N,render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,o){},9659:function(t,e,o){"use strict";var n=o("5590"),r=o.n(n);r.a},c1a9:function(t,e,o){},ed7b:function(t,e,o){},ee12:function(t,e,o){"use strict";var n=o("ed7b"),r=o.n(n);r.a}});
//# sourceMappingURL=app.a3c58f8b.js.map