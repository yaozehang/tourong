<template>
  <div class="fll">
    <div class="person_content">
      <img src="/static/img/VIP.png" alt="" width="924px" height="150px" style="cursor:pointer" @click="vip">
      <p class="project_title">
        <span class="project_">发布项目信息</span>
      </p>
      <p>
        <span class="item_title">项目基本信息</span>
        <el-tooltip class="item" effect="dark" placement="bottom">
          <div slot="content" v-html="templateData"></div>
          <span class="pro_template">参考模板</span>
        </el-tooltip>
      </p>
      <el-form ref="form" :model="formData" label-width="150px">
        <el-form-item label="项目名称" style="width:600px">
          <el-input v-model="formData.status"></el-input>
        </el-form-item>
        <el-form-item label="所属行业">
          <el-checkbox-group v-model="formData.industy">
            <el-checkbox label="金融" name="type"></el-checkbox>
            <el-checkbox label="房地产" name="type"></el-checkbox>
            <el-checkbox label="能源" name="type"></el-checkbox>
            <el-checkbox label="互联网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="项目简历" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <el-form-item label="所处阶段">
          <div
            v-for="(item , index) in formData.stage"
            :key="index"
            class="fll type_btn"
            :class="{'active':item.checked}"
            @click="get_type(index)"
          >{{item.name}}</div>
        </el-form-item>
        <p>
          <span class="item_title">融资主体信息</span>
        </p>
        <el-form-item label="融资主体">
          <el-radio-group v-model="formData.resource">
            <el-radio label="企业"></el-radio>
            <el-radio label="个人"></el-radio>
            <el-radio label="政府"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="企业全称" style="width:600px">
          <el-input v-model="formData.company"></el-input>
        </el-form-item>
        <el-form-item label="所在地区">
          <v-distpicker></v-distpicker>
        </el-form-item>
        <el-form-item label="详细地址" style="width:600px">
          <el-input v-model="formData.location"></el-input>
        </el-form-item>
        <el-form-item label="注册资本" class="w350">
          <el-input v-model="formData.money">
            <span slot="append">万元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="股权结构" class="w180">
          <el-upload class="upload-demo" action multiple>
            <el-button size="small" type="primary">上传股权架构图</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="实际控制人" class="w180">
          <el-input v-model="formData.people"></el-input>
        </el-form-item>
        <el-form-item label="主营业务" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <el-form-item label="公司亮点" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <el-form-item label="行业地位" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <el-form-item label="近三年财务数据" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <el-form-item label="3-5年盈利预测" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <el-form-item label="团队平均年龄" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="企业网址" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="官方微信" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="建企时间" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <p>
          <span class="item_title">项目融资信息</span>
        </p>
        <el-form-item label="融资方式">
          <div
            v-for="(item , index) in formData.stage"
            :key="index"
            class="fll type_btn"
            :class="{'active':item.checked}"
            @click="get_type(index)"
          >{{item.name}}</div>
        </el-form-item>
        <div style="background:#f2f2f2;padding:10px 0;margin-bottom:20px;">
          <el-form-item label="注册资本" class="w350">
            <el-input v-model="formData.money">
              <span slot="append">万元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="市盈率（P/E）" class="w350">
            <el-input v-model="formData.money">
              <span slot="append">万元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="市净率（P/B）" class="w350">
            <el-input v-model="formData.money">
              <span slot="append">万元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="支付方式">
            <el-checkbox-group v-model="formData.industy">
              <el-checkbox label="现金支付" name="type"></el-checkbox>
              <el-checkbox label="股权对价（包括增发股份）" name="type"></el-checkbox>
              <el-checkbox label="承接债务" name="type"></el-checkbox>
              <el-checkbox label="其他" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="有效期限">
            <div style="width:28.16667%" class="fll">
              <el-date-picker type="date" placeholder="选择日期" v-model="formData.date1"></el-date-picker>
            </div>
            <el-col class="line" :span="1" style="text-align:center;">~</el-col>
            <el-col :span="7">
              <el-date-picker type="date" placeholder="选择日期" v-model="formData.date2"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="保障措施" style="width:600px">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4}"
              placeholder="请填写保障措施，例如业绩承诺、回购、上市承诺等"
              v-model="formData.resume"
            ></el-input>
          </el-form-item>
          <el-form-item label="交易对手简介" style="width:600px">
            <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
          </el-form-item>
        </div>
        <p>
          <span class="item_title">核心团队</span>
        </p>
        <el-form-item label="团队介绍" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <p>
          <span class="item_title">项目负责人联系方式</span>
        </p>
        <el-form-item label="姓名" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="职务" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="年龄" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="电话" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="Email" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <p>
          <span class="item_title">附件上传</span>
        </p>
        <el-form-item label="附件材料" prop="file">
          <el-upload class="upload-demo" action multiple :file-list="fileList">
            <div>商业计划书、融资计划书等文件请在此上传</div>
            <button class="likeBtn fll">
              <i></i>点击上传文件
            </button>
          </el-upload>
        </el-form-item>
        <p>
          <span class="item_title">保密设置</span>
        </p>
        <el-form-item label="融资主体信息">
          <el-radio-group v-model="formData.resource">
            <el-radio label="登录用户可见"></el-radio>
            <el-radio label="仅对VIP会员公开"></el-radio>
            <el-radio label="保密，仅对后台管理员公开"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="项目融资信息">
          <el-radio-group v-model="formData.resource">
            <el-radio label="登录用户可见"></el-radio>
            <el-radio label="仅对VIP会员公开"></el-radio>
            <el-radio label="保密，仅对后台管理员公开"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="项目负责人联系方式">
          <el-radio-group v-model="formData.resource">
            <el-radio label="登录用户可见"></el-radio>
            <el-radio label="仅对VIP会员公开"></el-radio>
            <el-radio label="保密，仅对后台管理员公开"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <button class="subBtn" @click="onSave" style="margin-right:20px;">保存</button>
          <button class="subBtn" @click="onSubmit">提交</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  components: { VDistpicker },
  data() {
    return {
      templateData: "<p>lalala</p>",
      formData: {
        status: "上市公司",
        phone: "",
        name: "李先生",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        stage: [
          { name: "种子期", checked: false },
          { name: "初创期", checked: false },
          { name: "成长期", checked: false },
          { name: "扩张期", checked: false }
        ],
        resource: "0",
        desc: "",
        avatar: "",
        truephoto: "",
        IDcard: "",
        company: "",
        location: "",
        account: "1888555999",
        qq: "",
        email: "",
        resume: "",
        industy: [],
        money: "",
        people: ""
      },
      fileList: [{ name: "创业项目商业计划书.doc", url: "" }]
    };
  },
  methods: {
    get_type(index) {
      console.log(index);
      this.formData.stage[index].checked = !this.formData.stage[index].checked;
    },
    onSave(){
      this.$notify({
          title: '成功',
          message: '保存成功',
          type: 'success'
        });
    },
    onSubmit(){
      this.$confirm('即将提交项目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$notify({
            type: 'success',
            message: '提交成功!'
          });
        }).catch(() => {
          this.$notify({
            type: 'info',
            message: '已取消提交'
          });          
        });
    },
    vip(){
      
    }
  }
};
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

