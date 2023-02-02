import { createApp } from "vue";
import App from "./App.vue";
import vScale from "./index";
console.log("🚀 ~ file: main.js:4 ~ vScale", vScale);

const app = createApp(App);

app.use(vScale);
app.mount("#app");
