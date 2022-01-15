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
  margin-top: 50px;
}
</style>
