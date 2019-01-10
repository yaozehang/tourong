<template>
  <div class="fll">
    <div class="person_content">
      <p class="project_title">
        <span class="project_">基本信息已认证</span>
      </p>
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="认证状态" class="w180">
          <el-input v-model="formData.status" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="账号" class="w180">
          <el-input v-model="formData.account" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
            class="avatar-uploader"
            action=""
            :http-request="uploadImg"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="formData.avatar" :src="formData.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="真实姓名" class="w180">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="真实照片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="formData.truephoto" :src="formData.truephoto" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="身份证号" class="w180">
          <el-input v-model="formData.IDcard"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="formData.resource">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期">
            <select name="year" id="year"></select>年
            <select name="month" id="month"></select>月
            <select name="day" id="day"></select>日
        </el-form-item>
        <el-form-item label="公司名称" class="w320">
          <el-input v-model="formData.company"></el-input>
        </el-form-item>
        <el-form-item label="所在地区">
          <v-distpicker @selected='selected'></v-distpicker>
        </el-form-item>
        <el-form-item label="详细地址" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.location"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" class="w320">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="常用QQ" class="w320">
          <el-input v-model="formData.qq"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" class="w320">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item>
          <button class="subBtn" @click="onSubmit">提交</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'

export default {
  components: { VDistpicker },
  data() {
    return {
      formData: {
        status: "上市公司",
        phone: "",
        name: "李先生",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "0",
        desc: "",
        avatar: "",
        truephoto: "",
        IDcard: "",
        company:"",
        location:"",
        account:"1888555999",
        qq:"",
        email:"",
      },
    };
  },
  methods: {
    uploadImg(f){
      console.log(f);
      let param = new FormData(); //创建form对象
         param.append('file',f.file);//通过append向form对象添加数据
         let config = {
           headers:{'content-type':'multipart/form-data'}
         };  //添加请求头
      this.$axios.post('/component/trUpload2/uploadify',param,config).then(res => {
        console.log(res);
        this.formData.avatar = res.data.relativePath
      })
    },
    onSubmit() {
      console.log("submit!");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },  
   selected(e){
     console.log(e);
   },
   //出生日期选择器
   doyear(){
		var select = document.getElementById("year");
		var thisYear = new Date().getFullYear();
		for(var i=1950;i<=thisYear;i++){
			var option = document.createElement("option");
			option.value = i;
			option.innerText = i;
			select.appendChild(option);
		}
	},
	domoth(){
		var select = document.getElementById("month");
		for(var i=1;i<=12;i++){
			var option = document.createElement("option");
			option.value = i;
			option.innerText = i;
			select.appendChild(option);
		}
	},
	doday(){
		var select = document.getElementById("day"); 
		var selectYear = parseInt(year.options[year.selectedIndex].value);
		var selectMonth = parseInt(month.options[month.selectedIndex].value); 
		var date = new Date(selectYear,selectMonth,0);
		
		for(var i=1;i<=date.getDate();i++){
			var option = document.createElement("option");
			option.value = i;
			option.innerText = i;
			select.appendChild(option);
		}
	},
  deleteOldChildNodes(){
      var day = document.getElementById("day");
      var node=day.firstChild;
      var tmpNode;
      while(node!=day.lastChild){
        tmpNode = node.nextSibling;
        day.removeChild(node);
        node = tmpNode;
      }
      day.removeChild(day.lastChild);
  },
    pageInit(){
      this.doyear();
      this.domoth();
      this.doday();
      var that = this
      year.onchange = function(){that.deleteOldChildNodes();that.doday();};
      month.onchange = function(){that.deleteOldChildNodes();that.doday();};
    }, 
  },
  mounted(){
    this.pageInit()
  },
  created(){

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
</style>