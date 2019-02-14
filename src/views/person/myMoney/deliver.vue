<template>
   <div class="fll">
    <div class="person_content">
      <p class="clearfix">
        <span class="mine_money fll">我的投递</span>
      </p>
      <p class="project_title">
        <span class="project_"></span>
      </p>
      <div class="invest-menu clearfix">
        我的投递
      </div>
      <div class="mes_page">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="total, prev, pager, next, jumper"
          :total="count"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>