(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0290":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-wrap"},[t("div",{staticClass:"ms-login"},[t("div",{staticClass:"ms-title"},[e._v("ZRK电影院会员管理系统")]),t("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.param,rules:e.rules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"managerId"},model:{value:e.param.managerId,callback:function(r){e.$set(e.param,"managerId",r)},expression:"param.managerId"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.submitForm()}},model:{value:e.param.password,callback:function(r){e.$set(e.param,"password",r)},expression:"param.password"}},[t("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),t("div",{staticClass:"login-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm()}}},[e._v("登录")])],1),t("p",{staticClass:"login-tips"},[e._v("Tips : 默认账号为admin，密码为123123。")])],1)],1)])},s=[],n=t("365c"),o={data:function(){return{param:{managerId:"",password:""},rules:{managerId:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.$refs.login.validate((function(r){if(!r)return e.$message.error("请输入账号和密码"),console.log("error submit!!"),!1;Object(n["o"])(e.param).then((function(r){if(200!=r.status)return e.$message.error("账号或者密码错误，请重新输入！"),!1;e.$message.success("登录成功"),localStorage.setItem("managerId",e.param.managerId),e.$router.push("/")}))}))}}},l=o,i=(t("8503"),t("2877")),p=Object(i["a"])(l,a,s,!1,null,"5329399b",null);r["default"]=p.exports},8503:function(e,r,t){"use strict";var a=t("ef6d"),s=t.n(a);s.a},ef6d:function(e,r,t){}}]);