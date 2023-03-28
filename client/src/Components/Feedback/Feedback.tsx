import { useState } from "react";
import Geralt from "../../assets/Geralt.png";
import Image from "./Image";

export type UserInterface = {
  [index: string]: string | undefined;
};

export default function Feedback({ item }): JSX.Element {
  const [showBackground, setshowBackground] = useState<boolean>(false);

  return (
    <li
      onMouseEnter={() => {
        setshowBackground(true);
      }}
      onMouseLeave={() => setshowBackground(false)}
      className={` ${
        showBackground
          ? "border border-y-0 border-r-0  hover:border-l-100 hover:border-l-indigo-700/90 "
          : " border-transparent"
      } transition-class`}
    >
      <div className="space-x-2 border border-x-0 border-t-0 border-white/30 border-[1px] flex items-center py-3 px-2 font-Inter font-base tracking-wide hover:opacity-100 ">
        <section className="flex items-center space-x-3">
          <figure
            className={` ${
              showBackground ? "border-indigo-900" : "border-transparent "
            } w-14 h-14 tablet:w-14 tablet:h-14 rounded-full overflow-hidden border transition-class`}
          >
            <img
              src={Geralt}
              alt="geralt of riviera"
              className="h-full w-20 tablet:w-full object-cover object-top "
            />
          </figure>
          <hr className="border border-r-zinc-300 h-10 border-y-0 border-r-0 opacity-30" />
        </section>
        <section className="w-full pl-1">
          <div className="flex justify-between items-center w-full">
            <span className="text-[9px] tablet:text-[9px] opacity-100 font-light ">
              Geralt Riviera
            </span>
            <span className="text-[7px] tablet:text-[6px] opacity-50 hover:opacity-100">
              {item.created}
            </span>
          </div>
          <span className="text-[11px] tablet:text-[10px] opacity-40">
            {item.feedback}
          </span>
        </section>
      </div>
    </li>
  );
}
