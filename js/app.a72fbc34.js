(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cv/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f9d":function(t,e,a){},"21bb":function(t,e,a){"use strict";var s=a("0f9d"),n=a.n(s);n.a},2541:function(t,e,a){t.exports=a.p+"img/RPW.7b76f3f3.jpeg"},2563:function(t,e,a){"use strict";var s=a("46ce"),n=a.n(s);n.a},"2e6f":function(t,e,a){"use strict";var s=a("57bf"),n=a.n(s);n.a},"347a":function(t,e,a){},"3dfd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{staticStyle:{background:"#f1f2f7"},attrs:{id:"app"}},[a("Home"),a("v-divider",{staticClass:"py-3"}),a("Resume")],1)])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Nav"),a("Main")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"bg",attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","fill-height":""}},[a("h1",[a("p",{staticClass:"hi"},[t._v("Hi, I'm  ")]),a("p",{staticClass:"name"},[t._v("VO DUC DAN")])]),a("strong",{staticClass:"from"},[t._v("Web developer in VietNam")]),a("v-flex",{attrs:{xs2:""}},[a("v-layout",{staticClass:"download-btn",attrs:{row:""}},[a("v-flex",{attrs:{xs6:""}},[a("router-link",{attrs:{to:"/#about"}},[a("v-btn",{attrs:{rounded:"",color:"primary",dark:""}},[t._v("View resume")])],1)],1),a("v-flex",{attrs:{xs6:""}},[a("v-btn",{attrs:{outlined:"",color:"indigo"}},[a("a",{attrs:{href:"https://drive.google.com/file/d/1chu8wUjKe0E4_k_TSYH1XR_9tyMUn_Ly/view?usp=sharing",target:"_blank"}},[t._v("Download my CV")])])],1)],1)],1)],1)],1)],1)},l=[],c={},u=c,d=(a("2e6f"),a("2877")),v=a("6544"),p=a.n(v),m=a("8336"),f=a("a523"),h=a("0e8f"),g=a("a722"),b=Object(d["a"])(u,o,l,!1,null,null,null),y=b.exports;p()(b,{VBtn:m["a"],VContainer:f["a"],VFlex:h["a"],VLayout:g["a"]});var _=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"toggle",attrs:{wrap:"","fill-height":""}},[s("v-btn",{attrs:{light:""},on:{click:function(e){return e.stopPropagation(),t.drawerNav(e)}}},[s("i",{staticClass:"fas fa-bars"})]),s("v-navigation-drawer",{attrs:{"mini-variant":t.mini,absolute:"",dark:""}},[s("v-list",{staticClass:"pa-1"},[s("v-list-item",{attrs:{avatar:"",tag:"div"}},[s("v-list-item-avatar",[s("img",{attrs:{src:a("915e")}})]),s("v-list-item-content",[s("v-list-item-title",[s("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"/cv"}},[t._v("Vo Duc Dan")])])],1)],1)],1),s("v-list",{staticClass:"pt-0",attrs:{dense:""}},[s("v-divider",{attrs:{light:""}}),t._l(t.items,function(e){return s("v-list-item",{key:e.title},[s("v-list-item-action",[s("span",{domProps:{innerHTML:t._s(e.icon)}})]),s("v-list-item-content",[s("v-list-item-title",[s("router-link",{staticClass:"navitem",attrs:{to:e.path}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)],1)],1)})],2)],1)],1)},x=[],C={data(){return{drawer:null,items:[{title:"About",path:"/Resume#about",icon:'<i class="fas fa-user"></i>'},{title:"Skill",path:"/Resume#skill",icon:'<i class="fas fa-signal"></i>'},{title:"Projects",path:"/Resume#projects",icon:'<i class="fas fa-chart-bar"></i>'},{title:"Education",path:"/Resume#education",icon:'<i class="fas fa-book"></i>'}],mini:!1,right:null}},methods:{drawerNav(){this.drawer=!this.drawer;const t=document.querySelector(".toggle");!0===this.drawer?(t.classList.remove("unDrawer"),t.classList.add("drawer")):(t.classList.remove("drawer"),t.classList.add("unDrawer"))}}},w=C,j=(a("968f"),a("ce7e")),V=a("8860"),k=a("da13"),S=a("1800"),P=a("8270"),L=a("5d23"),O=a("f774"),E=Object(d["a"])(w,_,x,!1,null,null,null),D=E.exports;p()(E,{VBtn:m["a"],VDivider:j["a"],VLayout:g["a"],VList:V["a"],VListItem:k["a"],VListItemAction:S["a"],VListItemAvatar:P["a"],VListItemContent:L["a"],VListItemTitle:L["b"],VNavigationDrawer:O["a"]});var A={name:"home",components:{Main:y,Nav:D}},I=A,M=(a("21bb"),Object(d["a"])(I,i,r,!1,null,null,null)),T=M.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Content")],1)},H=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("About"),a("Skill"),a("Education"),a("Experiences"),a("Projects")],1)},U=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{column:"",id:"about"}},[s("v-responsive",{staticClass:"about-me",attrs:{color:"primary",dark:""}},[s("v-container",{attrs:{"fill-height":""}},[s("v-layout",{attrs:{"align-center":""}},[s("v-flex",{attrs:{"text-xs-center":""}},[s("span",{staticClass:"display-2 heading-title"},[t._v("ABOUT ME")])])],1)],1)],1),s("v-container",[s("v-card",{staticClass:"pa-5"},[s("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[s("v-flex",{attrs:{lg4:"",sm12:"",xs12:"",id:"about-avatar"}},[s("img",{attrs:{src:a("915e"),alt:"avatar"}})]),s("v-flex",{attrs:{lg8:"",sm12:"",xs12:"",id:"sumary"}},[s("h3",[t._v("Summary")]),s("p",[t._v("\n            Hi! My name is\n            "),s("b",[t._v("Vo Duc Dan")]),t._v(". I am a "),s("b",[t._v("Web Developer")]),t._v(", and I'm very\n            passionate and dedicated to my work.I'm a hark-working person and\n            always try my best in order to enhance more experience. I have\n            knowledge necessary to make your project a success. I enjoy every\n            step of the design process, from discussion and collaboration to\n            concept and execution, but I find the most satisfaction in seeing\n            the finished product do everything for you that it was created to\n            do.\n          ")])])],1),s("v-layout",{attrs:{row:"",wrap:"","justify-center":"","py-5":""}},[s("ul",{staticClass:"about-content"},[s("li",[s("span",{staticClass:"left-align"},[t._v("Full Name")]),s("span",[t._v("-")]),s("span",[t._v("Vo Duc Dan")])]),s("li",[s("span",{staticClass:"left-align"},[t._v("Birthday")]),s("span",[t._v("-")]),s("span",[t._v("13/01/1999")])]),s("li",[s("span",{staticClass:"left-align"},[t._v("City")]),s("span",[t._v("-")]),s("span",[t._v("Ho Chi Minh")])]),s("li",[s("span",{staticClass:"left-align"},[t._v("Phone")]),s("span",[t._v("-")]),s("span",[t._v("0972184325")])]),s("li",[s("span",{staticClass:"left-align"},[t._v("Gmail")]),s("span",[t._v("-")]),s("span",[t._v("voducdand99")])]),s("li",[s("span",{staticClass:"left-align"},[t._v("Study")]),s("span",[t._v("-")]),s("span",[t._v("University Of Science")])])])])],1)],1)],1)},B=[],F={},G=F,J=(a("4c0f"),a("b0af")),W=a("6b53"),z=Object(d["a"])(G,$,B,!1,null,null,null),q=z.exports;p()(z,{VCard:J["a"],VContainer:f["a"],VFlex:h["a"],VLayout:g["a"],VResponsive:W["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:"",id:"skill"}},[a("v-responsive",{staticClass:"about-me",attrs:{color:"primary",dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",{attrs:{"text-xs-center":""}},[a("span",{staticClass:"display-2 heading-title"},[t._v("SKILLS")])])],1)],1)],1),a("v-container",[a("v-card",[a("v-layout",{staticClass:"skill-box-layout",attrs:{"justify-center":"",wrap:"","fill-height":"",row:"","pl-5":""}},t._l(t.skills,function(e,s,n){return a("v-flex",{key:n,staticClass:"skill-box",attrs:{xs12:"",lg4:"",md5:""}},[a("span",{staticClass:"skill-name"},[t._v(t._s(s))]),a("ul",{staticClass:"skill-content"},t._l(e,function(e,s){return a("li",{key:s},[a("span",[t._v(t._s(e))])])}),0)])}),1)],1)],1)],1)},Q=[],X={data(){return{skills:{Language:["C/C++","Javascript","HTML5","CSS3"],"frameworks & platforms":["Vuejs","Nodejs","Bootstrap 4","Vuetify","Expressjs"],database:["MySQL","SQL server","Mongodb"],"version control":["Git/Github"],ide:["Sublime text","VS Code","Visual studio"],"foreign languages":["English"]}}}},Y=X,Z=(a("2563"),Object(d["a"])(Y,K,Q,!1,null,null,null)),tt=Z.exports;p()(Z,{VCard:J["a"],VContainer:f["a"],VFlex:h["a"],VLayout:g["a"],VResponsive:W["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:"",id:"projects"}},[a("v-responsive",{staticClass:"about-me",attrs:{color:"primary",dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",{attrs:{"text-xs-center":""}},[a("span",{staticClass:"display-2 heading-title"},[t._v("PROJECTS")])])],1)],1)],1),a("v-container",t._l(t.projects,function(e){return a("v-card",{key:e.name,staticClass:"pb-5 pt-5 mb-5"},[a("v-layout",{staticClass:"ma-0",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm4:"",lg4:"","align-self-center":"","pl-2":""}},[a("h2",{staticClass:"text-xs-center"},[a("i",[t._v(t._s(e.name))])])]),a("v-flex",{attrs:{xs12:"",sm8:"",lg8:""}},[a("ul",{attrs:{"fill-height":""}},[a("li",[a("strong",[t._v("Description:   ")]),t._v("\n              "+t._s(e.description)+"\n            ")]),a("li",[a("strong",[t._v("Accomplishments:  ")]),t._v("\n              "+t._s(e.accomplishments)+"\n            ")]),a("li",[a("strong",[t._v("Github:   ")]),a("a",{attrs:{href:e.github,target:"_blank"}},[a("i",{staticClass:"demo"},[t._v(t._s(e.github))])])]),a("li",[a("strong",[t._v("Demo:   ")]),e.demo?a("a",{attrs:{href:e.demo,target:"_blank"}},[a("i",{staticClass:"demo"},[t._v(t._s(e.demo))])]):a("span",[t._v("Nothing")])])])])],1)],1)}),1)],1)},at=[],st={data(){return{projects:[{name:"Personal Blog",description:"A personal blog",accomplishments:"Do something big with Vuejs and express",technologies:"Vuejs, vuetify, expressjs",github:"https://github.com/voducdan/danvoporfolio",demo:"Have not completed yet"},{name:"Images slide show",description:"Create an image slide using native javascript.",accomplishments:"Practice javascript DOM and CSS",technologies:"javascript DOM, HTML, CSS",github:"https://github.com/voducdan/slice.github.io",demo:"https://voducdan.github.io/slice.github.io/"},{name:"MoviePoint",description:"Create an static MoviePoint site which can be used for every movie theatre",accomplishments:"Practice CSS",technologies:"HTML, CSS",github:"https://github.com/voducdan/moviepoint.github.io",demo:"https://voducdan.github.io/moviepoint.github.io/"},{name:"Avada Classic",description:"Clone the most popular template on themeforest",accomplishments:"Practice javascript,CSS",technologies:"HTML, CSS3 focus on animation , javascript",github:"https://github.com/voducdan/AvadaClassic.github.io",demo:"https://voducdan.github.io/AvadaClassic.github.io/"},{name:"Avada express",description:"Use AvadaClassic as interface and add some backend features such as: add new product, pagination, list all product. There are three router: /, /themes, /addthemes",accomplishments:"Practice expressjs and deploy to heroku, learn mongodb and using mongolab",technologies:"HTML, CSS3, javascript, expressjs, mongodb",github:"https://github.com/voducdan/avada-express",demo:"https://avada-product.herokuapp.com/"},{name:"User management",description:"A simple app to manage user using expressjs. An user can register an account then login and update infomation like avatar, cellphone, address.... They can delete their account themself.",accomplishments:"Practice expressjs and deploy to heroku, learn mongodb and using mongolab",technologies:"HTML, CSS3, javascript, expressjs, mongodb",github:"https://github.com/voducdan/user",demo:"https://user-express-mongoose.herokuapp.com/"},{name:"Proxy server",description:"Build a proxy server with get and post method. It can serve multiple request at the same time, cache, block a website and only use for http protocol",accomplishments:"Learn Nodejs",technologies:"Nodejs",github:"https://github.com/voducdan/proxy-server",demo:null},{name:"Library management",description:"Build a app to manage library system",accomplishments:"Practice C++",technologies:"C++",github:"https://github.com/voducdan/library_management_project",demo:null},{name:"Dictionary",description:"CLI dictionary",accomplishments:"Practice C++",technologies:"C++",github:"https://github.com/voducdan/dictionary",demo:null},{name:"Caro game",description:"CLI caro game (5x5)",accomplishments:"Practice C++ focus on OPP",technologies:"C++",github:"https://github.com/voducdan/caro-game",demo:null}]}}},nt=st,it=(a("93bd"),Object(d["a"])(nt,et,at,!1,null,null,null)),rt=it.exports;p()(it,{VCard:J["a"],VContainer:f["a"],VFlex:h["a"],VLayout:g["a"],VResponsive:W["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:"",id:"education"}},[a("v-responsive",{staticClass:"about-me",attrs:{color:"primary",dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",{attrs:{"text-xs-center":""}},[a("span",{staticClass:"display-2 heading-title"},[t._v("EDUCATION")])])],1)],1)],1),a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[a("v-card",{staticClass:"edu-card"},[a("v-tabs",{attrs:{"background-color":"transparent",color:"basil"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[t._v("Educations")]),a("v-tab",[t._v("Cetifications")]),a("v-tab-item",t._l(t.Educations,function(e,s){return a("ul",{key:s},[a("li",[a("v-card-text",{staticClass:"edu-time"},[a("b",[a("i",[t._v(t._s(e.Time))])])])],1),a("li",[a("v-card-text",[a("b",[t._v("University:")]),t._v("\n                  "+t._s(e.University)+"\n                ")])],1),a("li",[a("v-card-text",[a("b",[t._v("Specialize")]),t._v("\n                  "+t._s(e.Specialize)+"\n                ")])],1),a("li",[a("v-card-text",[a("b",[t._v("GPA:")]),t._v("\n                  "+t._s(e.GPA)+"\n                ")])],1)])}),0),a("v-tab-item",t._l(t.Certifications,function(e,s){return a("v-card",{key:"A"+s,attrs:{outlined:""}},[a("v-img",{staticClass:"white--text",attrs:{height:"90% ",src:e.image}}),a("v-card-text",[a("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])],1)}),1)],1)],1)],1)],1)],1)},lt=[],ct={data(){return{tab:null,Educations:[{Time:"2017-2021",University:"HCM University of Science",Specialize:"Infomation Technology(Infomation System)",GPA:7.5}],Certifications:[{name:"APIs and Microservices",image:a("a62b"),link:"https://www.freecodecamp.org/certification/voducdan/apis-and-microservices"},{name:"JavaScript Algorithms and Data Structures",image:a("c205"),link:"https://www.freecodecamp.org/certification/voducdan/javascript-algorithms-and-data-structures"},{name:"Responsive Web Design",image:a("2541"),link:"https://www.freecodecamp.org/certification/voducdan/responsive-web-design"}]}},methods:{}},ut=ct,dt=(a("580b"),a("99d9")),vt=a("adda"),pt=a("71a3"),mt=a("c671"),ft=a("fe57"),ht=Object(d["a"])(ut,ot,lt,!1,null,null,null),gt=ht.exports;p()(ht,{VCard:J["a"],VCardText:dt["a"],VContainer:f["a"],VFlex:h["a"],VImg:vt["a"],VLayout:g["a"],VResponsive:W["a"],VTab:pt["a"],VTabItem:mt["a"],VTabs:ft["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:"",id:"projects"}},[a("v-responsive",{staticClass:"about-me",attrs:{color:"primary",dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",{attrs:{"text-xs-center":""}},[a("span",{staticClass:"display-2 heading-title"},[t._v("EXPERIENCES")])])],1)],1)],1),a("v-container",t._l(t.experieces,function(e){return a("v-card",{key:e.name,staticClass:"pb-5 pt-5 mb-5"},[a("v-layout",{staticClass:"ma-0",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"",sm8:"",lg8:"","align-self-center":"","pl-2":""}},[a("h5",{staticClass:"text-xs-center"},[a("i",[t._v(t._s(e.position)+" | "+t._s(e.company))])]),a("h5",{staticClass:"text-xs-center "},[t._v(t._s(e.skill))])]),a("v-flex",{staticClass:"text-right pr-2",attrs:{xs4:"",sm4:"",lg4:""}},[a("h5",[t._v(t._s(e.time))])])],1)],1)}),1)],1)},yt=[],_t={data(){return{experieces:[{position:"Intern Developer",company:"Vietmap",skill:"Front-end Vuejs Developer",time:"9/2019-11/2019"}]}}},xt=_t,Ct=(a("a46b"),Object(d["a"])(xt,bt,yt,!1,null,null,null)),wt=Ct.exports;p()(Ct,{VCard:J["a"],VContainer:f["a"],VFlex:h["a"],VLayout:g["a"],VResponsive:W["a"]});var jt={components:{About:q,Skill:tt,Projects:rt,Education:gt,Experiences:wt}},Vt=jt,kt=Object(d["a"])(Vt,N,U,!1,null,null,null),St=kt.exports,Pt={components:{Content:St}},Lt=Pt,Ot=Object(d["a"])(Lt,R,H,!1,null,null,null),Et=Ot.exports,Dt={name:"App",methods:{},components:{Home:T,Resume:Et}},At=Dt,It=a("7496"),Mt=Object(d["a"])(At,s,n,!1,null,null,null);e["default"]=Mt.exports;p()(Mt,{VApp:It["a"],VDivider:j["a"]})},"46ce":function(t,e,a){},"4c0f":function(t,e,a){"use strict";var s=a("9be8"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=a("3dfd"),i=a("8c4f"),r=a("3384"),o=a.n(r);const l=()=>Promise.resolve().then(a.bind(null,"3dfd"));s["default"].use(i["a"]);var c=new i["a"]({mode:"history",base:"/cv/",scrollBehavior:(t,e,a)=>{let s=0;return t.hash?s=t.hash:a&&(s=a.y),o()(s)},routes:[{path:"*",name:"*",component:l}]}),u=a("ce5b"),d=a.n(u);a("bf40");s["default"].use(d.a);var v=new d.a({icons:{iconfont:"mdi"}});s["default"].config.productionTip=!1,new s["default"]({vuetify:v,router:c,render:t=>t(n["default"])}).$mount("#app")},"57bf":function(t,e,a){},"580b":function(t,e,a){"use strict";var s=a("db98"),n=a.n(s);n.a},"774a":function(t,e,a){},"915e":function(t,e,a){t.exports=a.p+"img/avatar.eed4f357.jpg"},"93bd":function(t,e,a){"use strict";var s=a("fd21"),n=a.n(s);n.a},"968f":function(t,e,a){"use strict";var s=a("347a"),n=a.n(s);n.a},"9be8":function(t,e,a){},a46b:function(t,e,a){"use strict";var s=a("774a"),n=a.n(s);n.a},a62b:function(t,e,a){t.exports=a.p+"img/apis.a3087278.jpeg"},c205:function(t,e,a){t.exports=a.p+"img/js.dc760b59.jpeg"},db98:function(t,e,a){},fd21:function(t,e,a){}});
//# sourceMappingURL=app.a72fbc34.js.map