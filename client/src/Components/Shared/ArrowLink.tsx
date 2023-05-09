import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { motion } from "framer-motion";
type ErrorPage = { children: ReactNode; link: string; className?: string };

export default function ArrowLink({
  children,
  link,
  className,
}: ErrorPage): JSX.Element {
  return (
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {" "}
      <Link to={link} className={className}>
        {children}
      </Link>
    </motion.span>
  );
}
