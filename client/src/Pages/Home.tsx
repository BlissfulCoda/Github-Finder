import { useContext, useState } from "react";
import Header from "../Components/Layout/Header";
import UserResults from "../Components/Users/UserResults";

import GithubContext from "../Context/GithubContextData";
import { GithubContextInterface } from "../Context/GithubContextData";
export default function Home(): JSX.Element {
  const [toggleGif, setToggleGif] = useState(false);
  const { users } = useContext(GithubContext) as GithubContextInterface;

  return (
    <section
      className={`flex flex-col mb-2 page-layout ${
        users.length > 0 ? "bg-black" : "tablet:bg-Earth"
      } justify-between 
        bg-no-repeat bg-[length:510px_510px] tablet:bg-black  bg-[center_top_6rem] sm:bg-[length:550px_550px] sm:bg-[center_top_5rem] tablet:bg-[length:560px_560px] tablet:bg-opacity-60 tablet:py-4 tablet:bg-[center_top_2rem]
       bg-no-repeat overflow-hidden laptop:bg-[length:670px_670px] laptop:bg-[center_top_0rem] profile-border`}
    >
      <Header />
      <>
        {users.length > 0 ? (
          <div className="tablet:mb-20  flex tablet:px-8">
            <UserResults />
          </div>
        ) : (
          <main className="space-y-2 flex flex-col items-center justify-center text-center w-full font-Lustria container h-3/5 pl-2 my-52 sm:mt-64 tablet:mt-44 laptop:mt-32 ">
            <div className="space-y-1 sm:space-y-2 text-center w-full font-Lustria flex flex-col items-center">
              <h1 className="text-white text-3xl tracking-[.50em] font-Lustria font-normal sm:text-4xl">
                GITHUB
              </h1>
              <hr className="w-40 sm:w-48 opacity-30" />
              <h5 className="text-sm opacity-80 font-Maitree tracking-[.40em]">
                FINDER
              </h5>
            </div>
          </main>
        )}
      </>
    </section>
  );
}
