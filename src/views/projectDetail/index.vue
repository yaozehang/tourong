<template>
    <div class="w1200 clearfix">
        <div class="bread">
            <span>
                <router-link to="/home">首页 ></router-link>
                <router-link to="/money">找项目 ></router-link>
            </span>
            <span>{{$route.meta.title}}</span>
        </div>
        <div class="w840 fll">
            <div class="act_list clearfix" v-for="(item, index) in actlist" :key="index">
                <div class="fll list">
                    <div class="clearfix">
                        <span class="list-title fll">{{item.title}}</span>
                        <div class="flr company">{{item.beginTime}}</div>
                    </div>
                    <div class="clearfix ">
                        <div class="fll">
                            <div class="box_content">
                                <span class="list-contentName">编号：</span>
                                <span class="list-content">4545611155</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">融资主体：</span>
                                <span class="list-content">个人</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">公司市值：</span>
                                <span class="list-content">100000万</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">市净率(P/B):</span>
                                <span class="list-content">100</span>
                            </div>
                        </div>
                        <div class="fll">
                            <div class="box_content">
                                <span class="list-contentName">融资方式：</span>
                                <span class="list-content">{{moneyType[1]}}</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">市盈率(P/E):</span>
                                <span class="list-content">{{item.investIndustry}}</span>
                            </div>
                            <div class="box_content">
                                <span class="list-contentName">支付方式:</span>
                                <span class="list-content">{{item.payType}}</span>
                            </div>
                        </div>
                        <div class="flr">
                            <el-button class="sendBtn">我要约谈</el-button>
                            <el-button plain class="focus">关注</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w810">
                <div class="require">
                    <span>
                        项目简介
                    </span>

                </div>
                <div class="requireContent">
                    本公司在金融行业运作多年，在北京市政府国资委的大力支持下，近些年来得到了飞速发展，已成为行业知本公司在金融行业运作多年，在北京市政府国资委的大力支持下，近些年来得到了飞速发展，已成为行业知本公司在金融行业运作多年，在北京市政府国资委的大力支持下，近些年来得到了飞速发展，已成为行业知本公司在金融行业运作多年，在北京市政府国资委的大力支持下，近些年来得到了飞速发展，已成为行业知
                </div>
                <div class="require">
                    <span>
                        企业信息
                    </span>
                </div>
                <div class="requireContent clearfix">
                    <div class="fll">
                        <div class="box_content">
                            <span class="list-contentName">企业名称:</span>
                            <span class="list-content">客户要求保密</span>
                        </div>
                        <div class="box_content">
                            <span class="list-contentName">注册资本:</span>
                            <span class="list-content">50000万</span>
                        </div>
                        <div class="box_content">
                            <span class="list-contentName">所在地：</span>
                            <span class="list-content">北京</span>
                        </div>
                        <div class="box_content">
                            <span class="list-contentName">详细地址:</span>
                            <span class="list-content">天秀路10号中国农大国际创业园</span>
                        </div>
                    </div>
                    <div class="fll">
                        <div class="box_content">
                            <span class="list-contentName">团队平均年龄：</span>
                            <span class="list-content">35</span>
                        </div>
                        <div class="box_content">
                            <span class="list-contentName">建企时间：</span>
                            <span class="list-content">2018-11-19</span>
                        </div>
                        <div class="box_content">
                            <span class="list-contentName">官方微信：</span>
                            <span class="list-content">ktmt</span>
                        </div>

                    </div>

                </div>
                <div>
                    <span class="list-contentName" style="display:inline-block">主营业务：</span>
                    <p class="content_desc">
                        国泰集团是集民用爆破器材生产制造、工程爆破服务为一体并延伸复合油相、纸塑包装、机加设计、危货运输等上下游产业链，同时辐射精细化工、3D打印、信息化技术应用与服务、消防器材等多元产业的大型国有控股上市企业集团，致力于打造国内知名的、兼具国际视野的民爆领军企业
                    </p>
                </div>
                 <div>
                    <span class="list-contentName" style="display:inline-block">公司亮点：</span>
                    <p class="content_desc">
                        国泰集团秉承“共创、共赢、共享、共进”的企业使命，“以人为本、科技创新、规范运作、争创一流”的经营理念，在做精做优民爆产业的基础上，近年来，积极延伸上下游产业链，形成了爆破服务一体化的发展模式，同时大力推进多元化产业拓展，迈开了非民爆产业跨领域发展的坚实步伐。
                    </p>
                </div>
                <div>
                    <span class="list-contentName" style="display:inline-block">行业地位：</span>
                    <p class="content_desc">
                        国泰集团秉承“共创、共赢、共享、共进”的企业使命，“以人为本、科技创新、规范运作、争创一流”的经营理念，在做精做优民爆产业的基础上，近年来，积极延伸上下游产业链，形成了爆破服务一体化的发展模式，同时大力推进多元化产业拓展，迈开了非民爆产业跨领域发展的坚实步伐。
                    </p>
                </div>
                <div>
                    <span class="list-contentName" style="display:inline-block">近三年财务数据：</span>
                    <p class="content_desc">
                        国泰集团秉承“共创、共赢、共享、共进”的企业使命，“以人为本、科技创新、规范运作、争创一流”的经营理念，在做精做优民爆产业的基础上，近年来，积极延伸上下游产业链，形成了爆破服务一体化的发展模式，同时大力推进多元化产业拓展，迈开了非民爆产业跨领域发展的坚实步伐。
                    </p>
                </div>
                <div>
                    <span class="list-contentName" style="display:inline-block">3-5年盈利预测：</span>
                    <p class="content_desc">
                        国泰集团秉承“共创、共赢、共享、共进”的企业使命，“以人为本、科技创新、规范运作、争创一流”的经营理念，在做精做优民爆产业的基础上，近年来，积极延伸上下游产业链，形成了爆破服务一体化的发展模式，同时大力推进多元化产业拓展，迈开了非民爆产业跨领域发展的坚实步伐。
                    </p>
                </div>
                <div class="require">
                    <span>
                        股权结构
                    </span>

                </div>
                <div class="requireContent">
                   <img src="static/img/u7115.png" style="width:810px">
                </div>
                <div class="require">
                    <span>
                        项目负责人信息
                    </span>
                </div>
                <div class="requireContent clearfix">
                     <div class="fll">
                        <div class="box_content">
                            <span class="list-contentName">姓名:</span>
                            <span class="list-content">沈平</span>
                        </div>
                        <div class="box_content">
                            <span class="list-contentName">邮箱:</span>
                            <span class="list-content">shenping@up72.com</span>
                        </div>
                    </div>
                    <div class="fll">
                        <div class="box_content">
                            <span class="list-contentName">职务：</span>
                            <span class="list-content">产品经理</span>
                        </div>
                        <div class="box_content">
                            <span class="list-contentName">电话：</span>
                            <span class="list-content">13426213312</span>
                        </div>
                    </div>
                </div>
                <div class="require">
                    <span>
                        团队核心
                    </span>
                </div>
                <div class="requireContent">
                     张麒（法人），之前就职于苏州工业园区大型企业10多年，管理企业大型项目，对现代化企业管理流程熟悉。而后在苏州房产销售公司博思堂就职，通过自己的一套营销方法，将业绩做到案场最高，并遥遥领先。
