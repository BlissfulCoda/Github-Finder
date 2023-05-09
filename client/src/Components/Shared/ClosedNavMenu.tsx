import { useContext, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";

import { motion } from "framer-motion";

import { ReactComponent as GithubLogoSVG } from "../../assets/svg/GithubLogo.svg";

const UserSearch = lazy(() => import("../Users/UserSearch"));
const Behance = lazy(() => import("./Behance"));
const FeedbackBell = lazy(() => import("./FeedbackBell"));
const MenuLinks = lazy(() => import("./MenuLinks"));

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

type OpenNavType = {
  handleNav: () => void;
};

const button = <RxCross1 className="opacity-40 w-3" />;

export default function ClosedNavMenu({ handleNav }: OpenNavType): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextInterface;

  return (
    <motion.nav
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between tablet:mx-auto tablet:h-12 tablet:px-8 laptop:px-10 desktop:px-14 laptop:mt-1 items-center"
    >
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

      <div className="flex space-x-2 justify-between items-center sm:w-full tablet:justify-end">
        <span className="tablet:hidden sm:pl-10">
          <Suspense fallback="">
            {" "}
            <UserSearch placeholder="Enter Github Username" button={button} />
          </Suspense>
        </span>
        <Suspense fallback="">
          <MenuLinks />
        </Suspense>
        {/* MOBILE */}
        <div className="flex space-x-3 sm:space-x-4 h-6 mt-1 tablet:hidden justify-center items-center">
          <FeedbackBell />
          <Suspense fallback="">
            <Behance />
          </Suspense>
        </div>
      </div>
    </motion.nav>
  );
}
