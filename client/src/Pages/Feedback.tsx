import { useState, useContext } from "react";
import { BsArrowLeftShort, BsDot } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import ArrowLink from "../Components/Shared/ArrowLink";

import GithubContext from "../Context/GithubContextData";
import { GithubContextInterface } from "../Context/GithubContextData";

export default function Feedback(): JSX.Element {
  const [feedback, setFeedback] = useState<string>("");

  const {postFeedback} = useContext(GithubContext) as GithubContextInterface;

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postFeedback(feedback)

    setFeedback("");
  };

  return (
    <section className="pt-4 mb-2 py-1">
      <form
        onSubmit={formSubmit}
        className=" flex justify-between items-center"
      >
        <ArrowLink link="/">
          <BsArrowLeftShort
            size={25}
            className="text-white bg-gray-100 rounded-full p-1 bg-opacity-30 contrast-250 outline outline-white/30"
          />
        </ArrowLink>
        <div className="flex relative">
          <input
            type="text"
            placeholder="Add Feedback..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFeedback(e.target.value);
            }}
            className="w-64 h-9 sm:w-64 sm:h-9 tablet:w-48 tablet:h-7 laptop:w-56 laptop:h-7 rounded-full bg-gradient-to-r from-zinc-800/90 via-zinc-800/70 to-black/90 border-zinc-500/90 outline-none border border-x-0 border-t-0 border-[1px] text-xs pl-9 tablet:pl-4 laptop:pl-5 placeholder-white focus:outline-none focus:placeholder:opacity-30 placeholder:opacity-70 placeholder:text-[11px] tablet:placeholder:text-[8px]"
          />
          <span className="absolute right-3 top-1">😃</span>
        </div>
        <span className="flex relative justify-center items-center">
          <FiBell className="text-blue-900 " size={21} />
          <BsDot
            size={21}
            className="absolute -right-2 -top-3 pt-1"
            color={"red"}
          />
        </span>
      </form>
    </section>
  );
}
