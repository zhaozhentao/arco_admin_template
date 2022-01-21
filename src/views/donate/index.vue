<template>
  <div>
    <textarea></textarea>
  </div>
</template>

<script>
import '@/simplemde.min'
import hljs from 'highlight.js/lib/core'
import php from 'highlight.js/lib/languages/php'
import { marked } from 'marked'

export default {
  mounted() {
    hljs.initHighlightingOnLoad()
    hljs.registerLanguage('php', php);

    let s = new SimpleMDE({
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
      },
      previewRender: (plainText) => {
        return marked(plainText, {
          langPrefix: 'hljs ',
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return hljs.highlightAuto(code).value;
          }
        });
      }
    })
  }
}
</script>

<style lang="css">
@import "../../styles/simplemde.min.css";
@import "../../../node_modules/highlight.js/styles/monokai-sublime.css";
</style>
