<template>
  <div class="bg-fa">
    <div class="w1200">
      <div class="bread">
        <span>
          <router-link to="/home">首页 ></router-link>
        </span>
        <span>
          <router-link to="/message">个人中心</router-link>
        </span>
        <span v-show="$route.meta.title != '个人中心'">> {{$route.meta.title}}</span>
      </div>
      <div class="person_navbar">
        <div class="person_top"></div>
        <div>
          <img src="" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.person_navbar {
  width: 220px;
  height: 865px;
  background: #fff;
  margin-bottom: 100px;
  .person_top {
    width: 100%;
    height: 50px;
    background: url(/static/img/person.png) no-repeat center;
    background-size: contain;
  }
}
</style>