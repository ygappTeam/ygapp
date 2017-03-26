<template>
  <div class="setting">
    <mt-cell
      title="客服热线"
      to="//github.com"
      is-link
      value="400-000-7788">
    </mt-cell>

  <div class="pwd">
    <mt-cell
      title="修改登录密码"
      to="//github.com"
      is-link
      value="">
    </mt-cell>
    <mt-cell
      title="设置支付密码"
      to="//github.com"
      is-link
      value="">
    </mt-cell>
    <mt-cell
      title="更换手机号码"
      to="//github.com"
      is-link
      :value="phoneNum">
    </mt-cell>
  </div>
    <div class="aboutUs">
      <mt-cell
        title="关于我们"
        to="//github.com"
        is-link
        value="">
      </mt-cell>
      <mt-cell
        title="配送说明"
        to="//github.com"
        is-link
        value="">
      </mt-cell>
      <mt-cell
        title="退换货说明"
        to="//github.com"
        is-link
        value="">
      </mt-cell>
    </div>
    <div class="quit">
      <button @click="quit">退出登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  export default {
    name:"setting",
      data(){
        return {
          phoneNum:""
        }
      },
    mounted(){
      var usn=JSON.parse(window.localStorage.getItem("loginedUsers"));
      console.log(usn);
      this.phoneNum=usn;
    },
    methods:{
      //登录信息判断
      quit:function(){
        window.localStorage.removeItem("loginedUsers");
        MessageBox.alert("退出登录成功！","");
        location.href="#/mine";
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../assets/css/settings.scss";
</style>

