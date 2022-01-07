<template>
  <a-space>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
  </a-space>

  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script>
export default {
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
a {
  color: #42b983;
}
</style>
