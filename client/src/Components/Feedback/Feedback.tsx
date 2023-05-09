import { useState } from "react";
import { characterCollection } from "../../config";
import { motion } from "framer-motion";

export default function Feedback({ item }: any): JSX.Element {
  const [showBackground, setshowBackground] = useState<boolean>(false);

  return (
    <li
      onMouseEnter={() => {
        setshowBackground(true);
      }}
      onMouseLeave={() => setshowBackground(false)}
      className={` ${
        showBackground
          ? "border border-y-0 border-r-0 hover:border-l-100 hover:border-l-indigo-700/90 bg-[#11131A] bg-opacity-20 duration-100"
          : " border-transparent duration-100"
      } `}
    >
      <div className="space-x-2 border border-x-0 border-t-0 border-white/20 border-[.50px] flex items-center py-3 px-2 font-Inter font-base tracking-wide hover:opacity-100 bg-[#11131A] bg-opacity-5">
        <section className="flex items-center space-x-3 tablet:space-x-2">
          <figure
            className={` ${
              showBackground ? "border-indigo-900" : "border-transparent "
            } w-14 h-14 tablet:w-11 tablet:h-11 rounded-full overflow-hidden border transition-class laptop:h-12 laptop:w-12 desktop:w-14 desktop:h-14`}
          >
            <img
              src={characterCollection[0][item.characterName]}
              alt={item.characterName}
              className="h-full w-20 tablet:w-full object-cover object-top contrast-50"
            />
          </figure>
          <hr className="border border-r-zinc-300 h-10 border-y-0 border-r-0 opacity-30" />
        </section>
        <section className="w-full pl-1 ">
          <div className="flex justify-between items-center w-full">
            <span className="text-[9px] tablet:text-[8px] opacity-100 font-think -mb-1">
              {item.characterName}
            </span>
            <span
              className={`text-[7px] tablet:text-[6px] ${
                showBackground
                  ? "opacity-50 duration-700"
                  : "opacity-40 duration-700"
              }`}
            >
              {item.created}
            </span>
          </div>
          <span className="text-[11px] tablet:text-[10px] opacity-60 contrast-50 ">
            {item.feedback}
          </span>
        </section>
      </div>
    </li>
  );
}
