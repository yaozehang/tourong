<template>
  <div>
    <img src="/static/img/about-1.jpg" alt width="100%" style="min-width: 1200px;">
    <div class="w1200">
      <div class="title">
        <p class="title_1">关于我们</p>
        <p class="title_2">倾力打造的专业的投融资信息服务平台</p>
      </div>
      <div class="clearfix">
        <div class="fll box_content">
          <el-card>
            <strong>“证券传媒·投融连线”</strong>是证券日报传媒股份有限公司（以下简称
            “证券传媒”）倾力打造的专业的投融资信息服务平台。凭借自身
            优势和强大的整合能力，建立全球范围内的资金和项目信息数据
            库，并通过线上与线下服务并重、标准化与定制化需求互补的专业
            服务体系，为项目方和投资方寻找投资人或资金/项目/专家/政策
            等，解决投融资信息不对称的问题，同时为项目发展（或产业升
            级）提供必要的智力支持。
          </el-card>
        </div>
        <div class="flr about_content">
        </div>
      </div>
    </div>
    <div class="servier">
        <div class="w1200">
          <div class="title" style="margin-top:60px;margin-bottom:20px;">
            <p class="title_1">我们的服务</p>
            <p class="title_2">及时将优选后的信息推送给客户</p>
          </div>
          <div class="ser-1">

          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.title {
  background: url(/static/img/about-title.png) no-repeat center;
  background-size: contain;
  width: 950px;
  margin: 0 auto;
  text-align: center;
  margin-top: 90px;
  margin-bottom: 70px;
  .title_1 {
    font-size: 35px;
    font-family: "Microsoft YaHei";
    color: rgb(51, 51, 51);
    margin-bottom: 10px;
    position: relative;
    top: -30px;
  }
  .title_2 {
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(102, 102, 102);
    position: relative;
    top: -30px;
  }
}
.box_content {
  font-family: "Microsoft YaHei";
  line-height: 1.6;
  font-size: 18px;
  /deep/ {
    .el-card {
      width: 679px;
      box-sizing: border-box;
      padding-right: 15px;
    }
  }
}
.about_content {
  background: url(/static/img/about_content.png) no-repeat center;
  background-size: contain;
  width: 300px;
  height: 310px;
  position: relative;
  top: -50px;
  left: -100px;
}

.servier {
  width: 100%;
  min-width: 1200px;
  height: 650px;
  background-color: #f0efef;
  padding: 10px 0;
}

.ser-1 {
  background: url(/static/img/ser-1.png) no-repeat center;
  background-size: contain;
  width: 220px;
  height: 460px;
}
</style>