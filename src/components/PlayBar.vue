<template>
  <div v-if="duration" class="playbar-container" @mousedown="seek">
    <div class="playbar">
      <div v-if="currentTime" class="marker" :style="{ left: (currentTime / duration) * 100 + '%' }"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    currentTime: {
      type: Number,
      default: null
    },
    duration: {
      type: Number,
      default: null
    }
  },
  emits: ['seek'],
  methods: {
    seek(event: any): void {
      this.$emit('seek', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.playbar-container {
  width: 100%;
  margin: 0px 1rem;
  padding: 1rem 0px;
  .playbar {
    background: #808080;
    height: 0.25rem;
    .marker {
      background: #000;
      height: 1.5rem;
      position: relative;
      top: -10px;
      left: 0px;
      width: 0.25rem;
    }
  }
}
</style>
