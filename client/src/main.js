import { createApp } from "vue";
import App from "./App.vue";
import { initFacebookSdk } from "./helpers/init-facebook-sdk";
import route from "./routes";

const app = createApp(App);
app.use(route);
app.config.productionTip = false;
initFacebookSdk().then(startApp);
function startApp() {
  app.mount("#app");
}