　　黄羽（总经理），之前就职于招商银行，浦发银行，正式编制。对银行信贷，理财以及信用卡部相关管理流程很熟悉，并通过数年自身的努力得到上级领导和诸多大客户的信任，也从中累计到不少相关资源。
　　张玉（业务总监），之前就职于中孚房抵，对于房抵业务流程熟悉，实操积累了丰富经验，能打通操作环节个个关节，同行中有相当的知名度。在房抵行业中能号召一批精英朝一个方向迈进。
                </div>
                <div class="require">
                    <span>
                        项目点评
                    </span>
                </div>
                <div class="requireContent">
                    本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设备，目前只是在生产样机，正在做产品的检测，近期就会有检测结果出来，融资500万，主要用于设备和销售渠道的建设。本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设备，目前只是在生产样机，正在做产品的检测，近期就会有检测结果出来，融资500万，主要用于设备和销售渠道的建设。本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设备，目前只是在生产样机，正在做产品的检测，近期就会有检测结果出来，融资500万，主要用于设备和销售渠道的建设。本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设备，目前只是在生产样机，正在做产品的检测，近期就会有检测结果出来，融资500万，主要用于设备和销售渠道的建设。本人在天津研发净化空气的设备，有实用新型专利和发明专利，两个合伙人，目前已经入驻天津的工业园区，有厂房和办公场地，也有一部分设备，目前只是在生产样机，正在做产品的检测，近期就会有检测结果出来，融资500万，主要用于设备和销售渠道的建设。
                </div>
            </div>
        </div>
        <div class="w360 flr mes_list clearfix">
            <el-card class="box-card">
                <div class="userImgBox">
                    <img class="userImg" src="static/img/userImg.jpg" alt="">
                </div>
                <p class="username">李先生</p>
                <p>
                    <span>职位：</span>
                    <span>董事长</span>
                </p>
                <p>
                    <span>企业名称：</span>
                    <span>北京开拓明天股份有限公司</span>
                </p>
                <p>
                    <span>所属行业：</span>
                    <span>互联网</span>
                </p>
                <p>
                    <span>关注行业：</span>
                    <span>互联网、金融、节能环保</span>
                </p>
            </el-card>
            <p class="mes">他的更多项目</p>
            <ul class="mes_title">
                <router-link to="/">
                    <li v-for="(item,index) in mesData" :key="index" class="mes_content">
                        <p class="mes_listTitle">{{item.title}}</p>
                        <p>北京开拓明天科技有限公司</p>
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
                area: ["北京", "上海", "广州", "深圳", "农大"],
                investArea: ["不限", "北京", "上海", "广州", "深圳", "农大"],
                investMoney: ["不限", "1-10W", "10-20W", "20-30W", "30-50W", "50-100W", "100-200W", "200-500W", "500-1000W"],
                actlist: [
                    {
                        title: "北京某企资金1000万-9亿元寻求全国优质实体项目合作",
                        investMoney: "1000万-9亿",
                        investType: "参股合作 收购/并购",
                        investIndustry: "互联网",
                        investStage: "成长期、成熟期",
                        beginTime: "2019-01-01",
                        endTime: "2049-10-01",
                        focus: "155人关注",
                        userName: "李先生",
                        company: "北京青创服务平台有限公司",
                        payType: "现金支付、股权对价",
                        whereMoney: "自由资金，募集资金",
                        measure: "包括但不限于业绩承诺(对赌)、回购、上市承诺",
                        hot: "人工智能、大数据、物联网",
                        hotArea: "京津冀 长三角"
                    },
                ],
                mesData: [
                    {
                        title: '北京某企资金1000万-9亿元寻求全国优质实体项目合作'
                    },
                    {
                        title: '北京某企资金1000万-9亿元寻求全国优质实体项目合作'
                    },
                    {
                        title: '北京某企资金1000万-9亿元寻求全国优质实体项目合作'
                    },
                    {
                        title: '北京某企资金1000万-9亿元寻求全国优质实体项目合作'
                    },
                    {
                        title: '北京某企资金1000万-9亿元寻求全国优质实体项目合作'
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
    .bread_search {
        border-bottom: 1px solid #d9d9d9;
        margin-bottom: 10px;
    }

    .search {
        line-height: 50px;
    } //选择类型
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
    }

    .act_list {
        width: 810px;
        padding-bottom: 30px;
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

    .company {
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb( 153, 153, 153);
        line-height: 20px;
        margin-top: 10px;
    }

    .focus {
        color: #005982;
        border-color: #005982;
        width: 100px
    }

    .sendBtn {
        background: #005982;
        color: #fff;
        width: 100px
    }

    .userImg {
        border-radius: 100%;
        text-align: center;
    }

    .username {
        text-align: center;
    }

    .lookBtnBox {
        text-align: center;
    }

    .userImgBox {
        text-align: center;
    }

    .lookBtn {
        background: #005982;
        color: #fff;
        width: 70%
    }

    .current {
        color: #005982 !important;
        font-size: 24px !important;
    }


    .list {
        width: 810px;
    }

    .listbottom {
        border-bottom: 1px solid #d9d9d9;
        width: 810px;
        margin-bottom: 20px;
    }

    .list-title {
        font-size: 20px;
        font-family: "Microsoft YaHei";
        color: rgb( 26, 26, 26);
        line-height: 1.333;
        margin: 10px 0;
    }

    .list-contentName {
        // margin-left: 30px;
        font-size: 16px;
        font-family: "Microsoft YaHei";
        color: rgb(153, 153, 153);
    }
    .content_desc{
        font-size: 14px;
        line-height: 2;
        text-indent: 2em;
    }
    .box_content {
        line-height: 2;
        width: 330px
    }

    .require {
        border-bottom: 2px solid #ccc
    }

    .require span {
        font-size: 16px;
        font-family: "Microsoft YaHei";
        color: rgb( 51, 51, 51);
        line-height: 1.5;
        display: inline-block;
        padding-bottom: 15px;
        border-bottom: 2px solid #005982
    }

    .requireContent {
        padding: 15px 0;
        line-height: 2;
        font-size: 14px;
        text-indent: 2em;        
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

    .mes_listTitle {
        color: #444
    }

    .mes_title {
        border-top: 1px solid #d9d9d9;
        padding-left: 20px;
        list-style: none;
    }

    .mes_content {
        padding: 20px 0;
        border-bottom: 1px dashed #d9d9d9;
        color: #999;
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