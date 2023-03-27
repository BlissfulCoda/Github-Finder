import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import ArrowLink from "../Components/Shared/ArrowLink";
export default function Feedback(): JSX.Element {
  const [feedback, setFeedback] = useState("");

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8000/feedback`, {
      method: "POST",
      headers: {},
      body: JSON.stringify(feedback),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <section>
      <form
        onSubmit={formSubmit}
        action=""
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
            className="w-60 h-9 sm:w-64 sm:h-9 tablet:w-48 tablet:h-7 laptop:w-56 laptop:h-7 rounded-full bg-gradient-to-r from-zinc-800/90 via-zinc-800/70 to-black/90 border-zinc-500/90 outline-none border border-x-0 border-t-0 border-[1px] text-xs pl-9 tablet:pl-4 laptop:pl-5 placeholder-white focus:outline-none focus:placeholder:opacity-30 placeholder:opacity-70 placeholder:text-[11px] tablet:placeholder:text-[8px]"
          />
          <span className="absolute right-3 top-1">😃</span>
        </div>
        <FiBell className="text-blue-900 " size={21} />
      </form>
    </section>
  );
}
