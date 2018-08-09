<template>
  <div class="m-header">
    <div class="music-icon">

    </div>
    <h1>
      Chicken Music
    </h1>
    <a class="user">
      <i class="icon-font icon-user">
        &#xe604;
      </i>
    </a>
  </div>
</template>

<script>
  export default {
    name: "mheader"
  }
</script>
<style scoped lang="stylus">
  @import '../../common/stylus/variable'
  @import '../../common/stylus/mixin'
  .m-header
    position: relative
    height 44px
    color $color-theme
    text-align center
    line-height 44px
    background $color-background
    h1
      display inline-block
      font-size $font-size-large
      font-weight normal
    .music-icon
      display inline-block
      vertical-align top
      margin-top 6px
      width 30px
      height 32px
      margin-right 9px
      bg-image('logo')
      background-size 30px 32px
    .user
      position absolute
      top: 0
      right: 12px

</style>