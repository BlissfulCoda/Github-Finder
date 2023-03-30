import {motion} from 'framer-motion'
import React, { useContext, useState } from "react";
import { GithubContextInterface } from "../../Context/GithubContextData";
import GithubContext from "../../Context/GithubContextData";

import Button from "../Shared/Button";

type userSearchProps = { placeholder: string; button: React.ReactNode };

export default function UserSearch({
  placeholder,
  button,
}: userSearchProps): JSX.Element {
  const [text, setText] = useState<string>("");

  const { getUsers, clearUsers, users } = useContext(
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
    <motion.form
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      onSubmit={handleSubmit}
      className="flex relative"
    >
      <input
        type="text"
        placeholder={placeholder}
        className="userSearch"
        onChange={handleChange}
        value={text}
      />
      <Button
        onClick={handleSearchAndClear}
        className={`absolute right-3 top-3 sm:top-3 rounded-full tablet:top-1 laptop:top-2 opacity-0 ${
          users.length && "opacity-100"
        } `}
      >
        {button}
      </Button>
    </motion.form>
  );
}
