import HomePage from "./src/pages/index";
import Article from "./src/components/article";

const config = {
  templates: {
    "gatsby:pages/home": HomePage,
    "gatsby:components/article": Article
  }
};

export default config;
