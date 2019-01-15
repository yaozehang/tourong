<template>
  <div class="fll">
    <div class="person_content">
      <span class="flr clearfix">
          <button class="noLikeBtn" @click="applyDynamic">
            <i></i>添加项目
          </button>
        </span>
      <p class="project_title">
        <span class="project_">项目动态管理</span>
      </p>
      <div class="clearfix dynamic">
        <div class="fll time" >
          <p>{{time}}</p>
        </div>
        <div class="fll">
          <p>{{content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        time:'2019-01-15',
        content:'项目启动',
        imgPath:'',
      }
    },
    methods:{
      getData(){
        let id = this.$route.query.id
        this.$axios.get(`/jsp/wap/trProject/ctrl/jsonProjectDynamicList.jsp?id=${id}`).then(res => {
          console.log(res);
        })
      },
      applyDynamic(){
        let {href} = this.$router.resolve({
              name: "applyProject",
              query: {id}
          });
          window.open(href, '_blank');
      }
    },
    created(){
      this.getData()
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
.time {
  padding: 30px;
}
.dynamic {
  border-bottom: 1px solid #cdcdcd;
}
</style>