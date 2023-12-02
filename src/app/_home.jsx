import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import _container from "./_container";

var items = [
  {
    $_link: "/",
    $_label: "Home",
  },
  {
    $_link: "/",
    $_label: "About me",
  },
  {
    $_link: "/",
    $_label: "Projects",
  },
  {
    $_link: "/",
    $_label: "Testimonials",
  },
  {
    $_link: "/",
    $_label: "Contact me",
  },
];

const _home = () => {
  return (
    <>
      <div className="h-full w-full bg-indigo-950 rounded-lg text-sm/6">
        <div className="py-3 px-9 w-full bg-white/30 rounded-t-lg flex items-center justify-between">
          <div className="Logo text-2xl font-semibold">Heri</div>
          <ul className="flex items-center justify-between gap-4 ">
            {items.map((item) => (
              <li
                className="cursor-pointer font-semibold px-2 py-1 rounded-lg hover:text-white border-4 border-transparent hover:border-4 hover:border-white/50"
                key={item.index}
              >
                {item.$_label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div className=" text-6xl text-white/20 hover:text-white/40 cursor-pointer">
            <BiLeftArrow />
          </div>
          <div className="">
            <_container />
          </div>
          <div className="text-6xl text-white/20 hover:text-white/40 cursor-pointer">
            <BiRightArrow />
          </div>
        </div>
        <div className="">
          <ul className="flex items-center justify-center gap-2">
            {items.map((slide) => (
              <li
                className="p-1 rounded-full bg-white/30 cursor-pointer"
                key={slide.index}
              >
                {slide.lenght}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default _home;
