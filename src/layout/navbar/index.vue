<template>
  <div class="navbar">
    <div class="side-left">
      <div style="height: 38px"><img src="@/assets/icon.svg" /></div>

      <h5 class="arco-typography brand">Arco Design</h5>
    </div>

    <ul class="side-right">
      <li>
        <a-dropdown @select="onMenuClick">
          <a-avatar :size="32">
            <img
              alt="avatar"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
          </a-avatar>

          <template #content>
            <a-doption>Github</a-doption>
            <a-doption>退出登录</a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const $store = useStore()
const $router = useRouter()

const onMenuClick = async v => {
  switch (v) {
    case '退出登录':
      await $store.dispatch('user/logout')
      await $router.replace('/login')
      break
    case 'Github':
      window.open("https://github.com/zhaozhentao/arco_admin_template", "_blank")
      break
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.side-left {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.side-right {
  display: flex;
  align-items: center;
  padding-right: 20px;
  list-style: none;
}

.brand {
  font-size: 18px;
  margin: 0 0 0 8px;
}
</style>
