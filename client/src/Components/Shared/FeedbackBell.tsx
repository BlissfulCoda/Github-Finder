import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import Button from "./Button";

import Bell from "../../assets/svg/Bell.svg";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

export default function FeedbackBell(): JSX.Element {
  const { feedback } = useContext(GithubContext) as GithubContextInterface;

  return (
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Link to="/feedback">
        {" "}
        <Button className="flex relative justify-center items-center">
          <img
            src={Bell}
            alt="Bell icon"
            className="text-indigo-700 h-[21px]"
          />
          <img />
          {feedback.length > 0 ? (
            <span className="absolute -right-1 -top-1 rounded-full h-4 w-4 p-[2px] text-[8.5px] text-white flex items-center justify-center bg-red-700/80 ">
              {" "}
              {feedback.length}
            </span>
          ) : (
            <BsDot
              size={23}
              className="absolute -right-2 -top-3  rounded-full"
              color={"red"}
            />
          )}
        </Button>
      </Link>
    </motion.span>
  );
}
