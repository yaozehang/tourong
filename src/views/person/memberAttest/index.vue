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
        <el-form-item label="认证材料：" prop="file">
          <el-upload
            class="upload-demo"
            action=""
            multiple
            :file-list="fileList"
          >
            <button class="likeBtn">
              <i></i>点击上传文件
            </button>
          </el-upload>
        </el-form-item>
        <el-form-item label="介绍：" prop="desc">
          <el-input
            type="textarea"
            v-model="attestForm.introduce"
            :autosize="{ minRows: 15}"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <button class="sub_btn" @click="submitForm">提交认证</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attestForm: {
        introduce: "",
        type: ""
      },
      type: [{name:"专家",checked:false},{name:"投资方",checked:false}, {name:"项目方",checked:false}],
      rules: {
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        file: [
          {
            type: "file",
            required: true,
            message: "请上传资料",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      fileList: [{ name: "企业介绍资料", url: "" }]
    };
  },
  methods: {
    submitForm() {},
    get_type(index){
      console.log(index);
      this.type[index].checked = !this.type[index].checked
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
    top: 9px;
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