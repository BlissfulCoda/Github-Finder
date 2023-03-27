import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsBehance,
  BsDot,
} from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import {IoIosArrowRoundBack} from 'react-icons/io'
import MenuLinks from "./MenuLinks";
import { FiBell } from "react-icons/fi";
import UserSearch from "../Users/UserSearch";
import Button from "../Shared/Button";
import { ReactComponent as GithubLogoSVG } from "../../assets/GithubLogo.svg";

// VITE_REACT_APP_BEHANCE

const BEHANCE_URL = import.meta.env.VITE_REACT_APP_BEHANCE;

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

type OpenNavType = {
  handleNav?: () => void;
};

const button = <RxCross1 className="opacity-40 w-3" />;

export default function ClosedNavMenu({ handleNav }: OpenNavType): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextInterface;

  return (
    <nav className="flex justify-between container mx-auto tablet:px-6 tablet:p-4 tablet:h-12 tablet:px-8 laptop:px-10 mb-2 desktop:px-14 laptop:mt-1 items-center py-1 ">
      <span className="hidden tablet:flex">
        <GithubLogoSVG />
      </span>
      <Link to="/" onClick={() => handleNav()}>
        {users.length > 0 ? (
          <span className="tablet:hidden">
            <GithubLogoSVG />
          </span>
        ) : (
          <IoIosArrowRoundBack
            size={26}
            className="text-white bg-zinc-100 rounded-full p-1 bg-opacity-30 contrast-250 outline outline-white/20 tablet:hidden"
          />
        )}
      </Link>

      <div className="flex space-x-6 items-center ">
        <span className="tablet:hidden">
          <UserSearch placeholder="Enter Github Username" button={button} />
        </span>
        <MenuLinks />
        {/* MOBILE */}
        <div className="flex space-x-3 h-6 mt-1 tablet:hidden ">
          <Link to="/feedback">
            {" "}
            <Button className="flex relative justify-center items-center">
              <FiBell className="text-blue-900 " size={21} />
              <BsDot
                size={21}
                className="absolute -right-2 -top-3 pt-1"
                color={"red"}
              />
            </Button>
          </Link>
          <a href={BEHANCE_URL} target="_blank">
            <BsBehance size={22} />
          </a>
        </div>

        {/* TABLET */}
        <div className="flex items-center space-x-3 hidden tablet:hidden">
          <span className="relative">
            <h3 className="text-[9px] ">Feedback</h3>
            <BsDot
              size={20}
              className={`font-light absolute -right-3 -top-2 text-red-400`}
            />
          </span>
          <span className="h-5 w-[.01rem] bg-zinc-100 opacity-40"></span>
          <a
            href={BEHANCE_URL}
            target="_blank"
            className="flex text-[8px] h-6 items-center justify-center w-20 p-2 bg-zinc-100 bg-opacity-30 space-x-1 rounded-sm hover:animate-pulse"
          >
            <span>Learn More</span>
            <BsArrowRight />
          </a>
        </div>
      </div>
    </nav>
  );
}
