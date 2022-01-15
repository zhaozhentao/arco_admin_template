<template>
  <a-menu-item v-if="item.children === undefined || item.children.length === 1" :key="fullPath">
    <template v-if="item.children !== undefined" #icon>
      <component :is="item.children[0].meta.icon" />
    </template>

    {{ item.children === undefined ? item.meta.title : item.children[0].meta.title }}
  </a-menu-item>

  <a-sub-menu v-else :key="fullPath">
    <template v-if="item.meta.icon" #icon>
      <component :is="item.meta.icon" />
    </template>

    <template #title>{{ item.meta.title }}</template>

    <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :parent-path="fullPath" />
  </a-sub-menu>
</template>

<script setup>
import SidebarItem from '.'
import { defineProps, computed } from 'vue'

const props = defineProps({
  item: Object,
  parentPath: String
})

const fullPath = computed(() => {
  let path = props.item.path.startsWith('/') ? props.item.path.substr(1) : props.item.path
  path = props.parentPath + '/' + path
  return path.replaceAll('//', '/')
})
</script>
