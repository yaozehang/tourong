<template>
  <div class="w1200 clearfix">
    <div class="w840 fll">
      <div class="bread">
        <span>
          <router-link to="/home">首页 ></router-link>
        </span>
        <span>{{$route.meta.title}}</span>
      </div>
      <div class="pd-15">
        <span class="act_type">分类：</span>
        <span
          class="type_item"
          v-for="(item , index) in actType"
          :key="index"
          @click="getType(item)"
        >{{item}}</span>
      </div>
      <div class="pd-15">
        <span class="act_type">状态：</span>
        <span
          class="type_item"
          v-for="(item , index) in actStatus"
          :key="index"
          @click="getStatus(item)"
        >{{item}}</span>
      </div>
      <div class="act_list clearfix" v-for="(item, index) in actlist" :key="index">
        <img :src="item.img" alt width="270px" height="180px" class="fll">
        <div class="fll list">
          <p class="list-title">{{item.title}}</p>
          <p class="list-content">
            <i class="local"></i>
            {{item.local}}
          </p>
          <p class="list-content">
            <i class="company"></i>
            {{item.company}}
          </p>
          <p class="list-content2">
            <i class="num"></i>
            报名人数：{{item.num}}
          </p>
          <p class="list-content2">
            <i class="time"></i>
            报名时间：{{item.beginTime}} 至 {{item.endTime}}
          </p>
        </div>
        <div class="flr">
          <span :class="item.status == 1 ? 'apply' : 'over'">{{item.status == 1 ? '报名中' : '已结束'}}</span>
          <button
            :class="item.status == 1 ? 'applyBtn' : 'overBtn'"
            @click="item.status == 1 ? apply() : over() "
          >{{item.status == 1 ? '我要报名' : '活动结束'}}</button>
        </div>
      </div>
      <div class="load_more">加载更多...</div>
    </div>
    <div class="w360 flr mes_list clearfix">
      <img src="/static/img/list-2.jpg" alt class="act_timelist">
      <p class="mes">热门资讯
        <span class="mes_more flr">更多></span>
      </p>
      <ul class="mes_title">
        <router-link to="">
        <li v-for="(item , index) in mesData" :key="index" class="mes_content"><span class="cl-0">{{item.content}}</span></li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actType: ["商业考察", "研讨会议", "商务考察", "研讨会议"],
      actStatus: ["报名中", "未开始", "已结束", "往期活动", "筛选"],
      actlist: [
        {
          img: "/static/img/list-1.jpg",
          title: "投融资讯活动",
          local: "北京市海淀区天秀路10号中国农大国际科技园",
          company: "北京开拓明天科技股份有限公司",
          num: 255,
          beginTime: "2017-06-10",
          endTime: "2018-10-12",
          status: 1
        },
        {
          img: "/static/img/list-1.jpg",
          title: "投融资讯活动",
          local: "北京市海淀区天秀路10号中国农大国际科技园",
          company: "北京开拓明天科技股份有限公司",
          num: 255,
          beginTime: "2017-06-10",
          endTime: "2018-10-12",
          status: 0
        }
      ],
      mesData: [
        {
          content:'“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权'
        }
      ]
    };
  },
  methods: {
    getType(e) {
      console.log(e);
    },
    getStatus(e) {
      console.log(e);
    },
    apply() {},
    over() {
      console.log(1);
      this.$notify.error({
        title: "错误",
        message: "活动已结束"
      });
    }
  }
};
</script>

<style scoped lang="scss">
//选择类型
.act_type {
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(51, 51, 51);
  font-weight: bold;
  line-height: 1.857;
}
.type_item {
  font-size: 12px;
  font-family: "Microsoft YaHei";
  color: #444;
  cursor: pointer;
  padding-right: 45px;
}
//活动列表
.act_list {
  width: 810px;
  height: 180px;
  margin-bottom: 20px;
}
.list {
  margin-left: 20px;
}
.list-title {
  font-size: 20px;
  font-family: "Microsoft YaHei";
  color: rgb(51, 51, 51);
  margin: 10px 0 25px;
}
.list-content {
  margin-left: 30px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(128, 128, 128);
  position: relative;
  .local {
    position: absolute;
    display: inline-block;
    top: -3px;
    left: -30px;
    width: 20px;
    height: 20px;
    background: url(/static/img/local.png) no-repeat center;
    background-size: contain;
  }
  .company {
    position: absolute;
    display: inline-block;
    top: -3px;
    left: -30px;
    width: 20px;
    height: 20px;
    background: url(/static/img/company.png) no-repeat center;
    background-size: contain;
  }
}
.list-content2 {
  margin-left: 30px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(153, 153, 153);
  position: relative;
  .num {
    position: absolute;
    display: inline-block;
    top: -3px;
    left: -30px;
    width: 20px;
    height: 20px;
    background: url(/static/img/num.png) no-repeat center;
    background-size: contain;
  }
  .time {
    position: absolute;
    display: inline-block;
    top: -3px;
    left: -30px;
    width: 20px;
    height: 20px;
    background: url(/static/img/time.png) no-repeat center;
    background-size: contain;
  }
}
.apply {
  display: block;
  text-align: right;
  font-size: 16px;
  font-family: "Microsoft YaHei";
  color: #ff9440;
  font-weight: bold;
  margin-top: 10px;
}
.over {
  display: block;
  text-align: right;
  font-size: 16px;
  font-family: "Microsoft YaHei";
  color: #999;
  font-weight: bold;
  margin-top: 10px;
}
.applyBtn {
  width: 110px;
  height: 35px;
  color: #fff;
  line-height: 0.425;
  display: inline-block;
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
  margin-top: 100px;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  border-radius: 4px;
}
.overBtn {
  width: 110px;
  height: 35px;
  color: #c4c4c4;
  line-height: 0.425;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #e6e6e6;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  margin-top: 100px;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  border-radius: 4px;
}
//加载更多
.load_more {
  width: 810px;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb(153, 153, 153);
  line-height: 1.333;
  padding: 20px 0;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin: 40px 0 75px;
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.load_more:active {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
//活动排表
.act_timelist {
  margin-top: 20px;
}

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
  border-bottom:1px dashed #d9d9d9;
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
</style>