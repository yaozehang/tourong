<template>
  <div>
    <div class="mes_top">
        <p class="mes_type">
          <span class="active">资金</span>
        </p>
      </div>
      <div v-loading="loading">
      <div class="act_list clearfix" v-for="(item, index) in pageList" :key="index">
        <div @click="toMoneyDetailPage(item.id)">
          <div class="clearfix">
            <span class="list-title fll">{{item.title}}</span>
            <span class="title_time flr">{{item.addTimeStr.slice(0,10)}}</span>
          </div>
          <div class="clearfix">
            <div class="fll box_content">
              <span class="list-contentName">投资资金：</span>
              <span class="current">{{item.investAmountName}}</span>
            </div>
            <div class="focusNum flr">{{item.followNum}}人关注</div>
          </div>
          <div class="clearfix">
            <div class="fll">
              <div class="box_content">
                <span class="list-contentName">投资方式：</span>
                <span class="list-content">{{item.investCase}}</span>
              </div>
              <div class="box_content">
                <span class="list-contentName">投资地区：</span>
                <span class="list-content">{{item.investRegionNameStr}}</span>
              </div>
              <div class="box_content">
                <span class="list-contentName">投资类型：</span>
                <span class="list-content">{{item.investTypeName}}</span>
              </div>
            </div>
            <div class="fll">
              <div class="box_content">
                <span class="list-contentName">资金类型：</span>
                <span class="list-content">{{item.pawnTypeName}}</span>
              </div>
              <div class="box_content">
                <span class="list-contentName">投资行业：</span>
                <span class="list-content">{{item.investIndustryName}}</span>
              </div>
              <div class="box_content">
                <span class="list-contentName">投资阶段：</span>
                <span class="list-content">{{item.investStageName}}</span>
              </div>
            </div>
          </div>
          </div>
        <button class="subBtn" @click="dialogFormVisible = true">投递项目</button>
      </div>
      </div>
      <div class="load_more"  @click="morePage" v-show="more">加载更多...</div>
      <p style="color:#999;"  v-show="noMore">-------------------------------------------------没有更多资金了----------------------------------------------------</p>
      <el-dialog title="选择投递项目" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="projectForm">
          <el-form-item label="项目" label-width="100">
            <el-select v-model="projectForm.project" placeholder="请选择项目">
              <el-option label="项目一" value="shanghai"></el-option>
              <el-option label="项目二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="info" @click="dialogFormVisible = false">确认投递</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        loading:false,
        dialogFormVisible:false,
        more:false,
        noMore:false,
        pageList:[],
        totalCount:[],
        pn:1,
        title:'',
        projectForm:{
          project:''
        }
      }
    },
    methods:{
      getActData(){
        this.loading = true;
        this.title = this.$route.query.title
        this.$axios.get(`/jsp/wap/trCapital/ctrl/jsonCapitalPage.jsp?title=${this.title}`).then(res => {
            this.pageList = res.data.pageList;
            this.totalCount = res.data.pagination.totalCount;
            this.pn = 1;
            if(this.totalCount > this.pageList.length) {
              this.more = true
            } else {
              setTimeout(()=> {
                this.noMore = true
              },2000)
            }
            this.loading = false;
          });
      },
       morePage() {
        this.pn += 1;
        this.loading = true;
        this.$axios
          .get("/jsp/wap/trCapital/ctrl/jsonCapitalPage.jsp", {
            params: {
              pageNumber: this.pn
            }
          })
          .then(res => {
            if (res.success == "true") {
              this.pageList = [...this.pageList, ...res.data.pageList];
              this.totalCount = res.data.pagination.totalCount;
              this.loading = false;
            }
          });
      },
      deliver_project(){
        this.$notify.success({
          title: "成功",
          message: "项目投递成功"
        });
      },
      toMoneyDetailPage(id){
        let {href} = this.$router.resolve({
            name: "moneyDetail",
            query: {id}
        });
        window.open(href, '_blank');
      },
    },
    created(){
      this.getActData()
    }
  }
</script>

<style scoped lang="scss">
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
  padding-bottom: 18.6px;
  border-bottom: 1px solid #d9d9d9;
  margin-right: 30px;
}
.bread_search {
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 10px;
}

.search {
  margin-top: 8px;
  width: 265px;
  height: 30px;
  border: 1px solid #d9d9d9;
  position: relative;
  input {
    font-size: 14px;
    margin: 6px 0 0 10px;
    width: 200px;
    outline: none;
    border: 0;
  }
  i {
    display: inline-block;
    width: 55px;
    height: 32px;
    background: url(/static/img/search-1.png) no-repeat center;
    background-size: cover;
    position: absolute;
    top: -1px;
    right: -1px;
    cursor: pointer;
  }
} //选择类型
.act_type {
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb(51, 51, 51);
  font-weight: bold;
  line-height: 1.857;
} // 更多 + 多选
.moreTitle {
  color: #606266;
  font-size: 14px;
  cursor: pointer;
  margin-top: 2px;
}

.titleRight {
  max-width: 1020px;
  line-height: 1.5;
}

.checkBoxBtn {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 4px 5px;
  color: #606266;
  font-size: 12px;
  cursor: pointer;
  margin-right: 20px;
}

.type_item {
  font-size: 12px;
  font-family: "Microsoft YaHei";
  color: #444;
  cursor: pointer;
  padding-right: 45px;
} //活动列表
.act_list {
  cursor: pointer;
  width: 810px;
  height: 180px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #d9d9d9;
  position: relative;
}

.more_desc {
  border: none !important;
  min-width: 70px;
  max-width: 120px;
} // /deep/.el-select .el-input__inner {
//     border: 0;
//     min-width: 70px;
//     max-width: 120px;
// }
.title_time {
  display: block;
  margin-top: 10px;
  color: #666;
}

.focusNum {
  display: block;
  color: #ccc;
  line-height: 2;
}

.current {
  color: #005982 !important;
  font-size: 24px !important;
}

.list {
  margin-left: 20px;
}

.listbottom {
  border-bottom: 1px solid #d9d9d9;
  width: 810px;
  margin-bottom: 30px;
}

.list-title {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb(26, 26, 26);
  line-height: 1.333;
  margin: 10px 0;
}

.list-contentName {
  // margin-left: 30px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: #999;
}

.box_content {
  width: 395px;
  line-height: 2;
  font-size: 14px !important;
}

.list-content {
  // margin-left: 30px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: #333;
  display: inline-block;
  width: 200px;
  height: 21px;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis;
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
} //加载更多
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
} //活动排表
.act_timelist {
  margin: 20px 0;
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
  cursor: pointer;
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

/deep/ {
  .el-checkbox__label {
    font-size: 12px !important;
  }
}

.subBtn {
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
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  border-radius: 4px;
  position: absolute;
  bottom: 40px;
  right: 0;
}

/deep/ {
  .el-checkbox + .el-checkbox {
    margin-left: 10px !important;
  }
}

.active {
  color: #005982;
  font-weight: 700;  
}
</style>