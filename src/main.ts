import { createApp } from 'vue'
import App from './App.vue'

const vues = document.querySelectorAll('audio-player')
vues.forEach(vue => createApp(App).mount(vue))
