(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[4],{273:function(A,t,e){"use strict";e.d(t,"a",(function(){return c}));var s=e(2),a=(e(0),e(3)),n=e(1),c=function(A){return function(t){return Object(n.jsx)(A,Object(s.a)(Object(s.a)({},t),{},{params:Object(a.h)(),navigate:Object(a.g)()}))}}},274:function(A,t,e){"use strict";e.d(t,"a",(function(){return b}));var s=e(2),a=e(4),n=e(5),c=e(9),r=e(10),o=e(0),i=e.n(o),u=e(12),l=e(1),j=function(A){return{isAuth:A.auth.isAuth}},b=function(A){var t=function(t){Object(c.a)(o,t);var e=Object(r.a)(o);function o(){return Object(a.a)(this,o),e.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return Object(l.jsx)(A,Object(s.a)({},this.props))}}]),o}(i.a.Component);return Object(u.b)(j)(t)}},275:function(A,t,e){A.exports={icon:"ProfileInfo_icon__25L7M",userPhoto:"ProfileInfo_userPhoto__2sH6k",profileInfo:"ProfileInfo_profileInfo__3jnOB",contacts:"ProfileInfo_contacts__1uCF0","app-wrapper":"ProfileInfo_app-wrapper__1cFbw",fullName:"ProfileInfo_fullName__35mMg",editInfo:"ProfileInfo_editInfo__3qAxq"}},280:function(A,t,e){A.exports={status:"ProfileStatus_status__2kqrd"}},281:function(A,t,e){A.exports={form_post:"MyPosts_form_post__2yZK0",formSummaryError:"MyPosts_formSummaryError__2prIx"}},282:function(A,t,e){A.exports={avatar:"Post_avatar__1lRdf",post:"Post_post__1JTYF",item:"Post_item__2p9h9"}},284:function(A,t,e){"use strict";e.r(t);var s=e(4),a=e(5),n=e(9),c=e(10),r=e(0),o=e.n(r),i=e(14),u=e(275),l=e.n(u),j=e.p+"static/media/Instagram_icon.be3763eb.png",b=e(72),f=e(50),d=e(280),p=e.n(d),h=e(1),g=function(A){var t=Object(r.useState)(!1),e=Object(i.a)(t,2),s=e[0],a=e[1],n=Object(r.useState)(A.status),c=Object(i.a)(n,2),o=c[0],u=c[1];Object(r.useEffect)((function(){u(A.status)}),[A.status]);return Object(h.jsxs)("div",{className:p.a.status,children:[!s&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){a(!0)},children:A.status||"github.com/cththes"})}),s&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(A){u(A.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),A.updateStatus(o)},value:o})})]})},m=e(73),O=e(40),v=e(39),x=function(A){var t=A.saveProfileSubmit,e=A.contacts,s=(A.error,Object(m.a)({initialValues:{AboutMe:"--",LookingForAJobDescription:"-",FullName:"cth",contacts:{facebook:e.facebook,vk:e.vk,twitter:e.twitter,instagram:e.instagram}},validationSchema:O.b({facebook:O.c().max(25,"Must be 25 or less").min(3,"Must be 3 or more")}),onSubmit:function(A){t(A)}}));return Object(h.jsxs)("form",{onSubmit:s.handleSubmit,className:l.a.editInfo,children:[Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"save"})})}),Object(v.a)("contacts.facebook","text","FaceBook",s.values.contacts.facebook,s.handleChange),Object(v.a)("contacts.vk","text","VK",s.values.contacts.vk,s.handleChange),Object(v.a)("contacts.twitter","text","Twitter",s.values.contacts.twitter,s.handleChange),Object(v.a)("contacts.instagram","text","Instagram",s.values.contacts.instagram,s.handleChange)]})},k=function(A){return""!==A&&null!==A},I=function(A){var t=A.profile,e=A.isOwner,s=A.goToEditMode;return Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:l.a.contacts,children:"Contacts"}),Object(h.jsxs)("div",{children:[k(t.contacts.facebook)&&Object(h.jsx)("span",{className:l.a.item,children:Object(h.jsx)("a",{href:t.contacts.facebook,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAADAFBMVEX///86VZ86VZ45VJ84VJ81UqEzUaE0UaEyUKI6VJ5HXZhVZZJibYxqcolpcolrc4hkbos1UqBGXJhibox6fIKEgn2GhHyGhH2Fg32JhXt9foA4U583U58yUKFBWZtqcoiDgn2DgX6AgH+AgIB/f4CDgn54e4MzUKFWZpGBgH6Gg3yBgH82UqA1UaBncIqHhHyCgX5pcoiIhXuHhHt/f38xUKFWZpKIhHs/WJuAf385VJ42UZ9CWpoyT6FgbI13eYODgX1/gIB4e4J8fYGFg3x6fIFaaJBKX5dMYJZNYZYyT6Jea41tdIcxT6JpcYlzd4U2Up80UaBsc4dIXZdsc4iCgX12eYM4U56EgnxvdYZxdoYuTaMwTqJGXJlNYJZLX5ZxdoV0eIRJXZdHXJhtc4eJhXqEg32Egn6KhnpZaJCAgH5OYZVFXJl+foBAWJtudIc1Up9mb4szUaCGg31eao5/gH9UZJNJXpdDWpk7Vp03Up+DgnxzeIRLX5dKXpdwdoZIXZhDWpo2U6A0UKEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/YkQgGHYAA3gAxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAAADwAAADeP0AADEAAAAwAAAAMQB4AtAgGAPgA3gDeP3GAAAAAAA0AAAAGfL7h4bRGXYAdvwAAAAAAAAAAAAAAAAAAAAAAABNiACsDa12oekZ8tjpzQC3dqEAAAAAAAAAAADrwAB2oekAAGAAAAAFAAAAAAAAAIAAgAAAwBAAAAAACDQAAAADAAAAAACKAIggGAAAA3gAAAB4IBgAAAMAAAAAAAAAArEAAAAYAAAAAAAAAADyeABAABkAAAAAAADyyAAAABkAAAAAAAAAAAAAAAAAAACZAJkAmQAMOCAAAAAAAAIBAQACABm39vsZ8wjmngAAdqEAAAAAAALy8AAAABkAAAAAABgAgAAAAAAAAAAAAAAAAAD1CPbbAAAAAXRSTlMAQObYZgAAAAFiS0dEi/JvR+AAAAAJcEhZcwAAD4gAAA+IARbIpYYAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAABZ0lEQVR42u3Yu0/DMBAG8Ms5D2BrVyesXuIRCQWYGyohJWLIALQSjFQIMfCSqKD9x2GgD5xQqZZ9QuK+1cNPjiV/50BAEGCEEUYY+acICiOuEQzCKI6TH4ncIiiind09MCNCdwhiL+5DR2TqDEGR7UNn3O0EUwXgGcFcg28E098NV8jXeYB/5AD8I71D/0ihwD9ydOwfKU7APyLDzYiTa0X3CZDOYx+U3zkdmI1ihQzbRHHmuE9EeyeVRnRbv7I2jfMMXXe8SEykSQP/iC4IkFwwwggjRAjmq1tWXZjIpVqf6nO0Q4S8Gi36ohy35vjrcbnK6Eba9YncPJ4YGVIgyvJzJVsYtzUBMtEEyF1FgBQNAXIvCZAHQYBkgX/kUREgT5oAea4IkJdXS2SbuyttCJDa9leUCCfl2yLT1hvofbpcLD+kfTPOkmiRebsZ58vFZIY8SDDCCCOMMMIII4wwwggjjDDyt5BPSW1XLK5JvOMAAAAASUVORK5CYII=",alt:"",className:l.a.icon})})}),k(t.contacts.vk)&&Object(h.jsx)("span",{className:l.a.item,children:Object(h.jsx)("a",{href:t.contacts.vk,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAADAFBMVEX///8AAAACAgIDAwMEBAQFBQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///+VceJeAAAAAXRSTlMAQObYZgAAAAFiS0dE/6UH8sUAAAAJcEhZcwAADOsAAAzrAeXWRNIAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAB5klEQVR42u2YW0+DQBCFoUCkWnpRsbYNFOnFXjQxPvr/f5i1aZSlsztnZUNqnPPInJ1v7zvB80QikUgkEon+vlbD0K8qHDtHxD4ly25mJ+VJ90tFLe5rROVaZqrm/XRz+JwSzTdKHzo4RGdE2qek6R1kHNJF1Nf6uq4p0xMO8UJkKhLCUyKmU7It9X0LdHIBDiTQxoAE9ZFMTRskRyDBuWVptdWRodyeOz5UR2He6XcAZM46NIzYGFdTvHKGgjuyCQ/ZcQYNo2AcXBIlnNOMiDtGexsIcr/9xlGN9mnGmr8RShxCMxJkA8ILDz4GA8o0AyEZ+uAwtkdTEFmQo2aUr/cd7hkgAbQgwFAMsQleAlCzXrHahfTFDOkN9cGVibH3bCix9tYILU4IV8R1talW+Anhz1T2TO8fvzu0Z2jfBFtNjBWrG0aHqYudQJYMJHUBYUt8F5C3NigRC7l3QMlbmbDdZVA2LihbjjJo47C4OZLjf0SZtEK5QW+p3BQvGEoPvgmb7GR+LDNgAbnFT+ArvQmFeY0DzwnFvJOnmPGBpfQNrV8qvrLJUEx9VGwjaFrtn33VNmw0FM+7gto2pdCXf91UNoQcXrKYrJFVhc0YRy1GP1mikrScz9n1XP54i0QikUgkunR9Aq/2HNLI7vULAAAAAElFTkSuQmCC",alt:"",className:l.a.icon})})}),k(t.contacts.twitter)&&Object(h.jsx)("span",{className:l.a.item,children:Object(h.jsx)("a",{href:t.contacts.twitter,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:t.contacts.twitter,className:l.a.icon})})}),k(t.contacts.instagram)&&Object(h.jsx)("span",{className:l.a.item,children:Object(h.jsx)("a",{href:t.contacts.instagram,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:j,alt:"",className:l.a.icon})})})]}),e&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:l.a.editInfo,onClick:s,children:"Edit"})})]})},C=function(A){var t=A.profile,e=A.status,s=A.updateStatus,a=A.isOwner,n=A.savePhoto,c=A.saveProfile,o=Object(r.useState)(!1),u=Object(i.a)(o,2),j=u[0],d=u[1];if(!t)return Object(h.jsx)(f.a,{});return Object(h.jsxs)("div",{className:l.a.profileInfo,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:l.a.fullName,children:t.fullName}),Object(h.jsx)("img",{src:t.photos.large||b.a,alt:"",className:l.a.userPhoto}),Object(h.jsx)(g,{status:e,updateStatus:s})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{className:l.a.inputUploadAvatar,children:[" ",a&&Object(h.jsx)("input",{type:"file",onChange:function(A){A.target.files.length&&n(A.target.files[0])}})]})}),Object(h.jsx)("h2",{className:l.a.contacts,children:j?Object(h.jsx)(x,{saveProfileSubmit:function(A){c(A).then((function(){d(!1)}))},contacts:t.contacts}):Object(h.jsx)(I,{goToEditMode:function(){d(!0)},profile:t,isOwner:a})})]})},B=e(2),D=e(12),U=e(71),Z=e(8),w=e(281),P=e.n(w),Y=e(282),M=e.n(Y),E=e(13),J=function(A){var t=A.profile,e=A.message;return t?Object(h.jsxs)("div",{className:M.a.item,children:[Object(h.jsx)(E.b,{to:"/profile",children:Object(h.jsx)("img",{src:t.photos.large||b.a,alt:"",className:M.a.avatar})}),Object(h.jsx)("span",{className:M.a.post,children:e})]}):null},N=function(A){var t=A.error,e=A.addPost,s=Object(m.a)({initialValues:{post:""},validationSchema:O.b({post:O.c().max(100,"Must be 100 or less").min(3,"Must be 3 or more").required("Required")}),onSubmit:function(A){e(A.post),A.post=""}});return Object(h.jsxs)("form",{onSubmit:s.handleSubmit,className:P.a.form_post,children:[Object(v.a)("post","text","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:",s.values.post,s.handleChange),s.errors.post?Object(h.jsx)("p",{className:P.a.formSummaryError,children:s.touched.post&&s.errors.post}):null,Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"Add Post"})}),t&&Object(h.jsx)("div",{children:t})]})},y=o.a.memo((function(A){var t=A.state,e=Object(Z.a)(t.posts).reverse().map((function(t){return Object(h.jsx)(J,{id:t.id,message:t.message,profile:A.profile})}));return Object(h.jsxs)("div",{children:["My Posts:",Object(h.jsx)(N,Object(B.a)({},A)),Object(h.jsx)("div",{}),Object(h.jsx)("div",{children:e})]})})),F=Object(D.b)((function(A){return{state:A.profilePage}}),(function(A){return{addPost:function(t){A(Object(U.a)(t))}}}))(y),R=function(A){return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{savePhoto:A.savePhoto,isOwner:A.isOwner,profile:A.profile,status:A.status,saveProfile:A.saveProfile,updateStatus:A.updateStatus}),Object(h.jsx)(F,{profile:A.profile})]})},S=e(274),Q=e(24),G=e(74),X=e(273),H=function(A){Object(n.a)(e,A);var t=Object(c.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(a.a)(e,[{key:"refreshProfile",value:function(){var A=this.props.params.userId;A||(A=this.props.authorizedUserId)||this.props.navigate("/login"),this.props.getUserProfile(A),this.props.requestStatus(A)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(A,t,e){this.props.params.userId!==A.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(R,{isOwner:!this.props.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})})}}]),e}(o.a.Component);t.default=Object(Q.c)(Object(D.b)((function(A){return{status:Object(G.d)(A),isAuth:Object(G.b)(A),authorizedUserId:Object(G.a)(A)}}),{getUserProfile:U.c,requestStatus:U.d,updateStatus:U.g,savePhoto:U.e,saveProfile:U.f}),S.a,X.a)(H)}}]);
//# sourceMappingURL=4.c3344220.chunk.js.map