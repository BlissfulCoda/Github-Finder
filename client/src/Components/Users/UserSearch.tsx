import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GithubContextInterface } from "../../Context/GithubContextData";
import GithubContext from "../../Context/GithubContextData";

import Button from "../Shared/Button";

export default function UserSearch(): JSX.Element {
  const [text, setText] = useState<string>("");

  const { getUsers, clearUsers } = useContext(
    GithubContext
  ) as GithubContextInterface;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      console.log("Error..");
    } else {
      getUsers(text);
    }
    setText("");
  };

  const handleSearchAndClear = () => {
    clearUsers();
  };

  return (
    <form onSubmit={handleSubmit} className="flex relative">
      <input
        type="text"
        placeholder={`Enter Github Username`}
        className="w-60 h-9 sm:w-64 sm:h-9 tablet:w-48 tablet:h-7 laptop:w-56 laptop:h-7 rounded-full bg-gradient-to-r from-zinc-800/90 via-zinc-800/70 to-black/90 border-zinc-500/90 outline-none border border-x-0 border-t-0 border-[1px] text-xs pl-9 tablet:pl-4 laptop:pl-5 placeholder-white focus:outline-none focus:placeholder:opacity-30 placeholder:opacity-50 placeholder:text-[10px] tablet:placeholder:text-[8px]"
        onChange={handleChange}
        value={text}
      />
      <Button
        onClick={handleSearchAndClear}
        className="absolute right-3 top-3 sm:top-3 rounded-full tablet:top-1 laptop:top-1 "
      >
        <RxCross1 className="opacity-40 w-3" />
      </Button>
    </form>
  );
}
