import { useContext } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";
import MenuLinks from "./MenuLinks";
import UserSearch from "../Users/UserSearch";
import Behance from "./Behance";
import { ReactComponent as GithubLogoSVG } from "../../assets/svg/GithubLogo.svg";

import FeedbackBell from "./FeedbackBell";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

type OpenNavType = {
  handleNav: () => void;
};

const button = <RxCross1 className="opacity-40 w-3" />;

export default function ClosedNavMenu({ handleNav }: OpenNavType): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextInterface;

  return (
    <nav className="flex justify-between tablet:mx-auto tablet:h-12 tablet:px-8 laptop:px-10 desktop:px-14 laptop:mt-1 -mt-1 items-center ">
      <span className="hidden tablet:flex">
        <GithubLogoSVG />
      </span>
      <Link to="/" onClick={() => handleNav()}>
        {users.length ? (
          <span className="tablet:hidden">
            <GithubLogoSVG />
          </span>
        ) : (
          <IoIosArrowRoundBack size={26} className="arrow tablet:hidden" />
        )}
      </Link>

      <div className="flex space-x-2 justify-between items-center sm:w-full tablet:justify-end ">
        <span className="tablet:hidden sm:pl-12">
          <UserSearch placeholder="Enter Github Username" button={button} />
        </span>
        <MenuLinks />
        {/* MOBILE */}
        <div className="flex space-x-4 sm:space-x-5 h-6 mt-1 tablet:hidden justify-center items-center">
          <FeedbackBell />
          <Behance />
        </div>
      </div>
    </nav>
  );
}
