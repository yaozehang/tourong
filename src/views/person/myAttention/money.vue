<template>
  <div class="invest-menu clearfix">
    <div v-for="(item , index) in investData" :key="index" class="invest-item fll clearfix">
      <div class="invest-text fll">
        <router-link to="/money/investors">
          <p class="invest-item-title">{{item.title}}</p>
        </router-link>
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
      <button class="flr cancel" @click="cancelBtn(index)">取消关注</button>
    </div>
    <p v-show="investData.length == 0" class="noAtt">你没有关注任何资金哦~</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      investData: [
        {
          img: "/static/img/touzi-1.png",
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
          img: "/static/img/touzi-1.png",
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
          img: "/static/img/touzi-1.png",
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
          img: "/static/img/touzi-1.png",
          title: "北京某企资金1000万-9亿元寻求全国优质实体 项目合作项目合作项目合作项目合作项目合作",
          money: "200-500W",
          way: "股权投资",
          moneyType: "企业资金",
          region: "不限",
          trade: "互联网",
          investType: "参股合作 收购/并购",
          stage: "成长期、成熟期"
        }
      ]
    };
  },
    methods:{
    cancelBtn(index){
      this.investData.splice(index,1)
    }
  }
};
</script>

<style scoped lang="scss">
.invest-item {
  width: 100%;
  height: 180px;
  margin-top: 20px;
  border-bottom: 1px solid #cdcdcd;
  position: relative;
}
.invest-text {
  margin-left: 10px;
  width: 500px;
}
.invest-item-title {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb(62, 58, 57);
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
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
}
.w230 {
  width: 230px;
}
.inb {
  display: inline-block;
}

.cancel {
  position: absolute;
  right: 0;
  bottom: 20px;
  width: 110px;
    height: 35px;
    color: #999;
    line-height: 0.425;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1.5px solid #999;
    border-color: #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    border-radius: 6px;
}

.invest-menu .invest-item:last-of-type {
  border: none;
}

.cancel:active {
  background: #000;
  border-color: #000;
  color: #fff;
}

.noAtt {
  margin-top: 50px;
  text-align: center;
}
</style>