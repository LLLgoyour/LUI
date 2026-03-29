import type { App, Plugin } from "vue";

import LButton from "./components/LButton.vue";
import LSurface from "./components/LSurface.vue";
import LTagChip from "./components/LTagChip.vue";

const components = [LButton, LTagChip, LSurface] as const;

export { LButton, LTagChip, LSurface };

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

const plugin: Plugin = {
  install,
};

export default plugin;
