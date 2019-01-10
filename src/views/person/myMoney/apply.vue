<template>
  <div class="fll">
    <div class="person_content">
      <p class="project_title">
        <span class="project_">发布资金信息</span>
      </p>
      <el-form ref="form" :model="formData" label-width="150px">
        <el-form-item label="投资主题" style="width:600px">
          <el-input v-model="formData.status"></el-input>
          <span style="color:#999">格式参考：广东某企业5000万元起寻互联网项目合作</span>
        </el-form-item>
        <el-form-item label="所在地区">
          <v-distpicker></v-distpicker>
        </el-form-item>
        <el-form-item label="联系地址" style="width:600px">
          <el-input v-model="formData.location"></el-input>
        </el-form-item>
        <el-form-item label="资金主体">
          <el-radio-group v-model="formData.resource">
            <el-radio label="企业资金"></el-radio>
            <el-radio label="个人资金"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系人姓名" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话" class="w350">
          <el-input v-model="formData.money"></el-input>
        </el-form-item>
        <el-form-item label="投资地区">
          <v-distpicker></v-distpicker>
        </el-form-item>
        <el-form-item label="投资金额">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投资行业">
          <el-checkbox-group v-model="formData.industy">
            <el-checkbox label="金融" name="type"></el-checkbox>
            <el-checkbox label="房地产" name="type"></el-checkbox>
            <el-checkbox label="能源" name="type"></el-checkbox>
            <el-checkbox label="互联网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="投资阶段">
          <el-checkbox-group v-model="formData.industy">
            <el-checkbox label="金融" name="type"></el-checkbox>
            <el-checkbox label="房地产" name="type"></el-checkbox>
            <el-checkbox label="能源" name="type"></el-checkbox>
            <el-checkbox label="互联网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="资金来源">
          <el-checkbox-group v-model="formData.industy">
            <el-checkbox label="金融" name="type"></el-checkbox>
            <el-checkbox label="房地产" name="type"></el-checkbox>
            <el-checkbox label="能源" name="type"></el-checkbox>
            <el-checkbox label="互联网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="投资类型">
          <el-checkbox-group v-model="formData.industy">
            <el-checkbox label="金融" name="type"></el-checkbox>
            <el-checkbox label="房地产" name="type"></el-checkbox>
            <el-checkbox label="能源" name="type"></el-checkbox>
            <el-checkbox label="互联网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="前期费用">
          <el-radio-group v-model="formData.resource">
            <el-radio label="评估"></el-radio>
            <el-radio label="无任何费用"></el-radio>
            <el-radio label="其他费用"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="最低回报要求" style="width:600px">
          <el-input v-model="formData.company"></el-input>
        </el-form-item>
        <el-form-item label="有效期限">
            <div style="width:28.16667%" class="fll">
              <el-date-picker type="year" placeholder="选择日期" v-model="formData.date1"></el-date-picker>
            </div>
            <el-col class="line" :span="1" style="text-align:center;">~</el-col>
            <el-col :span="7">
              <el-date-picker type="year" placeholder="选择日期" v-model="formData.date2"></el-date-picker>
            </el-col>
            <el-col :span="1" style="text-align:center;">
              年
            </el-col>
        </el-form-item>
        <el-form-item label="风控要求">
          <el-checkbox-group v-model="formData.industy">
            <el-checkbox label="金融" name="type"></el-checkbox>
            <el-checkbox label="房地产" name="type"></el-checkbox>
            <el-checkbox label="能源" name="type"></el-checkbox>
            <el-checkbox label="互联网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="材料要求">
          <el-checkbox-group v-model="formData.industy">
            <el-checkbox label="金融" name="type"></el-checkbox>
            <el-checkbox label="房地产" name="type"></el-checkbox>
            <el-checkbox label="能源" name="type"></el-checkbox>
            <el-checkbox label="互联网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="抵押物类型">
          <el-checkbox-group v-model="formData.industy">
            <el-checkbox label="金融" name="type"></el-checkbox>
            <el-checkbox label="房地产" name="type"></el-checkbox>
            <el-checkbox label="能源" name="type"></el-checkbox>
            <el-checkbox label="互联网" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="有效期限">
            <div style="width:28.16667%" class="fll">
              <el-input v-model="formData.date1"></el-input>
            </div>
            <el-col class="line" :span="1" style="text-align:center;">~</el-col>
            <el-col :span="7">
              <el-input v-model="formData.date2"></el-input>
            </el-col>
            <el-col :span="1" style="text-align:center;">
              折
            </el-col>
        </el-form-item>
        <el-form-item label="投资要求概述" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <el-form-item label="投资案例" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
        </el-form-item>
        <el-form-item label="其他说明" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.resume"></el-input>
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
      fileList: [{ name: "创业项目商业计划书.doc", url: "" }],
       options: [{
          value: '选项1',
          label: '不限'
        },],
        value: ''
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
      this.$confirm('即将提交资金, 是否继续?', '提示', {
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
  font-weight: 700;
  margin-left: 10px;
  cursor: pointer;
  background: gold;
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