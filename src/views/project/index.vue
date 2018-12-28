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
            <el-input placeholder="请输入关键字"  class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        </div>
        <div class="clearfix">
            <div class="pd-15 fll">
                <span class="act_type">投资方式：</span>
                <span class="type_item" v-for="(item , index) in actType" :key="index" @click="getType(item)">{{item}}</span>
            </div>
            <el-dropdown class="flr">
                <span class="el-dropdown-link">
                    更多
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item,index) in actType" :key="index" :label="item" :value="item.value">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="clearfix">
            <div class="pd-15 fll">
                <span class="act_type">资金类型：</span>
                <span class="type_item" v-for="(item , index) in moneyType" :key="index" @click="getStatus(item)">{{item}}</span>
            </div>
             <el-dropdown class="flr">
                <span class="el-dropdown-link">
                    更多
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item,index) in moneyType" :key="index" :label="item" :value="item.value">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="clearfix">
            <div class="pd-15 fll">
                <span class="act_type">所属地区：</span>
                <span class="type_item" v-for="(item , index) in area" :key="index" @click="getStatus(item)">{{item}}</span>
            </div>
             <el-dropdown class="flr">
                <span class="el-dropdown-link">
                    更多
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item,index) in area" :key="index" :label="item" :value="item.value">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="clearfix">
            <div class="pd-15 fll">
                <span class="act_type">投资地区：</span>
                <span class="type_item" v-for="(item , index) in investArea" :key="index" @click="getStatus(item)">{{item}}</span>
            </div>
             <el-dropdown class="flr">
                <span class="el-dropdown-link">
                    更多
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item,index) in investArea" :key="index" :label="item" :value="item.value">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

        <div class="clearfix">
            <div class="pd-15 fll">
                <span class="act_type">投资金额：</span>
                <span class="type_item" v-for="(item , index) in investMoney" :key="index" @click="getStatus(item)">{{item}}</span>
            </div>
             <el-dropdown class="flr">
                <span class="el-dropdown-link">
                    更多
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(item,index) in investMoney" :key="index" :label="item" :value="item.value">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="w840 fll">
            <div class="mes_list listbottom">
                <p class="mes">项目列表</p>
            </div>
            <div class="act_list clearfix" v-for="(item, index) in actlist" :key="index">
                <router-link class="fll list" to="/project/projectDetail">
                    <div class="clearfix">
                        <span class="list-title fll">{{item.title}}</span>
                    </div>
                    <div class="clearfix">
                        <div class="fll box_content">
                        </div>
                        <div class="title_time flr">{{item.beginTime}}</div>
                        <div class="focusNum fll">{{item.focus}}</div>
                    </div>
                    <div class="listContent">
                        {{item.content}}
                    </div>
                </router-link>
            </div>
            <div class="load_more">加载更多...</div>
        </div>
        <div class="w360 flr mes_list clearfix">
            <img src="/static/img/project_list.jpg" alt class="act_timelist">
            <p class="mes">热门资讯
                <span class="mes_more flr">更多></span>
            </p>
            <ul class="mes_title">
                <router-link to="">
                    <li v-for="(item , index) in mesData" :key="index" class="mes_content">
                        <span class="cl-0">{{item.content}}</span>
                    </li>
                </router-link>
            </ul>
            <img src="/static/img/bg-3.jpg" alt="" width="360px" height="350px" style="margin-bottom:75px">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actType: ["股权投资", "债权投资", "金融投资", "BT/BOT项目投资", "其他投资"],
                moneyType: ["个人资金", "企业资金", "天使投资", "VC投资", "PE投资", "小额贷款", "典当公司"],
                area: ["北京", "上海", "广州", "深圳", "农大"],
                investArea: ["不限", "北京", "上海", "广州", "深圳", "农大"],
                investMoney: ["不限", "1-10W", "10-20W", "20-30W", "30-50W", "50-100W", "100-200W", "200-500W", "500-1000W"],
                actlist: [
                    {
                        title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
                        content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区",                        
                        beginTime: "2019/01/01",
                        focus: "155人关注"
                    },
                    {
                        title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
                        content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区",           
                        beginTime: "2019/01/01",
                        focus: "155人关注"
                    },
                     {
                        title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
                        content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区",           
                        beginTime: "2019/01/01",
                        focus: "155人关注"
                    },
                     {
                        title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
                        content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区",           
                        beginTime: "2019/01/01",
                        focus: "155人关注"
                    },
                     {
                        title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
                        content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区",           
                        beginTime: "2019/01/01",
                        focus: "155人关注"
                    },
                     {
                        title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
                        content:"本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区",           
                        beginTime: "2019/01/01",
                        focus: "155人关注"
                    },
                ],
                mesData: [
                    {
                        content: '“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权'
                    },
                    {
                        content: '“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权'
                    },
                    {
                        content: '“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权'
                    },
                    {
                        content: '“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权'
                    },
                    {
                        content: '“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权'
                    },
                    {
                        content: '“ofo小黄车退了么”成为了关注焦点；中移动受让中国民航信息5.01%股权'
                    },
                ]
            };
        },
        methods: {
            getType(e) {
                console.log(e);
            },
            getStatus(e) {
                console.log(e);
            },
            apply() { },
            over() {
                this.$notify.error({
                    title: "错误",
                    message: "活动已结束"
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    .bread_search{
        border-bottom: 1px solid #d9d9d9;
        margin-bottom: 10px;
    }
    .search{
        line-height: 50px;
    }
    //选择类型
    .act_type {
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb(51, 51, 51);
        font-weight: bold;
        line-height: 1.857;
    }

    .type_item {
        font-size: 12px;
        font-family: "Microsoft YaHei";
        color: #444;
        cursor: pointer;
        padding-right: 45px;
    } //活动列表
    .act_list {
        width: 810px;
        // height: 180px;
        padding-bottom: 20px;
        border-bottom: 1px dashed #d9d9d9
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
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb( 153, 153, 153 );
        line-height: 1.714;
    }
    .focusNum {
        display: block;
        font-family: "Microsoft YaHei";
        color: rgb( 204, 204, 204 );
        line-height: 1.714;
    }
    .current {
        color: #005982 !important;
        font-size: 24px !important;
    }

    .list {
        margin-left: 20px;
    }
    .listContent{
        padding: 10px 0;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb( 153, 153, 153 );
        line-height: 1.429;
        width: 804px;
        height: 33px;
        z-index: 205;
    }
    .listbottom {
        border-bottom: 1px solid #d9d9d9;
        width: 810px;
        margin-bottom: 30px;
    }
    .list-title {
        font-size: 18px;
        font-family: "Microsoft YaHei";
        color: rgb( 26, 26, 26 );
        line-height: 1.333;
        z-index: 204;
        padding: 10px 0;
    }

    .list-contentName {
        // margin-left: 30px;
        font-size: 18px;
        font-family: "Microsoft YaHei";
        color: #333;

    }

    .box_content {
        width: 395px;
        line-height: 2
    }

    .list-content {
        // margin-left: 30px;
        font-size: 18px;
        font-family: "Microsoft YaHei";
        color: #333;
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
</style>