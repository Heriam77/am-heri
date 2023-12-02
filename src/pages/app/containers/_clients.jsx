import React from "react";
import Image from "../../../assets/images/homme.jpg";
import { BiLogoMessenger } from "react-icons/bi";

var clients = [
  {
    $_client_image: Image,
    $_client_name: "Ruddy Evans",
    $_client_prestation: "freelance",
  },
  {
    $_client_image: Image,
    $_client_name: "Ruddy Evans",
    $_client_prestation: "freelance",
  },
  {
    $_client_image: Image,
    $_client_name: "Ruddy Evans",
    $_client_prestation: "freelance",
  },
  {
    $_client_image: Image,
    $_client_name: "Ruddy Evans",
    $_client_prestation: "freelance",
  },
  {
    $_client_image: Image,
    $_client_name: "Ruddy Evans",
    $_client_prestation: "freelance",
  },
  {
    $_client_image: Image,
    $_client_name: "Ruddy Evans",
    $_client_prestation: "freelance",
  },
  {
    $_client_image: Image,
    $_client_name: "Ruddy Evans",
    $_client_prestation: "freelance",
  },
];

const _clients = () => {
  return (
    <div className="bg-white shadow-lg shadow-zinc-100 p-2 my-2 rounded-lg overflow-y-auto overflow-x-hidden w-1/4 h-full">
      <h1 className="font-semibold px-2 w-fit">My Clients</h1>
      <ul className="grid items-center justify-start py-2 ">
        {clients.map((item) => (
          <li
            className=" bg-white hover:bg-pink-500/5 rounded cursor-pointer p-2 border-zinc-100 flex items-start justify-start gap-3"
            key={item.index}
          >
            <div className="">
              <img
                src={item.$_client_image}
                alt="_clients"
                className="w-12 h-12 rounded-full border-4 border-zinc-100"
              />
            </div>
            <div className="grid items-start ">
              <p className="flex items-center justify-center ">
                {item.$_client_name}
              </p>
              <p className="text-xs first-letter:uppercase text-zinc-500">
                {item.$_client_prestation}
              </p>
            </div>
            <div className="text-xl text-pink-600/80 mt-1 ml-4 p-2">
              <BiLogoMessenger />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default _clients;
