import React from "react";
import _article_card from "./_article_card";

const _articles = () => {
  return (
    <div className="bg-white p-2 ml-0 m-2 rounded-lg h-full shadow-lg shadow-zinc-100
    overflow-x-hidden overflow-y-auto">
      <h1 className="font-semibold px-2">Articles</h1>
      <_article_card />
    </div>
  );
};

export default _articles;
