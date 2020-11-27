<template>
  <div class="app-main-layout">

  <Navbar v-on:click="isFetching=!isFetching"/>
    <SideBar  v-model="isFetching"/>


    <main class="app-content " :class="{full:!isFetching}">
      <div class="app-page">
        <router-view/>

      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue"  to="/record">

        <i class="large material-icons">add</i>

      </router-link>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/app/Navbar'
import SideBar from '@/components/app/SideBar'

export default {
  name: "MainLayout",
  data:()=>({
    isFetching:false
  }),
  components:{
    Navbar,SideBar

  }
}
</script>

<style scoped>

</style>
