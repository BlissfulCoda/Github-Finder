import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

export default function GithubLogo(): JSX.Element {
  return (
    <Link to="/">
      <BsGithub className=" w-7 h-9 sm:w-8 text-indigo-800" />
    </Link>
  );
}
