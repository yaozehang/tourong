<template>
  <div>
    <swiper v-if="swiperSlides.length > 0" :options="swiperOption" class="home-swiper" >
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="$url + slide.imgPath" width="100%" height="100%" class="swiper-img">
      </swiper-slide>
    </swiper>
    <div class="w1200 swiper-bottom">
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev" style="outline: none"><</div>
      <div class="swiper-button-next" slot="button-next" style="outline: none">></div>
    </div>
    <div class="w1200">
      <div class="project clearfix">
        <div class="project-title">
          优质项目
          <i @click="toProductPage"></i>
        </div>
        <div class="project-menu">
          <div v-for="(item , index) in projectData.slice(0,6)" :key="index" class="project-item fll" @click="toProjectDetailPage(item.id)">
              <img :src="$url + item.recommendImgPath" alt width="360px" height="120px" style="cursor:pointer">
              <p class="project-item-title">{{item.title}}</p>
              <p class="project-item-content">{{item.brief}}</p>
          </div>
        </div>
      </div>
    </div>
    <img src="/static/img/touronglianxian.png" alt width="100%" style="display:block;">
    <div class="bg-f2f2f3">
      <div class="w1200 clearfix">
        <div class="invest-title">
          投资信息
          <i @click="toMoneyPage"></i>
        </div>
        <div class="invest-menu">
          <div v-for="(item , index) in investData.slice(0,4)" :key="index" class="invest-item fll clearfix" @click="toMoneyDetailPage(item.id)">
            <img :src="$url + item.recommendImgPath" alt width="140px" height="180px" class="fll" style="cursor:pointer">
            <div class="invest-text fll">
              <p class="invest-item-title">{{item.title}}</p>
              <p class="invest-item-list">
                投资资金：
                <span class="invest-money">{{item.investAmountName}}</span>
              </p>
              <p class="invest-item-list w230 inb">
                投资方式：
                <span class="invest-content">{{item.investCase}}</span>
              </p>
              <p class="invest-item-list inb w175">
                资金类型：
                <span class="invest-content">{{item.investTypeName}}</span>
              </p>
              <p class="invest-item-list w230 inb">
                投资地区：
                <span class="invest-content">{{item.investRegionNameStr}}</span>
              </p>
              <p class="invest-item-list inb w175">
                投资行业：
                <span class="invest-content">{{item.investIndustryName}}</span>
              </p>
              <p class="invest-item-list w230 inb">
                投资类型：
                <span class="invest-content">{{item.investTypeName}}</span>
              </p>
              <p class="invest-item-list inb w175">
                投资阶段：
                <span class="invest-content">{{item.investStageName}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w1200" style="padding-bottom:80px;">
      <div class="message-title">
        投融资讯
        <i @click="toMessagePage"></i>
      </div>
      <div class="mes-title">
        <span class="mes-title-item"
          v-for="(item , index) in categoryList"
          :key="index"
          @click="getType(item.dataValue)"
        >{{item.dataName}}</span>
      <div class="mes-content clearfix">
        <ul class="clearfix">
          <li v-for="(item,index) in messageData.slice(0,18)" :key="index" class="fll mes-list" @click="toMessageDetailPage(item.id)">
              <span class="mes-text fll">{{item.title}}</span>
              <span class="mes-time">{{item.addTimeStr.slice(0,10)}}</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
let vm = null;

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
        // autoplay:true,
        autoplay:{
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        on: {
          // function(swiper){
          //   var x = JSON.parse(swiper.clickedSlide.attributes["data-href"].nodeValue)
          //   console.log(x);
          //   vm.toSwiper(x.resourceTypeStr,x.id);
          // }
          click(){
            const realIndex = this.realIndex;
            vm.toSwiper(realIndex);
            // var x = JSON.parse(swiper.clickedSlide.attributes["data-href"].nodeValue)
            // console.log(x);
            // vm.toSwiper(x.resourceTypeStr,x.id);
          }
        },
      },
      // swiperSlides: ["/static/img/lunbo-1.png"],
      swiperSlides: [],
      projectData: [
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设"
        }
      ],
      investData: [
        {
          img:'/static/img/touzi-1.png',
          title: "北京某企资金1000万-9亿元寻求全国优质实体 项目合作",
          money: "200-500W",
          way: "股权投资",
          moneyType: "企业资金",
          region: "不限",
          trade: "互联网",
          investType: "参股合作 收购/并购",
          stage: "成长期、成熟期"
        },
        {
          img:'/static/img/touzi-1.png',
          title: "北京某企资金1000万-9亿元寻求全国优质实体 项目合作",
          money: "200-500W",
          way: "股权投资",
          moneyType: "企业资金",
          region: "不限",
          trade: "互联网",
          investType: "参股合作 收购/并购",
          stage: "成长期、成熟期"
        },
        {
          img:'/static/img/touzi-1.png',
          title: "北京某企资金1000万-9亿元寻求全国优质实体 项目合作",
          money: "200-500W",
          way: "股权投资",
          moneyType: "企业资金",
          region: "不限",
          trade: "互联网",
          investType: "参股合作 收购/并购",
          stage: "成长期、成熟期"
        },
        {
          img:'/static/img/touzi-1.png',
          title: "北京某企资金1000万-9亿元寻求全国优质实体 项目合作",
          money: "200-500W",
          way: "股权投资",
          moneyType: "企业资金",
          region: "不限",
          trade: "互联网",
          investType: "参股合作 收购/并购",
          stage: "成长期、成熟期"
        }
      ],
      categoryList:[],
      categorys:'',
      messageData:[],
    };
  },
  methods:{
     toSwiper(index){
      let id = this.swiperSlides[index].resourceId
      let type = this.swiperSlides[index].resourceType
      if(type == '1'){
        this.toProjectDetailPage(id)
      } else if (type == '2') {
        this.toMoneyDetailPage(id)
      } else if (type == '3') {
        this.toMessageDetailPage(id)
      } else if (type == '4') {
          let {href} = this.$router.resolve({
              name: "activityDetail",
              query: {id}
          });
          window.open(href, '_blank');
      }
    },
     getData(){
      this.$axios.get('/jsp/wap/index/ctrl/jsonIndex.jsp').then(res => {
        this.swiperSlides = res.data.banner
        this.investData = res.data.capitalList;
         this.projectData = res.data.projectList
        // let banner = res.data.banner
        // banner.forEach(item => {
        //   this.swiperSlides.push(item.imgPath)          
        // });
      })
    },
    getTypeData(){
      this.$axios.get('/jsp/wap/trNews/ctrl/jsonCategoryList.jsp').then(res => {
        if(res.success == "true"){
          let categoryList = res.data
          this.categoryList = categoryList
        }
      })
    },
    getMessageData(categorys,pageNumber){
      this.$axios.get('/jsp/wap/trNews/ctrl/jsonNewsPage.jsp',{params:{dataValues:categorys,pageNumber}}).then(res => {
        this.messageData = res.data.pageList
      })
    },
    getType(e) {
      this.categorys = e
      this.getMessageData(this.categorys)
    },
    //首页跳转打开新窗口
    toProductPage(){
      let {href} = this.$router.resolve({
          name: "project",
      });
      window.open(href, '_blank');
    },
    toMoneyPage(){
      let {href} = this.$router.resolve({
          name: "money",
      });
      window.open(href, '_blank');
    },
    toMessagePage(){
      let {href} = this.$router.resolve({
          name: "message",
      });
      window.open(href, '_blank');
    },
    toProjectDetailPage(id){
      let {href} = this.$router.resolve({
          name: "projectDetail",
          query: {id}
      });
      window.open(href, '_blank');
    },
    toMoneyDetailPage(id){
      let {href} = this.$router.resolve({
          name: "moneyDetail",
          query: {id}
      });
      window.open(href, '_blank');
    },
    toMessageDetailPage(id){
      let {href} = this.$router.resolve({
          name: "messageDetail",
          query: {id}
      });
      window.open(href, '_blank');
    },
  },
  created(){
    this.getData()
    this.getTypeData()
    this.getMessageData()
    vm = this;
  }
};
</script>

