/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { graphql } from "gatsby";
import { Area } from "react-magnolia";
import styles from "../css/global.module.css";

let singlePageContent;

if (typeof window !== `undefined` && window.singlePageConfig) {
  singlePageContent = window.singlePageConfig.content;
}

const Home = props => {
  if (singlePageContent) {
    const { content } = singlePageContent;
    console.log("Author mode - content from window object");
    return <Area {...content} className={styles.contentArea} />;
  }

  const {
    data: { magnoliaContent }
  } = props;
  const { results } = JSON.parse(magnoliaContent.pageContent);
  const { content } = results.find(node => node["@name"] === "home");
  console.log("Preview mode - content from GraphQL");
  return <Area {...content} className={styles.contentArea} />;
};

export default Home;

export const pageQuery = graphql`
  query {
    magnoliaContent {
      pageContent
    }
  }
`;
