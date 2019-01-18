<template>
  <div class="fll">
    <div class="person_content">
      <img
        src="/static/img/VIP.png"
        alt
        width="924px"
        height="150px"
        style="cursor:pointer"
        @click="vip"
      >
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
      <el-form ref="formData" :model="formData" label-width="150px" :rules="rules">
        <el-form-item label="项目名称" style="width:600px">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="所属行业">
          <el-checkbox-group v-model="industys">
            <el-checkbox
              v-for="industry in industryList"
              :label="industry.dataValue"
              :key="industry.dataValue"
              name="type"
            >{{industry.dataName}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="项目简历" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.brief"></el-input>
        </el-form-item>
        <el-form-item label="所处阶段">
          <div
            v-for="(item , index) in stageList"
            :key="index"
            class="fll type_btn"
            :class="{'active':item.checked}"
            @click="get_type(index,item.dataValue)"
          >{{item.dataName}}</div>
        </el-form-item>
        <p>
          <span class="item_title">融资主体信息</span>
        </p>
        <el-form-item label="融资主体">
          <el-radio-group v-model="formData.financeBody">
            <el-radio
              v-for="finance in financeBodyList"
              :key="finance.dataValue"
              :label="finance.dataValue"
            >{{finance.dataName}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="企业全称" style="width:600px">
          <el-input v-model="formData.companyName"></el-input>
        </el-form-item>
        <el-form-item label="所在地区">
          <v-distpicker
            :province="provinceStr"
            :city="cityStr"
            :area="countyStr"
            @selected="selected"
          ></v-distpicker>
        </el-form-item>
        <el-form-item label="详细地址" style="width:600px">
          <el-input v-model="formData.address"></el-input>
        </el-form-item>
        <el-form-item label="注册资本" class="w350" prop="registeredCapital">
          <el-input v-model="formData.registeredCapital">
            <span slot="append">万元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="股权结构" class="w180">
          <el-upload class="upload-demo" action :http-request="uploadImg" :show-file-list="false">
            <el-button
              size="small"
              type="primary"
              class="fll"
              style="margin-bottom:10px;"
              :loading="loading"
            >上传股权架构图</el-button>
            <img
              v-if="formData.stockStructureImgPath"
              :src="formData.stockStructureImgPath"
              style="max-width:500px;"
            >
          </el-upload>
        </el-form-item>
        <el-form-item label="实际控制人" class="w180">
          <el-input v-model="formData.owner"></el-input>
        </el-form-item>
        <el-form-item label="主营业务" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.business"></el-input>
        </el-form-item>
        <el-form-item label="公司亮点" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.brightSpot"></el-input>
        </el-form-item>
        <el-form-item label="行业地位" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.position"></el-input>
        </el-form-item>
        <el-form-item label="近三年财务数据" style="width:600px">
          <el-input
            type="textarea"
            :autosize="{ minRows: 4}"
            v-model="formData.trienniumFinancialData"
          ></el-input>
        </el-form-item>
        <el-form-item label="3-5年盈利预测" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.profitForecast"></el-input>
        </el-form-item>
        <el-form-item label="团队平均年龄" class="w350" prop="averageAge">
          <el-input v-model="formData.averageAge"></el-input>
        </el-form-item>
        <el-form-item label="企业网址" class="w350">
          <el-input v-model="formData.websiteUrl"></el-input>
        </el-form-item>
        <el-form-item label="官方微信" class="w350">
          <el-input v-model="formData.weChat"></el-input>
        </el-form-item>
        <el-form-item label="建企时间" class="w350">
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="formData.companyFoundTimeStr"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <p>
          <span class="item_title">项目融资信息</span>
        </p>
        <el-form-item label="融资方式">
          <div
            v-for="(item , index) in financingWayList"
            :key="index"
            class="fll type_btn"
            :class="{'active':item.checked}"
            @click="get_type1(index,item.dataValue)"
          >{{item.dataName}}</div>
        </el-form-item>
        <div style="background:#f2f2f2;padding:10px 0;margin-bottom:20px;">
          <el-form-item label="注册资本" class="w350" prop="registeredCapital">
            <el-input v-model="formData.registeredCapital">
              <span slot="append">万元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="市盈率（P/E）" class="w350" prop="pe">
            <el-input v-model="formData.pe">
              <span slot="append">万元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="市净率（P/B）" class="w350" prop="pb">
            <el-input v-model="formData.pb">
              <span slot="append">万元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="支付方式">
            <el-checkbox-group v-model="paymentTypes">
              <el-checkbox
                v-for="paymentType in paymentTypeList"
                :label="paymentType.dataValue"
                :key="paymentType.dataValue"
                name="type"
              >{{paymentType.dataName}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="有效期限">
            <div style="width:28.16667%" class="fll">
              <el-date-picker
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                v-model="formData.expiryDateStartTimeStr"
              ></el-date-picker>
            </div>
            <el-col class="line" :span="1" style="text-align:center;">~</el-col>
            <el-col :span="7">
              <el-date-picker
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                v-model="formData.expiryDateEndTimeStr"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="保障措施" style="width:600px">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4}"
              placeholder="请填写保障措施，例如业绩承诺、回购、上市承诺等"
              v-model="formData.safeguard"
            ></el-input>
          </el-form-item>
          <el-form-item label="交易对手简介" style="width:600px">
            <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.opponentBrief"></el-input>
          </el-form-item>
        </div>
        <p>
          <span class="item_title">核心团队</span>
        </p>
        <el-form-item label="团队介绍" style="width:600px">
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.teamBrief"></el-input>
        </el-form-item>
        <p>
          <span class="item_title">项目负责人联系方式</span>
        </p>
        <el-form-item label="姓名" class="w350">
          <el-input v-model="formData.directorName"></el-input>
        </el-form-item>
        <el-form-item label="职务" class="w350">
          <el-input v-model="formData.directorJob"></el-input>
        </el-form-item>
        <el-form-item label="年龄" class="w350" prop="directorAge">
          <el-input v-model="formData.directorAge"></el-input>
        </el-form-item>
        <el-form-item label="电话" class="w350" prop="directorPhone">
          <el-input v-model="formData.directorPhone"></el-input>
        </el-form-item>
        <el-form-item label="Email" class="w350">
          <el-input v-model="formData.directorEmail"></el-input>
        </el-form-item>
        <p>
          <span class="item_title">附件上传</span>
        </p>
        <el-form-item label="附件材料" prop="file">
          <div>商业计划书、融资计划书等文件请在此上传</div>
          <el-upload class="upload-demo" action :file-list="fileList" :http-request="uploadFlie">
            <div class="likeBtn fll">
              <i></i>点击上传文件
            </div>
          </el-upload>
        </el-form-item>
        <p>
          <span class="item_title">保密设置</span>
        </p>
        <el-form-item label="融资主体信息">
          <el-radio-group v-model="formData.bodySecrecyType">
            <el-radio
              v-for="bodySecrecy in bodySecrecyList"
              :key="bodySecrecy.dataValue"
              :label="bodySecrecy.dataValue"
            >{{bodySecrecy.dataName}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="项目融资信息">
          <el-radio-group v-model="formData.infoSecrecyType">
            <el-radio
              v-for="infoSecrecy in infoSecrecyList"
              :key="infoSecrecy.dataValue"
              :label="infoSecrecy.dataValue"
            >{{infoSecrecy.dataName}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="项目负责人联系方式">
          <el-radio-group v-model="formData.contactSecrecyType">
            <el-radio
              v-for="contactSecrecyType in contactSecrecyTypeList"
              :key="contactSecrecyType.dataValue"
              :label="contactSecrecyType.dataValue"
            >{{contactSecrecyType.dataName}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <div class="subBtn" @click="onSave('formData')" style="margin-right:20px;">保存</div>
          <div class="subBtn" @click="onSubmit(5,'formData')">提交</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
import qs from "qs";

export default {
  components: { VDistpicker },
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("联系人手机号不能为空"));
      } else {
        callback();
      }
      if (!/^1[34578]\d{9}$/.test(value)) {
        callback("手机号码有误，请重填");
      } else {
        callback();
      }
    };
    var checkNumber = (rule, value, callback) => {
      var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/
      if (!re.test(value)) {
        callback(new Error("请输入数字值"));
      } else {
        callback();
      }
    };
    var checkAge = (rule, value, callback) => {
      var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      if (!re.test(value)) {
        callback(new Error("请输入数字值"));
      } else {
        if (value < 18) {
          callback(new Error("必须年满18岁"));
        } else {
          callback();
        }
      }
    };
    return {
      rules: {
        registeredCapital: [{ validator: checkNumber, trigger: "blur" }],
        pe: [{ validator: checkNumber, trigger: "blur" }],
        pb: [{ validator: checkNumber, trigger: "blur" }],
        directorPhone: [{ validator: checkPhone, trigger: "blur" }],
        directorAge: [{ validator: checkAge, trigger: "blur" }],
        averageAge: [{ validator: checkAge, trigger: "blur" }]
      },
      loading: false,
      templateData: "<p>lalala</p>",
      countyStr: "昌平区",
      provinceStr: "北京市",
      cityStr: "北京城区",
      formData: {
        title: "",
        brief: "",
        financeBody: "",
        companyName: "",
        address: "",
        registeredCapital: "",
        owner: "",
        business: "",
        brightSpot: "",
        position: "",
        trienniumFinancialData: "",
        profitForecast: "",
        averageAge: "",
        websiteUrl: "",
        weChat: "",
        companyFoundTimeStr: "",
        registeredCapital: "",
        pe: "",
        pb: "",
        expiryDateStartTimeStr: "",
        expiryDateEndTimeStr: "",
        safeguard: "",
        opponentBrief: "",
        teamBrief: "",
        directorName: "",
        directorJob: "",
        directorAge: "",
        directorPhone: "",
        directorEmail: "",
        bodySecrecyType: "",
        infoSecrecyType: "",
        contactSecrecyType: "",
        regionProvinceId: "",
        regionCityId: "",
        regionCountyId: "",
        financingWay: "",
        stage: "",
        industryName: "",
        stockStructureImgPath: ""
      },
      financeBodyList: [],
      stageList: [],
      industryList: [],
      financingWayList: [],
      paymentTypeList: [],
      bodySecrecyList: [
        { dataValue: "0", dataName: "全部可见" },
        { dataValue: "1", dataName: "登录用户可见" },
        { dataValue: "2", dataName: "仅对VIP会员公开" },
        { dataValue: "3", dataName: "保密，仅对后台管理员公开" }
      ],
      infoSecrecyList: [
        { dataValue: "0", dataName: "全部可见" },
        { dataValue: "1", dataName: "登录用户可见" },
        { dataValue: "2", dataName: "仅对VIP会员公开" },
        { dataValue: "3", dataName: "保密，仅对后台管理员公开" }
      ],
      contactSecrecyTypeList: [
        { dataValue: "0", dataName: "全部可见" },
        { dataValue: "1", dataName: "登录用户可见" },
        { dataValue: "2", dataName: "仅对VIP会员公开" },
        { dataValue: "3", dataName: "保密，仅对后台管理员公开" }
      ],
      industys: [],
      paymentTypes: [],
      fileNames: [],
      filePaths: [],
      fileList: []
    };
  },
  methods: {
    getData(id) {
      this.$axios
        .get(`/jsp/wap/center/ctrl/jsonProjectDetail.jsp?id=${id}`)
        .then(res => {
          console.log(res.data.project);
          this.formData = res.data.project;
          let project = res.data.project;
          if (project.regionNameStr != "") {
            this.provinceStr = project.regionNameStr.split(",")[0];
            var cityStr = project.regionNameStr.split(",")[1];
            if (this.provinceStr == "北京市" && cityStr == "市辖区") {
              cityStr = "北京城区";
            } else if (this.provinceStr == "天津市" && cityStr == "市辖区") {
              this.cityStr = "天津城区";
            } else if (this.provinceStr == "上海市" && cityStr == "市辖区") {
              this.cityStr = "上海城区";
            } else if (this.provinceStr == "重庆市" && cityStr == "市辖区") {
              this.cityStr = "重庆城区";
            } else {
              this.cityStr = project.regionNameStr.split(",")[1];
            }
            this.countyStr = project.regionNameStr.split(",")[2];
          }
          this.financeBodyList = res.data.financeBodyList;
          this.industryList = res.data.industryList;
          this.paymentTypeList = res.data.paymentTypeList;
          var stageList = res.data.stageList;
          if (this.formData.stage == "") {
            stageList.forEach(item => {
              this.$set(item, "checked", false);
            });
            this.stageList = stageList;
          } else if (this.formData.stage == "67") {
            stageList.forEach(item => {
              this.$set(item, "checked", false);
            });
            stageList[0].checked = true;
            this.stageList = stageList;
          } else if (this.formData.stage == "68") {
            stageList.forEach(item => {
              this.$set(item, "checked", false);
            });
            stageList[1].checked = true;
            this.stageList = stageList;
          } else if (this.formData.stage == "69") {
            stageList.forEach(item => {
              this.$set(item, "checked", false);
            });
            stageList[2].checked = true;
            this.stageList = stageList;
          } else if (this.formData.stage == "70") {
            stageList.forEach(item => {
              this.$set(item, "checked", false);
            });
            stageList[3].checked = true;
            this.stageList = stageList;
          } else if (this.formData.stage == "71") {
            stageList.forEach(item => {
              this.$set(item, "checked", false);
            });
            stageList[4].checked = true;
            this.stageList = stageList;
          } else if (this.formData.stage == "72") {
            stageList.forEach(item => {
              this.$set(item, "checked", false);
            });
            stageList[5].checked = true;
            this.stageList = stageList;
          }
          var financingWayList = res.data.financingWayList;
          if (this.formData.financingWay == "") {
            financingWayList.forEach(item => {
              this.$set(item, "checked", false);
            });
            this.financingWayList = financingWayList;
          } else if (this.formData.financingWay == "61") {
            financingWayList.forEach(item => {
              this.$set(item, "checked", false);
            });
            financingWayList[0].checked = true;
            this.financingWayList = financingWayList;
          } else if (this.formData.financingWay == "62") {
            financingWayList.forEach(item => {
              this.$set(item, "checked", false);
            });
            financingWayList[1].checked = true;
            this.financingWayList = financingWayList;
          } else if (this.formData.financingWay == "63") {
            financingWayList.forEach(item => {
              this.$set(item, "checked", false);
            });
            financingWayList[2].checked = true;
            this.financingWayList = financingWayList;
          }
          if (res.data.project.industryName != "") {
            this.industys = res.data.project.industryName.split(",");
          }
          if (res.data.project.paymentType != "") {
            this.paymentTypes = res.data.project.paymentType
              .replace(/[\[\]]/g, "")
              .split(",");
          }
          var file = {};
          var fileList = [];
          var fileList = res.data.project.fileList;
          if (fileList.length != 0) {
            fileList.forEach(item => {
              file.name = item.name;
              file.url = item.filePaths;
            });
            this.fileList.push(file);
          }
        });
    },
    get_type(index, dataValue) {
      if (this.stageList[index].checked == true) {
        this.stageList[index].checked = false;
        this.formData.stage = "";
      } else {
        this.stageList.forEach(item => {
          item.checked = false;
        });
        this.stageList[index].checked = true;
        this.formData.stage = dataValue;
      }
    },
    get_type1(index, dataValue) {
      if (this.financingWayList[index].checked == true) {
        this.financingWayList[index].checked = false;
        this.formData.financingWay = "";
      } else {
        this.financingWayList.forEach(item => {
          item.checked = false;
        });
        this.financingWayList[index].checked = true;
        this.formData.financingWay = dataValue;
      }
    },
    onSave(formName) {
      this.onSubmit(0,formName);
    },
    onSubmit(status, formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$confirm("即将提交项目, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            var fileNames = this.fileNames.join(";=;");
            var filePaths = this.filePaths.join(",");
            var industys = this.industys.join(",");
            var paymentTypes = this.paymentTypes.join(",");
            var id = this.$route.query.id;
            if (id != "") {
              var params = {
                id,
                title: this.formData.title,
                brief: this.formData.brief,
                financeBody: this.formData.financeBody,
                companyName: this.formData.companyName,
                address: this.formData.address,
                registeredCapital: this.formData.registeredCapital,
                owner: this.formData.owner,
                business: this.formData.business,
                brightSpot: this.formData.brightSpot,
                position: this.formData.position,
                trienniumFinancialData: this.formData.trienniumFinancialData,
                profitForecast: this.formData.profitForecast,
                averageAge: this.formData.averageAge,
                websiteUrl: this.formData.websiteUrl,
                weChat: this.formData.weChat,
                companyFoundTimeStr: this.formData.companyFoundTimeStr,
                registeredCapital: this.formData.registeredCapital,
                pe: this.formData.pe,
                pb: this.formData.pb,
                expiryDateStartTimeStr: this.formData.expiryDateStartTimeStr,
                expiryDateEndTimeStr: this.formData.expiryDateEndTimeStr,
                safeguard: this.formData.safeguard,
                opponentBrief: this.formData.opponentBrief,
                teamBrief: this.formData.teamBrief,
                directorName: this.formData.directorName,
                directorJob: this.formData.directorJob,
                directorAge: this.formData.directorAge,
                directorPhone: this.formData.directorPhone,
                directorEmail: this.formData.directorEmail,
                bodySecrecyType: this.formData.bodySecrecyType,
                infoSecrecyType: this.formData.infoSecrecyType,
                contactSecrecyType: this.formData.contactSecrecyType,
                regionProvinceId: this.formData.regionProvinceId,
                regionCityId: this.formData.regionCityId,
                regionCountyId: this.formData.regionCountyId,
                financingWay: this.formData.financingWay,
                stage: this.formData.stage,
                stockStructureImgPath: this.formData.stockStructureImgPath,
                industys,
                paymentTypes,
                fileNames,
                filePaths,
                status
              };
            } else {
              var params = {
                title: this.formData.title,
                brief: this.formData.brief,
                financeBody: this.formData.financeBody,
                companyName: this.formData.companyName,
                address: this.formData.address,
                registeredCapital: this.formData.registeredCapital,
                owner: this.formData.owner,
                business: this.formData.business,
                brightSpot: this.formData.brightSpot,
                position: this.formData.position,
                trienniumFinancialData: this.formData.trienniumFinancialData,
                profitForecast: this.formData.profitForecast,
                averageAge: this.formData.averageAge,
                websiteUrl: this.formData.websiteUrl,
                weChat: this.formData.weChat,
                companyFoundTimeStr: this.formData.companyFoundTimeStr,
                registeredCapital: this.formData.registeredCapital,
                pe: this.formData.pe,
                pb: this.formData.pb,
                expiryDateStartTimeStr: this.formData.expiryDateStartTimeStr,
                expiryDateEndTimeStr: this.formData.expiryDateEndTimeStr,
                safeguard: this.formData.safeguard,
                opponentBrief: this.formData.opponentBrief,
                teamBrief: this.formData.teamBrief,
                directorName: this.formData.directorName,
                directorJob: this.formData.directorJob,
                directorAge: this.formData.directorAge,
                directorPhone: this.formData.directorPhone,
                directorEmail: this.formData.directorEmail,
                bodySecrecyType: this.formData.bodySecrecyType,
                infoSecrecyType: this.formData.infoSecrecyType,
                contactSecrecyType: this.formData.contactSecrecyType,
                regionProvinceId: this.formData.regionProvinceId,
                regionCityId: this.formData.regionCityId,
                regionCountyId: this.formData.regionCountyId,
                financingWay: this.formData.financingWay,
                stage: this.formData.stage,
                stockStructureImgPath: this.formData.stockStructureImgPath,
                industys,
                paymentTypes,
                fileNames,
                filePaths,
                status
              };
            }
            this.$axios
              .post(
                "/jsp/wap/center/do/doEditProject.jsp",
                qs.stringify(params)
              )
              .then(res => {
                if (res.success == "true") {
                  if(status == 0){
                    this.$message.success("保存成功")
                    this.$router.push("/person/myMoney");
                  } else {
                    this.$message.success("上传项目成功");
                  this.$router.push("/person/myProject");
                  }
                } else {
                  this.$message.error("上传资金失败，请完善资金信息或检查网络");
                }
              });
          });
        } else {
          console.log("error submit!!");
          this.$message.error("请完善信息");
          return false;
        }
      });
    },
    selected(e) {
      this.formData.regionProvinceId = e.province.code;
      this.formData.regionCityId = e.city.code;
      this.formData.regionCountyId = e.area.code;
    },
    uploadImg(f) {
      this.loading = true;
      let param = new FormData(); //创建form对象
      param.append("file", f.file); //通过append向form对象添加数据
      let config = {
        headers: { "content-type": "multipart/form-data" }
      }; //添加请求头
      this.$axios
        .post("/component/trUpload2/uploadify", param, config)
        .then(res => {
          this.formData.stockStructureImgPath = res.data.relativePath;
          this.loading = false;
        });
    },
    uploadFlie(f) {
      let param = new FormData(); //创建form对象
      param.append("file", f.file); //通过append向form对象添加数据
      let config = {
        headers: { "content-type": "multipart/form-data" }
      }; //添加请求头
      this.$axios
        .post("/component/trUpload2/uploadify", param, config)
        .then(res => {
          if (res.success == true) {
            this.fileNames.push(res.data.originalName);
            this.filePaths.push(res.data.relativePath);
          } else {
            this.$message.error("上传失败，请检查网络");
          }
        });
    },
    vip() {}
  },
  created() {
    let id = this.$route.query.id;
    this.getData(id);
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
  // margin-left: 15px;
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
    top: 7px;
    left: 4px;
  }
}
</style>