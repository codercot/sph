<template>
  <div class="home">
    <!-- 导航 -->
    <typeNav></typeNav>
    <!-- 列表 -->
    <listContent></listContent>
    <!-- 推荐 -->
    <recommend></recommend>
    <!-- 热卖 -->
    <rank></rank>
    <!-- 猜你喜欢 -->
    <like></like>
    <!-- 家用电器 -->
    <floor></floor>
    <floor></floor>
    <!-- 商标 -->
    <brand></brand>
  </div>
</template>

<script>
import typeNav from './cpns/typeNav.vue';
import listContent from './cpns/list-content.vue'
import recommend from './cpns/recommend.vue'
import rank from './cpns/rank.vue'
import like from './cpns/like.vue'
import floor from './cpns/floor.vue'
import brand from './cpns/brand.vue'
  export default {
    components:{
      typeNav,
      listContent,
      recommend,
      rank,
      like,
      floor,
      brand
    }
  }
</script>

<style scoped lang="less">

</style>