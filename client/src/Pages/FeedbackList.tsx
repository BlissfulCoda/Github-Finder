import { useState, useContext } from "react";
import { BsDot } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";

import { FiBell } from "react-icons/fi";
import ArrowLink from "../Components/Shared/ArrowLink";
import Spinner from "../Components/Shared/Spinner";

import Feedback from "../Components/Feedback/Feedback";

import GithubContext from "../Context/GithubContextData";
import { GithubContextInterface } from "../Context/GithubContextData";

export default function FeedbackList(): JSX.Element {
  const [text, setText] = useState<string>("");

  const { postFeedback, feedback } = useContext(
    GithubContext
  ) as GithubContextInterface;

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postFeedback(text);

    setText("");
  };

  const feedbackItem = (
    <ul className="group space-y-[4px] overflow-y-scroll">
      {feedback.map((item) => (
        <Feedback key={item._id} item={item} />
      ))}
    </ul>
  );

  return (
    <section className="page-layout tablet:flex tablet:w-full">
      <section className="hidden tablet:flex w-7/12">
        <main className="space-y-2 flex flex-col items-center justify-center text-center w-full font-Maitree h-3/5 pl-2 my-5 tablet:mt-40 ">
          <div className="space-y-2 sm:space-y-2 text-center w-full  flex flex-col items-center">
            <h1 className="text-white text-3xl tracking-[.50em] font-light sm:text-4xl opacity-30">
              GITHUB
            </h1>
            <hr className="w-40 sm:w-48 opacity-30" />
            <h5 className="text-xs opacity-80  tracking-[.30em]">FEEDBACK</h5>
          </div>
        </main>
      </section>

      {/* RIGHT SECTION */}
      <section className="nav tablet:w-6/12 tablet:pl-4 ">
        <form
          onSubmit={formSubmit}
          className=" flex justify-between items-center mb-20"
        >
          <ArrowLink link="/">
            <IoIosArrowRoundBack
              size={25}
              className="text-white bg-gray-100 rounded-full p-1 bg-opacity-30 contrast-250 outline outline-white/30 tablet:hidden"
            />
            <RxCross1
              size={26}
              className="text-white bg-gray-100 rounded-full p-1 bg-opacity-30 contrast-250 outline outline-white/20 hidden tablet:flex p-2"
            />
          </ArrowLink>
          <div className="flex relative">
            <input
              type="text"
              value={text}
              placeholder="Add Feedback..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setText(e.target.value);
              }}
              className="w-60 h-9 sm:w-72 tablet:  sm:h-9 tablet:w-48 tablet:h-7 laptop:w-56 laptop:h-7 rounded-full bg-gradient-to-r from-zinc-800/90 via-zinc-800/70 to-black/90 border-zinc-500/90 outline-none border border-x-0 border-t-0 border-[1px] text-xs pl-9 tablet:pl-4 laptop:pl-5 placeholder-white focus:outline-none focus:placeholder:opacity-30 placeholder:opacity-70 placeholder:text-[12px] tablet:placeholder:text-[8px]"
            />
            <span className="absolute right-3 top-1">😃</span>
          </div>
          <span className="flex relative justify-center items-center">
            <FiBell className="text-blue-900 " size={18} />
            <BsDot
              size={21}
              className="absolute -right-2 -top-3 pt-1"
              color={"red"}
            />
          </span>
        </form>
        {feedback.length === 0 ? <Spinner /> : feedbackItem}
      </section>
    </section>
  );
}
