<template>
  <div class="bg-fa">
    <div class="w1200 clearfix">
      <div class="bread">
        <span>
          <router-link to="/home">首页 ></router-link>
        </span>
        <span>
          <router-link :to="{name:'message',query:{category:mesDetailData.category}}">投融资讯 ></router-link>
        </span>
        <span>
          <router-link :to="{name:'message',query:{category:mesDetailData.category}}">{{mesDetailData.categoryName}} ></router-link>
        </span>
        <span>{{$route.meta.title}}</span>
      </div>
      <div class="w870 fll mes_card" v-loading="loading">
        <p class="title">{{mesDetailData.title}}</p>
        <p class="about">
          <span class="about_item">{{mesDetailData.publishTimeStr}}</span>
          <span class="about_item">来源：{{mesDetailData.source}}</span>
          <span class="about_item">作者：{{mesDetailData.author}}</span>
          <span class="about_item">阅读：{{mesDetailData.readNum}}</span>
          <i class="zone"></i>
          <i class="microblog"></i>
          <i class="weixin"></i>
          <i class="add"></i>
        </p>
        <p class="contentHtml" v-html="mesDetailData.content"></p>
        <div class="discuss">
          <img :src="$url + avatar" alt="" class="avatar" v-if="avatar != ''">
          <p class="login" @click="$router.push('/login')" v-else>登录</p>
          <textarea name="" id="" cols="96%" rows="3" placeholder="来说两句吧..."></textarea>
        </div>
        <div class="clearfix">
          <span class="face"></span>
          <button class="flr submitBtn">发布留言</button>
        </div>
        <div class="common_line">
          <span class="common">评论</span>
        </div>
        <p class="common_title" v-show="!commonData">最新评论</p>
        <div class="common_list clearfix" v-for="(item , index) in commonData" :key="index">
          <img :src="item.avatar" alt="" class="common_img fll">
          <div class="fll common_item">
            <div class="clearfix">
              <span class="username fll">{{item.username}}</span>
              <span class="location fll ">[{{item.location}}网友]</span>
              <span class="beforeTime flr">{{item.beforeTime}}</span>
            </div>
            <p class="content">{{item.content}}</p>
            <div class="clearfix">
              <span class="fll from">来自{{item.from}}</span>
              <span class="flr reply">回复</span>
            </div>
          </div>
        </div>
        <button class="moreBtn" v-show="!commonData">查看更多</button>
        <p v-show="commonData" style="text-align:center;">暂无评论</p>
      </div>
      <div class="w300 clearfix mes_list flr">
        <p class="mes">热门资讯
        <span class="mes_more flr" @click="toMessagePage">更多></span>
        </p>
        <div class="mes_title" v-loading="newsloading">
          <div v-for="(item , index) in mesData" :key="index" class="mes_content" @click="toMessageDetailPage(item.id)">
            <span class="cl-0">
              <span class="count" :class=" index <= 2 ? 'hot' : '' ">{{index + 1}}</span>
                {{item.title}}
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Cookies from 'js-cookie'

