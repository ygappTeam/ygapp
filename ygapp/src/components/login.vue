<template>
  <div class="login">
    <div class="head"></div>
    <form action="">
      <ul class="userInfo">
        <li class="userName"><span></span><input type="text" placeholder="请输入您的用户名" v-model="userName"></li>
        <li class="password"><span></span><input type="password" placeholder="请输入您的密码" v-model="password"></li>
        <li class="code"><input type="text" placeholder="请输入验证码" v-model="code"><span @click="changeCode">{{num}}</span></li>
      </ul>
      <p><a href="javascript:;" class="forget_password">忘记密码？</a></p>
      <div class="btn">
        <button id="login" @click="loginJudge">登录</button>
        <button id="register" @click="registerNow">立即注册</button>
      </div>
      <p class="coop">----------合作账号登录-----------</p>
      <div class="third">
        <a href="javascript:;" class="qq"></a>
        <a href="javascript:;" class="weibo"></a>
      </div>
    </form>
    <div class="footer">
      <img src="http://img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    name:"login",
      data(){
        return {
          userName:"",
          password:"",
          code:"",
          num:"5174"
        }
      },
    methods:{
      //登录信息判断
      loginJudge:function(){
        var userData=JSON.parse(window.localStorage.getItem("registers"));
        if(!userData){
          userData={};
        }
        /*
        * {"12345678901":"123456"}
        * */
        if(this.userName==""){
          MessageBox.alert("用户名不能为空!");
        }else if(this.password==""){
          MessageBox.alert("密码不能为空！");
        }else if(this.code==""){
          MessageBox.alert("验证码不能为空！");
        }else if(this.code!=this.num){
          MessageBox.alert("验证码不正确");
        }else if(userData[this.userName]!=this.password){
          MessageBox.alert("密码不正确");
        }else if(!(this.userName in userData)){
          MessageBox.alert("用户名不存在");
        }else{
          //登录成功跳转到我的易果
          location.href="#/mine";
            //将登录成功的用户名存入localStory
          window.localStorage.setItem("loginedUsers",this.userName);
        }
      },
      registerNow:function(){
        location.href="#/register";
      },
      //改变验证码
      changeCode:function () {
        var res = "";
        for(var i = 0; i < 4; i++){
          var ra =this.createRandom();
          res += String.fromCharCode(ra);
        }

        this.num=res;
      },
      //产生随机数
      createRandom:function () {
        while(true){
          var ra = Math.floor(Math.random()*(122-48) + 48);
          if(!((ra > 57 && ra < 65) || (90 < ra && ra < 97))){
            return ra;
          }
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../assets/css/login1.scss";
</style>

