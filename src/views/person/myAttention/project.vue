<template>
  <div class="project-menu">
    <div v-for="(item , index) in projectData" :key="index" class="project-item clearfix">
      <router-link to="/project/projectDetail" class="fll">
        <p class="project-item-title">{{item.title}}</p>
        <p class="project-item-content">{{item.content}}</p>
      </router-link>
      <button class="flr cancel" @click="cancelBtn(index)">取消关注</button>
    </div>
    <p v-show="projectData.length == 0" class="noAtt">
      你没有关注任何项目哦~
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
    }
  },
  methods:{
    cancelBtn(index){
      this.projectData.splice(index,1)
    }
  }
};
</script>

<style scoped lang="scss">
.project-item {
  border-bottom: 1px solid #cdcdcd;
  position: relative;
  .project-item-title {
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(62, 58, 57);
    font-weight: bold;
    line-height: 1.333;
    text-align: left;
    width: 620px;
    cursor: pointer;
  }
  .project-item-title:hover {
    color: rgb(0, 89, 130);
  }
  .project-item-content {
    // text-indent:20px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(137, 137, 137);
    line-height: 1.429;
    text-align: left;
    // 省略
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
  // 适配所有的省略
  .project-item-content {
    position: relative;
    width: 620px;
    line-height: 2;
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

.project-menu .project-item:last-of-type {
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