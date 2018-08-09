<template>
  <div>
    singer
  </div>
</template>

<script>
  import { getSinger } from '../../api/singer'
  export default {
    data () {
      return {
        singerList:[]
      }
    },
    created () {
      this._getSinger()
    },
    methods:{
      _getSinger () {
        getSinger().then(res => {
          if ( res.code ==0 ){
            this.singerList = res.data
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>