.item_title {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: #3e3a39;
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
  cursor: pointer;
}

.pro_template {
  display: inline-block;
  margin-left: 10px;
  color: rgb(0, 83, 133);
  cursor: pointer;
}

/deep/ {
  .is-disabled .el-input__inner {
    background: #fff !important;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9 !important;
    border-radius: 6px !important;
    cursor: pointer !important;
    position: relative !important;
    overflow: hidden !important;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff !important;
  }
  .avatar-uploader-icon {
    font-size: 28px !important;
    color: #8c939d !important;
    width: 120px !important;
    height: 120px !important;
    line-height: 120px !important;
    text-align: center !important;
  }
  .avatar {
    width: 120px !important;
    height: 120px !important;
    display: block !important;
  }
}

.w180 {
  width: 250px;
}
.w320 {
  width: 320px;
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
  border-radius: 6px;
}
.type_btn {
  width: 90px;
  height: 40px;
  color: #444;
  line-height: 1;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #f5f5f5;
  border: none;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  margin-right: 10px;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  border-radius: 4px;
}

.active {
  background: url(/static/img/type_btn-1.png) no-repeat center;
  background-size: contain;
  color: #fff;
}
.w350 {
  width: 350px;
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
  padding: 12px 20px;
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
    left: 4px;
  }
}
</style>