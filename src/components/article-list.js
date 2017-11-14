import React from "react";
import ArticleItem from './article-item';

const ArticleList = () => {
  return (
    <div className="main-container">
      <h1 className="article-list-heading">
        <span>Krishi</span>
        <span> Gyan</span>
      </h1>
      <ArticleItem/>
    </div>
  );
};

export default ArticleList;
