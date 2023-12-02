import React from "react";
import Image from "../../../assets/images/homme.jpg";
import { BiPlus, BiSearch } from "react-icons/bi";

const Appbar = () => {
  return (
    <div className=" sticky top-2 p-2 rounded-lg bg-white shadow-lg shadow-zinc-100 flex items-center justify-between">
      <form action="search" className="flex">
        <div className=" text-2xl text-white bg-pink-500 w-fit p-2 cursor-pointer rounded-l ">
          <BiSearch />
        </div>
        <input
          type="text"
          className="outline-none border border-zinc-100 p-2 rounded-r w-72"
          placeholder="search here..."
        />
      </form>
      <div className="flex items-center justify-between gap-2">
        <div className=" text-2xl text-white bg-pink-500 w-fit p-2 cursor-pointer rounded-full shadow">
          <BiPlus />
        </div>
        <div className="">
          <img
            src={Image}
            alt="user"
            className="cursor-pointer rounded-full shadow-lg h-10 w-10 border-4 border-pink-500/30"
          />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
