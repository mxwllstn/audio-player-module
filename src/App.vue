<template>
  <div v-if="src">
    <AudioPlayer :src="src" :stream="stream" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AudioPlayer from 'audio-player'

export default defineComponent({
  components: { AudioPlayer },
  data() {
    return {
      src: undefined as string | undefined,
      stream: undefined as string | undefined
    }
  },
  mounted() {
    this.src = this.$el.parentElement.getAttribute('src')
    this.stream = this.$el.parentElement.getAttribute('stream')
  }
})
</script>

<style lang="scss"></style>
