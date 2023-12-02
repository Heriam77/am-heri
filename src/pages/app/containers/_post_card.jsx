import React from "react";
import Image from "../../../assets/images/homme.jpg";
import { BiComment, BiLike } from "react-icons/bi";

const _post_card = () => {
  return (
    <>
      <div className="flex items-start justify-center gap-2 mt-2 h-full">
        <ul className="px-2 pb-2 rounded-xl border border-zinc-100">
          <li>
            <div className="py-2 flex items-center justify-between">
              <h1 className="font-semibold ">Ruddy Evans</h1>
              <p className="text-xs">il y a 3 jours</p>
            </div>
            <img src={Image} alt="_post" className="rounded" />
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              qui.
            </p>
            <div className="flex items-center justify-start gap-6 ">
              <div className="grid items-center gap-1 w-1/2 ">
                <button className="shadow text-center flex items-center justify-center py-2 text-xl rounded-xl bg-zinc-100">
                  <BiLike />
                </button>
                <p className="text-xs text-center font-semibold text-zinc-600/80">
                  3,231 likes
                </p>
              </div>
              <div className="grid items-center gap-1 w-1/2">
                <button className="shadow text-center flex items-center justify-center py-2 text-xl rounded-xl bg-zinc-100">
                  <BiComment />
                </button>
                <p className="text-xs text-center font-semibold text-zinc-600/80">
                  261 comments
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default _post_card;
