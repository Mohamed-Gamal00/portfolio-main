import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

// Emitter Config
import mitt from "mitt";
const Emitter = mitt();

createApp(App)
  .use(router)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .mount('#app')
