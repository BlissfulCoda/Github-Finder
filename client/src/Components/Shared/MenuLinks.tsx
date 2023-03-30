import { useState, useContext } from "react";
import {motion} from 'framer-motion'

import { BsArrowRight, BsDot } from "react-icons/bs";
import UserSearch from "../Users/UserSearch";
import Button from "../Shared/Button";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ReactComponent as SearchSVG } from "../../assets/Search.svg";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

import { BEHANCE } from "../../config";

const button = <RxCross1 className="opacity-40 w-3" />;

export default function MenuLinks(): JSX.Element {
  const [search, setSearch] = useState<boolean>(false);

  const { users, } = useContext(GithubContext) as GithubContextInterface;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="flex tablet:flex items-center space-x-4 font-Lustria tracking-wide"
    >
      {search ? (
        <span className="hidden tablet:flex">
          <UserSearch placeholder="Enter Github Username" button={button} />
        </span>
      ) : !users.length ? (
        <Button className="hidden tablet:flex" onClick={() => setSearch(true)}>
          <SearchSVG className="text-blue-900 searchButton " />
        </Button>
      ) : (
        <UserSearch placeholder="Enter Github Username" button={button} />
      )}
      <div className="flex items-center space-x-4 tracking-wider hidden tablet:flex">
        <Link to="/feedback" className="relative">
          <h3 className="text-[8px] tablet:text-[9px] laptop:text-[10px] ">
            Feedback
          </h3>
          <BsDot
            size={20}
            className={`font-light absolute -right-3 -top-2 text-red-400`}
          />
        </Link>
        <span className="h-5 w-[.01rem] bg-zinc-100 opacity-40"></span>
        <a
          href={BEHANCE}
          target="_blank"
          className="flex text-[8px] h-7 items-center justify-center w-20 laptop:w-24 p-2 bg-zinc-100 bg-opacity-30 space-x-1 rounded-sm hover:animate-pulse laptop:text-[9px]"
        >
          <span>Learn More</span>
          <BsArrowRight />
        </a>
      </div>
    </motion.div>
  );
}
