import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { BsFillStarFill, BsEye, BsBoxArrowUpRight } from "react-icons/bs";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

export default function UserRepos(): JSX.Element {
  const { repos } = useContext(GithubContext) as GithubContextInterface;

  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.9, delay: 0.05 },
    },
  };

  const listVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={parentVariant}
      animate="visible"
      initial="hidden"
      className="space-y-[2px] laptop:space-y-[2px] overflow-y-auto h-screen scrollbar-thin scrollbar-[#0C0E15] tablet:h-[330px] laptop:h-[390px] desktop:h-[430px] "
    >
      <AnimatePresence>
        {repos.map((item, i) => (
          <div
            key={item.id}
            className="bg-[#11131A] bg-opacity-60 border-l-[.05rem] border-l-violet-700 w-full h-24 sm:h-28 p-3 rounded-r-sm tablet:h-20 laptop:h-24 desktop:h-[110px] tablet:border-l-[.01rem] "
          >
            {/* LEFT SIDE */}
            <div className="flex justify-between p-1">
              <div className="flex space-x-2">
                {/* STARS */}
                <span className="flex space-x-1">
                  <BsFillStarFill className="text-amber-400 text-[8px]" />{" "}
                  <h6 className="text-white text-[8px] tablet:text-[7px]">
                    {item.stargazers_count}
                  </h6>
                </span>
                {/* WATCH */}
                <span className="flex space-x-1">
                  <BsEye className="text-blue-600 text-[12px] tablet:text-[9px]" />{" "}
                  <h6 className="text-white text-[8px] tablet:text-[7px]">
                    {item.watchers_count}
                  </h6>
                </span>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex space-x-2">
                <a href={`${item.html_url}`} target="_blank">
                  {" "}
                  <BsBoxArrowUpRight className="text-purple-800 text-[10px] tablet:text-[9px]" />
                </a>
                <h6 className="text-white text-[8px] tablet:text-[7px]">
                  {item?.name?.slice(0, 8)}
                </h6>
              </div>
            </div>
            <h5
              className="text-white text-justify text-[10px] mx-6 sm:text-[10px] tablet:mx-3 tracking-tight tablet:leading-3 tablet:tracking-snug leading-relaxed tablet:text-[9px] laptop:text-[10px]
           laptop:leading-4 px-5 laptop:tracking-tight tablet:px-3 laptop:px-6 text-center mt-3 opacity-50 desktop:leading-normal desktop:px-8 "
            >
              {item.description}
            </h5>
          </div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
