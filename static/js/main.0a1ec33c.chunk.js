(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[0],{120:function(e,t,n){},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o}));var r=n(112),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8a4b561f-4f72-4678-b1b5-33fea7a333ab"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e))},follow:function(e){return a.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{})},saveProfile:function(e){return a.put("profile",e)}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},152:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,283)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},a=n(0),i=n.n(a),c=n(109),s=n.n(c),o=n(4),l=n(5),u=n(9),d=n(10),j=n(12),p=n(22),h=n(3),f=n(16),b=n(70),O=n(83),g=n(6),m=n.n(g),x=n(17),v=n(8),P=n(2),C=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),r):e}))},w=n(14),k="usersPage/FOLLOW",_="usersPage/UNFOLLOW",S="usersPage/SET_USERS",y="usersPage/SET_CURRENT_PAGE",T="usersPage/SET_TOTAL_USERS_COUNT",A="usersPage/TOGGLE_IS_FETCHING",L="usersPage/TOGGLE_IS_FOLLOWING_PROGRESS",E={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},N=function(e){return{type:k,userId:e}},I=function(e){return{type:_,userId:e}},U=function(e){return{type:y,currentPage:e}},M=function(e){return{type:A,isFetching:e}},F=function(e,t){return{type:L,isFetching:e,userId:t}},D=function(){var e=Object(x.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(F(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(P.a)(Object(P.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case _:return Object(P.a)(Object(P.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case S:return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case y:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case T:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.totalUsersCount});case A:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case L:return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R="auth/SET_AUTH_USERS_DATA",z="auth/GET_CAPTCHA_URL_SUCCESS",H={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},G=function(e,t,n,r){return{type:R,payload:{userId:e,email:t,login:n,isAuth:r}}},J=function(e){return{type:z,payload:{captchaUrl:e}}},W=function(){return function(){var e=Object(x.a)(m.a.mark((function e(t){var n,r,a,i,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,i=r.login,c=r.email,t(G(a,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){return function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(G(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){return function(){var e=Object(x.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(J(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:case z:return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},Y=n(113),X="INITIALIZED_SUCCESS",Z={initialized:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===X?Object(P.a)(Object(P.a)({},e),{},{initialized:!0}):e},$="player/PLAY_MUSIC",ee={isPlaying:!1,url:0},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return t.type===$?(e.isPlaying&&e.url!==t.url&&(e.isPlaying=!1),Object(P.a)(Object(P.a)({},e),{},{url:t.url,isPlaying:!e.isPlaying})):e},ne="settings/SWITCH_THEME",re="settings/GET_THEME",ae={isDark:!0},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(P.a)(Object(P.a)({},e),{},{isDark:!e.isDark});case re:return Object(P.a)({},e.isDark);default:return e}},ce=Object(p.b)({profilePage:b.b,dialogsPage:O.a,usersPage:B,auth:V,app:Q,player:te,settings:ie}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.c,oe=Object(p.d)(ce,se(Object(p.a)(Y.a))),le=n(43),ue=n(121),de=n(13),je=n(41),pe=n.n(je),he=n(1),fe=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,i=e.onPageChanged,c=e.portionSize,s=void 0===c?10:c,o=Math.ceil(t/n),l=[],u=1;u<=o;u++)l.push(u);var d=Math.ceil(o/s),j=Object(a.useState)(1),p=Object(de.a)(j,2),h=p[0],b=p[1],O=(h-1)*s+1,g=h*s,m=function(e){return e.isActive?pe.a.activeLink:pe.a.Link};return Object(he.jsxs)("div",{className:pe.a.paginator,children:[h>1&&Object(he.jsx)("button",{onClick:function(){b(h-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(he.jsx)(f.c,{to:"/users/"+e,className:m,children:Object(he.jsxs)("span",{className:r===e&&pe.a.selectedPage,onClick:function(){i(e)},children:[e," "]})})})),d>h&&Object(he.jsx)("button",{onClick:function(){b(h+1)},children:"NEXT"})]})},be=n(68),Oe=n.n(be),ge=n(71),me=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(he.jsxs)("div",{children:[Object(he.jsxs)("span",{children:[Object(he.jsx)("div",{children:t.name}),Object(he.jsx)("div",{className:Oe.a.status,children:t.status}),Object(he.jsx)(f.c,{to:"/profile/"+t.id,children:Object(he.jsx)("img",{src:null!=t.photos.small?t.photos.small:ge.a,alt:"",className:Oe.a.userPhoto})})]}),Object(he.jsx)("span",{children:t.followed?Object(he.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(he.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]})},xe=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],ve=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,i=e.users,c=Object(ue.a)(e,xe);return Object(he.jsxs)("div",{children:[Object(he.jsx)(fe,{currentPage:t,onPageChanged:n,totalUsersCount:r,pageSize:a}),i.map((function(e){return Object(he.jsx)(me,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow},e.id)}))]})},Pe=function(e){return e.usersPage.users},Ce=function(e){return e.usersPage.pageSize},we=function(e){return e.usersPage.totalUsersCount},ke=function(e){return e.usersPage.currentPage},_e=function(e){return e.usersPage.isFetching},Se=function(e){return e.usersPage.followingInProgress},ye=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(he.jsxs)(he.Fragment,{children:[this.props.isFetching?Object(he.jsx)(le.a,{}):null,Object(he.jsx)(ve,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),Te=Object(p.c)(Object(j.b)((function(e){return{users:Pe(e),pageSize:Ce(e),totalUsersCount:we(e),currentPage:ke(e),isFetching:_e(e),followingInProgress:Se(e)}}),{follow:function(e){return function(){var t=Object(x.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,w.d.follow.bind(w.d),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,w.d.unfollow.bind(w.d),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:U,toggleFollowingProgress:F,requestUsers:function(e,t){return function(){var n=Object(x.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(U(e)),n.next=4,w.d.getUsers(e,t);case 4:a=n.sent,r(M(!1)),r((c=a.items,{type:S,users:c})),r((i=a.totalCount,{type:T,totalUsersCount:i}));case 8:case"end":return n.stop()}var i,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ye),Ae=n(30),Le=n.n(Ae),Ee=function(e){return Object(he.jsx)("header",{children:Object(he.jsxs)("div",{className:Le.a.headerMiddle,children:[Object(he.jsx)("div",{className:Le.a.loginBlock,children:e.isAuth?Object(he.jsxs)("div",{children:[Object(he.jsx)("span",{className:Le.a.userloginName,children:e.login}),Object(he.jsx)("button",{onClick:e.logout,className:Le.a.logoutBtn,children:"Log Out"})]}):Object(he.jsx)(f.c,{to:"/login",className:Le.a.navLogin,children:"Login"})}),Object(he.jsx)("div",{className:Le.a.headerlogout})]})})},Ne=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(he.jsx)(Ee,Object(P.a)({},this.props))}}]),n}(i.a.Component),Ie=Object(j.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:K})(Ne),Ue=(n(152),n(42)),Me=n.n(Ue),Fe=function(e){return e.isActive?Me.a.activeLink:Me.a.Link},De=function(){return Object(he.jsx)("nav",{className:Me.a.nav,children:Object(he.jsxs)("div",{className:Me.a.textBlock,children:[Object(he.jsx)("div",{children:Object(he.jsx)(f.c,{to:"/profile",className:Fe,children:"Profile"})}),Object(he.jsx)("div",{children:Object(he.jsx)(f.c,{to:"/dialogs",className:Fe,children:"Messages"})}),Object(he.jsx)("div",{children:Object(he.jsx)(f.c,{to:"/news",className:Fe,children:"News"})}),Object(he.jsx)("div",{children:Object(he.jsx)(f.c,{to:"/music",className:Fe,children:"Music"})}),Object(he.jsx)("div",{children:Object(he.jsx)(f.c,{to:"/settings",className:Fe,children:"Settings"})}),Object(he.jsx)("div",{children:Object(he.jsx)(f.c,{to:"/users",className:Fe,children:"Users"})})]})})},Be=n(72),Re=n(39),ze=n(57),He=n.n(ze),Ge=n(38),Je=function(e){var t=e.login,n=e.captchaUrl,r=Object(Be.a)({initialValues:{email:"",password:"",rememberMe:!0,captcha:""},validationSchema:Re.b({email:Re.c().max(35,"Must be 35 or less").min(3,"Must be 3 or more").required("Required").email("Invalid email adress"),password:Re.c().max(25,"Must be 25 or less").min(3,"Must be 3 or more").required("Required"),rememberMe:Re.a().oneOf([!0],"Field must be checked")}),onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}});return Object(he.jsxs)("form",{onSubmit:r.handleSubmit,children:[Object(Ge.a)("email","text","Email",r.values.email,r.handleChange,r.handleBlur),r.errors.email?Object(he.jsx)("p",{className:He.a.formSummaryError,children:r.touched.email&&r.errors.email}):null,Object(Ge.a)("password","password","Password",r.values.password,r.handleChange,r.handleBlur),r.touched.password&&r.errors.password?Object(he.jsx)("p",{className:He.a.formSummaryError,children:r.errors.password}):null,Object(Ge.a)("rememberMe","checkbox",[],r.values.rememberMe,r.handleChange),Object(he.jsx)("label",{htmlFor:"checkbox",children:"Remember Me"}),r.errors.rememberMe?Object(he.jsx)("p",{className:He.a.formSummaryError,children:r.errors.rememberMe}):null,n&&Object(he.jsx)("img",{src:n,alt:""}),n&&Object(Ge.a)("captcha","text","captcha",r.values.captcha,r.handleChange),Object(he.jsx)("button",{type:"submit",children:"Login"})]})},We=Object(j.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(x.a)(m.a.mark((function a(i){var c,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?i(W()):(10===c.data.resultCode&&i(q()),s=c.data.messages.length>0?c.data.messages[0]:"Some error",console.log(s));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logout:K})((function(e){return e.isAuth?Object(he.jsx)(h.a,{to:"/profile"}):Object(he.jsxs)("div",{children:[Object(he.jsx)("h2",{children:"LOGIN"}),Object(he.jsx)("div",{children:"Email: cththes@gmail.com"}),Object(he.jsx)("div",{children:"Password: test"}),Object(he.jsx)(Je,Object(P.a)(Object(P.a)({},e),{},{captchaUrl:e.captchaUrl}))]})})),Ke=n(119),qe=n.n(Ke),Ve=n(120),Ye=n.n(Ve),Xe=n.p+"static/media/AL-90 - Black Sapphire.f56005f7.mp3",Ze=n.p+"static/media/Andy Stott - Never the right time.28133de8.mp3",Qe=n.p+"static/media/Autechre - Further.f81fb838.mp3",$e=n.p+"static/media/Balladur - Time Is A Killing Machine.3a1f4bbc.mp3",et=n.p+"static/media/Blue October - All That We Are.f11205ea.mp3",tt=n.p+"static/media/Bluestaeb - Just A Staeb Ahead (Feat. Anthony Drawn).8d20c17e.mp3",nt=n.p+"static/media/BLVCK CEILING - End of Time.589cdfc0.mp3",rt=n.p+"static/media/Boards of Canada - An Eagle In Your Mind.51ad0bfb.mp3",at=n.p+"static/media/Bowery Electric - Coming Down.20b2e6c5.mp3",it=n.p+"static/media/Burial - Pirates.f5a849bf.mp3",ct=n.p+"static/media/Cremation Lily - Lovers Against the Rocks.41474fda.mp3",st=n.p+"static/media/CU - 2020.800c700d.mp3",ot=n.p+"static/media/Doja Cat - 4 mordant.124b2df4.mp3",lt=n.p+"static/media/Fuel - Halos Of The Sun.33d32ebe.mp3",ut=n.p+"static/media/Grimes - Flesh without Blood.2d05249a.mp3",dt=n.p+"static/media/Jamie xx - Far Nearer.e2347420.mp3",jt=n.p+"static/media/Jazzpospolita - Czerwona Flaga (Ale Ja Sie Kapie).bf152f3c.mp3",pt=n.p+"static/media/Linkin Park - Breaking The Habit.64924c9b.mp3",ht=n.p+"static/media/Lissy Trullie - Madeleine (Jewellers R).1dc501e7.mp3",ft=n.p+"static/media/Lorn - PERFEKT DARK.5156c4ea.mp3",bt=n.p+"static/media/Nadja - Long Dark Twenties.e3a83606.mp3",Ot=n.p+"static/media/Natalie Merchant - San Andreas Fault.e4f02418.mp3",gt=n.p+"static/media/P E A C E A N D T R A N Q U I L I T Y - A Hat In Time (Seal The Deal DLC).83bdad8d.mp3",mt=n.p+"static/media/Pale Saints - Porpoise.3bc82982.mp3",xt=n.p+"static/media/Pastel Ghost - Pulse.d9821740.mp3",vt=n.p+"static/media/Psychonaut 4 - How Much for the Hope.fba7ba4a.mp3",Pt=n.p+"static/media/Sendelica - It's the Neu Kosmiche Disko.d19ba4a4.mp3",Ct=n.p+"static/media/Shlohmo - We Sat in the Car.5b318bbf.mp3",wt=n.p+"static/media/TR_ST - Candy Walls.7e8c265d.mp3",kt=n.p+"static/media/Whirr - Sway.5a89a4df.mp3",_t=n.p+"static/media/Yves Tumor feat. James K - Licking An Orchid (feat. James K).bd379604.mp3",St=n.p+"static/media/\u041f\u043b\u0430\u043d\u0435\u0442\u0430 \u041f\u043b\u0443\u0442\u043e\u043d - \u0422\u0438\u0448\u0438\u043d\u0430.89eb35f8.mp3",yt=Object(j.b)((function(e){return{url:e.player.url}}))((function(){var e=Object(j.d)((function(e){return e.player.isPlaying})),t=Object(j.d)((function(e){return e.player.url})),n=Object(j.c)(),r=function(e){n({type:$,url:e}),console.log(e)},a=[{title:"AL-90 - Black Sapphire",url:Xe},{title:"Andy Stott - Never the right time (feat. Alison Skidmore)",url:Ze},{title:"Autechre - Further",url:Qe},{title:"Balladur - Time Is A Killing Machine",url:$e},{title:"Blue October - All That We Are",url:et},{title:"Bluestaeb - Just A Staeb Ahead (Feat. Anthony Drawn)",url:tt},{title:"BLVCK CEILING - End of Time",url:nt},{title:"Boards of Canada - An Eagle In Your Mind",url:rt},{title:"Bowery Electric - Coming Down",url:at},{title:"Burial - Pirates",url:it},{title:"Cremation Lily - Lovers Against the Rocks",url:ct},{title:"CU - 2020",url:st},{title:"Doja Cat - 4 mordant",url:ot},{title:"Fuel - Halos Of The Sun",url:lt},{title:"Grimes - Flesh without Blood",url:ut},{title:"Jamie xx - Far Nearer",url:dt},{title:"Jazzpospolita - Czerwona Flaga (Ale Ja Sie Kapie)",url:jt},{title:"Linkin Park - Breaking The Habit",url:pt},{title:"Lissy Trullie - Madeleine (Jewellers R)",url:ht},{title:"Lorn - PERFEKT DARK",url:ft},{title:"Nadja - Long Dark Twenties",url:bt},{title:"Natalie Merchant - San Andreas Fault",url:Ot},{title:"P E A C E A N D T R A N Q U I L I T Y - A Hat In Time (Seal The Deal DLC)",url:gt},{title:"Pale Saints - Porpoise",url:mt},{title:"Pastel Ghost - Pulse",url:xt},{title:"Psychonaut 4 - How Much for the Hope",url:vt},{title:"Sendelica - It's the Neu! Kosmiche Disko",url:Pt},{title:"Shlohmo - We Sat in the Car",url:Ct},{title:"TR/ST - Candy Walls",url:wt},{title:"Whirr - Sway",url:kt},{title:"Yves Tumor feat. James K - Licking An Orchid (feat. James K)",url:_t},{title:"\u041f\u043b\u0430\u043d\u0435\u0442\u0430 \u041f\u043b\u0443\u0442\u043e\u043d - \u0422\u0438\u0448\u0438\u043d\u0430",url:St}];return Object(he.jsxs)("div",{className:Ye.a.player,children:[Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Xe)},children:a[0].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Ze)},children:a[1].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Qe)},children:a[2].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r($e)},children:a[3].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(et)},children:a[4].title})})," ",Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Xe)},children:a[5].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Ze)},children:a[6].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Qe)},children:a[7].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r($e)},children:a[8].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(et)},children:a[9].title})})," ",Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Xe)},children:a[10].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Ze)},children:a[11].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Qe)},children:a[12].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r($e)},children:a[13].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(et)},children:a[14].title})})," ",Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Xe)},children:a[15].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Ze)},children:a[16].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Qe)},children:a[17].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r($e)},children:a[18].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(et)},children:a[19].title})})," ",Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Xe)},children:a[20].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Ze)},children:a[21].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Qe)},children:a[22].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r($e)},children:a[23].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(et)},children:a[24].title})})," ",Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Xe)},children:a[25].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Ze)},children:a[26].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(Qe)},children:a[27].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r($e)},children:a[28].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(et)},children:a[29].title})}),Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(et)},children:a[30].title})})," ",Object(he.jsx)("div",{children:Object(he.jsx)("span",{onClick:function(){r(et)},children:a[31].title})}),e?Object(he.jsx)(qe.a,{url:t,controls:!0,height:"40px",width:"30%",playing:!0,config:{file:{tracks:[Xe,Ze,Qe,$e,et]}}}):Object(he.jsx)("div",{})]})})),Tt=function(){var e=Object(j.d)((function(e){return e.settings.isDark})),t=Object(j.c)();return Object(he.jsxs)("div",{children:["Settings",Object(he.jsx)("div",{children:Object(he.jsx)("button",{onClick:function(){t({type:ne})},children:e?Object(he.jsx)("span",{children:"Light Theme"}):Object(he.jsx)("span",{children:"Dark Theme"})})})]})},At=n(73),Lt=i.a.lazy((function(){return n.e(3).then(n.bind(null,285))})),Et=i.a.lazy((function(){return n.e(4).then(n.bind(null,284))})),Nt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var e=this.props.isDark;return Object(he.jsxs)("div",{className:e?"app_dark":"app_light",children:[Object(he.jsx)(Ie,{}),Object(he.jsxs)("div",{className:"app-wrapper",children:[Object(he.jsx)(De,{}),Object(he.jsx)("div",{className:"app-wrapper-content",children:Object(he.jsx)(a.Suspense,{fallback:Object(he.jsx)(le.a,{}),children:Object(he.jsxs)(h.d,{children:[Object(he.jsx)(h.b,{element:Object(he.jsx)(Et,{profile:this.props.profile}),path:"profile"}),Object(he.jsx)(h.b,{element:Object(he.jsx)(We,{}),path:"login"}),Object(he.jsx)(h.b,{element:Object(he.jsx)(Et,{profile:this.props.profile}),path:"profile/:userId"}),Object(he.jsx)(h.b,{element:Object(he.jsx)(Lt,{profile:this.props.profile}),path:"dialogs/*"}),Object(he.jsx)(h.b,{path:"news"}),Object(he.jsx)(h.b,{element:Object(he.jsx)(yt,{}),path:"music"}),Object(he.jsx)(h.b,{element:Object(he.jsx)(Tt,{}),path:"settings"}),Object(he.jsx)(h.b,{element:Object(he.jsx)(Te,{}),path:"users/*"})]})})})]})]})}}]),n}(a.Component),It=Object(p.c)(Object(j.b)((function(e){return{initialized:e.app.initialized,profile:Object(At.c)(e),isDark:e.settings.isDark}}),{initializeApp:function(){return function(e){var t=e(W());Promise.all([t]).then((function(){e({type:X})}))}}}))(Nt),Ut=function(){return Object(he.jsx)(f.a,{children:Object(he.jsx)(j.a,{store:oe,children:Object(he.jsx)(It,{})})})};s.a.createRoot(document.getElementById("root")).render(Object(he.jsx)(i.a.StrictMode,{children:Object(he.jsx)(Ut,{})})),r()},30:function(e,t,n){e.exports={headerMiddle:"Header_headerMiddle__2twbi",logout:"Header_logout__1brj9",loginBlock:"Header_loginBlock__23WDJ",userloginName:"Header_userloginName__2GwpG",navLogin:"Header_navLogin__1vFc6"}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(0);var r=n(1),a=function(e,t,n,a,i,c){return Object(r.jsx)("div",{children:Object(r.jsx)("input",{name:e,type:t,placeholder:n,value:a,onChange:i,onBlur:c})})}},41:function(e,t,n){e.exports={userPhoto:"Paginator_userPhoto__3ZLCB",status:"Paginator_status__27RiT",user:"Paginator_user__2Sv-R",usersNav:"Paginator_usersNav__3XAxS",Link:"Paginator_Link__3_t-I",activeLink:"Paginator_activeLink__3azyf"}},42:function(e,t,n){e.exports={nav:"Navbar_nav__36duh",textBlock:"Navbar_textBlock__2Z1jq",Link:"Navbar_Link__Y6fBX",activeLink:"Navbar_activeLink__WMz8A"}},43:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.5788b05c.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:""})})}},57:function(e,t,n){e.exports={login:"Login_login__3x1Wf",error:"Login_error__1WMIp",formSummaryError:"Login_formSummaryError__24JBn"}},68:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1MhCt",status:"Users_status__1lVWx",user:"Users_user__13qZW",usersNav:"Users_usersNav__13DtI",Link:"Users_Link__14oqR",activeLink:"Users_activeLink__2a4_Z"}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return v}));var r=n(6),a=n.n(r),i=n(17),c=n(8),s=n(2),o=n(14),l="profilePage/ADD-POST",u="profilePage/DELETE_POST",d="profilePage/SET_USER_PROFILE",j="profilePage/SET_STATUS",p="profilePage/SAVE_PHOTO_SUCCESS",h={posts:[{message:"Tomorrow can take care of itself",id:1}],profile:null,status:"",newPostText:""},f=function(e){return{type:l,newPostText:e}},b=function(e){return{type:j,status:e}},O=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n,r){var i,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(O(i)),t.next=9;break;case 8:return t.abrupt("return",Promise.reject(c.data.messages[0]));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case j:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case d:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case u:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case p:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},71:function(e,t,n){"use strict";t.a=n.p+"static/media/user.191fe8f3.jpg"},73:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=function(e){return e.profilePage.profile},a=function(e){return e.profilePage.status},i=function(e){return e.auth.userId},c=function(e){return e.auth.isAuth}},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(8),a=n(2),i="dialogsPage/SEND-MESSAGE",c={messages:[{message:"( \u0361\xb0 \u035c\u0296 \u0361\xb0)",id:1}],dialogs:[{id:1,name:"sgt. Florida"},{id:2,name:"cth"},{id:3,name:"FV"},{id:4,name:"Valentin Oblomov"},{id:5,name:"\u0428\u0423\u0422\u0423\u041f"}]},s=function(e){return{type:i,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===i){var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:2,message:n}]),newMessageText:""})}return e}}},[[272,1,2]]]);
//# sourceMappingURL=main.0a1ec33c.chunk.js.map