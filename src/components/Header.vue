<template>
  <div>
    <div class="bg-89">
      <div class="w1200">
        <span class="txt-202">您好，请
          <router-link to="/login">登录</router-link>!
        </span>
        <span class="txt-202 register">免费注册</span>
        <el-dropdown>
          <span class="invest el-dropdown-link">
            <i></i>
            我是投资人
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>发布资金</el-dropdown-item>
            <el-dropdown-item>认证投资人</el-dropdown-item>
            <el-dropdown-item>创投咨询</el-dropdown-item>
            <el-dropdown-item>找项目</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="gem el-dropdown-link">
            <i></i>
            我是创业人
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>创建项目</el-dropdown-item>
            <el-dropdown-item>创投咨询</el-dropdown-item>
            <el-dropdown-item>认证创业者</el-dropdown-item>
            <el-dropdown-item>找投资</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="message el-dropdown-link">
          <i></i>
          消息通知
        </span>
        <span class="mine el-dropdown-link">
          <i></i>
          个人中心
        </span>
      </div>
    </div>
    <div class="header_2">
      <div class="w1200 nav clearfix">
        <img src="/static/img/logo-1.png" alt="投融连线" class="fll">
        <div class="navMenu fll"><router-link to="/home">首页</router-link></div>
        <div class="navMenu fll"><router-link to="/money">找资金</router-link></div>
        <div class="navMenu fll"><router-link to="/project">选项目</router-link></div>
        <div class="navMenu fll"><router-link to="/message">投融资讯</router-link></div>
        <div class="navMenu fll"><router-link to="/activity">活动</router-link></div>
        <div class="navMenu fll"><router-link to="/member">会员</router-link></div>   
        <div class="navMenu fll" style="color:#999;">专家团队</div>
        <div class="navMenu fll" style="color:#999;">路演</div>
        <div class="search fll">
          <form action class="form fll">
            <select value="1" class="select">
              <option value="1">找资金</option>
              <option value="2">找项目</option>
              <option value="2">找咨询</option>
            </select>
            <input type="text" placeholder="输入关键字" class="input">
            <img src="/static/img/search.png" alt="" class="search-button">
          </form>
          <img src="/static/img/kefu.png" alt="" class="fll" style="margin-left:5px;cursor:pointer;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
// 最上面的背景
.bg-89 {
  width: 100%;
  height: 30px;
  background-color: #898989;
  font-size: 14px;
  line-height: 28px;
}
// 字体颜色
.txt-202 {
  font-family: "Microsoft YaHei";
  color: rgb(201, 202, 202);
}
// 登录页跳转颜色
a {
  font-size: 16px;
  color: #e5e5e5;
}
.register {
  margin-left: 15px;
  cursor: pointer;
}
.invest {
  margin-left: 600px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  position: relative;
  i {
    display: inline-block;
    position: absolute;
    bottom: 2px;
    left: -23px;
    width: 17px;
    height: 13px;
    background: url(/static/img/zuanshi.png) no-repeat center;
    background-size: contain;
  }
}
.gem {
  font-weight: 700;
  margin-left: 40px;
  color: #fff;
  cursor: pointer;
  position: relative;
  i {
    display: inline-block;
    position: absolute;
    bottom: 2px;
    left: -23px;
    width: 17px;
    height: 14px;
    background: url(/static/img/zhiwu.png) no-repeat center;
    background-size: contain;
  }
}
.message {
  color: #e5e5e5;
  margin-left: 75px;
  cursor: pointer;
  position: relative;
  i {
    display: inline-block;
    position: absolute;
    bottom: 2px;
    left: -23px;
    width: 17px;
    height: 17px;
    background: url(/static/img/xiaoxi.png) no-repeat center;
    background-size: contain;
  }
}
.mine {
  margin-left: 40px;
  color: #e5e5e5;
  cursor: pointer;
  position: relative;
  i {
    display: inline-block;
    position: absolute;
    bottom: 2px;
    left: -20px;
    width: 17px;
    height: 16px;
    background: url(/static/img/geren.png) no-repeat center;
    background-size: contain;
  }
}

//logo及菜单行
.nav {
  padding: 30px 0;
}
.navMenu {
  padding: 10px 0 10px 30px;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb(62, 58, 57);
  cursor: pointer;
  a {
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(62, 58, 57);
    padding-bottom: 15px;
  }
}
.navMenu:hover {
  color: rgb(0, 89, 130);
}
// 搜索框
.search {
  height: 40px;
  margin-left: 95px;
}
.form {
  position: relative;
  font-size: 14px;
  width: 240px;
  height: 40px;
  background: #e6e6e6;
  padding-top: 4px;
  box-sizing: border-box;
}
.input {
  outline: none;
  border: 0;
  width: 130px;
  height: 30px;
  margin-left: 10px;
  background: #e6e6e6;
}
.select {
  outline: none;
  -moz-outline: none;
  appearance: none;
  border: 0;
  width: 65px;
  margin-left: 10px;
  background: #e6e6e6;
  background-image: url(/static/img/xiala.png);
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: calc(100% - 5px) 50%;
}
@-moz-document url-prefix() {
  .select {
    background-position: calc(100% - 2px) 50% !important;
  }
}
.search-button {
  position: absolute;
  width: 38px;
  height: 100%;
  cursor: pointer;
  right: 0;
  top: 0;
}
.header_2 {
  border-bottom: 1px solid #ebeef5;
}
//点击样式随路由变化
.router-link-active {
  color:rgb(0, 89, 130) !important;
  border-bottom: 3px solid #005982;
}
</style>