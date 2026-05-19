import DefaultTheme from "vitepress/theme";
import RoadmapTable from "./components/RoadmapTable.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("RoadmapTable", RoadmapTable);
  }
};
