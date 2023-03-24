import { useState } from "react";

import { BsArrowRight, BsDot, BsSearch } from "react-icons/bs";
import UserSearch from "../Users/UserSearch";
import Button from "../Shared/Button";

const BEHANCE_URL = import.meta.env.VITE_REACT_APP_BEHANCE;

type OpenNavType = {
  handleNav?: () => void;
};

export default function MenuLinks(): JSX.Element {
  const [search, setSearch] = useState<boolean>(false);
  return (
    <div className="flex hidden tablet:flex items-center space-x-6 font-Lustria tracking-wide">
      {search ? (
        <UserSearch />
      ) : (
        <Button className="" onClick={() => setSearch(!search)}>
          <BsSearch className="text-blue-900 " />
        </Button>
      )}
      <div className="flex items-center space-x-4 tracking-wider">
        <span className="relative">
          <h3 className="text-[8px] laptop:text-[10px] ">Feedback</h3>
          <BsDot
            size={20}
            className={`font-light absolute -right-3 -top-2 text-red-400`}
          />
        </span>
        <span className="h-5 w-[.01rem] bg-zinc-100 opacity-40"></span>
        <a
          href={BEHANCE_URL}
          target="_blank"
          className="flex text-[8px] h-7 items-center justify-center w-24 p-2 bg-zinc-100 bg-opacity-30 space-x-2 rounded-sm hover:animate-pulse laptop:text-[9px]"
        >
          <span>Learn More</span>
          <BsArrowRight />
        </a>
      </div>
    </div>
  );
}
