import { useState } from "react";
import Geralt from "../../assets/Geralt.png";
import Image from "./Image";

export type UserInterface = {
  [index: string]: string | undefined;
};

export default function Feedback({ item }): JSX.Element {
  const [background, setBackground] = useState<boolean>(false);

  return (
    <li className="space-y-2 py-1 border border-y-0 border-r-0 border-0 hover:border-l-indigo-900 group-hover:!opacity-0 hover:!opacity-100">
      <div className="space-x-2 border border-x-0 border-t-0 border-white/30 border-[1px] flex items-center py-3 px-2 font-Inter font-base tracking-wide hover:opacity-100">
        <section className="flex items-center space-x-4">
          <figure className="hover:border border-indigo-900 w-16 h-16 rounded-full overflow-hidden">
            <img
              src={Geralt}
              alt="geralt of riviera"
              className="h-full w-20 object-cover object-top"
            />
          </figure>
          <hr className="border border-r-zinc-300 h-8 border-r-[.1px] opacity-30" />
        </section>
        <section className="w-full pl-1">
          <div className="flex justify-between items-center w-full">
            <span className="text-[9.5px]">Geralt Riviera</span>
            <span className="text-[7px] opacity-60 hover:opacity-100">
              {item.created}
            </span>
          </div>
          <span className="text-[11px] opacity-50">{item.feedback}</span>
        </section>
      </div>
    </li>
  );
}