export default {
  data(){
    return {
      mesDetailData:{
        title:'投资界沙龙：共享经济——势不可挡 or 资本捧杀',
        time:'2017-06-06 11:20',
        weixin:'创业智库',
        author:'唐一',
        num:294,
        contentHtml:'<article class="article" id="mp-editor"><p data-role="original-title" style="display:none">原标题：2018年度最有料的地产投资沙龙，错过今天等于错过“一个亿”！</p><p><span style="font-size: 16px;">壹点关注◎苏州楼市</span></p><p style="text-align: center;"><span style="font-size: 16px;"><strong><span style="font-size: 16px;">全城瞩目！万粉期待！</span></strong></span></p><p style="text-align: center;"><span style="font-size: 16px;"><strong><span style="font-size: 16px;">“度房苏州”两周年全新升级！</span></strong></span></p><p style="text-align: center;"><span style="font-size: 16px;"><strong><span style="font-size: 16px;">30位地产嘉宾，30位铁杆粉丝</span></strong></span></p><p style="text-align: center;"><span style="font-size: 16px;"><strong><span style="font-size: 16px;">齐聚</span></strong><strong><span style="font-size: 16px;">高铁新城</span></strong></span></p><p style="text-align: center;"><span style="font-size: 16px;"><strong><span style="font-size: 16px;">大话地产这些年~</span></strong></span></p><p><span style="font-size: 16px;">什么？！这些问题竟然全部得到了解决？！</span></p><p style="text-align: justify;"><span style="font-size: 16px;">Question 1：尹山湖板块的升值空间？</span></p><p style="text-align: justify;"><span style="font-size: 16px;">Question 2：高铁新城楼市的前景，能否成为下一个园区？</span></p><p style="text-align: justify;"><span style="font-size: 16px;">Question 3：政府限价对未来三到五年房价的影响？苏州相对最值得投资的区域是哪里？</span></p><p style="text-align: justify;"><span style="font-size: 16px;">Question 4：现在各大银行房贷政策越来越严格，这是否在抑制房价增长速度？</span></p><p style="text-align: justify;"><span style="font-size: 16px;">……</span></p><p><span style="font-size: 16px;">7月30日下午，<span style="font-size: 16px;">“度房两周年，我与地产情”主题沙龙活动</span>在苏州高铁新城成功举办。</span></p><p style="text-align: center;"><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/776be11df501447a8d5f8c651d0f0bfa.jpeg" /></p><p style="text-align: center;"><span style="font-size: 16px;">“小度2周年，大话地产情”</span></p><p><span style="font-size: 16px;">本次沙龙聚集了苏南旭辉区域集团副总裁闫强，阳光城江苏区域营销副总经理俞莉敏 ，新源整合总经理陆超，掌上吴江创始人、美高机构创始人、营销鬼才掌爷 ，苏南万科、建发、九龙仓、碧桂园、仁恒、绿地香港、禹州地产、港中旅、和昌、越秀地产、积水住宅、中航里城、中粮、芯城汇等<span style="font-size: 16px;">业界的众多大咖，以及三十位度房铁粉。</span></span></p><p style="text-align: center;"><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/345711466f964b709f7b2d2f0490d0b5.jpeg" /></p><p style="text-align: center;"><span style="font-size: 16px;">首次“铁粉”面基！</span></p><p style="text-align: center;"><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/1d626a73d9734f488e228d101ccb15e8.jpeg" /></p><p style="text-align: center;"><span style="font-size: 16px;">一场地产圈的“博鳌论坛”</span></p><p><span style="font-size: 16px;">活动以嘉宾主题演讲、话题讨论和度房讲坛等全新的形式开展，拉开了“度房苏州”两周年全新升级的序幕。</span></p><p style="text-align: center;"><span style="font-size: 16px;"><strong>度房苏州两周年主题宣传片</strong></span></p><p style="text-align: center;"><span style="font-size: 16px;"><strong>《我与地产情》</strong></span></p><p><span style="font-size: 16px;"></span></p><p><span style="font-size: 16px;"><strong><span style="font-size: 16px;">神秘“度爷”携度房团队惊喜亮相 度房苏州全新升级改版</span></strong></span></p><p><span style="font-size: 16px;">将将将~~~神秘的“度爷”上场了，是软萌的老鲜肉没错！（度爷今天为什么这么man，这么迷人 ）</span></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/b5c791fe938747c0acdafdc518f86505.jpeg" /></p><p style="text-align: center;"><span style="font-size: 16px;">“度爷”揭开神秘面纱</span></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/dd762a8691314b12a74d037150cfb7a6.jpeg" /></p><p><span style="font-size: 16px;">正儿八经的“度爷”，小编都要不习惯了。度房团队的小伙伴们也在这次沙龙上一一亮相。楼市很操蛋，还好他们够专业！</span></p><p><span style="font-size: 16px;">度房苏州已经成立2周年了，不管是微信公众平台还是度房的粉丝群，大家已经习惯把度房苏州叫“度爷”；随着度房苏州在地产媒体中影响的扩大，度爷的形象也是受到很多粉丝的好奇与关注，这次算是度爷的首次出场。</span></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/d3c3883a46014239a5511d6aac853c6c.jpeg" /></p><p><span style="font-size: 16px;">从土拍到项目规划到项目详情，每一刻都有度房的参与，每一刻度房都会第一时间传递第一手信息。度爷在现场分享了过去两年所做的一些成绩：“因为有大家的关心，这两年我们有足够的动力去写稿子，这两年中间出品了23篇10万+稿件。”</span></p><p><span style="font-size: 16px;">除此之外，度房微信群已经超过60个，良好的互动以及粉丝的热爱使每一个微信社群就像一个有爱的集体，彼此分享资讯和观点，度房微信社群已经成为网友分享购房经验的平台。</span></p><p><span style="font-size: 16px;"><strong><span>四位地产大咖精彩分享</span></strong></span></p><p><span style="font-size: 16px;"><strong><span>只有在度房沙龙才听得到的投资经验</span></strong></span></p><p style="text-align: center;"><span><strong><span style="font-size: 16px;"><span style="font-size: 16px;">“营销鬼才”</span>掌爷</span></strong></span></p><p style="text-align: center;"><span><strong><span style="font-size: 16px;">亲述房产投资经历</span></strong></span></p><p><span style="font-size: 16px;"><span style="font-size: 16px;">人称“营销鬼才”的地产业内的媒体红人掌爷，上台做主题演讲。用他自己的话说，是来“分享这几年发了一点小财的技巧”。</span></span></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/d46330dd32f14a45b4f868e36a93d04d.jpeg" /></p><p><span style="font-size: 16px;">掌爷轻松幽默的总结了自己这几年当中的创业历程，当然....还有换房历程。传说中的“鬼才”果然名不虚传！</span></p><p style="text-align: center;"><strong><span style="font-size: 16px;">“<span style="font-size: 16px;">营销传奇</span>”陆超</span></strong></p><p style="text-align: center;"><strong><span style="font-size: 16px;">未来三年苏州房价继续走高，投资空间较大</span></strong></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/83812b041c5849ea8d0cc1a6aa218164.jpeg" /></p><p><span style="font-size: 16px;">苏州新源整合总经理陆超是行业内迅速崛起的专家，屡创营销传奇，2017年由他带领团队操盘的项目卖了150亿，今年预计再创新高，突破180个亿。</span></p><p><span style="font-size: 16px;">陆总说：“苏州这三年来，每年成交量都在萎缩，最大是1200多万方，后来是1000万方到去年是750万方，今年的成交量有可能是在600万方。成交量的萎缩并不是说苏州房地产市场不行了，实际上是因为现在的土地资源越来越稀缺，土地资源的供给越来越谨慎，总的供应量是在下降，但是整个价格其实一直在上升。</span></p><p><span style="font-size: 16px;">未来三年，苏州房价一定还是节节攀升，下一次增长最多不会超过一年半时间，这次涨幅是一次跳幅，正常是一年涨幅20-30%，但是苏州一定是跳着走，建议各位假如有这个机会可以去做一些房地产的投资，能够用一些杠杆投资，三年内出手都没什么太大问题。”</span></p><p style="text-align: center;"><strong><span style="font-size: 16px;">“地产女神”<span style="font-size: 16px;">俞莉敏：</span></span></strong></p><p style="text-align: center;"><strong><span style="font-size: 16px;">供需平衡实现高低价房共存 未来半年房价或将跳涨</span></strong></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/6adabe8a27e94be1a60d9850f72710d8.jpeg" /></p><p><span style="font-size: 16px;">房地产行业代表人物、地产圈女神级人物、阳光城江苏区域营销副总经理俞莉敏女士从她的入行和买房故事讲起，总结了自己这么多年来的投资心得。</span></p><p><span style="font-size: 16px;">她认为：“在你支付可达的情况下，一定要买最核心的城市，这不是涨多少倍的问题，是有人口支撑和安全性的问题</span><span style="font-size: 16px;">，如果纯粹去投资，肯定坚定地选择一二线城市，尤其是苏州。”</span></p><p><span style="font-size: 16px;">对于接下来市场的走势，<span style="font-size: 16px;">俞总</span>也跟大家分享了自己的观点：“苏州高价房和低价房在经历了一年左右的焦灼之后，随着今年下半年高价地和外围的库存的逐步入市，以及更多的购房需求，那么高低价房其实也是可以共存的，相信今年年底到明年年初可能会实现房价的跳涨。”</span></p><p style="text-align: center;"><strong><span style="font-size: 16px;">“地产大神”闫强</span></strong></p><p style="text-align: center;"><strong><span style="font-size: 16px;">地产行业将持续被管控 且不会出现实质性降价</span></strong></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/dc5c8666bd2548f29d422696161bb01a.jpeg" /></p><p><span style="font-size: 16px;">苏南旭辉区域集团副总裁闫强也给现场的各位嘉宾与粉丝带来了行业的一手资讯和专业解读。</span><span style="font-size: 16px;">闫总从政治、经济、社会、城市、发展等各个角度，分析了房地产对于过往20年中国发展的深刻影响。</span></p><p><span style="font-size: 16px;">对于未来的行业形势，闫总带来了几个基本判断：第一是这一两年企业之间的竞争会更加地激烈，强者更强，无论从投资能力，还是资源整合能力；第二是生态圈，对于企业来讲必须有多条腿走路，包括教育、养老、旅游地产、商办等等；第三是房地产行业未来的管控会持续很久，而且未来不会出现实质性降价，只会出现假降价。</span></p><p><span style="font-size: 16px;">闫总表示：“大道当然，做好产品，我们的价值观相对固定，不会因为外部环境的变化显得颠沛流离。”</span></p><p><span style="font-size: 16px;"><strong><span style="font-size: 16px;">度房沙龙直面网友犀利提问</span></strong></span></p><p><span style="font-size: 16px;"><strong><span style="font-size: 16px;">嘉宾解读苏州最值得投资的区域</span></strong></span></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/9df261b27fe64680a9b13a088e581bcf.jpeg" /></p><p><span style="font-size: 16px;">由苏州高铁新城传媒文化有限公司总经理薛冬主持，<span style="font-size: 16px;">阳光城江苏区域营销副总经理俞莉敏、苏州新源整合陆超、地产媒体红人掌爷、绿地香港苏州公司企划总监周祥红、路劲地产公共事业部经理徐霞等嘉宾共话地产情。就<span style="font-size: 16px;">“如何看待苏州目前各大板块发展？”、“我手上的房子是继续持有还是换购？”、“能否说一下这个项目的缺点？”等</span>网友关心的问题，嘉宾一一给出了专业的解答，一度将沙龙氛围推向高潮。</span></span></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/4fb1bba157504386a68002ae2c317483.jpeg" /></p><p><span style="font-size: 16px;">俞总认为，在苏州共同的答案当然是园区是第一选择，因为净值人群和配套是聚集在园区的。其次，她觉得苏州古城每个地方都是非常合适的，但是每个人还是要看居住的位置，工作的位置和相应的配套。</span></p><p><span style="font-size: 16px;">陆总则喜欢在独墅湖边，第一是因为它靠近金鸡湖，离尘不离城；第二，周边环境非常好，几乎金鸡湖所能享受到的自然环境在独墅湖边上也都有；第三，独墅湖边上没有什么商业，居住人群大多都是上班族，相对人口密度小，舒适度高</span><span style="font-size: 16px;">。</span></p><p><span style="font-size: 16px;">掌爷的心得是“哪里限价买哪里”：“我基本上都是买客户的房子，我一直觉得限价是给我们最后一次机会，所以我会抓紧这两年限价买房子。”</span></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/3d370725ca414011b16a3417a2306ad1.jpeg" /></p><p><span style="font-size: 16px;">陆总在分析各大板块发展潜力时认为，浒通板块有十几家开发商进驻，项目差不多有十三四个，去年板块价格在1.6-1.7万，但是今年就已经跳涨了6000-7000块钱。<span style="font-size: 16px;">从开发商角度来说，</span>未来这个板块的竞争压力非常之大。</span></p><p><span style="font-size: 16px;">太湖新城板块现在是苏州房价的低谷，均价在一万二三，在售楼盘有3-4个，外地刚需人群假如资金不太足的话可以选择，性价比还是非常高的。</span></p><p><span style="font-size: 16px;">青剑湖板块已经沉寂了好几年，这个地方的地理环境，教育资源，商业设施资源不是非常好，只是周边环境比较好，有两个湖，但苏州湖太多了，不能持续支撑它过大的卖点。</span></p><p><span style="font-size: 16px;">相城元和板块以及活力岛板块的库存差不多达到340万方，这个地方的竞争相对来说还是比较激烈的。都属于乡镇板块，浒通要奔三，相城要奔四。</span></p><p><span style="font-size: 16px;">对于高铁新城板块未来的价值空间，陆总总结了三句话：新城板块的发展正当时，价格冲刺中，整个板块潜力巨大。</span></p><p><img src="http://5b0988e595225.cdn.sohucs.com/images/20180731/38c07660630949e499be705392a82a69.jpeg" /></p><p><span style="font-size: 16px;">本次沙龙最后，主办方还在度房的3万+社群好友中，根据粉丝活跃度、参与度等标准选出了10位幸运网友，授予“十佳度房粉丝”称号。</span></p><p style="text-align: center;"><span style="font-size: 16px;">度房沙龙，</span><span style="font-size: 16px;">下次再见！</span></p></article>			'
      },
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
      commonData:[],
      // commonData:[
      //   {
      //     avatar:'/static/img/avatar-1.png',
      //     username:'投融网友',
      //     location:'陕西省西安市',
      //     beforeTime:'10分钟前',
      //     content:'谢谢习主席',
      //     from:'投融连线平台',
      //     good:1,
      //   },
      //   {
      //     avatar:'/static/img/avatar-1.png',
      //     username:'投融网友',
      //     location:'陕西省西安市',
      //     beforeTime:'10分钟前',
      //     content:'谢谢习主席',
      //     from:'投融连线平台',
      //     good:1,
      //   },
      //   {
      //     avatar:'/static/img/avatar-1.png',
      //     username:'投融网友',
      //     location:'陕西省西安市',
      //     beforeTime:'10分钟前',
      //     content:'谢谢习主席',
      //     from:'投融连线平台',
      //     good:1,
      //   },
      // ],
      id:'',
      loading:false,
      newsloading:false,
      avatar:'/static/img/avatar-1.png'
    }
  },
  methods:{
    getData(){
      this.id = this.$route.query.id
      this.loading = true
      this.$axios.get(`/jsp/wap/trNews/ctrl/jsonNewsDetail.jsp?id=${this.id}`).then(res => {
        console.log(res);
        this.mesDetailData = res.data
        this.loading = false
      })
      if(Cookies.get('userKey') && this.$store.state.userinfo.headImgPath != ''){
        this.avatar = this.$store.state.userinfo.headImgPath
      }
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
  },
  created(){
    this.getData()
    this.getNewsList()
  }
};
</script>

<style scoped lang="scss">
.contentHtml {
  min-height: 500px;
}
//详情
.mes_card {
  padding: 30px 20px;
  margin-bottom: 20px;
  background: #fff;
  box-sizing: border-box;
  .title {
  font-size: 30px;
  font-family: "Microsoft YaHei";
  color: rgb( 51, 51, 51 );
  line-height: 0.8;
  margin: 0 0 40px;
  }
  .about {
    font-size: 14px;
    color: #999;
    .about_item {
      padding-right: 15px;
    }
  }
  /deep/ {
    .contentHtml {
      img {
        max-width: 830px !important;
      }
    }
  }
}

//信息列表
.mes_list {
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  .mes {
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(51, 51, 51);
    line-height: 1.333;
    text-align: left;
    margin-top: 0;
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
    .mes_more:hover {
      color:#005982;
    }
  }
}
.mes_title {
  border-top: 1px dashed #d9d9d9;

}
.mes_content {
  cursor: pointer;
  font-size: 14px;
  padding: 20px 0;
  border-bottom: 1px solid #d9d9d9;
  color: #d9d9d9;
  overflow: hidden;/*超出部分隐藏*/
  white-space: nowrap;/*不换行*/
  text-overflow:ellipsis;
  .count {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #ccc;
    color: #fff;
    text-align: center;
    line-height: 1.5;
  }
  .hot {
    background: #005982;
  }
}

.mes_title .mes_content:last-child {
  border: none;
  padding-bottom: 0;
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

//讨论
.discuss {
  width: 100%;
  height: 140px;
  margin-top: 40px;
  background: url(/static/img/textarea-1.png) no-repeat center;
  background-size: contain;
  position: relative;
  textarea {
    outline: none;
    -moz-outline: none;
    appearance: none;
    border: 0;
    resize:none;
    overflow:hidden;
    position: absolute;
    left:20px;
    top: 55px;
  }
  .login {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb( 0, 89, 130 );
    position: absolute;
    left:16px;
    top: 2px;
    cursor: pointer;
    color: #005982;
  }
}
.submitBtn {
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
  margin-top: 10px;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  border-radius: 55px;
}

.common_line {
  width: 100%;
  height: 30px;
  margin-top: 20px;
  background: url(/static/img/pinglun.png) no-repeat center;
  background-size: contain;
  position: relative;
  .common {
    position: absolute;
    top: 8px;
    left: 17px;
    color: #005982;
  }
}
.common_title {
  padding-left: 15px;
  border-left: 3px solid #005982;
  color: #005982;
  margin: 20px 0;
}
.common_list {
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px dashed #ccc;
  .common_img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0f0f0;
  }
  .common_item {
    width: 767px;
    margin-left: 20px;
    .username {
      font-size: 16px;
      color: #005982;
      margin-right: 10px;
    }
    .location {
      font-size: 14px;
      line-height: 1.4;
      color:#ccc;
    }
    .beforeTime {
      color: #ccc;
      font-size: 14px;
      line-height: 1.4;
    }
    .content {
    font-family: "Microsoft YaHei";
    }
    .from {
      color: #ccc;
      font-size: 14px;
    }
    .reply {
      color: #999;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
.moreBtn {
  display:block;
  margin:0 auto;
  width: 190px;
  height: 50px;
  text-align:center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: #005982;
  line-height: 1.333;
  padding: 10px 0;
  border: 1px solid #005982;
  border-radius: 95px;
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  background: #fff;
  outline:none
}
.moreBtn:active {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}

.avatar {
  width:46px;
  height: 46px;
  margin-left: 6px;
  border-radius: 50%;
}
</style>