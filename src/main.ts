import { createApp } from "vue";
import App from "./App.vue";
import Echarts from 'vue-echarts'
import * as echarts from 'echarts'

const app = createApp(App);

app.component('e-charts',Echarts)
app.config.globalProperties.$echarts = echarts
app.mount("#app");
