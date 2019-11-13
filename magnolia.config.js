import HomePage from "./src/pages/index";
import { ArticleArea, ArticleItem } from "./src/components/article";

const config = {
  templates: {
    "gatsby:pages/home": HomePage,
    "gatsby:areas/article": ArticleArea,
    "gatsby:components/article": ArticleItem
  }
};

export default config;
