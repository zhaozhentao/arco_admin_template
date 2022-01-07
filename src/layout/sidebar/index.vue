<template>
  <a-menu
      :style="{ width: '220px', height: '100%', flexShrink: 0 }"
      :default-open-keys="['0', '1', '2']"
      :default-selected-keys="['0_1']"
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
    }
  }
}
</script>
