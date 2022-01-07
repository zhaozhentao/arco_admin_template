<template>
  <a-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0', '1', '2']"
      :default-selected-keys="['0_1']"
      show-collapse-button
  >
    <a-sub-menu key="0">
      <template #icon><icon-apps /></template>
      <template #title>Navigation 1</template>
      <a-menu-item key="0_0">Menu 1</a-menu-item>
      <a-menu-item key="0_1">Menu 2</a-menu-item>
      <a-menu-item key="0_2" disabled>Menu 3</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="1">
      <template #icon><icon-bug /></template>
      <template #title>Navigation 2</template>
      <a-menu-item key="1_0">Menu 1</a-menu-item>
      <a-menu-item key="1_1">Menu 2</a-menu-item>
      <a-menu-item key="1_2">Menu 3</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="2">
      <template #icon><icon-bulb /></template>
      <template #title>Navigation 3</template>
      <a-menu-item key="2_0">Menu 1</a-menu-item>
      <a-menu-item key="2_1">Menu 2</a-menu-item>
      <a-menu-item key="2_2">Menu 3</a-menu-item>
      <a-menu-item key="2_3">Menu 4</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
