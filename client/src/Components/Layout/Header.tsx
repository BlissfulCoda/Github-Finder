import { useState } from "react";

import OpenNavMenu from "../Shared/OpenNavMenu";
import ClosedNavMenu from "../Shared/ClosedNavMenu";

export default function Header(): JSX.Element {
  const [showNav, setShowNav] = useState<boolean>(true);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <section className="mb-6 text-neutral-content px-1">
      {showNav ? (
        <OpenNavMenu handleNav={handleNav} />
      ) : (
        <ClosedNavMenu handleNav={handleNav} />
      )}
    </section>
  );
}
