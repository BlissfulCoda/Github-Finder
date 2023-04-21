import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import MenuLinks from "./MenuLinks";
import Behance from "./Behance";
import FeedbackBell from "./FeedbackBell";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

type OpenNavType = {
  handleNav: () => void;
};
import { ReactComponent as GithubLogoSVG } from "../../assets/GithubLogo.svg";

export default function OpenNavMenu({ handleNav }: OpenNavType): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextInterface;
  return (
    <motion.nav
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="flex space-x-2  justify-between tablet:p-4 tablet:h-12 tablet:px-8 laptop:px-10  desktop:px-14 laptop:mt-1 items-center "
    >
      <GithubLogoSVG className="mr-2" />
      <MenuLinks />
      {!users.length ? (
        <Link
          to="/"
          onClick={() => handleNav()}
          className="text-white rounded-full p-2 tablet:hidden bg-gray-200 bg-opacity-30"
        >
          <span>
            <BsThreeDots size={20} />
          </span>
        </Link>
      ) : (
        <div className="flex space-x-5 sm:space-x-5 h-6 mt-0 tablet:hidden justify-center items-center">
          <FeedbackBell />
          <Behance />
        </div>
      )}
    </motion.nav>
  );
}
