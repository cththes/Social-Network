(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[3],{278:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1CpNI",dialogsItems:"Dialogs_dialogsItems__2BoCf",dialog:"Dialogs_dialog__1rwQe"}},279:function(e,s,a){e.exports={item:"Message_item__27BAq"}},280:function(e,s,a){e.exports={item:"User_item__GViAQ",avatar:"User_avatar__2Co67",message_area:"User_message_area__2ZpGu"}},281:function(e,s,a){e.exports={dialog:"DialogItem_dialog__1Q3Xp",Link:"DialogItem_Link__3btdq",activeLink:"DialogItem_activeLink__kZISL"}},283:function(e,s,a){"use strict";a.r(s);a(0);var t=a(278),i=a.n(t),n=a(279),c=a.n(n),o=a(1),r=function(e){return Object(o.jsx)("div",{className:c.a.item,children:e.message})},l=a(85),d=a(280),m=a.n(d),u=a(35),g=a(86),j=function(e){return Object(o.jsx)(u.c,{initialValues:{email:"",password:""},children:function(s){s.isSubmitting;return Object(o.jsxs)(u.b,{onSubmit:e.handleSubmit,className:m.a.message_area,children:[Object(o.jsx)(u.a,{name:"newMessageText",component:g.Textarea,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: "}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:e.onSendMessage,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})}})},b=function(e){return Object(o.jsxs)("div",{className:m.a.item,children:[Object(o.jsx)("img",{className:m.a.avatar,src:"https://avatars.githubusercontent.com/u/94492515?v=4",alt:""}),Object(o.jsx)(j,{onSubmit:function(s){e.sendMessage(s.newMessageText)}}),Object(o.jsx)("div",{className:m.a.message_area})]})},_=a(16),x=Object(_.b)((function(e){return{newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sendMessage:function(s){e(Object(l.b)(s))}}}))(b),O=a(281),f=a.n(O),v=a(13),h=function(e){return e.isActive?f.a.activeLink:f.a.Link},p=function(e){var s="/dialogs/"+e.id;return Object(o.jsx)("div",{className:f.a.dialog,children:Object(o.jsx)(v.b,{to:s,className:h,children:e.name})})},k=function(e){var s=e.state.dialogs.map((function(e){return Object(o.jsx)(p,{name:e.name,id:e.id})})),a=e.state.messages.map((function(e){return Object(o.jsx)(r,{message:e.message})}));return Object(o.jsxs)("div",{className:i.a.dialogs,children:[Object(o.jsx)("div",{className:i.a.dialogsItems,children:s}),Object(o.jsx)(x,{}),Object(o.jsx)("div",{className:"messages",children:a})]})},N=a(21),w=a(87);s.default=Object(N.c)(Object(_.b)((function(e){return{state:e.dialogsPage}})),w.a)(k)}}]);
//# sourceMappingURL=3.c17525fa.chunk.js.map