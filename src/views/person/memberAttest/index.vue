<template>
  <div class="fll">
    <div class="person_content">
      <p class="project_title">
        <span class="project_">会员信息认证</span>
      </p>
      <el-form
        :model="attestForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item label="类型：" prop="type">
          <div v-for="(item , index) in type" :key="index" class="fll type_btn" :class="{'active':item.checked}" @click="get_type(index)">{{item.name}}</div>
        </el-form-item>
        <el-form-item label="认证材料：">
          <el-upload
            class="upload-demo"
            :http-request="uploadFlie"
            action=""
            :file-list="fileList"
          >
            <div class="likeBtn">
              <i></i>点击上传文件
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="介绍：" prop="brief">
          <el-input
            type="textarea"
            v-model="attestForm.brief"
            :autosize="{ minRows: 15}"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="sub_btn" @click="submitForm('ruleForm')">提交认证</div>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
      :visible.sync="toast_show"
      width="30%"
      center>
      <div class="toast_success" v-if="success"></div>
      <div class="toast_error" v-else></div>
      <div v-if="success" class="toast_title">成功</div>
      <div v-else class="toast_title">失败</div>
      <p class="toast_content">{{hint}}</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attestForm: {
        brief: "",
        type: "",
        fileNames:[],
        filePaths:[],
      },
      type: [ {name:"项目方",checked:false},{name:"投资人",checked:false},{name:"专家",checked:false}],
      rules: {
        type: [
          {
            type: "string",
            required: true,
            message: "请至少选择一个认证类型",
            trigger: "change"
          }
        ],
        // file: [
        //   {
        //     type: "file",
        //     required: true,
        //     message: "请上传资料",
        //     trigger: "change"
        //   }
        // ],
        brief: [{ required: true, message: "请填写介绍", trigger: "blur" }]
      },
      fileList: [],
      hint:"",
      success:false,
      toast_show:false,
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var fileNames = this.attestForm.fileNames.join(';=;')
            var filePaths = this.attestForm.filePaths.join(',')
            this.$axios.get('/jsp/wap/center/do/doAuthentication.jsp',{params:{type:this.attestForm.type,brief:this.attestForm.brief,fileNames,filePaths}}).then(res => {
              if(res.success == "true") {
                this.success = true;
                this.hint = "上传认证资料成功";
                this.toast_show = true;
                this.attestForm.brief = ""
                this.type.forEach(item => {
                  item.checked = false
                })
                this.attestForm.type = ""
                this.fileList = []
                this.attestForm.fileNames = []
                this.attestForm.filePaths = []
              } else {
                this.success = false;
                this.hint = "上传认证资料失败，请检查网络";
                this.toast_show = true;
              }
            })
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
    get_type(index){
      if(this.type[index].checked == true) {
          this.type[index].checked = false
          this.attestForm.type = ''
      } else {
          this.type.forEach(item => {
          item.checked = false
        })
        this.type[index].checked = true
        this.attestForm.type = (index + 1).toString()
      }
    },
    uploadFlie(f){
      let param = new FormData(); //创建form对象
         param.append('file',f.file);//通过append向form对象添加数据
         let config = {
           headers:{'content-type':'multipart/form-data'}
         };  //添加请求头
      this.$axios.post('/component/trUpload2/uploadify',param,config).then(res => {
        if(res.success == true) {
          this.attestForm.fileNames.push(res.data.originalName)
          this.attestForm.filePaths.push(res.data.relativePath)
        } else {
          this.$message.error('上传失败，请检查网络')
        }
      })
    },
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

.sub_btn {
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
  margin-top: 20px;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  border-radius: 4px;
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
  border: none;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding-left: 15px;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  position: relative;
  i {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(/static/img/shangchuan-1.png) no-repeat center;
    background-size: contain;
    position: absolute;
    top: -5px;
    left: 0;
  }
}

.demo-ruleForm {
  width: 670px;
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
</style>