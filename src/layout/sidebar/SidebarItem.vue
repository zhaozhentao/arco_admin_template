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
      return this.parentPath === '' ? this.item.path : this.parentPath + '/' + this.item.path
    }
  }
}
</script>
