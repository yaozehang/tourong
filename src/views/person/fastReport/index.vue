<template>
  <div class="fll">
    <div class="person_content">
      <div class="fast_top">
        <span class="today">{{timeNow}}</span>
        <router-link to="/person/weeklyReport">往期回顾</router-link>
      </div>
      <p class="project_title">
        <span class="project_">项目精选</span>
        <span class="project_more flr" @click="$router.push('/project')">更多></span>
      </p>
      <div v-for="(item , index) in projectData.slice(0,2)" :key="index + 'project'" class="project_list clearfix">
        <router-link :to="{name:'projectDetail'}">
        <img :src="item.img" alt="" class="fll">
        </router-link>        
        <div class="fll project_con">
        <router-link :to="{name:'projectDetail'}">
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.content}}</p>
        </router-link>        
          <div>
            <button class="noLikeBtn" @click="deletePro(index)"><i></i>不感兴趣</button>
            <button class="likeBtn" @click="likePro(index)"><i></i>感兴趣</button>
          </div>
        </div>
      </div>
      <p v-show="projectData.length == 0" class="noAtt">
        您对什么项目都不感兴趣
      </p>
      <p class="project_title" style="margin-top:0;">
        <span class="project_">资金对接</span>
        <span class="project_more flr"  @click="$router.push('/money')">更多></span>
      </p>
      <div v-for="(item , index) in moneyData.slice(0,2)" :key="index + 'money'" class="project_list clearfix lastborder">
        <router-link :to="{name:'moneyDetail'}">
        <img :src="item.img" alt="" class="fll">
        </router-link>
        <div class="fll project_con">
        <router-link :to="{name:'moneyDetail'}">
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.content}}</p>
        </router-link>
          <div>
            <button class="noLikeBtn" @click="deleteMon(index)"><i></i>不感兴趣</button>
            <button class="likeBtn" @click="likeMon(index)"><i></i>感兴趣</button>
          </div>
        </div>
      </div>
      <p v-show="moneyData.length == 0" class="noAtt">
        您对什么资金都不感兴趣
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeNow: "",
      projectData:[
        {
          img:'/static/img/xiangmutou-1.jpg',
          title:'增资扩股——长安汽车拟通过公开挂牌增资扩股引扩股引扩股引扩股引',
          content:'即增资完成后，长安汽车持有新能源汽车科技公司的股权比例将不超过49%；投资方持有新能源汽车科技公司的股权比例将不低于51%。重即增资完成后，长安汽车持有新能源汽车科技公司的股权比例将不超过49%；投资方持有新能源汽车科技公司的股权比例将不低于51%。重',
          like:0,
        },
        {
          img:'/static/img/xiangmutou-1.jpg',
          title:'增资扩股——长安汽车拟通过公开挂牌增资扩股引扩股引扩股引扩股引',
          content:'即增资完成后，长安汽车持有新能源汽车科技公司的股权比例将不超过49%；投资方持有新能源汽车科技公司的股权比例将不低于51%。重即增资完成后，长安汽车持有新能源汽车科技公司的股权比例将不超过49%；投资方持有新能源汽车科技公司的股权比例将不低于51%。重',
          like:0,
        },
      ],
      moneyData:[
        {
          img:'/static/img/xiangmutou-1.jpg',
          title:'增资扩股——长安汽车拟通过公开挂牌增资扩股引扩股引扩股引扩股引',
          content:'即增资完成后，长安汽车持有新能源汽车科技公司的股权比例将不超过49%；投资方持有新能源汽车科技公司的股权比例将不低于51%。重即增资完成后，长安汽车持有新能源汽车科技公司的股权比例将不超过49%；投资方持有新能源汽车科技公司的股权比例将不低于51%。重',
          like:0,
        },
        {
          img:'/static/img/xiangmutou-1.jpg',
          title:'增资扩股——长安汽车拟通过公开挂牌增资扩股引扩股引扩股引扩股引',
          content:'即增资完成后，长安汽车持有新能源汽车科技公司的股权比例将不超过49%；投资方持有新能源汽车科技公司的股权比例将不低于51%。重即增资完成后，长安汽车持有新能源汽车科技公司的股权比例将不超过49%；投资方持有新能源汽车科技公司的股权比例将不低于51%。重',
          like:0,
        },
      ]
    };
  },
  methods: {
    now() {
      var month = new Date().getMonth() + 1;
      month = month < 10 ? "0" + month : "" + month;
      var day = new Date().getDate();
      day = day < 10 ? "0" + day : "" + day;
      var year = new Date().getFullYear();
      let time = [year, month, day];
      let time2 = time.join("-");
      this.timeNow = time2;
    },
    deletePro(index){
      this.projectData.splice(index,1)
    },
    likePro(index){
      console.log(index);
    },
    deleteMon(index){
      this.moneyData.splice(index,1)
    },
    likeMon(index){

    }
  },
  created() {
    this.now();
  }
};
</script>

<style scoped lang="scss">
.fast_top {
  a {
    color: #005982;
    margin-left: 20px;
  }
}
.today {
  font-size: 16px;
  font-family: "Microsoft YaHei";
  color: rgb(153, 153, 153);
  -moz-transform: matrix(0.40594479830149, 0, 0, 0.40540540540541, 0, 0);
  -webkit-transform: matrix(0.40594479830149, 0, 0, 0.40540540540541, 0, 0);
  -ms-transform: matrix(0.40594479830149, 0, 0, 0.40540540540541, 0, 0);
}
.project_title {
  margin-top: 40px;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb(0, 83, 133);
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px dashed #cdcdcd;
  .project_ {
    padding-left: 20px;
    border-left: 5px solid #005982;
  }
  .project_more {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
}

//项目列表
.project_list {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #cdcdcd;
  img {
    width: 235px;
    height: 150px;
    border-radius: 4px;
  }
  .project_con {
    width: 660px;
    margin-left: 20px;
    .title {
      margin-top: 0;
      width: 550px;
      font-size: 18px;
      font-family: "Microsoft YaHei";
      color: rgb( 51, 51, 51 );
      font-weight: bold;
      overflow: hidden; /*超出部分隐藏*/
      white-space: nowrap; /*不换行*/
      text-overflow: ellipsis;
    }
    .content {
      font-size: 14px;
      font-family: "Microsoft YaHei";
      color: rgb( 102, 102, 102 );
      line-height: 1.5;
      position: relative;
      max-height: 43px;
      overflow: hidden;
    }
    .content::after {
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
  .noLikeBtn {
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
    margin: 0;
    margin-top: 20px;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px 12px 35px;
    border-radius: 6px;
    position: relative;
    i {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(/static/img/noLike.png) no-repeat center;
      background-size: contain;
      position: absolute;
      top: 7px;
      left: 10px;
    }
  }
  .noLikeBtn:active {
    background: #000;
    border-color: #000;
    color: #fff;
  }
  .likeBtn {
      width: 110px;
      height: 35px;
      color: #005982;
      line-height: 0.425;
      display: inline-block;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1.5px solid #005982;
      border-color: #005982;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      margin-top: 20px;
      margin-left: 15px;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px 12px 40px;
      border-radius: 4px;
      position: relative;
      i {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(/static/img/like.png) no-repeat center;
        background-size: contain;
        position: absolute;
        top: 7px;
        left: 15px;
      }
  }
  .likeBtn:active {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}

.person_content .lastborder:last-of-type {
  border: none;
  margin-bottom: 0;
}
</style>