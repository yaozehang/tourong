<template>
  <div class="w1200 clearfix">
    <div class="clearfix bread_search">
      <div class="bread fll">
        <span>
          <router-link to="/home">首页 ></router-link>
        </span>
        <span>{{$route.meta.title}}</span>
      </div>
      <div class="flr search">
        <input type="text" placeholder="请输入关键字" v-model="title" @keyup.enter="search">
        <i @click="search"></i>
      </div>
    </div>
    <div class="clearfix">
      <div class="pd-15 fll">
        <span class="act_type fll">投资行业：</span>
        <div class="titleRight fll">
          <template>
            <el-checkbox-group
              v-if="!isShow"
              style="word-wrap: break-word;word-break: break-all;overflow: hidden;"
              v-model="checkIndustry"
              @change="investIndustryChange"
            >
              <el-checkbox
                v-for="(item,index) in investIndustryList.slice(0,9)"
                :key="index"
                :label="item"
              >{{item.dataName}}</el-checkbox>
            </el-checkbox-group>
            <el-checkbox-group v-else v-model="investIndustryList" @change="investIndustryChange">
              <el-checkbox
                v-for="(item,index) in investIndustryList"
                :key="index"
                :label="item.dataName"
              >{{item.dataName}}</el-checkbox>
            </el-checkbox-group>
          </template>
        </div>
      </div>
      <div v-show="investIndustryList.length > 15">
        <div class="moreTitle flr" @click="handleclick" v-if="!isShow">
          更多
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <div class="moreTitle flr" @click="handleclick2" v-else>
          收起
          <i class="el-icon-arrow-up el-icon--right"></i>
        </div>
      </div>
    </div>
    <div class="pd-15">
      <span class="act_type">资金类型：</span>
      <span
        class="type_item"
        v-for="(item , index) in investTypeList"
        :key="index"
        @click="getInvestTypeStatus(item.dataValue,index)"
        :class="{active:item.checked}"
      >{{item.dataName}}</span>
    </div>
    <div class="clearfix">
      <div class="pd-15 fll" v-if="!isCheck">
        <span class="act_type fll">所属地区：</span>
        <div class="titleRight fll" v-if="!isShowArea">
          <span
            class="type_item"
            v-for="(item , index) in regionList.slice(0,9)"
            :key="index"
            @click="getRegionStatus(item.dataValue,index)"
            :class="{active:item.checked}"
          >{{item.dataName}}</span>
        </div>
        <div class="titleRight fll" v-else>
          <span
            class="type_item"
            v-for="(item , index) in regionList"
            :key="index"
            @click="getRegionStatus(item.dataValue,index)"
            :class="{active:item.checked}"
          >{{item.dataName}}</span>
        </div>
      </div>
      <div class="pd-15 fll" v-else>
        <span class="act_type fll">所属地区：</span>
        <div class="titleRight fll">
          <template>
            <el-checkbox-group
              v-if="!isShowArea"
              style="word-wrap: break-word;word-break: break-all;overflow: hidden;"
              v-model="checkArea"
              @change="regionChange"
            >
              <el-checkbox
                v-for="(item,index) in regionList.slice(0,9)"
                :key="index"
                :label="item"
              >{{item.dataName}}</el-checkbox>
            </el-checkbox-group>
            <el-checkbox-group v-else v-model="checkArea" 
                @change="regionChange">
              <el-checkbox
                v-for="(item,index) in regionList"
                :key="index"
                :label="item"
              >{{item.dataName}}</el-checkbox>
            </el-checkbox-group>
          </template>
        </div>
      </div>
      <div>
        <div class="moreTitle flr" @click="handleAreaDown" v-if="!isShowArea">
          更多
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <div class="moreTitle flr" @click="handleAreaUp" v-else>
          收起
          <i class="el-icon-arrow-up el-icon--right"></i>
        </div>
      </div>

      <div class="flr checkBoxBtn" @click="handleCheck">
        多选
        <i class="el-icon-plus"></i>
      </div>
    </div>
    <div class="clearfix">
      <div class="pd-15 fll" v-if="!isCheck1">
        <span class="act_type fll">投资地区：</span>
        <div class="titleRight fll" v-if="!isShowArea1">
          <span
            class="type_item"
            v-for="(item , index) in investRegionList.slice(0,9)"
            :key="index"
            @click="getInvestRegionStatus(item.dataValue,index)"
            :class="{active:item.checked}"
          >{{item.dataName}}</span>
        </div>
        <div class="titleRight fll" v-else>
          <span
            class="type_item"
            v-for="(item , index) in investRegionList"
            :key="index"
            @click="getInvestRegionStatus(item.dataValue,index)"
            :class="{active:item.checked}"
          >{{item.dataName}}</span>
        </div>
      </div>
      <div class="pd-15 fll" v-else>
        <span class="act_type fll">投资地区：</span>
        <div class="titleRight fll">
          <template>
            <el-checkbox-group
              v-if="!isShowArea1"
              style="word-wrap: break-word;word-break: break-all;overflow: hidden;"
              v-model="checkInvestArea"
              @change="investRegionChange"
            >
              <el-checkbox
                v-for="(item,index) in investRegionList.slice(0,9)"
                :key="index"
                :label="item"
              >{{item.dataName}}</el-checkbox>
            </el-checkbox-group>
            <el-checkbox-group v-else v-model="checkInvestArea" @change="investRegionChange">
              <el-checkbox
                v-for="(item,index) in investRegionList"
                :key="index"
                :label="item"
              >{{item.dataName}}</el-checkbox>
            </el-checkbox-group>
          </template>
        </div>
      </div>
      <div>
        <div class="moreTitle flr" @click="handleAreaDown1" v-if="!isShowArea1">
          更多
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <div class="moreTitle flr" @click="handleAreaUp1" v-else>
          收起
          <i class="el-icon-arrow-up el-icon--right"></i>
        </div>
      </div>

      <div class="flr checkBoxBtn" @click="handleCheck1">
        多选
        <i class="el-icon-plus"></i>
      </div>
    </div>

    <div class="pd-15">
      <span class="act_type">投资金额：</span>
      <span
        class="type_item"
        v-for="(item , index) in investAmountList"
        :key="index"
        @click="getInvestAmountStatus(item.dataValue,index)"
        :class="{active:item.checked}"
      >{{item.dataName}}</span>
    </div>
    <div class="w840 fll">
      <div class="mes_list listbottom">
        <p class="mes">投资信息列表</p>
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
      <div class="load_more" @click="more" v-if="this.totalCount > this.pageList.length">加载更多...</div>
      <p v-else>-------------------------------------------------没有更多资金了----------------------------------------------------</p>
    </div>
    <div class="w360 flr mes_list clearfix">
      <img src="/static/img/money_list.jpg" alt class="act_timelist">
      <p class="mes">
        热门资讯
        <span class="mes_more flr" @click="toMessagePage">更多></span>
      </p>
      <ul class="mes_title" v-loading="newsloading">
          <li v-for="(item,index) in mesData" :key="index" class="mes_content" @click="toMessageDetailPage(item.id)">
              <span class="cl-0">{{item.title}}</span>
          </li>
      </ul>
      <img src="/static/img/bg-3.jpg" alt width="360px" height="350px" style="margin-bottom:75px">
    </div>
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
  data() {
    return {
      isShow: false,
      isShowArea: false,
      isShowArea1: false,
      isCheck: false,
      isCheck1: false,
      loading:false,
      newsloading:false,
      dialogFormVisible: false,
      actType: [
        "股权投资",
        "债权投资",
        "金融投资",
        "BT/BOT项目投资",
        "其他投资",
        "债权投资",
        "债权投资",
        "债权投资",
        "债权投资",
        "债权投资",
        "债权投资",
        "债权投资",
        "债权投资",
        "债权投资",
        "债权投资",
        "债权投资"
      ],
      moneyType: [
        "个人资金",
        "企业资金",
        "天使投资",
        "VC投资",
        "PE投资",
        "小额贷款",
        "典当公司"
      ],
      area: ["北京", "上海", "广州", "深圳", "农大"],
      investArea: [
        "不限",
        "北京",
        "上海",
        "广州",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳",
        "深圳"
      ],
      investMoney: [
        "不限",
        "1-10W",
        "10-20W",
        "20-30W",
        "30-50W",
        "50-100W",
        "100-200W",
        "200-500W",
        "500-1000W"
      ],
      actlist: [
        {
          title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
          investMoney: "1000万-9亿",
          investType: "参股合作 收购/并购",
          investIndustry: "互联网",
          investStage: "成长期、成熟期",
          beginTime: "2019/01/01",
          focus: "155人关注"
        },
        {
          title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
          investMoney: "1000万-9亿",
          beginTime: "2019/01/01",
          investType: "参股合作 收购/并购",
          investIndustry: "互联网",
          investStage: "成长期、成熟期",
          focus: "155人关注"
        },
        {
          title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
          investMoney: "1000万-9亿",
          investType: "参股合作 收购/并购",
          investIndustry: "互联网",
          investStage: "成长期、成熟期",
          beginTime: "2019/01/01",
          focus: "155人关注"
        },
        {
          title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
          investMoney: "1000万-9亿",
          investType: "参股合作 收购/并购",
          investIndustry: "互联网",
          investStage: "成长期、成熟期",
          beginTime: "2019/01/01",
          focus: "155人关注"
        },
        {
          title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
          investMoney: "1000万-9亿",
          investType: "参股合作 收购/并购",
          investIndustry: "互联网",
          investStage: "成长期、成熟期",
          beginTime: "2019/01/01",
          focus: "155人关注"
        },
        {
          title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
          investMoney: "1000万-9亿",
          investType: "参股合作 收购/并购",
          investIndustry: "互联网",
          investStage: "成长期、成熟期",
          beginTime: "2019/01/01",
          focus: "155人关注"
        },
        {
          title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
          investMoney: "1000万-9亿",
          investType: "参股合作 收购/并购",
          investIndustry: "互联网",
          investStage: "成长期、成熟期",
          beginTime: "2019/01/01",
          focus: "155人关注"
        }
      ],
      mesData: [
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        },
        {
          content:
            "“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权"
        }
      ],
      checkIndustry:[],
      checkArea: [],
      checkInvestArea: [],
      investAmountList: [],
      investIndustryList: [],
      investRegionList: [],
      investTypeList: [],
      regionList: [],
      pageList:[],
      totalCount:[],
      pn:1,
      investIndustrys:"",
      investTypes:"",
      regions:"",
      investRegions:"",
      investAmounts:"",
      projectForm:{
        project:[]
      },
      title:""
    };
  },
  methods: {
    getTypeData() {
      this.$axios.get("/jsp/wap/trCapital/ctrl/jsonCategoryList.jsp").then(res => {
        if (res.success == "true") {
          let investAmountList = res.data.investAmountList
          investAmountList.forEach(item => {
            this.$set(item, 'checked', false)
          });
          this.investAmountList = investAmountList;
          let investIndustryList = res.data.investIndustryList
          investIndustryList.forEach(item => {
            this.$set(item, 'checked', false)
          });
          this.investIndustryList = investIndustryList;
          let investRegionList = res.data.investRegionList
          investRegionList.forEach(item => {
            this.$set(item, 'checked', false)
          });
          this.investRegionList = investRegionList;
          let investTypeList = res.data.investTypeList
          investTypeList.forEach(item => {
            this.$set(item, 'checked', false)
          });
          this.investTypeList = investTypeList;
          let regionList = res.data.regionList
          regionList.forEach(item => {
            this.$set(item, 'checked', false)
          });
          this.regionList = regionList;
        }
      });
    },
    getActData(investIndustrys,investTypes,regions,investRegions,investAmounts) {
      this.loading = true;
      this.$axios
        .get("/jsp/wap/trCapital/ctrl/jsonCapitalPage.jsp", {
          params: { investIndustrys,investTypes,regions,investRegions,investAmounts}
        })
        .then(res => {
          if (res.success == "true") {
            this.pageList = res.data.pageList;
            this.totalCount = res.data.pagination.totalCount;
            this.pn = 1;
            this.loading = false;
          }
        });
    },
    getNewsList(){
      this.newsloading = true;
      this.$axios
        .get("/jsp/wap/trNews/ctrl/jsonHotNewsList.jsp",)
        .then(res => {
          if (res.success == "true") {
            this.mesData = res.data
            this.newsloading = false;
          }
        });
    },
    more() {
      this.pn += 1;
      this.loading = true;
      this.$axios
        .get("/jsp/wap/trCapital/ctrl/jsonCapitalPage.jsp", {
          params: {
            investIndustrys:this.investIndustrys,
            investTypes:this.investTypes,
            regions:this.regions,
            investRegions:this.investRegions,
            investAmounts:this.investAmounts,
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
  getInvestTypeStatus(e,index){
    this.investTypes = e
      if(this.investTypeList[index].checked){
        this.investTypeList[index].checked = !this.investTypeList[index].checked
        this.investTypes = ''
      } else {
          this.investTypeList.forEach(item => {
              item.checked = false
        });
        this.investTypeList[index].checked = true
      }
      this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmounts)
  },
  getRegionStatus(e,index){
    this.regions = e
      if(this.regionList[index].checked){
        this.regionList[index].checked = !this.regionList[index].checked
        this.regions = ''
      } else {
          this.regionList.forEach(item => {
              item.checked = false
        });
        this.regionList[index].checked = true
      }
      this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmounts)
  },
  getInvestRegionStatus(e,index){
    this.investRegions = e
      if(this.investRegionList[index].checked){
        this.investRegionList[index].checked = !this.investRegionList[index].checked
        this.investRegions = ''
      } else {
          this.investRegionList.forEach(item => {
              item.checked = false
        });
        this.investRegionList[index].checked = true
      }
      this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmounts)
  },
  getInvestAmountStatus(e,index){
    this.investAmounts = e
    if(this.investAmountList[index].checked){
        this.investAmountList[index].checked = !this.investAmountList[index].checked
        this.investAmounts = ''
      } else {
          this.investAmountList.forEach(item => {
              item.checked = false
        });
        this.investAmountList[index].checked = true
      }
      this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmounts)
  },
  investIndustryChange(val){
    let investIndustryList = []
    val.forEach(item => {
      investIndustryList.push(item.dataValue)
    })
    this.investIndustrys = investIndustryList.join(',')
    this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmounts)
  },
  regionChange(val){
    let regionList = []
    val.forEach(item => {
      regionList.push(item.dataValue)
    })
    this.regions = regionList.join(',')
    this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmounts)
  },
  investRegionChange(val){
    let investRegionList = []
    val.forEach(item => {
      investRegionList.push(item.dataValue)
    })
    this.investRegions = investRegionList.join(',')
    this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmounts)
  },
  deliver_project(){
    this.$notify.success({
      title: "成功",
      message: "项目投递成功"
    });
  },
    //控制更多或多选
    handleTypeDown() {
      if (this.actType.length >= 9) {
        this.isShow = true;
      }
    },
    handleTypeUp() {
      this.isShow = false;
    },
    handleclick() {
      if (this.actType.length >= 9) {
        this.isShow = true;
      }
    },
    handleclick2() {
      this.isShow = false;
    },
    handleAreaDown() {
      if (this.investArea.length >= 9) {
        this.isShowArea = true;
      }
    },
    handleAreaUp() {
      this.isShowArea = false;
      this.isCheck = false;
    },
    handleAreaDown1() {
      if (this.investArea.length >= 9) {
        this.isShowArea1 = true;
      }
    },
    handleAreaUp1() {
      this.isShowArea1 = false;
      this.isCheck1 = false;
    },
    handleCheck() {
      this.isCheck = !this.isCheck;
      if(!this.isCheck){
        this.regions = ''
        this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmount)
      }
    },
    handleCheck1() {
      this.isCheck1 = !this.isCheck1;
      if(!this.isCheck1){
        this.investRegions = ''
        this.getActData(this.investIndustrys,this.investTypes,this.regions,this.investRegions,this.investAmount)
      }
    },
    toMoneyDetailPage(id){
      let {href} = this.$router.resolve({
          name: "moneyDetail",
          query: {id}
      });
      window.open(href, '_blank');
    },
    toMessagePage(){
      let {href} = this.$router.resolve({
          name: "message",
      });
      window.open(href, '_blank');
    },
    toMessageDetailPage(id){
      let {href} = this.$router.resolve({
          name: "messageDetail",
          query: {id}
      });
      window.open(href, '_blank');
    },
    search(){
      this.loading = true;
      this.$axios
        .get("/jsp/wap/trCapital/ctrl/jsonCapitalPage.jsp", {
          params: { investIndustrys:this.investIndustrys,investTypes:this.investTypes,regions:this.regions,investRegions:this.investRegions,investAmounts:this.investAmounts,title:this.title}
        })
        .then(res => {
          if (res.success == "true") {
            this.pageList = res.data.pageList;
            this.totalCount = res.data.pagination.totalCount;
            this.pn = 1;
            this.loading = false;
          }
        });
    }
  },
  created() {
    this.getTypeData();
    this.getActData()
    this.getNewsList()
  }
};
</script>

<style scoped lang="scss">
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