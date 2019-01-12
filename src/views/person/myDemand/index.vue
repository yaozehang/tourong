<template>
  <div class="fll">
    <div class="person_content clearfix">
      <p class="project_title">
        <span class="project_">需求填报</span>
      </p>
      <p>请详细填写您的需求：</p>
      <el-form :rules="rules" ref="ruleForm">
        <el-form-item prop="content">
        <el-input
          type="textarea"
          :autosize="{ minRows: 20}"
          placeholder="请输入内容"
          v-model="content"
          >
        </el-input>
        </el-form-item>
        <button class="sub_btn flr" @click="submit">提交</button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        content:'',
        rules:{
          content:{ required: true, message: "请填写需求", trigger: "blur" }
        }
      }
    },
    methods:{
      submit(){
        this.$axios.get('/jsp/wap/center/do/doFeedback.jsp',{params:{content:this.content}}).then(res => {
          if(res.success == 'true') {
            this.$message.success(res.message)
          } else {
            this.$message.error(res.message)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
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
</style>