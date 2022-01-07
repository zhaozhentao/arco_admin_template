<template>
  <a-menu
      :style="{ width: '220px', height: '100%', flexShrink: 0 }"
      :default-selected-keys="[openedMenu]"
      :auto-open="true"
      @menu-item-click="to"
      show-collapse-button
  >

    <sidebar-item v-for="route in routes" :key="route.path" :item="route" parent-path="" />
  </a-menu>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  components: {
    SidebarItem
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter(i => !i['hidden'])
    },
    openedMenu() {
      return this.$route.path
    }
  },
  methods: {
    to(key) {
      this.$router.push(key)
    }
  }
}
</script>
