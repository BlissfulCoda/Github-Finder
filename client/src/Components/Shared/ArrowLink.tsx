import { Link } from "react-router-dom";
import { ReactNode, useContext, useState } from "react";

type ErrorPage = { children: ReactNode; link: string; className?: string };

export default function ArrowLink({
  children,
  link,
  className,
}: ErrorPage): JSX.Element {
  return (
    <Link to={link} className={className}>
      {children}
    </Link>
  );
}
