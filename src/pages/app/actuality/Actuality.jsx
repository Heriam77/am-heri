import React from "react";

const options = [
  {
    $_label: "Atom",
  },
  {
    $_label: "Visual Studio Code",
  },
  {
    $_label: "PhpStorm",
  },
  {
    $_label: "Sublime text",
  },
];
const Actuality = () => {
  return (
    <>
      <main className="h-screen w-full grid items-center justify-center px-4 bg-zinc-50 place-items-center font-semibold text-sm/6">
        <div className=" mx-auto max-w-xl space-y-1 p-6 rounded-lg">
          <h1 className="text-xl text-center md:py-6">
            Which IDE do you use for coding?
          </h1>
          {options.map((item, i) => (
            <label
              key={item.index}
              className="flex items-start py-4 px-4 gap-x-4 hover:bg-zinc-200 rounded-lg has-[:checked]:bg-pink-600"
            >
              <div className="flex h-6 flex-none items-center">
                <input
                  type="radio"
                  className="box-content appearance-none rounded-full border-[5px] border-white bg-white h-1.5 w-1.5
                  bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-pink-500 checked:ring-white"
c                  value={item.index}
                  //defaultChecked={i === 0}
                />
              </div>
              <div>
                <div className="">{item.$_label}</div>
                <div className="text-xs text-zinc-500 text-balance mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate aspernatur dignissimos, tenetur aliquid iste ad
                  asperiores in alias quam laborum.
                </div>
              </div>
            </label>
          ))}
        </div>
      </main>
    </>
  );
};

export default Actuality;
