import { createApp } from 'vue';
import App from './App.vue';
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

const app = createApp(App)
app.use(Equal).mount('#app');
