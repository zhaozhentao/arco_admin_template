<template>
  <div class="page-wrapper">
    <div class="layout-navbar">
      <div class="navbar">
        <div class="side-left">
          <div style="height: 38px">
            <img src="@/assets/icon.svg"/>
          </div>

          <h5 class="arco-typography brand">
            Arco Design
          </h5>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <side-bar/>

      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import SideBar from './sidebar'

export default {
  components: {
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
  padding-top: 60px;
  width: 100%;
  height: 100%;
}

.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  min-width: 1100px;
  height: 60px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.side-left {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.content-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
}

.brand {
  font-size: 18px;
  margin: 0 0 0 8px;
}
</style>
