import Geralt from "../../assets/Geralt.png";

export type UserInterface = {
  [index: string]: string | undefined;
};

export default function Feedback({ item }): JSX.Element {
  console.log(item)
  return (
    <li className="space-y-2">
      <div className="space-x-2 border border-x-0 border-t-0 border-white/30 border-[1px] flex items-center p-2 font-Inter font-light tracking-wide hover:opacity-100">
        <section className="flex items-center space-x-4">
          <figure className="hover:border border-indigo-900 w-16 h-16 rounded-full overflow-hidden">
            <img
              src={Geralt}
              alt="Random image from user"
              className="h-full w-20 object-cover object-top"
            />
          </figure>
          <hr className="border border-r-zinc-300 h-10 border-r-[.1px] opacity-30" />
        </section>
        <section className="w-full pl-1">
          <div className="flex justify-between items-center w-full">
            <span className="text-[9px]">Geralt Riviera</span>
            <span className="text-[7px] opacity-60 hover:opacity-100">now</span>
          </div>
          <span className="text-[10px] opacity-50">{item.feedback}</span>
        </section>
      </div>
    </li>
  );
}
