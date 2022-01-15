<template>
  <div class="page-wrapper">
    <navbar />

    <div class="content-wrapper">
      <side-bar />

      <transition name="fade-transform" mode="out-in">
        <router-view class="content" />
      </transition>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/layout/navbar'
import SideBar from '@/layout/sidebar'
</script>

<style scoped>
.page-wrapper {
  box-sizing: border-box;
  padding-top: 50px;
  width: 100%;
  height: 100%;
}

.content-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  overflow-y: scroll;
}
</style>
