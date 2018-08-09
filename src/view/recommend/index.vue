<template>
  <div class="recommend-wrapper" ref="recommendWrapper">
    <div class="content">
      <slider :recommendList="recommendList"></slider>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="item in getDiscList">
          <span class="icon">
            <img v-lazy="item.imgurl" alt="">
          </span>
            <div class="details">
              <h2>{{ item.creator.name }}</h2>
              <p>{{ item.dissname }}</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { getRecommend,getDiscList } from '../../api/recommend'
  import slider from '../../base/slider/slider'
  import BScroll from 'better-scroll'

  export default {
    name: "recommend",
    components:{
      slider
    },
    data () {
      return {
        recommendList:[],
        getDiscList:[]
      }
    },
    created () {
      this._getRecommend()
      this._getDiscList()
      this.$nextTick( ()=> {
        this._initScroll()
      })

    },
    methods: {
      _getRecommend () {
        getRecommend().then(res => {
          if (res.code == 0) {
            this.recommendList = res.data.slider
          }
        })
      },
      _getDiscList () {
        getDiscList().then(res => {
          if (res.code == 0) {
            this.getDiscList = res.data.list
            console.log(this.getDiscList)
          }
        })
      },
      _initScroll () {
        this.scroll = new BScroll(this.$refs.recommendWrapper,{
          click:true
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
.recommend-wrapper
  position: fixed
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  z-index: -1;
.list-title
  text-align: center
  line-height: 65px
  font-size: 14px
  color: #ffcd32
.recommend-list li
  display flex
  padding:0 20px 20px
  align-items center
  .icon
    width:60px
    flex:0 0 60px
    img
      width: 100%

.details
  margin-left: 20px
  font-size: 14px
  p
    color: #666
    margin-top: 10px
</style>