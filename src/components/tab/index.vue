<template>
  <div class="tab-wrapper">
    <div class="tab">
       <router-link class="tab-item" to="recommend">
         <span>推荐</span>
       </router-link>
      <router-link class="tab-item" to="singer">
        <span>歌手</span>
      </router-link>
      <router-link class="tab-item" to="rank">
        <span>排行</span>
      </router-link>
      <router-link class="tab-item" to="search">
        <span>搜索</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab"
  }
</script>

<style scoped lang="stylus">
  .tab
    line-height: 44px
    display flex
    display -webkit-flex
    background $color-background
    .tab-item
      flex 1
      font-size: 14px
      text-align: center
      color hsla(0,0%,100%,.5)
    .router-link-active span
      padding-bottom 5px
      border-bottom 2px solid #ffcd32
      color #ffcd32
</style>