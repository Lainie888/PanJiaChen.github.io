webpackJsonp([7,25],{"/UfX":function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"social-signup-container"},[i("div",{staticClass:"sign-btn",on:{click:function(t){n.wechatHandleClick("wechat")}}},[i("span",{staticClass:"wx-svg-container"},[i("icon-svg",{staticClass:"icon",attrs:{"icon-class":"weixin"}})],1),n._v(" 微信\n  ")]),n._v(" "),i("div",{staticClass:"sign-btn",on:{click:function(t){n.tencentHandleClick("tencent")}}},[i("span",{staticClass:"qq-svg-container"},[i("icon-svg",{staticClass:"icon",attrs:{"icon-class":"QQ"}})],1),n._v(" QQ\n  ")])])},staticRenderFns:[]}},E4LH:function(n,t,i){"use strict";function o(n){return["admin","editor"].indexOf(n.trim())>=0}function e(n){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(n)}t.a=o,t.b=e},GRM3:function(n,t,i){t=n.exports=i("FZ+f")(!1),t.push([n.i,".social-signup-container[data-v-323a68b2]{margin:20px 0}.social-signup-container .sign-btn[data-v-323a68b2]{display:inline-block;cursor:pointer}.social-signup-container .icon[data-v-323a68b2]{color:#fff;font-size:30px;margin-top:6px}.social-signup-container .qq-svg-container[data-v-323a68b2],.social-signup-container .wx-svg-container[data-v-323a68b2]{display:inline-block;width:40px;height:40px;line-height:40px;text-align:center;padding-top:1px;border-radius:4px;margin-bottom:20px;margin-right:5px}.social-signup-container .wx-svg-container[data-v-323a68b2]{background-color:#8dc349}.social-signup-container .qq-svg-container[data-v-323a68b2]{background-color:#6ba2d6;margin-left:50px}",""])},Jx1R:function(n,t,i){t=n.exports=i("FZ+f")(!1),t.push([n.i,".login-container{position:relative;width:100%;height:100%;height:100vh;background-color:#2d3a4b}.login-container input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #293444 inset!important;-webkit-text-fill-color:#fff!important}.login-container input{background:transparent;border:0;-webkit-appearance:none;border-radius:0;padding:12px 5px 12px 15px;color:#eee;height:47px}.login-container .el-input{display:inline-block;height:47px;width:85%}.login-container .tips{font-size:14px;color:#fff;margin-bottom:10px}.login-container .svg-container{padding:6px 5px 6px 15px;color:#889aa4;vertical-align:middle;width:30px;display:inline-block}.login-container .svg-container_login{font-size:20px}.login-container .title{font-size:26px;font-weight:400;color:#eee;margin:0 auto 40px;text-align:center;font-weight:700}.login-container .login-form{position:absolute;left:0;right:0;width:400px;padding:35px 35px 15px;margin:120px auto}.login-container .el-form-item{border:1px solid hsla(0,0%,100%,.1);background:rgba(0,0,0,.1);border-radius:5px;color:#454545}.login-container .show-pwd{position:absolute;right:10px;top:7px;font-size:16px;color:#889aa4;cursor:pointer}.login-container .thirdparty-button{position:absolute;right:35px;bottom:28px}",""])},"LiG/":function(n,t,i){var o=i("GRM3");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);i("rjj0")("470f14a3",o,!0)},"T+/8":function(n,t,i){function o(n){i("eblg")}var e=i("VU/8")(i("m1D0"),i("Xdbd"),o,null,null);n.exports=e.exports},UWiJ:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("V5Rg");t.default={name:"social-signin",methods:{wechatHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);var t=encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),e="https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirect_uri="+t+"&response_type=code&scope=snsapi_login#wechat_redirect";i.i(o.a)(e,n,540,540)},tencentHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);var t=encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),e="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=xxxxx&redirect_uri="+t;i.i(o.a)(e,n,540,540)}}}},V5Rg:function(n,t,i){"use strict";function o(n,t,i,o){var e=void 0!==window.screenLeft?window.screenLeft:screen.left,a=void 0!==window.screenTop?window.screenTop:screen.top,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,s=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,c=r/2-i/2+e,l=s/2-o/2+a,p=window.open(n,t,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+i+", height="+o+", top="+l+", left="+c);window.focus&&p.focus()}t.a=o},Xdbd:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"login-container"},[i("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:n.loginForm,rules:n.loginRules,"label-position":"left"}},[i("h3",{staticClass:"title"},[n._v("系统登录")]),n._v(" "),i("el-form-item",{attrs:{prop:"username"}},[i("span",{staticClass:"svg-container svg-container_login"},[i("icon-svg",{attrs:{"icon-class":"yonghuming"}})],1),n._v(" "),i("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"邮箱"},model:{value:n.loginForm.username,callback:function(t){n.loginForm.username=t},expression:"loginForm.username"}})],1),n._v(" "),i("el-form-item",{attrs:{prop:"password"}},[i("span",{staticClass:"svg-container"},[i("icon-svg",{attrs:{"icon-class":"mima"}})],1),n._v(" "),i("el-input",{attrs:{name:"password",type:n.pwdType,autoComplete:"on",placeholder:"密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13))return null;n.handleLogin(t)}},model:{value:n.loginForm.password,callback:function(t){n.loginForm.password=t},expression:"loginForm.password"}}),n._v(" "),i("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[i("icon-svg",{attrs:{"icon-class":"yanjing"}})],1)],1),n._v(" "),i("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary",loading:n.loading},nativeOn:{click:function(t){t.preventDefault(),n.handleLogin(t)}}},[n._v("登录")]),n._v(" "),i("div",{staticClass:"tips"},[n._v("账号:admin 密码随便填")]),n._v(" "),i("div",{staticClass:"tips"},[n._v("账号:editor  密码随便填")]),n._v(" "),i("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(t){n.showDialog=!0}}},[n._v("打开第三方登录")])],1),n._v(" "),i("el-dialog",{attrs:{title:"第三方验证",visible:n.showDialog},on:{"update:visible":function(t){n.showDialog=t}}},[n._v("\n    本地不能模拟，请结合自己业务进行模拟！！！"),i("br"),i("br"),i("br"),n._v("\n    邮箱登录成功,请选择第三方验证"),i("br"),n._v(" "),i("social-sign")],1)],1)},staticRenderFns:[]}},dZXH:function(n,t,i){function o(n){i("LiG/")}var e=i("VU/8")(i("UWiJ"),i("/UfX"),o,"data-v-323a68b2",null);n.exports=e.exports},eblg:function(n,t,i){var o=i("Jx1R");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);i("rjj0")("97ece204",o,!0)},m1D0:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("E4LH"),e=i("dZXH"),a=i.n(e);t.default={components:{socialSign:a.a},name:"login",data:function(){return{loginForm:{username:"admin",password:"1111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,t,e){i.i(o.a)(t)?e():e(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,t,i){t.length<6?i(new Error("密码不能小于6位")):i()}}]},pwdType:"password",loading:!1,showDialog:!1}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("LoginByUsername",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:"/"})}).catch(function(){n.loading=!1})})},afterQRScan:function(){}},created:function(){},destroyed:function(){}}}});