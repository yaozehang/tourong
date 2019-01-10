<template>
    <div class="w1200 clearfix">
            <div class="bread">
                <span>
                    <router-link to="/home">首页 ></router-link>
                </span>
                <span>
                    <router-link to="/money">找资金 ></router-link>
                </span>
                <span>{{$route.meta.title}}</span>
            </div>
        <div class="w840 fll">
            <div class="mes_list listbottom">
                <p class="mes">TA的更多资金</p>
            </div>
            <div class="act_list clearfix" v-for="(item, index) in actlist" :key="index">
                <router-link to="/money/moneyDetail" class="fll list">
                    <div class="clearfix">
                        <span class="list-title fll">{{item.title}}</span>
                        <span class="title_time flr">{{item.beginTime}}</span>
                    </div>
                    <div class="clearfix">
                        <div class="fll box_content">
                            <span class="list-contentName">投资资金：</span>
                            <span class="list-content current">{{item.investMoney}}</span>
                        </div>
                        <div class="focusNum flr">{{item.focus}}</div>
                    </div>
                    <div class="clearfix">
                        <div class="fll">
                            <div class="box_content">
                                <span class="list-contentName">投资方式：</span>
                                <span class="list-content">{{actType[1]}}</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">投资地区：</span>
                                <span class="list-content">{{investArea[0]}}</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">投资类型：</span>
                                <span class="list-content">{{item.investType}}</span>
                            </div>
                        </div>
                        <div class="fll">
                            <div class="box_content">
                                <span class="list-contentName">资金类型：</span>
                                <span class="list-content">{{moneyType[1]}}</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">投资行业：</span>
                                <span class="list-content">{{item.investIndustry}}</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">投资阶段：</span>
                                <span class="list-content">{{item.investStage}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="load_more">加载更多...</div>
        </div>
        <div class="w360 flr mes_list clearfix">
            <el-card class="box-card">
                <div class="userImgBox">
                    <img class="userImg" src="static/img/userImg.jpg" alt="">        
                </div>
                <p class="username">李先生</p>
                <p><span>职位：</span><span>董事长</span></p>
                <p><span>企业名称：</span><span>北京开拓明天股份有限公司</span></p>
                <p><span>所属行业：</span><span>互联网</span></p>
                <p><span>所在地区：</span><span>北京</span></p>
                <p><span>关注行业：</span><span>互联网、金融、节能环保</span></p>
                <p><span>类型：</span><span>企业资金</span></p>
                <p><span>法人代表：</span><span>李先生</span></p>
                <p><span>注册资本：</span><span>5000万人民币</span></p>
                <p><span>成立日期：</span><span>2019-01-01</span></p>
                <p><span>住所：</span><span>北京海淀区</span></p>
                 <p><span>经营范围：</span><span>互联网、金融、节能环保</span></p>
            </el-card>
            <p class="mes">企业介绍及财务数据</p>
            <ul class="mes_title">
                <router-link to="/">
                    <li v-for="(item,index) in userData" :key="index" class="mes_content">
                        <span class="userDesc">{{item.content}}</span>
                    </li>
                </router-link>
            </ul>
            <p class="mes">投资能力&风险承担能力介绍</p>
            <ul class="mes_title">
                <router-link to="/">
                    <li v-for="(item,index) in userData" :key="index" class="mes_content">
                        <span class="userDesc">{{item.content}}</span>
                    </li>
                </router-link>
            </ul>
           
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actType: ["股权投资", "债权投资", "金融投资", "BT/BOT项目投资", "其他投资"],
                moneyType: ["个人资金", "企业资金", "天使投资", "VC投资", "PE投资", "小额贷款", "典当公司"],
                area: ["北京", "上海aaaaaaaaaaaaaaa", "广州", "深圳", "农大"],
                investArea: ["不限", "北京", "上海", "广州", "深圳", "农大"],
                investMoney: ["不限", "1-10W", "10-20W", "20-30W", "30-50W", "50-100W", "100-200W", "200-500W", "500-1000W"],
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
                ],
                userData:[
                    {
                        content:"GLG格理集团是一个以领先技术驱动的专业平台，连接全球范围内的顶尖专家和专业人士。全球超过GLG格理集团是一个以领先技术驱动的专业平台，连接全球范围内的顶尖专家和专业人士。全球超过GLG格理集团是一个以领先技术驱动的专业平台，连接全球范围内的顶尖专家和专业人士。全球超过"
                    }
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
        height: 180px;
        padding-bottom: 30px;
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
        color: #666
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
        color: rgb( 26, 26, 26 );
        line-height: 1.333;
        margin: 10px 0;
    }
    .list-contentName {
        // margin-left: 30px;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: #333;

    }

    .box_content {
        width: 395px;
        line-height: 2
    }

    .list-content {
        // margin-left: 30px;
        font-size: 14px;
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
    .userImg{
        border-radius: 100%;
        text-align: center;
    }
    .username{
        text-align: center;
    }
    .userImgBox{
        text-align: center;
    }
    .mes_title {
        border-top: 1px solid #d9d9d9;
        padding-left: 20px;
    }

    .mes_content {
        padding: 20px 0;
        border-bottom: 1px dashed #d9d9d9;
        color: #d9d9d9;
        list-style: none;
    }

    .mes_content:hover {
        color: #005982;
    }
    .box-card p span:nth-child(1){
        color: #999
    }
    .cl-0 {
        color: #000;
    }

    .cl-0:hover {
        color: #005982;
    }
    .userDesc{
        
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgb( 102, 102, 102 );
  line-height: 1.714;
    }
</style>