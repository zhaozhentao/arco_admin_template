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

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SidebarItem from './sidebar-item'

const $router = useRouter()

const routes = computed(() => $router.options.routes.filter(i => !i['hidden']))

const openedMenu = computed(() => $router.currentRoute.value.path)

const to = key => $router.push(key)
</script>
