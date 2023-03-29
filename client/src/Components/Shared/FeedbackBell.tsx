import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";

import { FiBell } from "react-icons/fi";
import Button from "./Button";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

export default function FeedbackBell(): JSX.Element {
  const { feedback } = useContext(GithubContext) as GithubContextInterface;

  return (
    <Link to="/feedback">
      {" "}
      <Button className="flex relative justify-center items-center">
        <FaRegBell className="text-indigo-800 " size={20} />
        {feedback.length > 0 ? (
          <span className="absolute -right-1 -top-1 rounded-full h-3 w-3 p-[3px] text-[6.5px] text-white flex items-center justify-center bg-red-700/70 ">
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
  );
}
