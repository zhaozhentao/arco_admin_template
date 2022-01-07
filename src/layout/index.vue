<template>
  <div class="menu-demo">
    <div class="layout-navbar">
      <div class="navbar">

      </div>
    </div>

    <side-bar />
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
  },
  data() {
    return {
      count: 1
    }
  }
}
</script>

<style scoped>
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

.menu-demo {
  box-sizing: border-box;
  padding-top: 60px;
  width: 100%;
  height: 100%;
}
</style>
