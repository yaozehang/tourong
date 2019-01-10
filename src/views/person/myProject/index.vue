<template>
  <div class="fll">
    <div class="person_content">
      <p class="clearfix">
        <span class="mine_money fll">我发布的项目/我关注的项目</span>
        <span class="flr clearfix">
          <button class="noLikeBtn" @click="$router.push({name:'applyProject'})">
            <i></i>添加项目
          </button>
          <el-upload
            class="upload-demo flr"
            action=""
            >
          <button class="likeBtn">
            <i></i>快速上传
          </button>
          </el-upload>
        </span>
      </p>
      <p class="project_title">
        <span class="project_">项目信息</span>
      </p>
      <div class="project-menu">
        <div v-for="(item , index) in pageList" :key="index" class="project-item clearfix">
          <div class="fll" @click="toProjectDetailPage(item.id,item.status)">
            <p class="project-item-title">{{item.title}}</p>
            <p class="project-item-content">{{item.brief}}</p>
          </div>
          <!-- <span class="flr" :class="item.check == 0 ? ' already':'' + item.check == 1 ? ' being':'' + item.check == 2 ? ' not':'' + item.check == 3 ? ' fail':''">{{item.check == 0 ? '已发布':'' + item.check == 1 ? '审核中':'' + item.check == 2 ? '未发布':''}}</span> -->
          <span class="flr not" v-if="item.status == '0'">未发布</span>
          <span class="flr" v-else :class="item.status  == '5' ? ' being':'' + item.status == '10' ? ' already':'' + item.status == '15'? ' fail':''">{{item.status  == '5' ? '审核中':'' + item.status == '10' ? '已发布':'' + item.status == '15'? '':''}}</span>
          <span class="flr cancel" @click="cancelBtn(index)">修改/删除</span>
        </div>
        <p v-show="pageList.length == 0" class="noAtt">
          你没有任何项目哦~
        </p>
      </div>
      <div class="mes_page">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="total, prev, pager, next, jumper"
          :total="count"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectData: [
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设",
          check:0,
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设",
          check:1,
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设",
          check:2,
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设",
          check:3,
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设",
          check:0,
        },
        {
          img:'/static/img/pro-1.jpg',
          title: "北京某互联网创新创业服务平台项目股创业项目，新技术",
          content:
            "本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设",
          check:0,
        }
      ],
      pageList:[],
      count:1,
    };
  },
  methods: {
    cancelBtn(index) {
      this.projectData.splice(index, 1);
    },
    getData(pageNumber){
        this.$axios.get('/jsp/wap/center/ctrl/jsonMyProjectList.jsp',{params:{pageNumber}}).then(res => {
          console.log(res);
          if(res.success == 'true'){
            this.pageList = res.data.pageList
            this.count = Number(res.data.pagination.totalCount)
          }
        })
      },
      handleCurrentChange(val) {
        this.getData(val)
      },
      toProjectDetailPage(id,status){
        if(status == '10'){
          let {href} = this.$router.resolve({
            name: "projectDetail",
            query: {id}
          });
          window.open(href, '_blank');
        } else {
          this.$message.info('项目尚未发布成功')
        }
    },
  },
  created(){
    this.getData()
  }
};
</script>

<style scoped lang="scss">
.mine_money {
  font-family: "Microsoft YaHei";
  color: rgb( 153, 153, 153 );
  line-height: 32px;
}
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
    min-height: 30px;
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
    // max-height: 100px;
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
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  color: rgb(0, 83, 133);
}

.project-menu .project-item:last-of-type {
  border: none;
}

.noAtt {
  margin: 250px 0;
  text-align: center;
  height: 100px;
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
      width: 15px;
      height: 15px;
      background: url(/static/img/jiahao-1.png) no-repeat center;
      background-size: contain;
      position: absolute;
      top: 9px;
      left: 15px;
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
      margin-left: 15px;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px 12px 35px;
      border-radius: 4px;
      position: relative;
      i {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url(/static/img/shangchuan-1.png) no-repeat center;
        background-size: contain;
        position: absolute;
        top: 9px;
        left: 15px;
      }
  }


  //提醒样式
  .already {
    margin-top: 20px;
    font-size: 18px;
    color: #cdcdcd;
  }
  .being {
    margin-top: 20px;
    font-size: 18px;
    color: #fc7f7f;
  }
  .not {
    margin-top: 20px;
    font-size: 18px;
    color: #ffcc9c;
  }
  .fail {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
    background: url(/static/img/shenheshibai.png) no-repeat center;
    background-size: contain;
  }

  .mes_page {
  margin: 20px 0;
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