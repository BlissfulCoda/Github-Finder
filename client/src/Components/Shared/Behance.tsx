import {motion} from 'framer-motion'
import { BsBehance } from "react-icons/bs";
import { BEHANCE } from "../../config";
export default function Behance(): JSX.Element {
  return (
    <motion.a
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      href={BEHANCE}
      target="_blank"
      className="mb-1"
    >
      <BsBehance size={23} />
    </motion.a>
  );
}
