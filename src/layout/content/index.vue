<template>
  <navbar />

  <side-bar />

  <transition name="fade-transform" mode="out-in">
    <router-view class="content" />
  </transition>
</template>

<script setup>
import Navbar from '@/layout/navbar'
import SideBar from '@/layout/sidebar'
</script>

<style scoped>
.content {
  width: 100%;
  overflow-y: scroll;
}
</style>

<style>
#app {
  box-sizing: border-box;
  padding-top: 50px;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
