<template>
  <div class="fll">
    <div class="person_content">
      <p class="project_title">
        <span class="project_">消息中心</span>
      </p>
      <div v-for="(item , index) in informData" :key="index" class="inform_list" @click="hadShow(index)">
        <p class="type">
          <span>{{item.type}}</span>
          <span style="margin-left:15px;">{{item.time}}</span>
        </p>
        <p class="clearfix">
          <router-link to="/person/informDetail">
            <span class="fll">{{item.content}}</span>
            <span class="red"></span>
          </router-link>
            <span class="flr delete">删除</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        informData:[
          {
            type:'系统',
            time:'2018-11-14',
            content:'您发布的投资信息审核通过',
          },
          {
            type:'系统',
            time:'2018-11-14',
            content:'您发布的投资信息审核通过',
          },
          {
            type:'系统',
            time:'2018-11-14',
            content:'您发布的投资信息审核通过',
          },
        ]
      }
    },
    methods:{
      hadShow(index){
        informData[index].push(
                Object.assign({},item,{indexNum:str})
            )
      }
    }
  }
</script>

<style scoped lang="scss">
.project_title {
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
}

//通知列表
.inform_list {
  cursor: pointer;
  margin-left: 23px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cdcdcd;
  .type {
    color: rgb( 153, 153, 153 );
    font-size: 14px;
    font-family: "Microsoft YaHei";
  }
  .red {
    display: inline-block;
    margin-left: 5px;
    width: 6px;
    height: 6px;
    background: url(/static/img/red.png) no-repeat center;
    background-size: contain;
  }
  .delete:hover {
    color: rgb(0, 83, 133);    
  }
  a {
    color: #000;
  }
}
</style>