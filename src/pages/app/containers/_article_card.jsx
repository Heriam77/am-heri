import React from "react";
import { BiLike } from "react-icons/bi";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia nulla dicta magni cumque Obcaecati sequi soluta distinctio ipsum consectetur";
const Articles = [
  {
    $_title: "La voix de l'univers",
    $_text: lorem,
    $_author: "Ruddy Evans",
  },
  {
    $_title: "La voix de l'univers",
    $_text: lorem,
    $_author: "Ruddy Evans",
  },
  {
    $_title: "La voix de l'univers",
    $_text: lorem,
    $_author: "Ruddy Evans",
  },
  {
    $_title: "La voix de l'univers",
    $_text: lorem,
    $_author: "Ruddy Evans",
  },
  {
    $_title: "La voix de l'univers",
    $_text: lorem,
    $_author: "Ruddy Evans",
  },
];

const _article_card = () => {
  return (
    <div className="flex items-start gap-2 mt-2">
      <ul className="p-2 ">
        {Articles.map((item) => (
          <li className="shadow shadow-zinc-100 p-2 rounded-lg bg-zinc-100 mb-4">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold ">{item.$_title}</h1>
              <button className="py-1 px-3 bg-pink-300/20 rounded font-semibold text-xs text-pink-500">
                Epingler
              </button>
            </div>
            <p className="text-xs p-2 ">{item.$_text}</p>
            <div className="flex items-center justify-between">
              <b className="px-2 text-zinc-600">{item.$_author}</b>
              <div className="flex items-center gap-1 ">
                <button className="">
                  <BiLike />
                </button>
                <p className="text-xs text-center font-semibold text-zinc-600/80">
                  3,231 likes
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default _article_card;
