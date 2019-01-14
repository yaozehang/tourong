<template>
  <div class="bg-413d3c">
    <div class="w1200 clearfix">
      <div class="contact fll">
        <img src="/static/img/logo-2.png" alt class="logo-2">
        <p class="contact-item">联系电话：{{contactData.phone}}</p>
        <p class="contact-item">联系地址：{{contactData.address}}</p>
        <p class="contact-item">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：{{contactData.eMail}}</p>
      </div>
      <div class="about fll">
        <router-link to="/aboutUs">
          <img src="/static/img/about-1.png" alt class="about-1">
        </router-link>
        <router-link to="/callUs">
          <img src="/static/img/about-2.png" alt class="about-2">
        </router-link>
          <img src="/static/img/about-3.png" alt class="about-3" @click="tokefu">
      </div>
      <div class="two-code flr clearfix">
        <img src="/static/img/twoCode-1.png" alt class="twoCode-1 flr">
        <img src="/static/img/twoCode-2.png" alt class="twoCode-2 flr">
      </div>
    </div>
    <i class="line"></i>
    <div class="end">
      <span class="end-content">投融资讯平台 版权所有 copyright@2018 xxx Corporation, All Rights Reserve</span>
      <router-link to>
        <span class="clause-1" @click="toFuwu">服务条款</span>
      </router-link>
      <span class="cl-137">|</span>
      <router-link to>
        <span class="clause-2" @click="toYinsi">隐私条款</span>
      </router-link>
      <span class="cl-137">|</span>
      <router-link to>
        <span class="clause-2" @click="toMianze">免责声明</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactData: {
        phone: "010-82033116",
        address: "北京市西城区裕民东路3号京版信息港8层",
        eMail: "kefu@zqcmlink.com"
      }
    };
  },
  methods:{
    tokefu(){
        window.open('https://tb.53kf.com/code/client/10193554/1','_blank')
      },
    toFuwu(){
      let {href} = this.$router.resolve({
            name: "seriver",
          });
        window.open(href, '_blank');
    },
    toYinsi(){
      let {href} = this.$router.resolve({
            name: "yinsi",
          });
        window.open(href, '_blank');
    },
    toMianze(){
      let {href} = this.$router.resolve({
            name: "mianze",
          });
        window.open(href, '_blank');
    },
  }
};
</script>

<style scoped lang="scss">
.bg-413d3c {
  width: 100%;
  min-width: 1200px;
  height: 300px;
  background-color: #413d3c;
}
.logo-2 {
  padding-top: 35px;
}
.contact-item {
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(137, 137, 137);
  text-align: left;
}
.about {
  padding-top: 55px;
  .about-1 {
    padding-left: 110px;
  }
  .about-2 {
    padding: 0 55px;
  }
  .about-3 {
    cursor: pointer;
  }
}
.two-code {
  padding-top: 30px;
  .twoCode-2 {
    padding-right: 45px;
    width: 140px;
  }
  .twoCode-1 {
    width: 140px;
  }
}
.line {
  display: block;
  width: 100%;
  min-width: 1200px;
  height: 1px;
  margin: 25px 0;
  background: url(/static/img/line-1.png) no-repeat;
}
.end {
  font-family: "Microsoft YaHei";
  font-size: 14px;
  text-align: center;
  .end-content {
    color: rgb(137, 137, 137);
  }
  .clause-1 {
    color: #fff;
    padding-left: 25px;
    padding-right: 5px;
  }
  .clause-2 {
    padding: 0 5px;
    color: #fff;
  }
  .cl-137 {
    color: rgb(137, 137, 137);
  }
}
</style>