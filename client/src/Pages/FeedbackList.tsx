import { useState, useContext, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiLockClosed } from "react-icons/hi";
import { IoIosArrowRoundBack } from "react-icons/io";

import ArrowLink from "../Components/Shared/ArrowLink";
import Spinner from "../Components/Shared/Spinner";
import FeedbackItem from "../Components/Feedback/Feedback";

import FeedbackBell from "../Components/Shared/FeedbackBell";

import { characterCollection } from "../config";

import GithubContext from "../Context/GithubContextData";
import { GithubContextInterface } from "../Context/GithubContextData";

export default function FeedbackList(): JSX.Element {
  const [text, setText] = useState<string>("");

  const [revealText, setRevealText] = useState(false);

  const { postFeedback, feedback } = useContext(
    GithubContext
  ) as GithubContextInterface;

  useEffect(() => {
    feedback.length > Object.keys(characterCollection[0]).length - 1 &&
      setRevealText(true);
  }, [feedback]);

  //  Submit Form
  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postFeedback(text);
    setText("");
  };

  const feedbackItem = (
    <ul className="group space-y-[4px] h-[500px] tablet:h-[370px] laptop:h-[430px] overflow-y-scroll mb-4 sm:mb-8 group duration-1000">
      {feedback.map((item) => (
        <span
          key={item._id}
          className="group-hover:opacity-90 duration-1000 hover:!opacity-100"
        >
          <FeedbackItem item={item} />
        </span>
      ))}
    </ul>
  );

  return (
    <section className="page-layout main-settings tablet:flex rounded-xl tablet:border tablet:border-indigo-800/60 tablet:border-opacity-60 transition-class ">
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
      <section className="nav tablet:w-6/12 tablet:pt-4 tablet:pl-5 laptop:w-7/12 laptop:pl-0 feedbackOverlay tablet:h-full tablet:w-full desktop:pl-4 ">
        <section className="flex justify-between items-center mb-10 sm:mb-12 tablet:mb-8 pr-2 sm:pr-0 ">
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
                type={revealText ? "button" : "text"}
                value={text}
                placeholder="Add Feedback..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setText(e.target.value);
                }}
                className={`${
                  revealText
                    ? "userSearch disabled:opacity-75 disabled"
                    : "userSearch"
                }`}
              />
              {revealText ? (
                <HiLockClosed className="bg-white/20 h-8 w-8 rounded-full p-1 text-indigo-900 absolute right-24 top-0 sm:top-1 sm:right-32 tablet:top-0 tablet:h-7 tablet:w-7 tablet:right-16 tablet:-top-1 text-sm laptop:right-20" />
              ) : (
                <span className="absolute right-3 top-2 sm:top-3 tablet:top-1 text-sm">
                  😃
                </span>
              )}
            </div>
          </form>
          <span className="pt-2">
            <FeedbackBell />
          </span>
        </section>
        {feedback.length === 0 ? <Spinner /> : feedbackItem}
        {/* Feedback Message */}
        <div
          className={`${
            revealText ? "flex justify-center items-center relative " : "hidden"
          }`}
        >
          <span className="border border-x-0 border-t-0 w-20 h-[.004px] border-white/30 border-[.50px] absolute left-0 tablet:w-12"></span>
          <h6 className="text-[11px] text-center opacity-50 tablet:text-[8px] laptop:text-[10px]">
            That's all the feedback at this time!
          </h6>
          <span className="border border-x-0 border-t-0 w-20 h-[.004px] border-white/30 border-[.50px] absolute right-0 tablet:w-12"></span>
        </div>
      </section>
    </section>
  );
}
