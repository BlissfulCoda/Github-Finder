import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import ArrowLink from "../Components/Shared/ArrowLink";

import ErrorIcon from "../assets/svg/Error.svg";

export default function ErrorPage(): JSX.Element {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white p-2 page-layout tablet:bg-black 
     profile-border tablet:p-10 tablet:block tablet:bg-opacity-30 tablet:border-indigo-700/50 tablet:border-opacity-60"
    >
      <Link to="/">
        <IoIosArrowRoundBack size={26} className="arrow tablet:hidden" />
      </Link>
      <section className="flex flex-col justify-center items-center h-full mb-20 mt-24 pl-5 sm:mb-24 sm:mt-28 tablet:mt-0 tablet:h-full tablet:mb-60">
        <section className="-space-y-11 h-40 tablet:-space-y-16 laptop:-space-y-24 tablet:mb-6 laptop:mb-14">
          <h5 className="font-Inria text-xs opacity-50 tablet:text-sm">
            Page Not Found
          </h5>
          <h2 className="font-Inria text-[8.6rem] tablet:text-[10.5rem] laptop:text-[14rem]">
            404
          </h2>
        </section>

        <ArrowLink
          link="/"
          className="text-[8px] rounded rounded-sm py-2 px-3 w-28 text-center font-Inria flex space-x-2 bg-gradient-to-r from-blue-800/40 to-blue-800/60 items-center justify-center"
        >
          <img
            src={ErrorIcon}
            alt="Error Icon"
            className="w-4 animate-pulse text-red-500"
          />{" "}
          <span>Back To Home</span>
        </ArrowLink>
      </section>
    </motion.section>
  );
}
