import { useState, useContext, lazy, Suspense } from "react";
const OpenNavMenu = lazy(() => import("../Shared/OpenNavMenu"));
const ClosedNavMenu = lazy(() => import("../Shared/ClosedNavMenu"));

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

export default function Header(): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextInterface;
  const [showNav, setShowNav] = useState<boolean>(true);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <section className="nav laptop:mt-3 h-12">
      {showNav ? (
        <Suspense fallback="">
          <OpenNavMenu handleNav={handleNav} />
        </Suspense>
      ) : !users.length ? (
        <Suspense fallback="">
          <ClosedNavMenu handleNav={handleNav} />
        </Suspense>
      ) : (
        <Suspense fallback="">
          <OpenNavMenu handleNav={handleNav} />
        </Suspense>
      )}
    </section>
  );
}
