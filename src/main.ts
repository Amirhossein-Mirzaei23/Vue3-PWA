import { createApp } from 'vue'
import App from './App.vue'

import { useRegisterSW } from 'virtual:pwa-register/vue'

const app = createApp(App)

useRegisterSW({
  onOfflineReady() {
    console.log('App ready to work offline')
  },
  onNeedRefresh() {
    console.log('New content available, refresh needed')
  },
})
// vue-tsc -b &&
app.mount('#app')
