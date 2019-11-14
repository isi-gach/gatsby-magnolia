/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styles from "./article.module.css";

const ArticleItem = props => {
  const { link, title, text } = props;

  return (
    <div className={styles.article}>
      <a href={link}>
        <img src="https://picsum.photos/640/640" alt={title} />
        <div className={styles.articleBody}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

export default ArticleItem;
