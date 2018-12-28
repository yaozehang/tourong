<template>
  <div class="w1200 clearfix">
    <div class="w840 fll mes_all">
      <div class="mes_top">
        <p class="mes_type">
          <span :class="mes_type == 0 ? 'active' : ''" @click="toMeet" style="cursor:pointer">活动会议</span>
          <span class="type" :class="mes_type == 1 ? 'active' : ''" @click="toScience">前端科技</span>
          <span class="type" :class="mes_type == 2 ? 'active' : ''" @click="toPolicy">政策动态</span>
          <span class="type" :class="mes_type == 3 ? 'active' : ''" @click="toInduty">行业</span>
          <span class="type" :class="mes_type == 4 ? 'active' : ''" @click="toProduct">项目</span>
          <span class="type" :class="mes_type == 5 ? 'active' : ''" @click="toOrgan">机构</span>
          <span class="type" :class="mes_type == 6 ? 'active' : ''" @click="toRefe">活动推荐</span>
          <span class="type" :class="mes_type == 7 ? 'active' : ''" @click="toServer">动态服务</span>
        </p>
      </div>
      <div v-for="(item , index) in messageData" :key="index" class="mg-20">
        <div v-if="item.img" class="clearfix">
          <router-link to="/message/messageDetail">
          <img :src="item.img" alt class="fll">
          <div class="fll mes_box">
            <p class="title">{{item.title}}</p>
            <div class="clearfix">
              <span class="fll time">发布时间；{{item.time}}</span>
              <span class="flr num">浏览：{{item.num}}次</span>
            </div>
            <p class="content">{{item.content}}</p>
          </div>
          </router-link>
        </div>
        <div v-else class="clearfix">
          <router-link to="/message/messageDetail">
          <div class="fll mes_box2">
            <p class="title">{{item.title}}</p>
            <div class="clearfix">
              <span class="fll time">发布时间；{{item.time}}</span>
              <span class="flr num">浏览：{{item.num}}次</span>
            </div>
            <p class="content">{{item.content}}</p>
          </div>
          </router-link>
        </div>
      </div>
      <div class="mes_page">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="100"
          layout="total, prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
    <div class="w360 flr mes_list clearfix">
      <p class="mes">
        热门资讯
        <span class="mes_more flr">更多></span>
      </p>
      <ul class="mes_title">
        <router-link to>
          <li v-for="(item , index) in mesData" :key="index" class="mes_content">
            <span class="cl-0">{{item.content}}</span>
          </li>
        </router-link>
      </ul>
      <img src="/static/img/bg-4.jpg" alt width="360px" height="350px" style="margin-bottom:75px">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mesData: [
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        }
      ],
      mes_type: 1,
      messageData: [
        {
          img: "/static/img/list-3.jpg",
          title: "十九届中央第一轮巡视整改进展情况开始公布",
          time: "2017-06-10",
          num: 124,
          content:
            "在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这"
        },
        {
          img: "/static/img/list-3.jpg",
          title: "十九届中央第一轮巡视整改进展情况开始公布",
          time: "2017-06-10",
          num: 124,
          content:
            "在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这"
        },
        {
          img: "",
          title: "十九届中央第一轮巡视整改进展情况开始公布",
          time: "2017-06-10",
          num: 124,
          content:
            "在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这"
        },
        {
          img: "/static/img/list-3.jpg",
          title: "十九届中央第一轮巡视整改进展情况开始公布",
          time: "2017-06-10",
          num: 124,
          content:
            "在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这"
        },
        {
          img: "/static/img/list-3.jpg",
          title: "十九届中央第一轮巡视整改进展情况开始公布",
          time: "2017-06-10",
          num: 124,
          content:
            "在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这"
        },
        {
          img: "",
          title: "十九届中央第一轮巡视整改进展情况开始公布",
          time: "2017-06-10",
          num: 124,
          content:
            "在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这"
        },
        {
          img: "/static/img/list-3.jpg",
          title: "十九届中央第一轮巡视整改进展情况开始公布",
          time: "2017-06-10",
          num: 124,
          content:
            "在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这在以杀毒软件为代表的免费模式中，实际上是C端用户免费，然后靠流量收取B端广告费，也就是羊毛出在猪身上，新闻网站等也是类似的。这"
        }
      ]
    };
  },
  methods: {
    toMeet() {
      this.mes_type = 0;
    },
    toScience() {
      this.mes_type = 1;
    },
    toPolicy() {
      this.mes_type = 2;
    },
    toInduty() {
      this.mes_type = 3;
    },
    toProduct() {
      this.mes_type = 4;
    },
    toOrgan() {
      this.mes_type = 5;
    },
    toRefe() {
      this.mes_type = 6;
    },
    toServer() {
      this.mes_type = 7;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped lang="scss">
//信息列表
.mes_list {
  .mes {
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(51, 51, 51);
    line-height: 1.333;
    text-align: left;
    padding-left: 20px;
    border-left: 3px solid #005982;
    .mes_more {
      font-size: 12px;
      font-family: "SimSun";
      color: #999;
      line-height: 2;
      cursor: pointer;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }
}
.mes_title {
  border-top: 1px solid #d9d9d9;
  padding-left: 20px;
}
.mes_content {
  padding: 20px 0;
  border-bottom: 1px dashed #d9d9d9;
  color: #d9d9d9;
}
.mes_content:hover {
  color: #005982;
}
.cl-0 {
  color: #000;
}
.cl-0:hover {
  color: #005982;
}

//资讯
.mes_all {
  padding-right: 30px;
  box-sizing: border-box;
}
.mes_type {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb(102, 102, 102);
  line-height: 1.333;
  text-align: left;
  padding-left: 20px;
  border-left: 3px solid #005982;
  margin-bottom: 0;
  .type {
    padding-left: 30px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .active {
    color: #005982;
  }
}
.mes_top {
  padding-bottom: 18px;
  border-bottom: 1px solid #d9d9d9;
}
.mes_box {
  width: 638px;
  margin-left: 20px;
  .title {
    color: #000;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .time {
    font-size: 12px;
    font-family: "SimSun";
    color: rgb(153, 153, 153);
    line-height: 2;
  }
  .num {
    font-size: 12px;
    font-family: "SimSun";
    color: rgb(153, 153, 153);
    line-height: 2;
  }
  .content {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: #999;
    line-height: 1.286;
  }
  .content {
    position: relative;
    max-height: 35px;
    overflow: hidden;
  }
  .content::after {
    content: "...";
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
.mes_box2 {
  .title {
    margin-top: 5px;
    margin-bottom: 10px;
    color: #000;
  }
  .time {
    font-size: 12px;
    font-family: "SimSun";
    color: rgb(153, 153, 153);
    line-height: 2;
  }
  .num {
    font-size: 12px;
    font-family: "SimSun";
    color: rgb(153, 153, 153);
    line-height: 2;
  }
  .content {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: #999;
    line-height: 1.286;
  }
  .content {
    position: relative;
    max-height: 35px;
    overflow: hidden;
  }
  .content::after {
    content: "...";
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
//分页
.mes_page {
  margin: 70px 0 60px;
  padding: 0 60px;
  /deep/ {
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      background: #005983 !important;
      color: #fff !important;
    }
    .el-pagination.is-background .el-pager li {
      background: #fff !important;
      color: #000 !important;
      border: 1px solid #d9d9d9 !important;
      font-weight: 400;
    }
  }
}
</style>