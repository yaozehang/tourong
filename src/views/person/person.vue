<template>
<div class="person_content fll">
    <div class="project">
        <p class="project_title">
          <span class="project_">项目进展</span>
          <span class="project_more flr" @click="$router.push('/project')">查看更多></span>
        </p>
        <div v-for="(item, index) in projectData.slice(0,3)" :key="index" class="project_list">
          <p class="title">{{item.title}}</p>
          <p class="con clearfix">
            <span class="content fll">{{item.content}}</span>
            <span class="time flr">
              <i></i>
              {{item.time}}
              <span class="seconed">{{item.seconed}}</span>
            </span>
          </p>
        </div>
    </div>
    <div class="project" style="margin-top:50px;">
        <p class="project_title">
          <span class="project_">资金动态</span>
          <span class="project_more flr"  @click="$router.push('/money')">查看更多></span>
        </p>
        <div v-for="(item, index) in moneyData.slice(0,2)" :key="index" class="project_list bd_none">
          <p class="title">{{item.title}}</p>
          <p class="con clearfix">
            <span class="content fll">{{item.content}}</span>
            <span class="time flr">
              <i></i>
              {{item.time}}
              <span class="seconed">{{item.seconed}}</span>
            </span>
          </p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projectData:[
          {
            title:'北京某互联网创新创业服务平台项目',
            content:'感谢大家关注本项目，现已经正式投入研发，预计年底之前上线 ',
            time:'2018-11-29',
            seconed:'15:56:31'
          },
          {
            title:'北京某互联网创新创业服务平台项目',
            content:'感谢大家关注本项目，现已经正式投入研发，预计年底之前上线 ',
            time:'2018-11-29',
            seconed:'15:56:31'
          },
          {
            title:'北京某互联网创新创业服务平台项目',
            content:'感谢大家关注本项目，现已经正式投入研发，预计年底之前上线 ',
            time:'2018-11-29',
            seconed:'15:56:31'
          },
          {
            title:'北京某互联网创新创业服务平台项目',
            content:'感谢大家关注本项目，现已经正式投入研发，预计年底之前上线 ',
            time:'2018-11-29',
            seconed:'15:56:31'
          },
        ],
         moneyData:[
          {
            title:'北京某互联网创新创业服务平台项目',
            content:'感谢大家关注本项目，现已经正式投入研发，预计年底之前上线 ',
            time:'2018-11-29',
            seconed:'15:56:31'
          },
          {
            title:'北京某互联网创新创业服务平台项目',
            content:'感谢大家关注本项目，现已经正式投入研发，预计年底之前上线 ',
            time:'2018-11-29',
            seconed:'15:56:31'
          },
          {
            title:'北京某互联网创新创业服务平台项目',
            content:'感谢大家关注本项目，现已经正式投入研发，预计年底之前上线 ',
            time:'2018-11-29',
            seconed:'15:56:31'
          },
          {
            title:'北京某互联网创新创业服务平台项目',
            content:'感谢大家关注本项目，现已经正式投入研发，预计年底之前上线 ',
            time:'2018-11-29',
            seconed:'15:56:31'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
.project_title {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  color: rgb( 0, 83, 133 );
  font-weight: bold;
  border-bottom: 1px dashed #cdcdcd;
  padding-bottom: 20px;
  margin-bottom: 0;
  .project_ {
    padding-left: 20px;
    border-left: 5px solid #005982;
  }
  .project_more {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb( 153, 153, 153 );
    cursor: pointer;
  }
  .project_more:hover {
    color: #000;
  }
}
  .project_list {
    padding: 20px 0;
    border-bottom: 1px solid #cdcdcd;
    .title {
      font-size: 18px;
      font-family: "Microsoft YaHei";
      color: rgb( 51, 51, 51 );
      font-weight: bold;
    }
    .content {
      font-size: 14px;
      font-family: "Microsoft YaHei";
      color: rgb( 102, 102, 102 );
      width: 710px;
      overflow: hidden; /*超出部分隐藏*/
      white-space: nowrap; /*不换行*/
      text-overflow: ellipsis;
    }
    .time {
      font-size: 16px;
      font-family: "Microsoft YaHei";
      color: rgb( 204, 204, 204 );
      i {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url(/static/img/time-2.png)no-repeat center;
        background-size: contain;
      }
      .seconed {
        margin-left: 20px;
      }
    }
  }
  .project .project_list:last-child {
    border-bottom: 1px solid #cdcdcd;
  }
  .project .bd_none:last-child {
    border-bottom: none;
  }


</style>