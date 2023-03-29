import { useContext } from "react";
import Spinner from "../Shared/Spinner";

import { GithubContextInterface } from "../../Context/GithubContextData";
import GithubContext from "../../Context/GithubContextData";
import User from "./User";

export default function UserResult(): JSX.Element {
  const { loading, users } = useContext(
    GithubContext
  ) as GithubContextInterface;

  if (!loading) {
    return (
      <div className="h-full w-full sm:flex sm:justify-center sm:items-center sm:flex-col tablet:p-0 tablet:pt-0 space-y-3 overflow-hidden tablet:h-[420px] tablet:w-11/12 tablet:mx-auto laptop:w-11/12">
        <div className="container relative bg-black bg-opacity-50 h-[550px] w-[410px] sm:w-[460px] sm:h-[624px] tablet:max-w-3xl laptop:max-w-4xl mx-auto overflow-y-auto overflow-hidden tablet:w-full">
          <div className="absolute top-0 -left-12 container grid grid-cols-3 tablet:grid-cols-4 gap-0 tablet:gap-1 px-0 laptop:grid-cols-5 saturate-100 contrast-100 group sm:pt-2 sm:p-2 tablet:pt-2 tablet:px-2 laptop:px-4 desktop:px-14">
            {users.map((user) => (
              <span
                key={user.id}
                className="group-hover:opacity-90 group-hover:opacity:duration-1000 hover:!opacity-100 
                  hover:!blur-none hover:scale-[1.1] group-hover:duration-600 group-hover:transition  hover:z-30 "
              >
                <User user={user} />
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}
