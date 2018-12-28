<template>
  <div>
    <swiper :options="swiperOption" class="home-swiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" width="100%" height="auto">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="w1200">
      <div class="project clearfix">
        <div class="project-title">
          优质项目
          <i></i>
        </div>
        <div class="project-menu">
          <div v-for="(item , index) in projectData" :key="index" class="project-item fll">
            <router-link to="">
            <img src="/static/img/pro-1.jpg" alt width="360px" height="120px">
            <p class="project-item-title">{{item.title}}</p>
            </router-link>
            <p
              class="project-item-content"
            >{{item.content}}</p>
            
          </div>
        </div>
      </div>
    </div>
    <img src="/static/img/touronglianxian.jpg" alt width="100%" style="display:block;">
    <div class="bg-f2f2f3">
      <div class="w1200 clearfix">
        <div class="invest-title">
          投资信息
          <i></i>
        </div>
        <div class="invest-menu">
          <div v-for="(item , index) in investData" :key="index" class="invest-item fll clearfix">
            <router-link to="/money/investors">
            <img src="/static/img/touzi-1.png" alt width="140px" height="180px" class="fll">
            </router-link>
            <div class="invest-text fll">
              <router-link to="/money/investors"><p class="invest-item-title">{{item.title}}</p></router-link>
              <p class="invest-item-list">
                投资资金：
                <span class="invest-money">{{item.money}}</span>
              </p>
              <p class="invest-item-list w230 inb">
                投资方式：
                <span class="invest-content">{{item.way}}</span>
              </p>
              <p class="invest-item-list inb">
                资金类型：
                <span class="invest-content">{{item.moneyType}}</span>
              </p>
              <p class="invest-item-list w230 inb">
                投资地区：
                <span class="invest-content">{{item.region}}</span>
              </p>
              <p class="invest-item-list inb">
                投资行业：
                <span class="invest-content">{{item.trade}}</span>
              </p>
              <p class="invest-item-list w230 inb">
                投资类型：
                <span class="invest-content">{{item.investType}}</span>
              </p>
              <p class="invest-item-list inb">
                投资阶段：
                <span class="invest-content">{{item.stage}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w1200" style="padding-bottom:80px;">
      <div class="message-title">
        投融资讯
        <i></i>
      </div>
      <div class="mes-title">
        <span class="mes-title-item">活动会议</span>
        <span class="mes-title-item">前端科技</span>
        <span class="mes-title-item">政策动态</span>
        <span class="mes-title-item">行业</span>
        <span class="mes-title-item">项目</span>
        <span class="mes-title-item">机构</span>
        <span class="mes-title-item">活动推荐</span>
        <span class="mes-title-item">动态服务</span>
      </div>
      <div class="mes-content clearfix">
        <ul class="clearfix">
          <li v-for="(item,index) in messageData" :key="index" class="fll mes-list">
            <router-link to="">
              <span class="mes-text fll">{{item.title}}</span> 
              <span class="mes-time">{{item.time}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: true,
        loop: true
      },
      swiperSlides: ["/static/img/lunbo-1.png"],
      projectData:[
        {
          title:"北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          title:"北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          title:"北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          title:"北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          title:"北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          title:"北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        }
      ],
      investData:[
        {
          title:"北京某企资金1000万-9亿元寻求全国优质实体 项目合作",
          money:"200-500W",
          way:"股权投资",
          moneyType:"企业资金",
          region:"不限",
          trade:"互联网",
          investType:"参股合作 收购/并购",
          stage:"成长期、成熟期"
        },
        {
          title:"北京某企资金1000万-9亿元寻求全国优质实体 项目合作",
          money:"200-500W",
          way:"股权投资",
          moneyType:"企业资金",
          region:"不限",
          trade:"互联网",
          investType:"参股合作 收购/并购",
          stage:"成长期、成熟期"
        },
        {
          title:"北京某企资金1000万-9亿元寻求全国优质实体 项目合作",
          money:"200-500W",
          way:"股权投资",
          moneyType:"企业资金",
          region:"不限",
          trade:"互联网",
          investType:"参股合作 收购/并购",
          stage:"成长期、成熟期"
        },
        {
          title:"北京某企资金1000万-9亿元寻求全国优质实体 项目合作",
          money:"200-500W",
          way:"股权投资",
          moneyType:"企业资金",
          region:"不限",
          trade:"互联网",
          investType:"参股合作 收购/并购",
          stage:"成长期、成熟期"
        }
      ],
      messageData:[
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
        {
          title:"中央环保督察“回头看”将严查“一刀切”dsfasdfasdfsadfdsafdsafsdafsad",
          time:"2018-11-14"
        },
      ]
    };
  }
};
</script>

