(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[0],{120:function(e,t,r){e.exports={player:"Music_player__3Pwbd"}},15:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return o}));var a=r(112),n=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8a4b561f-4f72-4678-b1b5-33fea7a333ab"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return n.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return n.delete("follow/".concat(e))},follow:function(e){return n.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return n.get("profile/"+e)},getStatus:function(e){return n.get("profile/status/"+e)},updateStatus:function(e){return n.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),n.put("profile/photo",t,{})},saveProfile:function(e){return n.put("profile",e)}},c={me:function(){return n.get("auth/me")},login:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n.post("auth/login",{email:e,password:t,rememberMe:r,captcha:a})},logout:function(){return n.delete("auth/login")}},o={getCaptchaUrl:function(){return n.get("security/get-captcha-url")}}},173:function(e,t,r){},25:function(e,t,r){e.exports={headerMiddle:"Header_headerMiddle__2twbi",loginBlock:"Header_loginBlock__23WDJ",userloginName:"Header_userloginName__2GwpG",navLogin:"Header_navLogin__1vFc6",musicPlayerBlock:"Header_musicPlayerBlock__20Lsg",smallTitleSize:"Header_smallTitleSize__-dKxQ"}},272:function(e,t,r){"use strict";r.r(t);var a=function(e){e&&e instanceof Function&&r.e(5).then(r.bind(null,283)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),s(e),i(e)}))},n=r(0),s=r.n(n),i=r(109),c=r.n(i),o=r(4),u=r(5),l=r(9),h=r(10),p=r(11),d=r(22),b=r(3),f=r(13),m=r(70),j=r(83),g=r(6),O=r.n(g),w=r(17),v=r(8),x=r(2),S=function(e,t,r,a){return e.map((function(e){return e[r]===t?Object(x.a)(Object(x.a)({},e),a):e}))},P=r(15),k="usersPage/FOLLOW",_="usersPage/UNFOLLOW",D="usersPage/SET_USERS",N="usersPage/SET_CURRENT_PAGE",y="usersPage/SET_TOTAL_USERS_COUNT",C="usersPage/TOGGLE_IS_FETCHING",M="usersPage/TOGGLE_IS_FOLLOWING_PROGRESS",L={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},T=function(e){return{type:k,userId:e}},E=function(e){return{type:_,userId:e}},A=function(e){return{type:N,currentPage:e}},I=function(e){return{type:C,isFetching:e}},B=function(e,t){return{type:M,isFetching:e,userId:t}},U=function(){var e=Object(w.a)(O.a.mark((function e(t,r,a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0,r)),e.next=3,a(r);case 3:0===e.sent.data.resultCode&&t(n(r)),t(B(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,r,a,n){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(x.a)(Object(x.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!0})});case _:return Object(x.a)(Object(x.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!1})});case D:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case N:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case y:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.totalUsersCount});case C:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case M:return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R="auth/SET_AUTH_USERS_DATA",z="auth/GET_CAPTCHA_URL_SUCCESS",G={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},K=function(e,t,r,a){return{type:R,payload:{userId:e,email:t,login:r,isAuth:a}}},H=function(e){return{type:z,payload:{captchaUrl:e}}},W=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){var r,a,n,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(r=e.sent).data.resultCode&&(a=r.data.data,n=a.id,s=a.login,i=a.email,t(K(n,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(K(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.c.getCaptchaUrl();case 2:r=e.sent,a=r.data.url,t(H(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:case z:return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},Y=r(113),X="INITIALIZED_SUCCESS",Z={initialized:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===X?Object(x.a)(Object(x.a)({},e),{},{initialized:!0}):e},$="player/PLAY_MUSIC",ee={isPlaying:!1,url:0,title:0,music:[{title:"AL-90 - Black Sapphire",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/AL-90%20-%20Black%20Sapphire.mp3"},{title:"Andy Stott - Never the right time",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Andy%20Stott%20-%20Never%20the%20right%20time.mp3"},{title:"Autechre - Further",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Autechre%20-%20Further.mp3"},{title:"Balladur - Time Is A Killing Machine",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Balladur%20-%20Time%20Is%20A%20Killing%20Machine.mp3"},{title:"Blue October - All That We Are",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Blue%20October%20-%20All%20That%20We%20Are.mp3"},{title:"Bluestaeb - Didn't Cha Know",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Bluestaeb%20-%20Didn't%20Cha%20Know.mp3"},{title:"BLVCK CEILING - End of Time",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/BLVCK%20CEILING%20-%20END%20OF%20TIME.mp3"},{title:"Boards of Canada - An Eagle In Your Mind",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Boards%20of%20Canada%20-%20An%20Eagle%20In%20Your%20Mind.mp3"},{title:"Bowery Electric - Coming Down",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Bowery%20Electric%20-%20Coming%20Down.mp3"},{title:"Burial - Burial - Distant Lights",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Burial%20-%20Distant%20Lights.mp3"},{title:"Burial - Pirates",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Burial%20-%20Pirates.mp3"},{title:"Cremation Lily - Lovers Against the Rocks",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Cremation%20Lily%20-%20Lovers%20Against%20the%20Rocks.mp3"},{title:"Doja Cat - 4 mordant",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Doja%20Cat%20-%204%20Morant.mp3"},{title:"Fraunhofer Diffraction - Bloodlust",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Fraunhofer%20Diffraction%20-%20Bloodlust.mp3"},{title:"Fuel - Halos Of The Sun",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Fuel%20-%20Halos%20of%20the%20Sun.mp3"},{title:"Gopinatha - Primeval Lord",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Gopinatha%20-%20Primeval%20Lord.mp3"},{title:"Grimes - Flesh without Blood",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Grimes%20-%20Flesh%20without%20Blood.mp3"},{title:"Jamie xx - Far Nearer",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Jamie%20xx%20-%20Far%20Nearer.mp3"},{title:"Jazzpospolita - Czerwona Flaga (Ale Ja Sie Kapie)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Jazzpospolita%20-%20Czerwona%20Flaga%20(Ale%20Ja%20Sie%20Kapie).mp3"},{title:"Lissy Trullie - Madeleine (Jewellers Remix)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Lissy%20Trullie%20-%20Madeleine%20(Jewellers%20Remix).mp3"},{title:"Lorn - PERFEKT DARK",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Lorn%20-%20PERFEKT%20DARK.mp3"},{title:"Nadja - Long Dark Twenties",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Nadja%20-%20Long%20Dark%20Twenties.mp3"},{title:"Natalie Merchant - San Andreas Fault",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Natalie%20Merchant%20-%20San%20Andreas%20Fault.mp3"},{title:"P E A C E A N D T R A N Q U I L I T Y - A Hat In Time (Seal The Deal DLC)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/P%20E%20A%20C%20E%20A%20N%20D%20T%20R%20A%20N%20Q%20U%20I%20L%20I%20T%20Y%20-%20A%20Hat%20In%20Time%20(Seal%20The%20Deal%20DLC).mp3"},{title:"Pale Saints - Porpoise",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Pale%20Saints%20-%20Porpoise.mp3"},{title:"Pastel Ghost - Pulse",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Pastel%20Ghost%20-%20Pulse.mp3"},{title:"Placebo - Sleeping With Ghosts",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Placebo%20-%20Sleeping%20With%20Ghosts.mp3"},{title:"Radiohead - Hearing Damage",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Radiohead%20-%20Hearing%20Damage.mp3"},{title:"STARFORCE - Age of Nano.",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/STARFORCE%20-%20Age%20of%20Nano.mp3"},{title:"Sendelica - It's the Neu! Kosmiche Disko",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Sendelica%20-%20It's%20the%20Neu%20Kosmiche%20Disko.mp3"},{title:"Shlohmo - We Sat in the Car",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Shlohmo%20-%20We%20Sat%20in%20the%20Car.mp3"},{title:"Shl\xf8mo - Ivory",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Shl%C3%B8mo%20-%20Ivory.mp3"},{title:"Whirr - Sway",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Whirr%20-%20Sway.mp3"},{title:"Yves Tumor feat. James K - Licking An Orchid (feat. James K)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Yves%20Tumor%20feat.%20James%20K%20-%20Licking%20An%20Orchid%20(feat.%20James%20K).mp3"},{title:"\u041f\u043b\u0430\u043d\u0435\u0442\u0430 \u041f\u043b\u0443\u0442\u043e\u043d - \u0422\u0438\u0448\u0438\u043d\u0430",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/%D0%9F%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0%20%D0%9F%D0%BB%D1%83%D1%82%D0%BE%D0%BD%20-%20%D0%A2%D0%B8%D1%88%D0%B8%D0%BD%D0%B0.mp3"}]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return t.type===$?(e.isPlaying&&e.url!==t.url&&(e.isPlaying=!1),Object(x.a)(Object(x.a)({},e),{},{url:t.url,title:t.title,isPlaying:!e.isPlaying})):e},re="settings/SWITCH_THEME",ae="settings/GET_THEME",ne={isDark:!0},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(x.a)(Object(x.a)({},e),{},{isDark:!e.isDark});case ae:return Object(x.a)({},e.isDark);default:return e}},ie=Object(d.b)({profilePage:m.b,dialogsPage:j.a,usersPage:F,auth:q,app:Q,player:te,settings:se}),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,oe=Object(d.d)(ie,ce(Object(d.a)(Y.a))),ue=r(43),le=r(121),he=r(14),pe=r(41),de=r.n(pe),be=r(1),fe=function(e){for(var t=e.totalUsersCount,r=e.pageSize,a=e.currentPage,s=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,o=Math.ceil(t/r),u=[],l=1;l<=o;l++)u.push(l);var h=Math.ceil(o/c),p=Object(n.useState)(1),d=Object(he.a)(p,2),b=d[0],m=d[1],j=(b-1)*c+1,g=b*c,O=function(e){return e.isActive?de.a.activeLink:de.a.Link};return Object(be.jsxs)("div",{className:de.a.paginator,children:[b>1&&Object(be.jsx)("button",{onClick:function(){m(b-1)},children:"PREV"}),u.filter((function(e){return e>=j&&e<=g})).map((function(e){return Object(be.jsx)(f.c,{to:"/users/"+e,className:O,children:Object(be.jsxs)("span",{className:a===e&&de.a.selectedPage,onClick:function(){s(e)},children:[e," "]})})})),h>b&&Object(be.jsx)("button",{onClick:function(){m(b+1)},children:"NEXT"})]})},me=r(68),je=r.n(me),ge=r(71),Oe=function(e){var t=e.user,r=e.followingInProgress,a=e.follow,n=e.unfollow;return Object(be.jsxs)("div",{children:[Object(be.jsxs)("span",{children:[Object(be.jsx)("div",{children:t.name}),Object(be.jsx)("div",{className:je.a.status,children:t.status}),Object(be.jsx)(f.c,{to:"/profile/"+t.id,children:Object(be.jsx)("img",{src:null!=t.photos.small?t.photos.small:ge.a,alt:"",className:je.a.userPhoto})})]}),Object(be.jsx)("span",{children:t.followed?Object(be.jsx)("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Unfollow"}):Object(be.jsx)("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]})},we=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],ve=function(e){var t=e.currentPage,r=e.onPageChanged,a=e.totalUsersCount,n=e.pageSize,s=e.users,i=Object(le.a)(e,we);return Object(be.jsxs)("div",{children:[Object(be.jsx)(fe,{currentPage:t,onPageChanged:r,totalUsersCount:a,pageSize:n}),s.map((function(e){return Object(be.jsx)(Oe,{user:e,followingInProgress:i.followingInProgress,follow:i.follow,unfollow:i.unfollow},e.id)}))]})},xe=function(e){return e.usersPage.users},Se=function(e){return e.usersPage.pageSize},Pe=function(e){return e.usersPage.totalUsersCount},ke=function(e){return e.usersPage.currentPage},_e=function(e){return e.usersPage.isFetching},De=function(e){return e.usersPage.followingInProgress},Ne=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){var r=e.props.pageSize;e.props.requestUsers(t,r)},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,r=e.pageSize;this.props.requestUsers(t,r)}},{key:"render",value:function(){return Object(be.jsxs)(be.Fragment,{children:[this.props.isFetching?Object(be.jsx)(ue.a,{}):null,Object(be.jsx)(ve,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),r}(s.a.Component),ye=Object(d.c)(Object(p.b)((function(e){return{users:xe(e),pageSize:Se(e),totalUsersCount:Pe(e),currentPage:ke(e),isFetching:_e(e),followingInProgress:De(e)}}),{follow:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(r,e,P.d.follow.bind(P.d),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(r,e,P.d.unfollow.bind(P.d),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:A,toggleFollowingProgress:B,requestUsers:function(e,t){return function(){var r=Object(w.a)(O.a.mark((function r(a){var n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(I(!0)),a(A(e)),r.next=4,P.d.getUsers(e,t);case 4:n=r.sent,a(I(!1)),a((i=n.items,{type:D,users:i})),a((s=n.totalCount,{type:y,totalUsersCount:s}));case 8:case"end":return r.stop()}var s,i}),r)})));return function(e){return r.apply(this,arguments)}}()}}))(Ne),Ce=r(114),Me=r.n(Ce),Le=r(25),Te=r.n(Le),Ee=function(e){var t=Object(p.d)((function(e){return e.player.isPlaying})),r=Object(p.d)((function(e){return e.player.url})),a=Object(p.d)((function(e){return e.player.title})),n=!1;return a.length>50&&(n=!0),Object(be.jsx)("header",{children:Object(be.jsxs)("div",{className:Te.a.headerMiddle,children:[Object(be.jsx)("div",{className:Te.a.musicPlayerBlock,children:t?Object(be.jsxs)("div",{children:[Object(be.jsx)("div",{className:n&&Te.a.smallTitleSize,children:a}),Object(be.jsx)(Me.a,{url:r,controls:!0,height:"40px",width:"320px",playing:!0,changePlaybackRate:!1,config:{file:{attributes:{controlsList:"noplaybackrate nodownload nofullscreen"}}}})]}):Object(be.jsx)("div",{})}),Object(be.jsx)("div",{className:Te.a.loginBlock,children:e.isAuth?Object(be.jsxs)("div",{children:[Object(be.jsx)("span",{className:Te.a.userloginName,children:e.login}),Object(be.jsx)("div",{children:Object(be.jsx)("button",{onClick:e.logout,className:Te.a.logoutBtn,children:"Log Out"})})]}):Object(be.jsx)(f.c,{to:"/login",className:Te.a.navLogin,children:"Login"})}),Object(be.jsx)("div",{className:Te.a.headerlogout})]})})},Ae=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(be.jsx)(Ee,Object(x.a)({},this.props))}}]),r}(s.a.Component),Ie=Object(p.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:J})(Ae),Be=(r(173),r(42)),Ue=r.n(Be),Fe=function(e){return e.isActive?Ue.a.activeLink:Ue.a.Link},Re=function(){return Object(be.jsx)("nav",{className:Ue.a.nav,children:Object(be.jsxs)("div",{className:Ue.a.textBlock,children:[Object(be.jsx)("div",{children:Object(be.jsx)(f.c,{to:"/profile",className:Fe,children:"Profile"})}),Object(be.jsx)("div",{children:Object(be.jsx)(f.c,{to:"/dialogs",className:Fe,children:"Messages"})}),Object(be.jsx)("div",{children:Object(be.jsx)(f.c,{to:"/news",className:Fe,children:"News"})}),Object(be.jsx)("div",{children:Object(be.jsx)(f.c,{to:"/music",className:Fe,children:"Music"})}),Object(be.jsx)("div",{children:Object(be.jsx)(f.c,{to:"/settings",className:Fe,children:"Settings"})}),Object(be.jsx)("div",{children:Object(be.jsx)(f.c,{to:"/users",className:Fe,children:"Users"})})]})})},ze=r(72),Ge=r(39),Ke=r(57),He=r.n(Ke),We=r(38),Je=function(e){var t=e.login,r=e.captchaUrl,a=Object(ze.a)({initialValues:{email:"",password:"",rememberMe:!0,captcha:""},validationSchema:Ge.b({email:Ge.c().max(35,"Must be 35 or less").min(3,"Must be 3 or more").required("Required").email("Invalid email adress"),password:Ge.c().max(25,"Must be 25 or less").min(3,"Must be 3 or more").required("Required"),rememberMe:Ge.a().oneOf([!0],"Field must be checked")}),onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}});return Object(be.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(We.a)("email","text","Email",a.values.email,a.handleChange,a.handleBlur),a.errors.email?Object(be.jsx)("p",{className:He.a.formSummaryError,children:a.touched.email&&a.errors.email}):null,Object(We.a)("password","password","Password",a.values.password,a.handleChange,a.handleBlur),a.touched.password&&a.errors.password?Object(be.jsx)("p",{className:He.a.formSummaryError,children:a.errors.password}):null,Object(We.a)("rememberMe","checkbox",[],a.values.rememberMe,a.handleChange),Object(be.jsx)("label",{htmlFor:"checkbox",children:"Remember Me"}),a.errors.rememberMe?Object(be.jsx)("p",{className:He.a.formSummaryError,children:a.errors.rememberMe}):null,r&&Object(be.jsx)("img",{src:r,alt:""}),r&&Object(We.a)("captcha","text","captcha",a.values.captcha,a.handleChange),Object(be.jsx)("button",{type:"submit",children:"Login"})]})},Ve=Object(p.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,r,a){return function(){var n=Object(w.a)(O.a.mark((function n(s){var i,c;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.a.login(e,t,r,a);case 2:0===(i=n.sent).data.resultCode?s(W()):(10===i.data.resultCode&&s(V()),c=i.data.messages.length>0?i.data.messages[0]:"Some error",console.log(c));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logout:J})((function(e){return e.isAuth?Object(be.jsx)(b.a,{to:"/profile"}):Object(be.jsxs)("div",{children:[Object(be.jsx)("h2",{children:"LOGIN"}),Object(be.jsx)("div",{children:"Email: cththes@gmail.com"}),Object(be.jsx)("div",{children:"Password: test"}),Object(be.jsx)(Je,Object(x.a)(Object(x.a)({},e),{},{captchaUrl:e.captchaUrl}))]})})),qe=r(120),Ye=r.n(qe),Xe=Object(p.b)((function(e){return{url:e.player.url}}))((function(){var e=Object(p.c)(),t=function(t){e(function(e){return{type:$,url:e.url,title:e.title}}(t))},r=Object(p.d)((function(e){return e.player.music.map((function(e){return Object(be.jsx)("div",{children:Object(be.jsx)(f.c,{to:"/music",onClick:function(){t(e)},children:e.title})})}))}));return Object(be.jsx)("div",{className:Ye.a.player,children:r})})),Ze=function(){var e=Object(p.d)((function(e){return e.settings.isDark})),t=Object(p.c)();return Object(be.jsxs)("div",{children:["Settings",Object(be.jsx)("div",{children:Object(be.jsx)("button",{onClick:function(){t({type:re})},children:e?Object(be.jsx)("span",{children:"Light Theme"}):Object(be.jsx)("span",{children:"Dark Theme"})})})]})},Qe=r(73),$e=s.a.lazy((function(){return r.e(3).then(r.bind(null,285))})),et=s.a.lazy((function(){return r.e(4).then(r.bind(null,284))})),tt=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var e=this.props.isDark;return Object(be.jsx)("div",{className:"app",children:Object(be.jsxs)("div",{className:e?"app_dark":"app_light",children:[Object(be.jsx)(Ie,{}),Object(be.jsxs)("div",{className:"app-wrapper",children:[Object(be.jsx)(Re,{}),Object(be.jsx)("div",{className:"app-wrapper-content",children:Object(be.jsx)(n.Suspense,{fallback:Object(be.jsx)(ue.a,{}),children:Object(be.jsxs)(b.d,{children:[Object(be.jsx)(b.b,{element:Object(be.jsx)(et,{profile:this.props.profile}),path:"profile"}),Object(be.jsx)(b.b,{element:Object(be.jsx)(Ve,{}),path:"login"}),Object(be.jsx)(b.b,{element:Object(be.jsx)(et,{profile:this.props.profile}),path:"profile/:userId"}),Object(be.jsx)(b.b,{element:Object(be.jsx)($e,{profile:this.props.profile}),path:"dialogs/*"}),Object(be.jsx)(b.b,{path:"news"}),Object(be.jsx)(b.b,{element:Object(be.jsx)(Xe,{}),path:"music"}),Object(be.jsx)(b.b,{element:Object(be.jsx)(Ze,{}),path:"settings"}),Object(be.jsx)(b.b,{element:Object(be.jsx)(ye,{}),path:"users/*"})]})})})]})]})})}}]),r}(n.Component),rt=Object(d.c)(Object(p.b)((function(e){return{initialized:e.app.initialized,profile:Object(Qe.c)(e),isDark:e.settings.isDark}}),{initializeApp:function(){return function(e){var t=e(W());Promise.all([t]).then((function(){e({type:X})}))}}}))(tt),at=function(){return Object(be.jsx)(f.a,{children:Object(be.jsx)(p.a,{store:oe,children:Object(be.jsx)(rt,{})})})};c.a.createRoot(document.getElementById("root")).render(Object(be.jsx)(s.a.StrictMode,{children:Object(be.jsx)(at,{})})),a()},38:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(0);var a=r(1),n=function(e,t,r,n,s,i){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{name:e,type:t,placeholder:r,value:n,onChange:s,onBlur:i})})}},41:function(e,t,r){e.exports={userPhoto:"Paginator_userPhoto__3ZLCB",status:"Paginator_status__27RiT",user:"Paginator_user__2Sv-R",usersNav:"Paginator_usersNav__3XAxS",Link:"Paginator_Link__3_t-I",activeLink:"Paginator_activeLink__3azyf"}},42:function(e,t,r){e.exports={nav:"Navbar_nav__33oip",textBlock:"Navbar_textBlock__MVc3X",Link:"Navbar_Link__8PE7D",activeLink:"Navbar_activeLink__2zS0c"}},43:function(e,t,r){"use strict";r(0);var a=r.p+"static/media/preloader.5788b05c.svg",n=r(1);t.a=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:a,alt:""})})}},57:function(e,t,r){e.exports={login:"Login_login__3x1Wf",error:"Login_error__1WMIp",formSummaryError:"Login_formSummaryError__24JBn"}},68:function(e,t,r){e.exports={userPhoto:"Users_userPhoto__1MhCt",status:"Users_status__1lVWx",user:"Users_user__13qZW",usersNav:"Users_usersNav__13DtI",Link:"Users_Link__14oqR",activeLink:"Users_activeLink__2a4_Z"}},70:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"c",(function(){return j})),r.d(t,"d",(function(){return g})),r.d(t,"g",(function(){return O})),r.d(t,"e",(function(){return w})),r.d(t,"f",(function(){return v}));var a=r(6),n=r.n(a),s=r(17),i=r(8),c=r(2),o=r(15),u="profilePage/ADD-POST",l="profilePage/DELETE_POST",h="profilePage/SET_USER_PROFILE",p="profilePage/SET_STATUS",d="profilePage/SAVE_PHOTO_SUCCESS",b={posts:[{message:"Tomorrow can take care of itself",id:1}],profile:null,status:"",newPostText:""},f=function(e){return{type:u,newPostText:e}},m=function(e){return{type:p,status:e}},j=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:a=t.sent,r((n=a.data,{type:h,profile:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,r(m(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&r(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&r((n=a.data.data.photos,{type:d,photos:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r,a){var s,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}r(j(s)),t.next=9;break;case 8:return t.abrupt("return",Promise.reject(i.data.messages[0]));case 9:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var r={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[r]),newPostText:""});case p:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case h:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case l:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}},71:function(e,t,r){"use strict";t.a=r.p+"static/media/user.191fe8f3.jpg"},73:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return n})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var a=function(e){return e.profilePage.profile},n=function(e){return e.profilePage.status},s=function(e){return e.auth.userId},i=function(e){return e.auth.isAuth}},83:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var a=r(8),n=r(2),s="dialogsPage/SEND-MESSAGE",i={messages:[{message:"( \u0361\xb0 \u035c\u0296 \u0361\xb0)",id:1}],dialogs:[{id:1,name:"sgt. Florida"},{id:2,name:"cth"},{id:3,name:"FV"},{id:4,name:"Valentin Oblomov"},{id:5,name:"\u0428\u0423\u0422\u0423\u041f"}]},c=function(e){return{type:s,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var r=t.newMessageText;return Object(n.a)(Object(n.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:2,message:r}]),newMessageText:""})}return e}}},[[272,1,2]]]);
//# sourceMappingURL=main.b8b6dc22.chunk.js.map