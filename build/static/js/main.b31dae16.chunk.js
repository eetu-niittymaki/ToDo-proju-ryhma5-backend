(this["webpackJsonpreact-testi"]=this["webpackJsonpreact-testi"]||[]).push([[0],{20:function(e,t,r){},211:function(e,t,r){"use strict";r.r(t);var _=r(2),a=r(1),n=r.n(a),o=r(36),s=r.n(o),c=r(58),i=r(5),u=r.n(i),d=r(14),l=r(7),p=r(8),h=r(10),b=r(9),j=(r(20),r(159)),O=r.n(j),m=r(82),f=r.n(m),D=r(80),E=r.n(D),T=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(l.a)(this,r);for(var _=arguments.length,a=new Array(_),n=0;n<_;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).getStyle=function(){return{background:e.props.todo.is_done?"green":"#fff",textDecoration:e.props.todo.is_done?"line-through":"none"}},e.componentDidMount=function(){console.log(e.props.todo)},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.todo,t=e.id,r=e.task,a=e.priority,n=e.timestamp,o=e.due_date,s=e.is_done;return Object(_.jsxs)("div",{className:"todoItem",style:this.getStyle(),children:[Object(_.jsx)("div",{className:"checkbox",children:Object(_.jsx)(E.a,{color:"primary",defaultChecked:s,onChange:this.props.updateIsDone.bind(this,t),inputProps:{"aria-label":"primary checkbox"}})}),"\xa0",Object(_.jsx)("div",{className:"todoTask",children:r}),Object(_.jsx)("div",{className:"todoPriority",children:a}),Object(_.jsxs)("div",{className:"todoDuedate",children:["Created: ",n," ",Object(_.jsx)("br",{}),"Due date: ",o]}),Object(_.jsx)("div",{className:"todoButton",children:Object(_.jsx)(O.a,{"aria-label":"Delete Todo",onClick:this.props.delTask.bind(this,t),children:Object(_.jsx)(f.a,{})})})]})}}]),r}(a.Component),C=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this;return 0===this.props.todos.length?Object(_.jsx)("div",{className:"todosPlaceholder",children:"No Tasks"}):this.props.todos.map((function(t){return Object(_.jsx)(T,{todo:t,updateIsDone:e.props.updateIsDone,delTask:e.props.delTask},t.id)}))}}]),r}(a.Component),v=r(83),P=r(23),k=r.n(P),x=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var _;return Object(l.a)(this,r),(_=t.call(this,e)).onSubmit=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,a,n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=_.state,a=r.task,n=r.priority,o=r.due_date,e.next=4,k.a.post("http://localhost:".concat(_.state.port,"/api"),{task:a.replace(/^\w/,(function(e){return e.toUpperCase()})),priority:n,due_date:o,is_done:!1});case 4:_.props.addTask([_.state.task.replace(/^\w/,(function(e){return e.toUpperCase()})),_.state.priority,_.state.due_date,_.state.is_done]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_.onChange=function(e){return _.setState(Object(v.a)({},e.target.name,e.target.value))},_.state={todos:[],date:"",port:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8080},_}return Object(p.a)(r,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"addTodosContainer",children:Object(_.jsxs)("form",{id:"todos",className:"inputFields",onSubmit:this.onSubmit,children:[Object(_.jsx)("input",{className:"inputTask",type:"text",name:"task",placeholder:"Add Task...",value:this.state.task,onChange:this.onChange,required:"required"}),Object(_.jsx)("input",{className:"inputPriority",type:"number",max:"10",min:"1",name:"priority",placeholder:"Priority",value:this.state.priority,onChange:this.onChange,required:"required"}),Object(_.jsx)("input",{className:"inputDuedate",type:"date",name:"due_date",placeholder:"Due date",value:this.state.due_date,onChange:this.onChange,required:"required",min:this.props.date}),Object(_.jsx)("button",{form:"todos",type:"submit",value:"Submit",className:"btn",style:{float:"1"},children:"Submit"})]})})}}]),r}(a.Component),S=r(38);var y={color:"#fff",textAlign:"center",padding:"20px"},g=function(){return Object(_.jsxs)("header",{style:y,children:[Object(_.jsx)("h1",{className:"title",children:"Todo List"}),Object(_.jsxs)("div",{className:"headerLink",children:[Object(_.jsx)(S.b,{to:"/",children:"Home"})," |\xa0",Object(_.jsx)(S.b,{to:"/TodoCalendar",children:"Calendar"})," "]})]})},M=r(33),U=r.n(M),R=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(_.jsx)("div",{children:Object(_.jsx)(U.a,{url:"/sounds/backsound.wav",playStatus:U.a.status.PLAYING,loop:"true"})})}}]),r}(a.Component),w=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(_.jsx)("div",{children:Object(_.jsx)(U.a,{url:"/sounds/sound1.wav",playStatus:U.a.status.PLAYING,playFromPosition:300})})}}]),r}(a.Component),A=r(4),L=r(87),I=r(86),K=function(e){for(var t=Object(a.useState)(new Date),r=Object(L.a)(t,2),n=r[0],o=r[1],s=[],c="",i=0;i<e.todos.length;i++)c=(c=e.todos[i].due_date.split("-"))[1]+"/"+c[2]+"/"+c[0],s.push(c);return Object(_.jsxs)("div",{className:"cal",children:[Object(_.jsx)(I.a,{className:"calendar",onChange:function(e){return o(e)},value:n,tileClassName:"calTile",tileContent:function(t){t.activeStartDate;for(var r=t.date,a=(t.view,[]),n=0;n<s.length;n++)r.toLocaleDateString()===s[n]&&a.push(e.todos[n].task);return Object(_.jsx)("h5",{children:a})}}),console.log(n.toLocaleDateString())]})},N=r(85),W=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var _;return Object(l.a)(this,r),(_=t.call(this,e)).search=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:".concat(_.state.port,"/api?sort=timestamp&order_by=asc&task=").concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,_.setState({filterTodos:a}),_.handleSearch();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_.handleChange=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.search(t.target.value),_.setState({task:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_.handleSearch=function(){_.props.handleSearch(_.state.filterTodos)},_.state={task:"",filterTodos:"",port:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8080},_}return Object(p.a)(r,[{key:"render",value:function(){return Object(_.jsx)("div",{children:Object(_.jsx)("input",{className:"searchInput",value:this.state.task,onChange:this.handleChange,placeholder:"Search Task"})})}}]),r}(a.Component),B=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var _;return Object(l.a)(this,r),(_=t.call(this,e)).deleteCompleted=Object(d.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete completed tasks?")){e.next=12;break}return e.next=4,k.a.delete("http://localhost:".concat(_.state.port,"/api"));case 4:return e.next=6,fetch("http://localhost:".concat(_.state.port,"/api?sort=timestamp&order_by=asc&task=").concat(_.props.search));case 6:return t=e.sent,e.next=9,t.json();case 9:r=e.sent,_.setState({newTodos:r}),_.handleDelete();case 12:case"end":return e.stop()}}),e)}))),_.handleDelete=function(){_.props.handleDelete(_.state.newTodos)},_.state={newTodos:[],port:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8080},_}return Object(p.a)(r,[{key:"render",value:function(){return Object(_.jsx)("button",{className:"deleteBtn",type:"button",onClick:this.deleteCompleted,children:"Delete Completed"})}}]),r}(a.Component),q=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var _;return Object(l.a)(this,r),(_=t.call(this,e)).componentDidMount=Object(d.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:".concat(_.state.port,"/api?sort=timestamp&order_by=asc&task=").concat(_.state.search));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,_.setState({todos:r}),_.getDate();case 8:case"end":return e.stop()}}),e)}))),_.updateIsDone=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.setState({todos:_.state.todos.map((function(e){return e.id===t&&(e.is_done=!e.is_done,k.a.put("http://localhost:".concat(_.state.port,"/api/").concat(t),{is_done:e.is_done})),e}))});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_.delTask=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete task?")){e.next=5;break}return e.next=4,k.a.delete("http://localhost:".concat(_.state.port,"/api/").concat(Number(t)));case 4:_.setState({todos:Object(c.a)(_.state.todos.filter((function(e){return e.id!==t})))});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_.addTask=function(e,t,r){var a={task:e,priority:t,due_date:r,is_done:!1};_.setState({todos:[].concat(Object(c.a)(_.state.todos),[a])}),_.refresh()},_.refresh=function(){window.location.reload()},_.getDate=function(){var e=new Date,t=e.getDate(),r=e.getMonth()+1,a=e.getFullYear();t<10&&(t="0"+t),r<10&&(r="0"+r),e=a+"-"+r+"-"+t,_.setState({date:e})},_.handleSorting=function(e){_.setState({todos:e})},_.handleDelete=function(e){_.setState({todos:e})},_.handleSearch=function(e){_.setState({todos:e})},_.state={todos:[],date:"",search:"",port:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8080},_}return Object(p.a)(r,[{key:"render",value:function(){var e=this;return Object(_.jsx)(S.a,{children:Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(_.jsx)(R,{}),Object(_.jsx)(w,{}),Object(_.jsx)(g,{}),Object(_.jsx)(B,{todos:this.state.todos,search:this.state.search,handleDelete:this.handleDelete}),Object(_.jsx)(W,{handleSearch:this.handleSearch}),Object(_.jsx)(N.a,{search:this.state.search,handleSorting:this.handleSorting}),Object(_.jsx)(A.a,{exact:!0,path:"/",render:function(t){return Object(_.jsxs)(n.a.Fragment,{children:[Object(_.jsx)(x,{addTask:e.addTask,date:e.state.date}),Object(_.jsx)(C,{todos:e.state.todos,updateIsDone:e.updateIsDone,delTask:e.delTask})]})}}),Object(_.jsx)(A.a,{component:function(){return Object(_.jsx)(K,{todos:e.state.todos})},path:"/TodoCalendar"})]})})})}}]),r}(a.Component),F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,213)).then((function(t){var r=t.getCLS,_=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;r(e),_(e),a(e),n(e),o(e)}))};s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(q,{})}),document.getElementById("root")),F()},85:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Sorting}));var C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_App_sass__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(20),_App_sass__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_App_sass__WEBPACK_IMPORTED_MODULE_8__),Sorting=function(_Component){Object(C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Sorting,_Component);var _super=Object(C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(Sorting);function Sorting(props){var _this;return Object(C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Sorting),_this=_super.call(this,props),_this.sort=function(){var _ref=Object(C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(sort){var dynamicName,method,sortObj,key,value,hr,json;return C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return dynamicName=eval("this.state.sort_".concat(sort)),method=dynamicName?"asc":"desc",sortObj={},key="sort_".concat(sort),value=!dynamicName,sortObj[key]=value,_context.next=8,fetch("http://localhost:".concat(_this.state.port,"/api?sort=").concat(sort,"&order_by=").concat(method,"&task=").concat(_this.props.search));case 8:return hr=_context.sent,_context.next=11,hr.json();case 11:json=_context.sent,_this.setState({sortedTodos:json}),_this.setState(sortObj),_this.handleSorting();case 15:case"end":return _context.stop()}}),_callee)})));return function(e){return _ref.apply(this,arguments)}}(),_this.handleSorting=function(){_this.props.handleSorting(_this.state.sortedTodos)},_this.state={sortedTodos:[],sort_task:!0,sort_priority:!0,sort_due_date:!0,port:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8080},_this}return Object(C_Users_Eetu_Desktop_Proju_ToDo_proju_ryhma5_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Sorting,[{key:"render",value:function(){var e=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"sortContainer",children:["Sort By:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button",className:"sortBtn",onClick:function(){return e.sort("task")},children:" Task"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button",className:"sortBtn",onClick:function(){return e.sort("priority")},children:" Priority"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button",className:"sortBtn",onClick:function(){return e.sort("due_date")},children:" Due Date"})]})}}]),Sorting}(react__WEBPACK_IMPORTED_MODULE_7__.Component)}},[[211,1,2]]]);
//# sourceMappingURL=main.b31dae16.chunk.js.map