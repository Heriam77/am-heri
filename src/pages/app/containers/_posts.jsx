import React from "react";
import _post_card from "./_post_card";

const _posts = () => {
  return (
    <div className="bg-white p-2 ml-0 m-2 rounded-lg h-full shadow-lg shadow-zinc-100">
      <h1 className="font-semibold px-2">Posts</h1>
      <_post_card />
      <_post_card />
    </div>
  );
};

export default _posts;
