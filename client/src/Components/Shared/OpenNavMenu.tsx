import { useContext, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RxDotsHorizontal } from "react-icons/rx";

const FeedbackBell = lazy(() => import("./FeedbackBell"));
const Behance = lazy(() => import("./Behance"));
const MenuLinks = lazy(() => import("./MenuLinks"));

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

type OpenNavType = {
  handleNav: () => void;
};
import { ReactComponent as GithubLogoSVG } from "../../assets/svg/GithubLogo.svg";

export default function OpenNavMenu({ handleNav }: OpenNavType): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextInterface;
  return (
    <motion.nav
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex space-x-2 justify-between tablet:p-4 tablet:h-11 tablet:px-8 laptop:px-10 desktop:px-14 laptop:mt-1 items-center"
    >
      <GithubLogoSVG className="mr-2" />
      <Suspense fallback="">
        <MenuLinks />
      </Suspense>
      {!users.length ? (
        <Link
          to="/"
          onClick={() => handleNav()}
          className="text-white rounded-full p-2 tablet:hidden bg-gray-200 bg-opacity-30"
        >
          <span>
            <RxDotsHorizontal size={21} />
          </span>
        </Link>
      ) : (
        <div className="flex space-x-4 sm:space-x-5 h-6 mt-0 tablet:hidden justify-center items-center">
          <Suspense fallback="">
            {" "}
            <FeedbackBell />
          </Suspense>
          <Suspense fallback="">
            <Behance />
          </Suspense>
        </div>
      )}
    </motion.nav>
  );
}
