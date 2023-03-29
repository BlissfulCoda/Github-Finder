import { useState, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";

import ArrowLink from "../Components/Shared/ArrowLink";
import Spinner from "../Components/Shared/Spinner";
import FeedbackItem from "../Components/Feedback/Feedback";

import FeedbackBell from "../Components/Shared/FeedbackBell";

import GithubContext from "../Context/GithubContextData";
import { GithubContextInterface } from "../Context/GithubContextData";

export default function FeedbackList(): JSX.Element {
  const [text, setText] = useState<string>("");

  const { postFeedback, feedback, marvel } = useContext(
    GithubContext
  ) as GithubContextInterface;

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postFeedback(text);
    setText("");
  };

  const imageList = marvel?.map((character) => character);

  const feedbackItem = (
    <ul className="group space-y-[4px] h-full overflow-y-scroll">
      {feedback.map((item) => (
        <FeedbackItem key={item._id} item={item} />
      ))}
    </ul>
  );

  return (
    <section className="page-layout main-settings tablet:flex rounded-xl tablet:border tablet:border-indigo-800/50 tablet:border-opacity-60 transition-class px-1">
      {/* LEFT SECTION */}
      <section className="hidden tablet:flex w-7/12 laptop:w-8/12  feedbackOverlay">
        <main className="space-y-1 flex flex-col items-center justify-center text-center w-full font-Maitree h-3/5 pl-2 my-5 tablet:pl-72 tablet:mt-32 laptop:pl-96 laptop:mt-36">
          <div className="space-y-2 sm:space-y-2 text-center w-full flex flex-col items-center">
            <h1 className="text-white  tracking-[.50em] font-light text-4xl opacity-30">
              GITHUB
            </h1>
            <hr className="w-40 border-zinc-500 opacity-60" />
            <h5 className="text-xs opacity-80 tracking-[.20em]">FEEDBACK</h5>
          </div>
        </main>
      </section>

      {/* RIGHT SECTION */}
      <section className="nav tablet:w-6/12 tablet:pt-4 tablet:pl-5 laptop:w-7/12 laptop:pl-0 feedbackOverlay tablet:h-full tablet:w-full desktop:pl-10">
        <section className="flex justify-between items-center mb-20">
          <ArrowLink link="/">
            <IoIosArrowRoundBack
              size={26}
              className="arrow outline-white/30 tablet:hidden"
            />
            <RxCross1
              size={24}
              className="text-white bg-gray-200 rounded-full bg-opacity-30 contrast-250 outline outline-white/20 hidden tablet:flex p-2"
            />
          </ArrowLink>
          <form
            onSubmit={formSubmit}
            className=" flex justify-between items-center"
          >
            <div className="flex relative">
              <input
                type="text"
                value={text}
                placeholder="Add Feedback..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setText(e.target.value);
                }}
                className="userSearch"
              />
              <span className="absolute right-3 top-1 sm:top-3 tablet:top-1 text-sm">
                😃
              </span>
            </div>
          </form>
          <FeedbackBell />
        </section>
        {feedback.length === 0 ? <Spinner /> : feedbackItem}
      </section>
    </section>
  );
}
