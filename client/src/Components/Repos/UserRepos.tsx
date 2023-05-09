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
      transition: { duration: 0.7, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={parentVariant}
      animate="visible"
      initial="hidden"
      className="space-y-[2.5px] laptop:space-y-[2px] overflow-y-auto h-screen  scrollbar-thin scrollbar-[#0C0E15] tablet:h-[330px] laptop:h-[390px] desktop:h-[430px] "
    >
      <AnimatePresence>
        {repos.map((item, i) => (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 * i }}
            key={item.id}
            className="bg-[#11131A] bg-opacity-20 border-l-[.04rem] border-l-purple-600/70 h-24 sm:h-28 py-3 pl-3 rounded-r-sm tablet:h-20 laptop:h-24 desktop:h-[110px] tablet:border-l-[.01rem]"
          >
            {/* LEFT SIDE */}
            <div className="flex justify-between p-1 px-2">
              <div className="flex space-x-3">
                {/* STARS */}
                <span className="flex space-x-1 items-center">
                  <BsFillStarFill className="text-amber-400 text-[8px]" />{" "}
                  <h6 className="text-white text-[8px] tablet:text-[7px]">
                    {item.stargazers_count}
                  </h6>
                </span>
                {/* WATCH */}
                <span className="flex space-x-1 items-center">
                  <BsEye className="text-blue-800 text-[12px] tablet:text-[9px]" />{" "}
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
                  {item?.name?.slice(0, 9)}
                </h6>
              </div>
            </div>
            <h5
              className="text-white text-justify text-[10px] mx-5 sm:text-[12px] tablet:mx-3 tracking-tight tablet:leading-3 tablet:tracking-snug leading-relaxed tablet:text-[9px] laptop:text-[11.5px]
           laptop:leading-4 px-5 laptop:tracking-base tablet:px-3 laptop:px-4 text-center mt-3 opacity-60 desktop:leading-normal desktop:px-7 "
            >
              {item?.description?.length > 100
                ? `${item?.description?.substring(0, 120)} ...`
                : item?.description}
            </h5>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
