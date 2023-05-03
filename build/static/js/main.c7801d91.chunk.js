(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(24),s=n.n(a),o=n(9),i=n(34),l=n(56),u=n(57),d=n(6),j=n.n(d),b=n(8),O=null,p=null,h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;return function(){var r=Object(b.a)(j.a.mark((function r(c){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:p&&(clearTimeout(p),p=null),c({type:"SHOW_NOTIFICATION",payload:{message:e,type:t}}),p=setTimeout((function(){return c({type:"CLOSE_NOTIFICATION"})}),1e3*n);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"SHOW_NOTIFICATION":return t.payload;case"CLOSE_NOTIFICATION":return O;default:return e}},f=null,g=function(e){return{type:"SET_USER",payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"SET_USER":return t.payload;case"REMOVE_USER":return f;default:return e}},v=n(15),y=n(41),k=n(19),w=n.n(k),N="/api/blogs",S=null,C={getAll:function(){return w.a.get(N).then((function(e){return e.data}))},create:function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:S}},e.next=3,w.a.post(N,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){S="bearer ".concat(e)},update:function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.put("".concat(N,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:S}},e.next=3,w.a.delete("".concat(N,"/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(N,"/").concat(t,"/comments"),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},E=[],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.payload;case"NEW_BLOG":return[].concat(Object(y.a)(e),[t.payload]);case"LIKE_BLOG":var n=t.payload.id,r=t.payload;return e.map((function(e){return e.id!==n?e:Object(v.a)(Object(v.a)({},e),{},{likes:r.likes})}));case"REMOVE_BLOG":var c=t.payload;return e.filter((function(e){return e.id!==c}));case"COMMENT_BLOG":var a=t.payload.id,s=t.payload;return e.map((function(e){return e.id!==a?e:Object(v.a)(Object(v.a)({},e),{},{comments:s.comments})}));default:return e}},_={getAll:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},B=[],I=function(e){return{type:"NEW_BLOG_BY_USER",payload:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.payload;case"NEW_BLOG_BY_USER":var n=t.payload.user.id,r={title:t.payload.title,author:t.payload.author,url:t.payload.url,id:t.payload.id};return e.map((function(e){return e.id!==n?e:Object(v.a)(Object(v.a)({},e),{},{blogs:[].concat(Object(y.a)(e.blogs),[r])})}));case"BLOG_REMOVED_BY_USER":var c=t.payload.user.id,a=t.payload.id;return e.map((function(e){return e.id!==c?e:Object(v.a)(Object(v.a)({},e),{},{blogs:e.blogs.filter((function(e){return e.id!==a}))})}));default:return e}},G=Object(i.combineReducers)({loggedUser:m,blogs:L,notification:x,users:T}),R=Object(i.createStore)(G,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(l.a))),A=n(21),U={login:function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=n(98),V=n(94),W=n(101),q=n(1),D=function(){var e=Object(o.c)((function(e){return e.notification}));return e?Object(q.jsx)(W.a,{variant:e.type,children:e.message}):null},F=function(){var e=Object(r.useState)(""),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(A.a)(a,2),i=s[0],l=s[1],u=Object(o.b)(),d=function(){var e=Object(b.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(""),l(""),e.prev=3,e.next=6,U.login({username:n,password:i});case 6:r=e.sent,u(g(r)),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(r)),C.setToken(r.token),u(h("Login success","success")),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0.response.data),u(h("Wrong credentials","danger"));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)("h2",{children:"Log in to application"}),Object(q.jsx)(D,{}),Object(q.jsxs)(M.a,{id:"login",onSubmit:d,children:[Object(q.jsxs)(M.a.Group,{controlId:"username",children:[Object(q.jsx)(M.a.Label,{children:"username:"}),Object(q.jsx)(M.a.Control,{type:"text",value:n,onChange:function(e){var t=e.target;return c(t.value)},required:!0})]}),Object(q.jsxs)(M.a.Group,{controlId:"password",children:[Object(q.jsx)(M.a.Label,{children:"password:"}),Object(q.jsx)(M.a.Control,{type:"password",value:i,onChange:function(e){var t=e.target;return l(t.value)},required:!0})]}),Object(q.jsx)(V.a,{variant:"primary",type:"submit",id:"login-button",children:"login"})]})]})},H=n(95),J=n(10),Y=function(){var e=Object(o.c)((function(e){return e.users})),t=Object(J.f)();return Object(q.jsxs)("div",{className:"users mb-4",children:[Object(q.jsx)("h2",{children:"Users"}),Object(q.jsxs)(H.a,{striped:!0,className:"user-table",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Name"}),Object(q.jsx)("th",{children:"Blogs created"})]})}),Object(q.jsx)("tbody",{children:e.map((function(e){return Object(q.jsxs)("tr",{children:[Object(q.jsxs)("td",{id:"user-name",children:[" ",e.name," "]}),Object(q.jsx)("td",{id:"user-blogs",children:e.blogs.length})]},e.id)}))})]}),Object(q.jsx)(V.a,{id:"back-button",variant:"secondary",onClick:function(){t.push("/")},children:"Back"})]})},z=n(18),K=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),c=Object(A.a)(n,2),a=c[0],s=c[1],o={display:a?"none":""},i={display:a?"":"none"},l=function(){s(!a)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(q.jsxs)("div",{children:[Object(q.jsx)("div",{style:o,children:Object(q.jsxs)(V.a,{onClick:l,children:[Object(q.jsx)("i",{className:e.icon})," ",e.buttonLabel]})}),Object(q.jsxs)("div",{style:i,children:[e.children,Object(q.jsxs)(V.a,{className:"ml-1",variant:"secondary",onClick:l,children:[Object(q.jsx)("i",{className:"bi bi-x-circle"})," Cancel"]})]})]})}));K.displayName="Togglable";var P=K,Q=n(37),X=n(96),Z=n(60),$=function(e){var t=Object(r.useState)({title:"",author:"",url:""}),n=Object(A.a)(t,2),c=n[0],a=n[1],s=function(e){a(Object(v.a)(Object(v.a)({},c),{},Object(Q.a)({},e.target.id,e.target.value)))},i=Object(o.b)(),l=function(){var t=Object(b.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleSubmit"),n.preventDefault(),a({title:"",author:"",url:""}),t.prev=3,t.next=6,C.create(c);case 6:r=t.sent,console.log("blog created:",r),i({type:"NEW_BLOG",payload:r}),i(I(r)),e.togglableRef.current.toggleVisibility(),i(h("A new blog ".concat(r.title," by ").concat(r.author," added"),"success")),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),console.log("Create new blog error:",t.t0),i(h("Sorry, adding the blog failed.","danger"));case 18:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{children:"Create new"}),Object(q.jsx)("div",{className:"createBlogForm",children:Object(q.jsxs)(M.a,{onSubmit:l,children:[Object(q.jsxs)(M.a.Group,{as:X.a,controlId:"title",children:[Object(q.jsx)(M.a.Label,{column:!0,sm:"2",children:"title:"}),Object(q.jsx)(Z.a,{sm:"10",children:Object(q.jsx)(M.a.Control,{type:"text",value:c.title,onChange:s,required:!0})})]}),Object(q.jsxs)(M.a.Group,{as:X.a,controlId:"author",children:[Object(q.jsx)(M.a.Label,{column:!0,sm:"2",children:"author:"}),Object(q.jsx)(Z.a,{sm:"10",children:Object(q.jsx)(M.a.Control,{type:"text",value:c.author,onChange:s,required:!0})})]}),Object(q.jsxs)(M.a.Group,{as:X.a,controlId:"url",children:[Object(q.jsx)(M.a.Label,{column:!0,sm:"2",children:"url:"}),Object(q.jsx)(Z.a,{sm:"10",children:Object(q.jsx)(M.a.Control,{type:"text",value:c.url,onChange:s,required:!0})})]}),Object(q.jsxs)(V.a,{className:"float-left",type:"submit",id:"create-button",children:[Object(q.jsx)("i",{className:"bi bi-save2"})," ","Create"]})]})})]})},ee=function(){var e=Object(o.c)((function(e){return e.blogs})),t=Object(r.useRef)(),n=e.sort((function(e,t){return t.likes-e.likes}));return Object(q.jsxs)("div",{children:[Object(q.jsx)("h2",{children:"Blogs"}),Object(q.jsx)(D,{}),Object(q.jsx)(P,{icon:"bi bi-plus-circle",buttonLabel:"Add new",ref:t,children:Object(q.jsx)($,{togglableRef:t})}),Object(q.jsx)(H.a,{striped:!0,className:"blog-table",children:Object(q.jsx)("tbody",{children:n.map((function(e){return Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{children:Object(q.jsx)(z.b,{to:"/blogs/".concat(e.id),children:e.title})}),Object(q.jsx)("td",{children:e.author})]},e.id)}))})})]})},te=function(){var e=Object(r.useState)(""),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(o.c)((function(e){return e.loggedUser})),s=Object(o.c)((function(e){return e.blogs})),i=Object(o.b)(),l=Object(J.g)().id,u=s.find((function(e){return e.id===l})),d=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t.title,author:t.author,url:t.url,likes:t.likes+1,user:t.user.id},console.log("original",t),console.log("changed",n),e.prev=3,e.next=6,C.update(t.id,n);case 6:r=e.sent,i({type:"LIKE_BLOG",payload:r}),i(h("Likes of the blog ".concat(r.title," updated"),"success")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("Update blog error:",e.t0),i(h("Sorry, adding likes failed.","danger"));case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Remove blog ".concat(t.title," by ").concat(t.author,"?"))){e.next=14;break}return e.prev=1,e.next=4,C.remove(t.id);case 4:i({type:"REMOVE_BLOG",payload:t.id}),i({type:"BLOG_REMOVED_BY_USER",payload:t}),i(h("Blog was removed","success")),x.push("/"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Delete blog error:",e.t0),i(h("Sorry, remove failed.","danger"));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(""),r={content:n},e.prev=3,e.next=6,C.addComment(l,r);case 6:a=e.sent,console.log(a),i({type:"COMMENT_BLOG",payload:a}),i(h("Comment added","success")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("Comment blog error:",e.t0),i(h("Sorry, adding comments failed.","danger"));case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),x=Object(J.f)();return u?Object(q.jsxs)("div",{className:"blog mb-4",children:[Object(q.jsxs)("h2",{children:[u.title," by ",u.author]}),Object(q.jsx)(D,{}),Object(q.jsx)(H.a,{className:"blog-table",children:Object(q.jsxs)("tbody",{children:[Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Title:"}),Object(q.jsx)("td",{children:u.title}),Object(q.jsx)("td",{})]}),Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Author:"}),Object(q.jsx)("td",{children:u.author}),Object(q.jsx)("td",{})]}),Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Url:"}),Object(q.jsx)("td",{children:Object(q.jsx)("a",{href:u.url,target:"_blank",rel:"noreferrer",children:u.url})}),Object(q.jsx)("td",{})]}),Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Likes:"}),Object(q.jsx)("td",{id:"likes",children:u.likes}),Object(q.jsx)("td",{children:Object(q.jsxs)(V.a,{variant:"outline-success",id:"like-button",onClick:function(){return d(u)},children:[Object(q.jsx)("i",{className:"bi bi-heart-fill"})," Like"]})})]}),Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Added by:"}),Object(q.jsx)("td",{children:u.user.name}),Object(q.jsx)("td",{children:u.user.username===a.username?Object(q.jsxs)(V.a,{variant:"outline-primary",id:"remove-button",onClick:function(){return O(u)},children:[Object(q.jsx)("i",{className:"bi bi-file-excel-fill"})," Remove"]}):null})]})]})}),Object(q.jsx)("h3",{children:"Comments"}),Object(q.jsx)(M.a,{id:"comment-form",onSubmit:p,children:Object(q.jsxs)(M.a.Group,{as:X.a,controlId:"comment",children:[Object(q.jsxs)(Z.a,{md:"9",className:"mb-2",children:[Object(q.jsx)(M.a.Label,{srOnly:!0,children:"Comment"}),Object(q.jsx)(M.a.Control,{type:"text",value:n,onChange:function(e){c(e.target.value)},placeholder:"Leave your comment",required:!0})]}),Object(q.jsx)(Z.a,{md:"auto",children:Object(q.jsxs)(V.a,{variant:"outline-primary",type:"submit",id:"comment-button",children:[Object(q.jsx)("i",{className:"bi bi-chat-square-text-fill"}),"Add comment"]})})]})}),u.comments.map((function(e){return Object(q.jsx)("li",{children:e.content},e.id)})),Object(q.jsx)("div",{className:"mt-3",children:Object(q.jsx)(V.a,{id:"back-button",variant:"secondary",onClick:function(){x.push("/")},children:"Back"})})]}):null},ne=n(100),re=n(97),ce=n(99),ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.loggedUser})),n=Object(J.f)(),r={padding:5};return null===t?Object(q.jsx)(ne.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(q.jsx)(re.a,{children:Object(q.jsxs)(ne.a.Brand,{children:[Object(q.jsx)("i",{className:"bi bi-bookmark-star"})," Great Blogs App"]})})}):Object(q.jsx)(ne.a,{className:"p-lg-4",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(q.jsxs)(re.a,{children:[Object(q.jsxs)(ne.a.Brand,{children:[Object(q.jsx)("i",{className:"bi bi-bookmark-star"})," Great Blogs App"]}),Object(q.jsx)(ne.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(q.jsxs)(ne.a.Collapse,{id:"responsive-navbar-nav",children:[Object(q.jsxs)(ce.a,{className:"mr-auto",children:[Object(q.jsx)(ce.a.Link,{as:"span",children:Object(q.jsx)(z.b,{style:r,to:"/",children:"blogs"})}),Object(q.jsx)(ce.a.Link,{as:"span",children:Object(q.jsx)(z.b,{style:r,to:"/users",children:"users"})})]}),Object(q.jsxs)(ne.a.Text,{className:"mr-4",children:[t.name," logged in"]}),Object(q.jsx)("div",{className:"d-sm-inline-flex",children:Object(q.jsxs)(V.a,{id:"logout-button",className:"btn-block",variant:"light",onClick:function(){window.localStorage.removeItem("loggedBlogAppUser"),n.push("/"),e({type:"REMOVE_USER"})},children:["logout ",Object(q.jsx)("i",{className:"bi bi-box-arrow-right"})]})})]})]})})},se=function(){return Object(q.jsx)("footer",{className:"footer",children:Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("span",{className:"text-muted",children:["Blog app, Author ",Object(q.jsxs)("a",{id:"github",href:"https://github.com/Trideeb",target:"_blank",rel:"noreferrer",children:[Object(q.jsx)("i",{className:"bi bi-github",role:"img","aria-label":"GitHub logo"})," 3deeb"]})," 2023"]})})})},oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.loggedUser}));return Object(r.useEffect)((function(){e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getAll();case 3:n=e.sent,t({type:"INIT_BLOGS",payload:n}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),t(h("Sorry, connection error!","danger",10));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.getAll();case 3:n=e.sent,t({type:"INIT_USERS",payload:n}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),t(h("Sorry, connection error!","danger",10));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogAppUser");if(t){var n=JSON.parse(t);e(g(n)),C.setToken(n.token)}}),[]),Object(q.jsxs)("div",{className:"App",children:[Object(q.jsxs)(z.a,{children:[Object(q.jsx)(ae,{}),Object(q.jsx)(re.a,{children:null===t?Object(q.jsx)(F,{}):Object(q.jsxs)(J.c,{children:[Object(q.jsx)(J.a,{path:"/blogs/:id",children:Object(q.jsx)(te,{})}),Object(q.jsx)(J.a,{path:"/users",children:Object(q.jsx)(Y,{})}),Object(q.jsx)(J.a,{path:"/",children:Object(q.jsx)(ee,{})})]})})]}),Object(q.jsx)(se,{})]})};n(91);s.a.render(Object(q.jsx)(o.a,{store:R,children:Object(q.jsx)(oe,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.c7801d91.chunk.js.map