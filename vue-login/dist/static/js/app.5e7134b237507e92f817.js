webpackJsonp([1],{Hm0W:function(t,e){},JPXC:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},o,!1,function(t){s("YMSs")},null,null).exports,i=s("/ocq"),r=s("NYxO"),c=s("mvHQ"),l=s.n(c),u=s("xrTZ").Base64,d=function(t){return u.encode(t)},m=function(t){return u.decode(t)},p=s("Zrlr"),f=s.n(p),h=s("wxAW"),v=s.n(h),g=new(function(){function t(){f()(this,t),this.prefix="dialog",this.type,this.message,this.callback,this.isShow=!0,this.btns={value:"default",label:"确认"},this.Dialog=document.createElement("div")}return v()(t,[{key:"init",value:function(t){this.type=t.type||"default",this.message=t.message||"这是一条提示信息",this.callback=t.callback||null,this.createDOM()}},{key:"createDOM",value:function(){var t=document.createElement("div"),e=this.createHeader(),s=this.createBody(),a=this.createFooter();this.Dialog.className="pull-"+this.prefix,t.className=this.prefix+"-content",t.append(e,s,a),this.Dialog.append(t),this.Dialog.style.display=this.isShow?"block":"none",document.body.append(this.Dialog)}},{key:"createHeader",value:function(){var t=document.createElement("div"),e=document.createElement("span");return t.className=this.prefix+"-header",e.innerText="提示",t.append(e),t}},{key:"createBody",value:function(){var t=document.createElement("div"),e=document.createElement("i"),s=document.createElement("p");return t.className=this.prefix+"-body",e.className="icon-"+this.type,s.innerText=this.message,t.append(e,s),t}},{key:"createFooter",value:function(){var t=document.createElement("div");t.className=this.prefix+"-footer";var e=document.createElement("button");return e.className="btn-"+this.btns.value,e.innerText=this.btns.label,t.append(e),this.handleClick(e),t}},{key:"handleClick",value:function(t){var e=this;t.addEventListener("click",function(){e.callback&&e.callback(),e.btnClick()},!1)}},{key:"btnClick",value:function(){var t=document.querySelector(".pull-dialog");this.type="",this.message="",t.remove()}}]),t}()),w={name:"login-box",data:function(){return{formData:{account:"",password:""},telBool:!1,psdBool:!1,telMsg:"手机号不能为空",psdMsg:"密码不能为空"}},watch:{"formData.account":function(t){var e=/^[1][3,5,7,8,9][0-9]{9}$/.test(t);this.telMsg=e?"":"手机号格式错误",this.telBool=!e},"formData.password":function(t){var e=/^[A-Za-z0-9]{8,21}$/.test(t);this.psdMsg=e?"":"密码格式错误",this.psdBool=!e}},methods:{change:function(){this.$store.dispatch("changeLogin",!0)},login:function(){var t=this,e=this.formData,s=e.account,a=e.password;if(!s||!a)return this.telBool=!s,void(this.psdBool=!a);this.telBool||this.psdBool?g.init({type:"warn",message:"您的登录信息有误"}):(this.formData.password=d(a),this.$store.dispatch("login",this.formData).then(function(e){var s=t;localStorage.setItem("userInfo",l()(e.data)),t.psdBool=!1,g.init({type:"success",message:e.msg,callback:function(){s.$router.replace("home")}})}).catch(function(t){g.init({type:"error",message:t.msg})}))}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inner-box"},[s("div",{staticClass:"form-header"},[t._v("登录")]),t._v(" "),s("form",{staticClass:"form-body"},[s("div",{staticClass:"row-input",class:{mistakeClasses:t.telBool}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.formData.account},on:{input:function(e){e.target.composing||t.$set(t.formData,"account",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.telMsg))])]),t._v(" "),s("div",{staticClass:"row-input",class:{mistakeClasses:t.psdBool}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.psdMsg))])]),t._v(" "),s("div",{staticClass:"btn-row"},[s("button",{staticClass:"btn",on:{click:t.login}},[t._v("登录")])])]),t._v(" "),s("div",{staticClass:"form-footer"},[s("button",{staticClass:"btn",on:{click:t.change}},[t._v("没账号？ 去注册")])])])},staticRenderFns:[]},D=s("VU/8")(w,_,!1,null,null,null).exports,b=s("//Fk"),C=s.n(b),y={name:"register-box",data:function(){return{formData:{account:"",password:"",repassword:""},showLoading:!1,telBool:!1,psdBool:!1,reBool:!1,telMsg:"手机号不能为空",psdMsg:"密码不能为空",repsdMsg:"两次密码输入不一致"}},watch:{"formData.account":function(t){var e=/^[1][3,5,7,8,9][0-9]{9}$/.test(t);this.telMsg=e?"":"手机号格式错误",this.telBool=!e},"formData.password":function(t){var e=/^[A-Za-z0-9]{8,21}$/.test(t);this.psdMsg=e?"":"密码格式错误",this.psdBool=!e},"formData.repassword":function(t){this.psdBool=!this.formData.password,this.reBool=this.formData.password!==t,this.repsdMsg=this.formData.password===t?"":"两次密码输入不一致"}},methods:{change:function(){this.$store.dispatch("changeLogin",!1)},signUpAccount:function(){var t=this,e=this.formData,s=e.account,a=e.password,o=e.repassword;if(!s||!a||!o)return this.telBool=!s,this.psdBool=!a,void(this.reBool=!o);this.telBool||this.psdBool||this.reBool?g.init({type:"warn",message:"注册信息有误"}):(this.showLoading=!0,this.formData.password=d(a),this.formData.repassword=d(o),this.$store.dispatch("signUpUserInfo",this.formData).then(function(e){var s=t;t.showLoading=!1,g.init({type:"success",message:e.msg,callback:function(){s.$store.dispatch("changeLogin",!1)}})}).catch(function(e){t.showLoading=!1,g.init({type:"error",message:e.msg})}))}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inner-box register",attrs:{loading:t.showLoading}},[s("div",{staticClass:"form-header"},[t._v("注册")]),t._v(" "),s("form",{staticClass:"form-body",attrs:{id:"formData"}},[s("div",{staticClass:"row-input",class:{mistakeClasses:t.telBool}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.formData.account},on:{input:function(e){e.target.composing||t.$set(t.formData,"account",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.telMsg))])]),t._v(" "),s("div",{staticClass:"row-input",class:{mistakeClasses:t.psdBool}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.psdMsg))])]),t._v(" "),s("div",{staticClass:"row-input",class:{mistakeClasses:t.reBool}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.repassword,expression:"formData.repassword"}],attrs:{type:"password",placeholder:"再次确认"},domProps:{value:t.formData.repassword},on:{input:function(e){e.target.composing||t.$set(t.formData,"repassword",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.repsdMsg))])]),t._v(" "),s("div",{staticClass:"btn-row"},[s("button",{staticClass:"btn",on:{click:t.signUpAccount}},[t._v("保存")])])]),t._v(" "),s("div",{staticClass:"form-footer"},[s("button",{staticClass:"btn",on:{click:t.change}},[t._v("已有账号")])])])},staticRenderFns:[]},k={name:"form-box",components:{Login:D,Register:s("VU/8")(y,x,!1,null,null,null).exports},computed:Object(r.b)({status:function(t){return t.login.status}}),mounted:function(){}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-box"},[this._m(0),this._v(" "),e("div",{staticClass:"form"},[e("Transition",{attrs:{name:"login"}},[this.status?e("register"):e("login")],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bgImg"},[e("img",{attrs:{src:s("nrvK"),alt:"beauty"}})])}]};var M={name:"HelloWorld",components:{loginForm:s("VU/8")(k,B,!1,function(t){s("Hm0W")},null,null).exports}},$={render:function(){var t=this.$createElement;return(this._self._c||t)("login-form")},staticRenderFns:[]},L=s("VU/8")(M,$,!1,null,null,null).exports,E={name:"home",data:function(){return{showLoading:!1}},methods:{signOut:function(){var t=this;this.showLoading=!0,setTimeout(function(){t.showLoading=!1,localStorage.removeItem("userInfo"),t.$router.replace("/")},2e3)}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"tips"},[s("i",{staticClass:"icon-success"}),t._v(" "),s("p",[t._v("恭喜，登录成功")]),t._v(" "),s("button",{staticClass:"btn",on:{click:t.signOut}},[t._v("退出登录")])]),t._v(" "),s("div",{staticClass:"loading",style:{transform:"scale("+(t.showLoading?1:0)+")"}},[t._v("加载中...")])])},staticRenderFns:[]},I=s("VU/8")(E,N,!1,null,null,null).exports;a.a.use(i.a);var U=new i.a({routes:[{path:"/",name:"HelloWorld",component:L},{path:"/home",name:"home",component:I}]}),F=s("sax8"),S=s.n(F),H={namespace:!0,state:{status:!1,userList:[]},getters:{},actions:{changeLogin:function(t,e){var s=t.commit;t.state;s("changeStatus",e)},signUpUserInfo:function(t,e){var s=t.commit,a=(t.state,new Date);return e.createDate=a,e.id=parseInt(1e10*Math.random()),new C.a(function(t,a){var o=2e3*Math.random();setTimeout(function(){100*Math.random()<70?(t({data:e,msg:"注册成功，请直接登录"}),s("userInfo",e)):a({data:null,msg:"网络超时"})},o)})},login:function(t,e){var s=t.commit,a=t.state,o=new Date,n=a.userList.filter(function(t){return t.account===e.account}),i=a.userList.filter(function(t){return t.account===e.account&&m(t.password)===m(e.password)});return n.createDate=o,n.isLogin=!0,new C.a(function(t,e){n.length?i.length?(t({data:n,msg:"登录成功"}),s("upDataInfo",n)):e({data:null,msg:"密码错误"}):e({data:null,msg:"未注册，请先注册"})})}},mutations:{changeStatus:function(t,e){t.status=e},userInfo:function(t,e){t.userList.push(e)},upDataInfo:function(t,e){t.userList.forEach(function(t){t.id===e.id&&(t.createDate=e.createDate)})}}};a.a.use(r.a);var A=new r.a.Store({plugins:[S()()],modules:{login:H}});s("JPXC");a.a.config.productionTip=!1,new a.a({el:"#app",router:U,store:A,components:{App:n},template:"<App/>"})},YMSs:function(t,e){},nrvK:function(t,e,s){t.exports=s.p+"static/img/beauty.4e87aa4.jpg"}},["NHnr"]);
//# sourceMappingURL=app.5e7134b237507e92f817.js.map