
<template>
  <div class="register">
    <!------表单--------->
      <form action="">
        <ul class="userInfo">
          <li class="usertel"><input type="text" placeholder="请输入您的手机号" v-model="tel"><span @click="getCode">获取验证码</span></li>
          <li class="code"><input type="text" placeholder="请输入您的验证码" v-model="code"></li>
          <li class="password"><input type="password" placeholder="请设定您的密码" v-model="psd"></li>
          <li><input type="password" placeholder="请再次输入您的密码" v-model="confirmPsd"></li>
          <li class="invite"><input type="text" placeholder="注册邀请码（选填）"></li>
        </ul>
        <div class="btn">
          <button id="back" @click="back">返回</button>
          <button id="register" @click="register">注册</button>
        </div>
        <div class="wrap" id="wrap" v-show="show">
          <div class="modal">
            <p class="title">请输入图片上的验证码 <strong class="close" @click="close">x</strong></p>
            <p class="verificationCode"><input type="text" placeholder="请输入验证码" v-model="code2"><span>5922</span></p>
            <p class="submit"><button @click="submit">提交</button></p>
          </div>
        </div>
      </form>
    <!-------底部图片------->
    <div class="footer">
      <img src="http://img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    name: "register",
    data(){
      return {
        tel: "",
        code: "",
        psd: "",
        confirmPsd: "",
        show: false,
        code2: ''
      }
    },
    methods: {
      //返回登录页面
      back: function () {
        location.href = "#/login"
      },
      //注册信息判断
      register: function () {
        var pattern = /^[a-z0-9_-]{6,18}$/;
        var res = pattern.test(this.psd);
        if (this.tel == "") {
          MessageBox.alert("手机号不能为空", "");
        } else if (this.code == "") {
          MessageBox.alert("验证码不能为空", "");
        } else if (this.psd == '') {
          MessageBox.alert("密码不能为空", "");
        } else if (!res) {
          MessageBox.alert("密码应为6-16个英文字母、数字符号", "");
        } else if (this.confirmPsd == "") {
          MessageBox.alert("重复密码不能为空", "");
        } else if (this.confirmPsd != this.psd) {
          MessageBox.alert("两次输入密码不相同", "");
        } else {
          MessageBox.alert("注册成功", "");
          var userName = this.tel;
          var password = this.psd;
          var userData = JSON.parse(window.localStorage.getItem("registers"));
          if (!userData) {
            userData = {};
          }
          //往localstory里添加用户信息
          if (userName in userData) {
            MessageBox.alert("该手机号已注册易果账号，请直接登录");
          } else {
            userData[userName] = password;
            window.localStorage.setItem("registers", JSON.stringify(userData));
          }
        }
        location.href = "#/";
      },
      //获取验证码
      getCode: function () {
        var pattern = /^1\d{10}$/;
        var res = pattern.test(this.tel);
        if (this.tel == "") {
          MessageBox.alert("手机号不能为空", "");
        } else if (!res) {
          MessageBox.alert("您输入的手机号有误", "");
        } else {
          this.show = true;
        }
      },
      close: function () {
        this.show = false;
      },
      submit: function () {
        var userData = JSON.parse(window.localStorage.getItem("registers"));
        if (!userData) {
          userData = {};
        }
        if (this.code2 == "") {
          MessageBox.alert("验证码不能为空!", "");
        } else if (this.code2 != "5922") {
          MessageBox.alert("验证码不正确");
        }else if(this.tel in userData) {
            MessageBox.alert("该手机号已注册易果账号，请直接登录");
            this.show = false;
        }else {
          this.show = false;
          }
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../assets/css/register.scss";
</style>