<style scoped lang="scss">
// 轮播图高度
.swiper-bottom {
    position: relative;
}
@media screen and (max-width: 1640px) {
  .home-swiper {
    width: 100%;
    height: 475px;
  }
  //轮播图样式
  /deep/ {
    .swiper-pagination {
      width: 190px !important;
      height: 55px !important;
      line-height: 3.5 !important;
      position: absolute !important;
      color: #fff !important;
      bottom: 1px !important;
      left: 75% !important;
      // background-color: rgba(0, 0, 0, 0.5) !important;
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: #999 !important;
      font-size: 40px !important;
      background-image: none !important;
      -webkit-user-select:none !important; 
      -moz-user-select:none !important;
      -ms-user-select:none !important; 
      user-select:none !important; 
    }
    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      color: #fff !important;
    }
    .swiper-button-prev {
      top: calc(100% - 30px) !important;
      left: 75% !important;
    }
    .swiper-button-next {
      top: calc(100% - 30px) !important;
      left: calc(75% + 150px) !important;
    }
  }
}
@media screen and (min-width: 1640px) and (max-width: 1920px) {
  .home-swiper {
    width: 100%;
    height: 600px;
  }
  /deep/ {
    .swiper-pagination {
      width: 190px !important;
      height: 55px !important;
      line-height: 3.5 !important;
      position: absolute !important;
      color: #fff !important;
      bottom: 1px !important;
      left: 75% !important;
      // background-color: rgba(0, 0, 0, 0.5) !important;
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: #999 !important;
      font-size: 40px !important;
      background-image: none !important;
      -webkit-user-select:none !important; 
      -moz-user-select:none !important;
      -ms-user-select:none !important; 
      user-select:none !important; 
    }
    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      color: #fff !important;
    }
    .swiper-button-prev {
      top: calc(100% - 30px) !important;
      left: 75% !important;
    }
    .swiper-button-next {
      top: calc(100% - 30px) !important;
      left: calc(75% + 150px) !important;
    }
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
    cursor: pointer;
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
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 5px;
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
    cursor: pointer;
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(/static/img/chakan.png) no-repeat center;
    background-size: contain;
  }
}
.invest-menu .invest-item:nth-child(1) {
  margin-right: 80px;
}
.invest-menu .invest-item:nth-child(3) {
  margin-right: 80px;
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
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis;
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
  .invest-content {
    color: #000;
  }
}
.w230 {
  width: 230px;
}
.w175 {
  width: 175px;
}
.inb {
  display: inline-block;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis;
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
    cursor: pointer;
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
.mes-title-item {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb(0, 89, 130);
  line-height: 4.444;
  margin-right: 30px;
  cursor: pointer;
}
.mes-content {
  margin-top: 20px;
}
.mes-content li:nth-child(2n + 1) {
  margin-right: 80px;
}
.mes-time {
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(137, 137, 137);
  margin-left: 55px;
}
.mes-list {
  font-size: 16px;
  font-family: "Microsoft YaHei";
  color: rgb(201, 202, 202);
  line-height: 2.25;
  text-align: left;
  width: 535px;
  cursor: pointer;
}
.mes-text {
  color: #000;
  display: inline-block;
  width: 400px;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis;
}
.mes-text:hover {
  color: rgb(0, 89, 130);
}
</style>