import { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots, BsArrowRight, BsDot } from "react-icons/bs";
import MenuLinks from "./MenuLinks";

type OpenNavType = {
  handleNav?: () => void;
};
import { ReactComponent as GithubLogoSVG } from "../../assets/GithubLogo.svg";

const BEHANCE_URL = import.meta.env.VITE_REACT_APP_BEHANCE;

export default function OpenNavMenu({ handleNav }: OpenNavType): JSX.Element {
  const [search, setSearch] = useState<boolean>(false);

  return (
    <nav className="flex justify-between container mx-auto tablet:px-6 tablet:p-4 tablet:h-12 tablet:px-8 laptop:px-10 mb-2 desktop:px-14 laptop:mt-1 items-center py-1 ">
      <GithubLogoSVG />
      <MenuLinks />
      <Link
        to="/"
        onClick={() => handleNav()}
        className="text-white rounded-full p-2 outline outline-white/30 tablet:hidden bg-gray-100 bg-opacity-30 "
      >
        <BsThreeDots size={19} />
      </Link>
    </nav>
  );
}
