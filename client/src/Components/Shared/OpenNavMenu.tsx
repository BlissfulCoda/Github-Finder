import { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import MenuLinks from "./MenuLinks";

type OpenNavType = {
  handleNav?: () => void;
};
import { ReactComponent as GithubLogoSVG } from "../../assets/GithubLogo.svg";

export default function OpenNavMenu({ handleNav }: OpenNavType): JSX.Element {
  const [search, setSearch] = useState<boolean>(false);

  return (
    <nav className="flex justify-between sm:px-  tablet:px-6 tablet:p-4 tablet:h-12 tablet:px-8 laptop:px-10 mb-2 desktop:px-14 laptop:mt-1 items-center ">
      <GithubLogoSVG />
      <MenuLinks />
      <Link
        to="/"
        onClick={() => handleNav()}
        className="text-white rounded-full p-2 outline outline-white/20 tablet:hidden bg-gray-200 bg-opacity-30 "
      >
        <BsThreeDots size={20} />
        {/* <CgMenuRight size={20} /> */}
      </Link>
    </nav>
  );
}
