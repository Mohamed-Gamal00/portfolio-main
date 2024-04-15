import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "@/assets/style/main.css"
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

loadFonts()

// Emitter Config
import mitt from "mitt";
const Emitter = mitt();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueViewer)
  .provide("Emitter", Emitter)
  .mount('#app')
