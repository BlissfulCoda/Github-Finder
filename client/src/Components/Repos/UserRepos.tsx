import {motion} from 'framer-motion'
import { useContext } from "react";
import { BsFillStarFill, BsEye, BsBoxArrowUpRight } from "react-icons/bs";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

export default function UserRepos(): JSX.Element {
  const { repos } = useContext(GithubContext) as GithubContextInterface;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5, delay: 0.02 }}
      className="space-y-[3px] laptop:space-y-[3px] overflow-y-auto h-screen scrollbar-thin scrollbar-[#0C0E15] tablet:h-[330px] laptop:h-[390px] desktop:h-[430px] "
    >
      {repos.map((item, i) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: i * 0.06 }}
          key={item.id}
          className="bg-[#11131A] bg-opacity-30 border-l-[.05rem] border-l-violet-700 w-full h-24 sm:h-28 p-3 rounded-r-sm tablet:h-20 laptop:h-24 desktop:h-[105px] tablet:border-l-[.001rem]"
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
                {item.name.length > 10
                  ? item.name.substring(0, 10).padEnd(5, ".")
                  : item.name}
              </h6>
            </div>
          </div>
          <h5 className="text-white text-justify text-[9px] mx-5 tablet:mx-3 tablet:leading-3 leading-4 tablet:text-[8px] desktop:text-[9px] px-4 tablet:px-6 laptop:px-8 text-center mt-3 opacity-60 desktop:leading-normal desktop:px-6 desktop:mx-6">
            {item.description}
          </h5>
        </motion.div>
      ))}
    </motion.div>
  );
}
