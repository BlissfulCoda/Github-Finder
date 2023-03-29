import { useState, useContext } from "react";

import OpenNavMenu from "../Shared/OpenNavMenu";
import ClosedNavMenu from "../Shared/ClosedNavMenu";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

export default function Header(): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextInterface;
  const [showNav, setShowNav] = useState<boolean>(true);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <section className="nav laptop:mt-2">
      {showNav ? (
        <OpenNavMenu handleNav={handleNav} />
      ) : !users.length ? (
        <ClosedNavMenu handleNav={handleNav} />
      ) : (
        <OpenNavMenu handleNav={handleNav} />
      )}
    </section>
  );
}
