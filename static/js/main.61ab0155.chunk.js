(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[0],{121:function(e,t,r){e.exports={videoPlayer:"Video_videoPlayer__89mRN"}},15:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return o}));var a=r(114),n=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8a4b561f-4f72-4678-b1b5-33fea7a333ab"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return n.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return n.delete("follow/".concat(e))},follow:function(e){return n.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return n.get("profile/"+e)},getStatus:function(e){return n.get("profile/status/"+e)},updateStatus:function(e){return n.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),n.put("profile/photo",t,{})},saveProfile:function(e){return n.put("profile",e)}},c={me:function(){return n.get("auth/me")},login:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n.post("auth/login",{email:e,password:t,rememberMe:r,captcha:a})},logout:function(){return n.delete("auth/login")}},o={getCaptchaUrl:function(){return n.get("security/get-captcha-url")}}},174:function(e,t,r){},21:function(e,t,r){e.exports={headerMiddle:"Header_headerMiddle__2twbi",loginBlock:"Header_loginBlock__23WDJ",userloginName:"Header_userloginName__2GwpG",navLogin:"Header_navLogin__1vFc6",musicPlayerBlock:"Header_musicPlayerBlock__20Lsg",bigTitleSize:"Header_bigTitleSize__33Bas",smallTitleSize:"Header_smallTitleSize__-dKxQ"}},22:function(e,t,r){e.exports={nav:"Navbar_nav__33oip",textBlock:"Navbar_textBlock__MVc3X",Link:"Navbar_Link__8PE7D"}},273:function(e,t,r){"use strict";r.r(t);var a=function(e){e&&e instanceof Function&&r.e(5).then(r.bind(null,284)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),s(e),i(e)}))},n=r(0),s=r.n(n),i=r(111),c=r.n(i),o=r(4),u=r(5),l=r(10),h=r(11),p=r(9),d=r(24),b=r(3),m=r(13),f=r(72),g=r(85),j=r(6),O=r.n(j),w=r(17),v=r(8),x=r(2),S=function(e,t,r,a){return e.map((function(e){return e[r]===t?Object(x.a)(Object(x.a)({},e),a):e}))},D=r(15),k="usersPage/FOLLOW",P="usersPage/UNFOLLOW",N="usersPage/SET_USERS",_="usersPage/SET_CURRENT_PAGE",y="usersPage/SET_TOTAL_USERS_COUNT",C="usersPage/TOGGLE_IS_FETCHING",M="usersPage/TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},L=function(e){return{type:k,userId:e}},E=function(e){return{type:P,userId:e}},A=function(e){return{type:C,isFetching:e}},I=function(e,t){return{type:M,isFetching:e,userId:t}},B=function(){var e=Object(w.a)(O.a.mark((function e(t,r,a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,r)),e.next=3,a(r);case 3:0===e.sent.data.resultCode&&t(n(r)),t(I(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,r,a,n){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(x.a)(Object(x.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!0})});case P:return Object(x.a)(Object(x.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!1})});case N:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case _:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case y:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.totalUsersCount});case C:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case M:return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},U="auth/SET_AUTH_USERS_DATA",R="auth/GET_CAPTCHA_URL_SUCCESS",z={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},H=function(e,t,r,a){return{type:U,payload:{userId:e,email:t,login:r,isAuth:a}}},G=function(e){return{type:R,payload:{captchaUrl:e}}},K=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){var r,a,n,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.me();case 2:0===(r=e.sent).data.resultCode&&(a=r.data.data,n=a.id,s=a.login,i=a.email,t(H(n,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.logout();case 2:0===e.sent.data.resultCode&&t(H(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.c.getCaptchaUrl();case 2:r=e.sent,a=r.data.url,t(G(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:case R:return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},q=r(115),Y="INITIALIZED_SUCCESS",X={initialized:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;return t.type===Y?Object(x.a)(Object(x.a)({},e),{},{initialized:!0}):e},Q="player/PLAY_MUSIC",$={isPlaying:!1,url:"",title:"",music:[{title:"AL-90 - Black Sapphire",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/AL-90%20-%20Black%20Sapphire.mp3"},{title:"Andy Stott - Never the right time",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Andy%20Stott%20-%20Never%20the%20right%20time.mp3"},{title:"Autechre - Further",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Autechre%20-%20Further.mp3"},{title:"Balladur - Time Is A Killing Machine",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Balladur%20-%20Time%20Is%20A%20Killing%20Machine.mp3"},{title:"Blue October - All That We Are",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Blue%20October%20-%20All%20That%20We%20Are.mp3"},{title:"Bluestaeb - Didn't Cha Know",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Bluestaeb%20-%20Didn't%20Cha%20Know.mp3"},{title:"BLVCK CEILING - End of Time",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/BLVCK%20CEILING%20-%20END%20OF%20TIME.mp3"},{title:"Boards of Canada - An Eagle In Your Mind",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Boards%20of%20Canada%20-%20An%20Eagle%20In%20Your%20Mind.mp3"},{title:"Bowery Electric - Coming Down",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Bowery%20Electric%20-%20Coming%20Down.mp3"},{title:"Burial - Distant Lights",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Burial%20-%20Distant%20Lights.mp3"},{title:"Burial - Pirates",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Burial%20-%20Pirates.mp3"},{title:"CHVRCHES - Violent Delights",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/CHVRCHES%20-%20Violent%20Delights.mp3"},{title:"Cold Cave - Glory",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Cold%20Cave%20-%20Glory.mp3"},{title:"Cremation Lily - Lovers Against the Rocks",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Cremation%20Lily%20-%20Lovers%20Against%20the%20Rocks.mp3"},{title:"Doja Cat - 4 mordant",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Doja%20Cat%20-%204%20Morant.mp3"},{title:"Dorian Papiez - Crimmees",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Dorian%20Papiez%20-%20Crimmees.mp3"},{title:"Felix Da Housecat - Everyone Is Someone In LA",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Felix%20Da%20Housecat%20-%20Everyone%20Is%20Someone%20In%20LA.mp3"},{title:"Frank Knight - Awakened",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Frank%20Knight%20-%20Awakened.mp3"},{title:"Fraunhofer Diffraction - Bloodlust",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Fraunhofer%20Diffraction%20-%20Bloodlust.mp3"},{title:"Fuel - Halos Of The Sun",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Fuel%20-%20Halos%20of%20the%20Sun.mp3"},{title:"Gopinatha - Primeval Lord",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Gopinatha%20-%20Primeval%20Lord.mp3"},{title:"Grimes - Flesh without Blood",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Grimes%20-%20Flesh%20without%20Blood.mp3"},{title:"Jamie xx - Far Nearer",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Jamie%20xx%20-%20Far%20Nearer.mp3"},{title:"Jazzpospolita - Czerwona Flaga (Ale Ja Sie Kapie)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Jazzpospolita%20-%20Czerwona%20Flaga%20(Ale%20Ja%20Sie%20Kapie).mp3"},{title:"Joell Ortiz feat. Jadakiss & Saigon - Hip Hop (Remix)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Joell%20Ortiz%20feat.%20Jadakiss%20%26%20Saigon%20-%20Hip%20Hop%20(Remix).mp3"},{title:"Lissy Trullie - Madeleine (Jewellers Remix)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Lissy%20Trullie%20-%20Madeleine%20(Jewellers%20Remix).mp3"},{title:"Lorn - PERFEKT DARK",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Lorn%20-%20PERFEKT%20DARK.mp3"},{title:"Muse - Undisclosed Desires",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Muse%20-%20Undisclosed%20Desires.mp3"},{title:"Nadja - Long Dark Twenties",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Nadja%20-%20Long%20Dark%20Twenties.mp3"},{title:"Natalie Merchant - San Andreas Fault",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Natalie%20Merchant%20-%20San%20Andreas%20Fault.mp3"},{title:"Nine Inch Nails - Terrible Lie (live)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Nine%20Inch%20Nails%20-%20Terrible%20Lie%20(live).mp3"},{title:"Omni Trio - First Contact",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Omni%20Trio%20-%20First%20Contact.mp3"},{title:"P E A C E A N D T R A N Q U I L I T Y - A Hat In Time (Seal The Deal DLC)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/P%20E%20A%20C%20E%20A%20N%20D%20T%20R%20A%20N%20Q%20U%20I%20L%20I%20T%20Y%20-%20A%20Hat%20In%20Time%20(Seal%20The%20Deal%20DLC).mp3"},{title:"Pale Saints - Porpoise",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Pale%20Saints%20-%20Porpoise.mp3"},{title:"Pastel Ghost - Pulse",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Pastel%20Ghost%20-%20Pulse.mp3"},{title:"Placebo - Black-Eyed",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Placebo%20-%20Black-Eyed.mp3"},{title:"Radiohead - Hearing Damage",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Radiohead%20-%20Hearing%20Damage.mp3"},{title:"STARFORCE - Age of Nano",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/STARFORCE%20-%20Age%20of%20Nano.mp3"},{title:"Tricky feat. Marta - Thinking Of",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Tricky%20feat.%20Marta%20-%20Thinking%20Of.mp3"},{title:"Sendelica - It's the Neu! Kosmiche Disko",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Sendelica%20-%20It's%20the%20Neu%20Kosmiche%20Disko.mp3"},{title:"Shlohmo - We Sat in the Car",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Shlohmo%20-%20We%20Sat%20in%20the%20Car.mp3"},{title:"Shl\xf8mo - Ivory",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Shl%C3%B8mo%20-%20Ivory.mp3"},{title:"Sissy - Acid Cake",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Sissy%20-%20Acid%20cake.mp3"},{title:"Whirr - Sway",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Whirr%20-%20Sway.mp3"},{title:"Yves Tumor feat. James K - Licking An Orchid (feat. James K)",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Yves%20Tumor%20feat.%20James%20K%20-%20Licking%20An%20Orchid%20(feat.%20James%20K).mp3"},{title:"\u041f\u043b\u0430\u043d\u0435\u0442\u0430 \u041f\u043b\u0443\u0442\u043e\u043d - \u0422\u0438\u0448\u0438\u043d\u0430",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/%D0%9F%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0%20%D0%9F%D0%BB%D1%83%D1%82%D0%BE%D0%BD%20-%20%D0%A2%D0%B8%D1%88%D0%B8%D0%BD%D0%B0.mp3"},{title:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0444\u043e\u0440\u0435\u0437 - \u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043f\u0440\u0438\u043d\u0446\u0435\u0441\u0441\u0430",url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%84%D0%BE%D1%80%D0%B5%D0%B7%20-%20%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0.mp3"}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type===Q?(e.isPlaying&&e.url!==t.url&&(e.isPlaying=!1),Object(x.a)(Object(x.a)({},e),{},{url:t.url,title:t.title,isPlaying:!e.isPlaying})):e},te="settings/SWITCH_THEME",re={isDark:!0},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;return t.type===te?Object(x.a)(Object(x.a)({},e),{},{isDark:!e.isDark}):e},ne=Object(d.b)({profilePage:f.b,dialogsPage:g.a,usersPage:F,auth:W,app:Z,player:ee,settings:ae}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,ie=Object(d.d)(ne,se(Object(d.a)(q.a))),ce=r(50),oe=r(122),ue=r(14),le=r(69),he=r.n(le),pe=r(1),de=function(e){for(var t=e.totalUsersCount,r=e.pageSize,a=(e.currentPage,e.onPageChanged),s=e.portionSize,i=void 0===s?10:s,c=Math.ceil(t/r),o=[],u=1;u<=c;u++)o.push(u);var l=Math.ceil(c/i),h=Object(n.useState)(1),p=Object(ue.a)(h,2),d=p[0],b=p[1],f=(d-1)*i+1,g=d*i;return Object(pe.jsxs)("div",{className:he.a.paginator,children:[d>1&&Object(pe.jsx)("button",{onClick:function(){b(d-1)},children:"PREV"}),o.filter((function(e){return e>=f&&e<=g})).map((function(e){return Object(pe.jsx)(m.c,{to:"/users/"+e,className:he.a.Link,children:Object(pe.jsxs)("span",{onClick:function(){a(e)},children:[e," "]})})})),l>d&&Object(pe.jsx)("button",{onClick:function(){b(d+1)},children:"NEXT"})]})},be=r(70),me=r.n(be),fe=r(73),ge=function(e){var t=e.user,r=e.followingInProgress,a=e.follow,n=e.unfollow;return Object(pe.jsxs)("div",{children:[Object(pe.jsxs)("span",{children:[Object(pe.jsx)("div",{children:t.name}),Object(pe.jsx)("div",{className:me.a.status,children:t.status}),Object(pe.jsx)(m.c,{to:"/profile/"+t.id,children:Object(pe.jsx)("img",{src:null!=t.photos.small?t.photos.small:fe.a,alt:"",className:me.a.userPhoto})})]}),Object(pe.jsx)("span",{children:t.followed?Object(pe.jsx)("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Unfollow"}):Object(pe.jsx)("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]})},je=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],Oe=function(e){var t=e.currentPage,r=e.onPageChanged,a=e.totalUsersCount,n=e.pageSize,s=e.users,i=Object(oe.a)(e,je);return Object(pe.jsxs)("div",{children:[Object(pe.jsx)(de,{currentPage:t,onPageChanged:r,totalUsersCount:a,pageSize:n}),s.map((function(e){return Object(pe.jsx)(ge,{user:e,followingInProgress:i.followingInProgress,follow:i.follow,unfollow:i.unfollow},e.id)}))]})},we=function(e){return e.usersPage.users},ve=function(e){return e.usersPage.pageSize},xe=function(e){return e.usersPage.totalUsersCount},Se=function(e){return e.usersPage.currentPage},De=function(e){return e.usersPage.isFetching},ke=function(e){return e.usersPage.followingInProgress},Pe=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){var r=e.props.pageSize;e.props.requestUsers(t,r)},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,r=e.pageSize;this.props.requestUsers(t,r)}},{key:"render",value:function(){return Object(pe.jsxs)(pe.Fragment,{children:[this.props.isFetching?Object(pe.jsx)(ce.a,{}):null,Object(pe.jsx)(Oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),r}(s.a.Component),Ne=Object(d.c)(Object(p.b)((function(e){return{users:we(e),pageSize:ve(e),totalUsersCount:xe(e),currentPage:Se(e),isFetching:De(e),followingInProgress:ke(e)}}),{follow:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(r,e,D.d.follow.bind(D.d),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(r,e,D.d.unfollow.bind(D.d),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestUsers:function(e,t){return function(){var r=Object(w.a)(O.a.mark((function r(a){var n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(A(!0)),a({type:_,currentPage:e}),r.next=4,D.d.getUsers(e,t);case 4:n=r.sent,a(A(!1)),a((i=n.items,{type:N,users:i})),a((s=n.totalCount,{type:y,totalUsersCount:s}));case 8:case"end":return r.stop()}var s,i}),r)})));return function(e){return r.apply(this,arguments)}}()}}))(Pe),_e=r(53),ye=r.n(_e),Ce=r(21),Me=r.n(Ce),Te=function(e){var t=Object(p.d)((function(e){return e.player.isPlaying})),r=Object(p.d)((function(e){return e.player.url})),a=Object(p.d)((function(e){return e.player.title})),n=!0;return a.length>50&&(n=!1),Object(pe.jsx)("header",{children:Object(pe.jsxs)("div",{className:Me.a.headerMiddle,children:[Object(pe.jsx)("div",{className:Me.a.musicPlayerBlock,children:t?Object(pe.jsxs)("div",{children:[Object(pe.jsx)("div",{className:n?Me.a.bigTitleSize:Me.a.smallTitleSize,children:a}),Object(pe.jsx)(ye.a,{url:r,controls:!0,height:"30px",playing:!0,changePlaybackRate:!1,config:{file:{attributes:{controlsList:"noplaybackrate nodownload nofullscreen"}}}})]}):Object(pe.jsx)("div",{})}),Object(pe.jsx)("div",{className:Me.a.loginBlock,children:e.isAuth?Object(pe.jsxs)("div",{children:[Object(pe.jsx)("span",{className:Me.a.userloginName,children:e.login}),Object(pe.jsx)("div",{children:Object(pe.jsx)("button",{onClick:e.logout,className:Me.a.logoutBtn,children:"Log Out"})})]}):Object(pe.jsx)(m.c,{to:"/login",className:Me.a.navLogin,children:"Login"})}),Object(pe.jsx)("div",{className:Me.a.headerlogout})]})})},Le=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(pe.jsx)(Te,Object(x.a)({},this.props))}}]),r}(s.a.Component),Ee=Object(p.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:J})(Le),Ae=(r(174),r(22)),Ie=r.n(Ae),Be=function(){return Object(pe.jsx)("nav",{className:Ie.a.nav,children:Object(pe.jsxs)("div",{className:Ie.a.textBlock,children:[Object(pe.jsx)("div",{children:Object(pe.jsx)(m.c,{to:"/profile",className:Ie.a.Link,children:"Profile"})}),Object(pe.jsx)("div",{children:Object(pe.jsx)(m.c,{to:"/dialogs",className:Ie.a.Link,children:"Messages"})}),Object(pe.jsx)("div",{children:Object(pe.jsx)(m.c,{to:"/news",className:Ie.a.Link,children:"News"})}),Object(pe.jsx)("div",{children:Object(pe.jsx)(m.c,{to:"/music",className:Ie.a.Link,children:"Music"})})," ",Object(pe.jsx)("div",{children:Object(pe.jsx)(m.c,{to:"/video",className:Ie.a.Link,children:"Videos"})}),Object(pe.jsx)("div",{children:Object(pe.jsx)(m.c,{to:"/settings",className:Ie.a.Link,children:"Settings"})}),Object(pe.jsx)("div",{children:Object(pe.jsx)(m.c,{to:"/users",className:Ie.a.Link,children:"Users"})})]})})},Fe=r(74),Ue=r(40),Re=r(57),ze=r.n(Re),He=r(39),Ge=function(e){var t=e.login,r=e.captchaUrl,a=Object(Fe.a)({initialValues:{email:"",password:"",rememberMe:!0,captcha:""},validationSchema:Ue.b({email:Ue.c().max(35,"Must be 35 or less").min(3,"Must be 3 or more").required("Required").email("Invalid email adress"),password:Ue.c().max(25,"Must be 25 or less").min(3,"Must be 3 or more").required("Required"),rememberMe:Ue.a().oneOf([!0],"Field must be checked")}),onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}});return Object(pe.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(He.a)("email","text","Email",a.values.email,a.handleChange,a.handleBlur),a.errors.email?Object(pe.jsx)("p",{className:ze.a.formSummaryError,children:a.touched.email&&a.errors.email}):null,Object(He.a)("password","password","Password",a.values.password,a.handleChange,a.handleBlur),a.touched.password&&a.errors.password?Object(pe.jsx)("p",{className:ze.a.formSummaryError,children:a.errors.password}):null,Object(He.a)("rememberMe","checkbox",[],a.values.rememberMe,a.handleChange),Object(pe.jsx)("label",{htmlFor:"checkbox",children:"Remember Me"}),a.errors.rememberMe?Object(pe.jsx)("p",{className:ze.a.formSummaryError,children:a.errors.rememberMe}):null,r&&Object(pe.jsx)("img",{src:r,alt:""}),r&&Object(He.a)("captcha","text","captcha",a.values.captcha,a.handleChange),Object(pe.jsx)("button",{type:"submit",children:"Login"})]})},Ke=Object(p.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,r,a){return function(){var n=Object(w.a)(O.a.mark((function n(s){var i;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.a.login(e,t,r,a);case 2:0===(i=n.sent).data.resultCode?s(K()):(10===i.data.resultCode&&s(V()),i.data.messages.length>0?i.data.messages[0]:"Some error");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logout:J})((function(e){return e.isAuth?Object(pe.jsx)(b.a,{to:"/profile"}):Object(pe.jsxs)("div",{children:[Object(pe.jsx)("h2",{children:"LOGIN"}),Object(pe.jsx)("div",{children:"Email: cththes@gmail.com"}),Object(pe.jsx)("div",{children:"Password: test"}),Object(pe.jsx)(Ge,Object(x.a)(Object(x.a)({},e),{},{captchaUrl:e.captchaUrl}))]})})),Je=r(58),Ve=r.n(Je),We=Object(p.b)((function(e){return{url:e.player.url}}))((function(){var e=Object(p.c)(),t=function(t){e(function(e){return{type:Q,url:e.url,title:e.title}}(t))},r=Object(p.d)((function(e){return e.settings.isDark})),a=Object(p.d)((function(e){return e.player.music.map((function(e){return Object(pe.jsx)("div",{className:Ve.a.musicItem,children:Object(pe.jsx)(m.c,{to:"/music",onClick:function(){t(e)},children:e.title})})}))}));return Object(pe.jsx)("div",{className:r?Ve.a.playerDark:Ve.a.playerLight,children:a})})),qe=function(){var e=Object(p.d)((function(e){return e.settings.isDark})),t=Object(p.c)();return Object(pe.jsxs)("div",{children:["Settings",Object(pe.jsx)("div",{children:Object(pe.jsx)("button",{onClick:function(){t({type:te})},children:e?Object(pe.jsx)("span",{children:"Light Theme"}):Object(pe.jsx)("span",{children:"Dark Theme"})})})]})},Ye=r(75),Xe=r(121),Ze=r.n(Xe),Qe=function(){return Object(pe.jsx)("div",{className:Ze.a.videoPlayer,children:Object(pe.jsx)(ye.a,{url:"https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Videos/King%20of%20the%20Hill.mp4",controls:!0,width:"640px",height:"480px",playing:!0,changePlaybackRate:!1,config:{file:{attributes:{controlsList:"noplaybackrate nodownload"}}}})})},$e=s.a.lazy((function(){return r.e(3).then(r.bind(null,286))})),et=s.a.lazy((function(){return r.e(4).then(r.bind(null,285))})),tt=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var e=this.props.isDark;return Object(pe.jsx)("div",{className:"app",children:Object(pe.jsxs)("div",{className:e?"app_dark":"app_light",children:[Object(pe.jsx)(Ee,{}),Object(pe.jsxs)("div",{className:"app-wrapper",children:[Object(pe.jsx)(Be,{}),Object(pe.jsx)("div",{className:"app-wrapper-content",children:Object(pe.jsx)(n.Suspense,{fallback:Object(pe.jsx)(ce.a,{}),children:Object(pe.jsxs)(b.d,{children:[Object(pe.jsx)(b.b,{element:Object(pe.jsx)(et,{profile:this.props.profile}),path:"profile"}),Object(pe.jsx)(b.b,{element:Object(pe.jsx)(Ke,{}),path:"login"}),Object(pe.jsx)(b.b,{element:Object(pe.jsx)(et,{profile:this.props.profile}),path:"profile/:userId"}),Object(pe.jsx)(b.b,{element:Object(pe.jsx)($e,{profile:this.props.profile}),path:"dialogs/*"}),Object(pe.jsx)(b.b,{path:"news"}),Object(pe.jsx)(b.b,{element:Object(pe.jsx)(We,{}),path:"music"}),Object(pe.jsx)(b.b,{element:Object(pe.jsx)(Qe,{}),path:"video"}),Object(pe.jsx)(b.b,{element:Object(pe.jsx)(qe,{}),path:"settings"}),Object(pe.jsx)(b.b,{element:Object(pe.jsx)(Ne,{}),path:"users/*"})]})})})]})]})})}}]),r}(n.Component),rt=Object(d.c)(Object(p.b)((function(e){return{initialized:e.app.initialized,profile:Object(Ye.c)(e),isDark:e.settings.isDark}}),{initializeApp:function(){return function(e){var t=e(K());Promise.all([t]).then((function(){e({type:Y})}))}}}))(tt),at=function(){return Object(pe.jsx)(m.a,{children:Object(pe.jsx)(p.a,{store:ie,children:Object(pe.jsx)(rt,{})})})};c.a.createRoot(document.getElementById("root")).render(Object(pe.jsx)(s.a.StrictMode,{children:Object(pe.jsx)(at,{})})),a()},39:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(0);var a=r(1),n=function(e,t,r,n,s,i){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{name:e,type:t,placeholder:r,value:n,onChange:s,onBlur:i})})}},50:function(e,t,r){"use strict";r(0);var a=r.p+"static/media/preloader.5788b05c.svg",n=r(1);t.a=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:a,alt:""})})}},57:function(e,t,r){e.exports={login:"Login_login__3x1Wf",error:"Login_error__1WMIp",formSummaryError:"Login_formSummaryError__24JBn"}},58:function(e,t,r){e.exports={playerDark:"Music_playerDark__CTIjN",playerLight:"Music_playerLight__2Pwe3",musicItem:"Music_musicItem__1uetX"}},69:function(e,t,r){e.exports={userPhoto:"Paginator_userPhoto__3ZLCB",status:"Paginator_status__27RiT",user:"Paginator_user__2Sv-R",usersNav:"Paginator_usersNav__3XAxS",Link:"Paginator_Link__3_t-I"}},70:function(e,t,r){e.exports={userPhoto:"Users_userPhoto__1MhCt",status:"Users_status__1lVWx",user:"Users_user__13qZW",usersNav:"Users_usersNav__13DtI",Link:"Users_Link__14oqR",activeLink:"Users_activeLink__2a4_Z"}},72:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return j})),r.d(t,"g",(function(){return O})),r.d(t,"e",(function(){return w})),r.d(t,"f",(function(){return v}));var a=r(6),n=r.n(a),s=r(17),i=r(8),c=r(2),o=r(15),u="profilePage/ADD-POST",l="profilePage/DELETE_POST",h="profilePage/SET_USER_PROFILE",p="profilePage/SET_STATUS",d="profilePage/SAVE_PHOTO_SUCCESS",b={posts:[{message:"Tomorrow can take care of itself",id:1}],profile:null,status:"",newPostText:""},m=function(e){return{type:u,newPostText:e}},f=function(e){return{type:p,status:e}},g=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:a=t.sent,r((n=a.data,{type:h,profile:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,r(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&r(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&r((n=a.data.data.photos,{type:d,photos:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(r,a){var s,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}r(g(s)),t.next=9;break;case 8:return t.abrupt("return",Promise.reject(i.data.messages[0]));case 9:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var r={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[r]),newPostText:""});case p:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case h:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case l:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}},73:function(e,t,r){"use strict";t.a=r.p+"static/media/user.191fe8f3.jpg"},75:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return n})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var a=function(e){return e.profilePage.profile},n=function(e){return e.profilePage.status},s=function(e){return e.auth.userId},i=function(e){return e.auth.isAuth}},85:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var a=r(8),n=r(2),s="dialogsPage/SEND-MESSAGE",i={newMessageText:"",messages:[{message:"( \u0361\xb0 \u035c\u0296 \u0361\xb0)",id:1}],dialogs:[{id:1,name:"sgt. Florida"},{id:2,name:"cth"},{id:3,name:"FV"},{id:4,name:"Valentin Oblomov"},{id:5,name:"\u0428\u0423\u0422\u0423\u041f"}]},c=function(e){return{type:s,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var r=t.newMessageText;return Object(n.a)(Object(n.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:2,message:r}]),newMessageText:""})}return e}}},[[273,1,2]]]);
//# sourceMappingURL=main.61ab0155.chunk.js.map