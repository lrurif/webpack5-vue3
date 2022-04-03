import "@/assets/css/common.css"
import "@/assets/css/index.scss"
import { createApp } from "vue"
import router from "@/router"
import App from "@/App.vue"
import store from "@/store"


import elementUI from 'element-plus'
import 'element-plus/dist/index.css'




const app = createApp(App)
app.use(router)
app.use(store)
app.use(elementUI)
app.mount("#app")

