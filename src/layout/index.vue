<template>
  <div class="page-wrapper">
    <navbar />

    <div class="content-wrapper">
      <side-bar />

      <router-view class="content" />
    </div>
  </div>
</template>

<script>
import Navbar from './navbar'
import SideBar from './sidebar'

export default {
  components: {
    Navbar,
    SideBar
  },
  props: {
    msg: String
  }
}
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
