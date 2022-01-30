<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p v-if="test">test: {{ test }}</p>
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { HelloWorld },
  data() {
    return {
      test: null
    }
  },
  mounted() {
    this.test = this.$el.parentElement.getAttribute('test')
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
