<template>
  <a-menu-item v-if="item.children === undefined || item.children.length === 0" :key="fullPath">
    {{ item.meta.title }}
  </a-menu-item>

  <a-sub-menu v-else :key="fullPath">
    <template v-if="item.meta.icon" #icon><component :is="item.meta.icon" /></template>

    <template #title>{{ item.meta.title }}</template>

    <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :parent-path="fullPath" />
  </a-sub-menu>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object
    },
    parentPath: {
      type: String
    }
  },
  computed: {
    fullPath() {
      let path = this.item.path.startsWith('/') ? this.item.path.substr(1) : this.item.path
      path = this.parentPath + '/' + path
      return path.replaceAll('//', '/')
    }
  }
}
</script>
