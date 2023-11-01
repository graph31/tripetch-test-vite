import { createApp } from 'vue'
import "bootstrap"
import './assets/style/main.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
