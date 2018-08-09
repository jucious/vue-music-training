<template>
  <div id="app">
      <mheader>

      </mheader>
      <tab>

      </tab>
      <keep-alive>
        <router-view>

        </router-view>
      </keep-alive>

  </div>
</template>

<script>
import mheader from './components/mHeader/mheader'
import tab from './components/tab/index'
export default {
  name: 'App',
  components:{
    mheader,
    tab
  }
}
</script>

<style lang="stylus" ></style>
