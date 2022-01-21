<template>
  <a-layout class="layout-demo">
    <a-layout-content>
      <textarea ref="t" />

      <div v-html="preview" />
    </a-layout-content>
  </a-layout>
</template>

<script>
import SimpleMDE from 'simplemde'
import hljs from 'highlight.js/lib/core'
import php from 'highlight.js/lib/languages/php'
import { marked } from 'marked'

import 'simplemde/dist/simplemde.min.css'
import 'highlight.js/styles/monokai-sublime.css'

export default {
  data() {
    return {
      preview: null
    }
  },
  mounted() {
    hljs.registerLanguage('php', php);

    let previewRender = plainText => marked(plainText, {
      langPrefix: 'hljs ',
      renderer: new marked.Renderer(),
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
      highlight: code => hljs.highlightAuto(code).value
    })

    let s = new SimpleMDE({
      element: this.$refs['t'],
      previewRender
    })

    s.codemirror.on('change', () => {
      this.preview = previewRender(s.value())
    })
  }
}
</script>

<style lang="css">
.hljs {
  font-weight: 700;
}
</style>

<style scoped>
.layout-demo {
  padding: 16px;
}

.layout-demo :deep(.arco-layout-content) {
  background: var(--color-bg-3);
  padding: 16px;
  margin-bottom: 16px;
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  line-height: 48px;
}
</style>
