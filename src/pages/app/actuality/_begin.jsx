import React from "react";
import _articles from "../containers/_articles";
import AppBar from "../components/Appbar";
import _posts from "../containers/_posts";

const _begin = () => {
  return (
    <div className="h-screen w-full p-2 bg-zinc-100/50 ">
      <AppBar />
      <div className="flex items-start justify-between h-full">
        <div className="w-1/2 ">
          <_posts />
        </div>
        <div className="w-1/2 ">
          <_articles />
        </div>
      </div>
    </div>
  );
};

export default _begin;
