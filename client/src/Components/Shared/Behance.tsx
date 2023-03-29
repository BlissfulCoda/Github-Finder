import { BsBehance } from "react-icons/bs";
import { BEHANCE } from "../../config";
export default function Behance(): JSX.Element {
  return (
    <a href={BEHANCE} target="_blank" className="mb-1">
      <BsBehance size={22} />
    </a>
  );
}
