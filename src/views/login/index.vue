<template>
  <div>
    <div class="w1200 clearfix">
      <img src="/static/img/logo-1.png" alt="" class="logo-1">
      <router-link to="/home">
        <span class="flr toHome">返回首页</span>
      </router-link>
    </div>
    <div class="login">
      <div class="w1200 clearfix">
        <div class="login-box flr">
          <div class="login-box_header">
            <span class="login_span" :class="login_show ? 'border' : '' " @click="login_show = true">登录</span>
            <span class="register_span" :class="!login_show ? 'border' : '' " @click="login_show = false">注册</span>
          </div>
          <div class="login-box_body">
            <div v-show="login_show">
              <div class="inputBox">
                <i class="phone"></i>
                <input type="text" placeholder="请输入手机号码" :value="loginData.phone">
              </div>
              <div class="inputBox">
                <i class="lock"></i>
                <input type="password" placeholder="请输入密码" :value="loginData.password">
              </div>
              <div class="clearfix">
                <el-checkbox v-model="login_checked" class="fll">两周内自动登录</el-checkbox>
                <span class="flr forget" style="display:none">忘记密码？</span>
              </div>
            </div>
            <div v-show="!login_show">
              <div v-show="!email_show">
              <p class="email_login" @click="email_show = true">我要使用邮箱注册</p>
                <div class="inputBox">
                  <i class="phone"></i>
                  <input type="text" placeholder="请输入手机号码" :value="registerData.phone">
                </div>
                <div class="inputBox_code">
                  <i class="code"></i>
                  <input type="text" placeholder="请输入验证码" :value="registerData.code">
                </div>
                <span v-show="code_show" @click="getCode" class="count">获取验证码</span>
                <span v-show="!code_show" class="count">{{count}}s</span>
                <div class="inputBox">
                  <i class="lock"></i>
                  <input type="password" placeholder="请输入密码" :value="registerData.password">
                </div>
            </div>
            <div v-show="email_show">
              <p class="email_login" @click="email_show = false">返回手机注册</p>
              <div class="inputBox">
                <i class="phone"></i>
                <input type="text" placeholder="请输入邮箱" :value="loginData.email">
              </div>
              <div class="inputBox">
                <i class="lock"></i>
                <input type="password" placeholder="请输入密码" :value="loginData.password">
              </div>
              <div class="inputBox">
                <i class="lock"></i>
                <input type="password" placeholder="请确认密码" :value="loginData.password">
              </div>
            </div>
            <el-checkbox v-model="register_checked" class="fll">我已阅读并同意《投融资讯平台服务协议》</el-checkbox>
            </div>
            <button class="btn">{{login_show ? '登录': '注册'}}</button>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
  export default {
    components:{
      Bottom
    },
    data(){
      return {
        login_show:true,
        code_show:true,
        email_show:false,
        login_checked:false,
        register_checked:true,
        loginData:{
          phone:"",
          password:""
        },
        registerData:{
          phone:"",
          code:"",
          password:"",
          email:""
        },
        count: '',
        timer: null,
      }
    },
    methods:{
    getCode(){
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.code_show = false;
        this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
          } else {
          this.code_show = true;
          clearInterval(this.timer);
          this.timer = null;
          }
        }, 1000)
      }
    }
   }  
  }
</script>

<style scoped lang="scss">
//头部
.logo-1 {
  padding: 25px 0;
}
.toHome {
  padding-top: 35px;
  color: #000;
}
.toHome:hover {
  color:rgb(0, 89, 130);
}
//登录
.login {
  width: 100%;
  height: 693px;
  background: url(/static/img/bg-1.jpg) no-repeat center;
  background-size: cover;
  //登录注册盒子
  .login-box {
    width: 410px;
    min-height: 395px;
    margin-top: 115px;
    border-radius: 2px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    //头
    .login-box_header {
      padding: 18px 0;
      border-bottom: 1px solid #ebeef5;
      box-sizing: border-box;
      font-size: 20px;
      font-family: "Microsoft YaHei";
      color: rgb( 153, 153, 153 );
      .login_span{
        padding: 18px 10px;
        margin-left: 90px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .register_span {
        padding: 18px 10px;
        margin-left: 100px;
        box-sizing: border-box;
        cursor: pointer;
      }
      //点击变化
      .border {
        border-bottom: 2px solid #000;
        color: #000;
      }
    }
    //身
    .login-box_body {
      padding: 30px;
    }
    input {
        outline: none;
        border: 0;
        width: 260px;
        height: 30px;
        margin-left: 60px;
        padding:15px;
    }
    .inputBox {
      width: 350px;
      height: 60px;
      border: 1px solid #ebeef5;
      margin-bottom: 20px;
      position: relative;
      .phone {
        display: inline-block;
        position: absolute;
        top: 18px;
        left: 20px;
        width: 25px;
        height: 25px;
        background: url(/static/img/inp-1.png) no-repeat center;
        background-size: contain;
      }
      .lock {
        display: inline-block;
        position: absolute;
        top: 18px;
        left: 20px;
        width: 25px;
        height: 25px;
        background: url(/static/img/inp-2.png) no-repeat center;
        background-size: contain;
      }
    }
    /deep/ {
      .el-checkbox__label {
        font-size: 12px !important;
        font-family: "SimSun";
        color: rgb( 204, 204, 204 );
        line-height: 0.708 !important;
      }
    }
    .forget {
      font-size: 12px;
      font-family: "SimSun";
      color: rgb( 153, 153, 153 );
      line-height: 1.708;
    }
    .btn {
      width: 100%;
      font-size: 20px;
      font-family: "Microsoft YaHei";
      color: rgb( 255, 255, 255 );
      line-height: 0.425;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #005982;
      border: 1px solid #dcdfe6;
      border-color: #dcdfe6;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      margin-top: 40px;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      border-radius: 2px;
    }
    // 注册
      .inputBox_code {
        display: inline-block;
        width: 230px;
        height: 60px;
        border: 1px solid #ebeef5;
        margin-bottom: 20px;
        position: relative;
        input {
          outline: none;
          border: 0;
          width: 140px !important;
          height: 30px;
          margin-left: 60px;
          padding:15px;
      }
      .code {
        display: inline-block;
        position: absolute;
        top: 18px;
        left: 20px;
        width: 25px;
        height: 25px;
        background: url(/static/img/inp-3.png) no-repeat center;
        background-size: contain;
      }
    }
    .email_login {
      text-align: right;
      margin-top: 0;
      color: rgb( 153, 153, 153 );
      cursor: pointer;
    }
    .count {
      display: inline-block;
      text-align: center;
      width: 80px;
      height: 30px;
      border: 1px solid #ebeef5;
      padding: 15px;
      line-height: 1.9;
      cursor: pointer;
    }
  }
}
</style>