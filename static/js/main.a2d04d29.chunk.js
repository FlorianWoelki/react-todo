(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(49)},33:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(19),r=n.n(c),i=(n(33),n(7)),l=n(8),s=n(12),d=n(9),u=n(13),f={root:"/",addTodo:"/addTodo"},m=n(4),b=n(52),h=n(6),p=n.n(h),v=(n(35),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).UNSAFE_componentWillMount=function(){p()("body").css("display","none"),p()("body").fadeIn("slow")},n.onAddTodo=n.onAddTodo.bind(Object(m.a)(Object(m.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onAddTodo",value:function(){var e=this;p()("body").fadeOut("slow",function(){e.props.history.push("addTodo")})}},{key:"render",value:function(){return o.a.createElement("div",{className:"icons"},o.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light right grey"},o.a.createElement("i",{className:"material-icons"},"clear")),o.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light right red",onClick:this.onAddTodo},o.a.createElement("i",{className:"material-icons"},"add")))}}]),t}(a.Component)),g=Object(b.a)(v),w=function(e){var t=e.name,n=e.done;return o.a.createElement("div",{className:"row center valign-wrapper"},o.a.createElement("div",{className:"col s6 "+(n?"grey-text":"")},o.a.createElement("h4",null,n?o.a.createElement("s",null,t):t)),o.a.createElement("div",{className:"col s6"},o.a.createElement("button",{className:"btn btn-large waves-effect waves-light "+(n?"disabled":""),type:"submit",name:"action"},"Done",o.a.createElement("i",{className:"material-icons right"},"flag"))))},O=n(11),E=Object(O.b)(function(e){return{todos:e.todos}})(function(e){var t=e.todos;return o.a.createElement("div",{className:"container"},t.sort(function(e,t){return e.done===t.done?0:e.done?1:-1}).map(function(e,t){return o.a.createElement(w,Object.assign({key:t},e))}),o.a.createElement(g,null))}),j=(n(43),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).UNSAFE_componentWillMount=function(){p()("body").css("display","none"),p()("body").fadeIn("slow")},n.state={inputValue:""},n.onGoBack=n.onGoBack.bind(Object(m.a)(Object(m.a)(n))),n.onAddTodo=n.onAddTodo.bind(Object(m.a)(Object(m.a)(n))),n.updateInputValue=n.updateInputValue.bind(Object(m.a)(Object(m.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onGoBack",value:function(){var e=this;p()("body").fadeOut("slow",function(){e.props.history.push("/")})}},{key:"onAddTodo",value:function(){var e=this;p()("body").fadeOut("slow",function(){e.props.history.push("/"),e.state.inputValue&&e.props.onAddTodo(e.state.inputValue)})}},{key:"updateInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"add-todo container"},o.a.createElement("div",{className:"input-field"},o.a.createElement("i",{className:"material-icons prefix"},"add"),o.a.createElement("textarea",{id:"add-todo",className:"materialize-textarea",onChange:function(t){return e.updateInputValue(t)},value:this.state.inputValue}),o.a.createElement("label",{htmlFor:"add-todo"},"Todo Name")),o.a.createElement("button",{className:"btn btn-large waves-effect waves-light grey right",onClick:this.onGoBack},"Go Back"),o.a.createElement("button",{className:"btn btn-large waves-effect waves-light red right",onClick:this.onAddTodo},o.a.createElement("i",{className:"material-icons left"},"add"),"Add"))}}]),t}(a.Component)),y=Object(O.b)(function(e){return{state:e}},function(e){return{onAddTodo:function(t){e(function(e){return{type:"ADD_TODO",name:e}}(t))}}})(j),k=n(53),N=n(51),T=(n(45),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(k.a,null,o.a.createElement(N.a,{exact:!0,path:f.root,component:function(){return o.a.createElement(E,null)}}),o.a.createElement(N.a,{path:f.addTodo,component:y}))}}]),t}(a.Component)),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var I=n(24),V=n.n(I),D=n(10),x=n(26),B=n(25),W=[{name:"Make dinner",done:!1},{name:"Meet friends",done:!0},{name:"Meet with family",done:!1}],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(B.a)(e).concat([{id:t.id,name:t.name,done:!1}]);case"FINISH_TODO":return e.map(function(e){return e.id===t.id?Object(x.a)({},e,{done:!0}):e});default:return e}},M=Object(D.b)({todos:G}),S=Object(D.c)(M);r.a.render(o.a.createElement(O.a,{store:S},o.a.createElement(V.a,null,o.a.createElement(T,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-todo",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-todo","/service-worker.js");A?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[28,2,1]]]);
//# sourceMappingURL=main.a2d04d29.chunk.js.map