// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import './index.css'

// createApp(App).use(router).mount('#app')
 