<style scoped lang="scss">
// 轮播图高度
@media screen and (max-width: 1640px) {
  .home-swiper {
    width: 100%;
    height: 475px;
  }
}
@media screen and (min-width: 1640px) and (max-width: 1920px) {
  .home-swiper {
    width: 100%;
    height: 600px;
  }
}
// 项目模块
.project-title {
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-family: "Microsoft YaHei";
  color: rgb(137, 137, 137);
  padding: 50px 0;
  i {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(/static/img/chakan.png) no-repeat center;
    background-size: contain;
  }
}
.project-menu .project-item:nth-child(2) {
  padding: 0 60px;
}
.project-menu .project-item:nth-child(5) {
  padding: 0 60px;
}
.project {
  margin-bottom: 20px;
}
.project-item {
  width: 360px;
  height: 300px;
  margin-bottom: 50px;
  .project-item-title {
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(62, 58, 57);
    font-weight: bold;
    line-height: 1.333;
    text-align: left;
    width: 342px;
    cursor: pointer;
  }
  .project-item-title:hover {
    color: rgb(0, 89, 130);
  }
  .project-item-content {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(137, 137, 137);
    line-height: 1.429;
    text-align: left;
    width: 360px;
    height: 100px;
    // 省略
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
  // 适配所有的省略
  .project-item-content {
    position: relative;
    line-height: 20px;
    max-height: 100px;
    overflow: hidden;
  }
  .project-item-content::after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
  }
}
// 投资信息
.bg-f2f2f3 {
  background: #f2f2f3;
  width: 100%;
  height: 700px;
}
.invest-title {
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-family: "Microsoft YaHei";
  color: rgb(137, 137, 137);
  padding: 75px 0 50px 0;
  i {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(/static/img/chakan.png) no-repeat center;
    background-size: contain;
  }
}
.invest-menu .invest-item:nth-child(1){
  margin-right: 80px
}
.invest-menu .invest-item:nth-child(3){
  margin-right: 80px
}
.invest-item {
  width: 560px;
  height: 180px;
  margin-bottom: 55px;
}
.invest-text {
  margin-left: 10px;
  width: 410px;
}
.invest-item-title {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb(62, 58, 57);
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
  width: 369px;
  height: 42px;
  margin: 0;
  cursor: pointer;
}
.invest-item-title:hover {
  color: rgb(0, 89, 130);
}
.invest-item-list {
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(137, 137, 137);
  text-align: left;
  margin-top: 13px;
  margin-bottom: 0;
  .invest-money {
    font-size: 18px;
    font-weight: bold;
    color: #005982;
  }
}
.w230 {
  width: 230px;
}
.inb {
  display: inline-block;
}
// 资讯
.message-title {
    width: 100%;
  text-align: center;
  font-size: 36px;
  font-family: "Microsoft YaHei";
  color: rgb(137, 137, 137);
  padding-top: 75px;
  i {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(/static/img/chakan.png) no-repeat center;
    background-size: contain;
  }
}
.mes-title {
  text-align: center;
}
.mes-title-item{
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb( 0, 89, 130 );
  line-height: 4.444;
  margin-right: 30px;
  cursor: pointer;
}
.mes-content {
  margin-top: 20px;
}
.mes-content li:nth-child(2n+1) {
  margin-right: 80px;
}
.mes-time {
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb( 137, 137, 137 );
  margin-left: 55px;
}
.mes-list {
  font-size: 16px;
  font-family: "Microsoft YaHei";
  color: rgb( 201, 202, 202 );
  line-height: 2.25;
  text-align: left;
  width: 535px;
  cursor: pointer;
}
.mes-text {
  color: #444;
  display: inline-block;
  width: 400px;
  overflow: hidden;/*超出部分隐藏*/
  white-space: nowrap;/*不换行*/
  text-overflow:ellipsis;
}
.mes-text:hover{
  color: rgb( 0, 89, 130 );
}

//轮播图样式
/deep/ {
  .swiper-pagination{
    width:190px !important;
    height:55px !important;
    line-height:3.5;
    position:absolute;
    color:#fff;
    bottom:0;
    left:1200px;
  }
}
</style>