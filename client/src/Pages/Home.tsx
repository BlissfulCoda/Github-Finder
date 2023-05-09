import { motion } from "framer-motion";
import { useContext, lazy, Suspense } from "react";
import Header from "../Components/Layout/Header";
import Spinner from "../Components/Shared/Spinner";

const UserResults = lazy(() => import("../Components/Users/UserResults"));

import GithubContext from "../Context/GithubContextData";
import { GithubContextInterface } from "../Context/GithubContextData";
export default function Home(): JSX.Element {
  const { users } = useContext(GithubContext) as GithubContextInterface;

  return (
    <section
      className={`flex flex-col page-layout transition-class  ${
        users.length > 0 ? "bg-black bg-opacity-10" : "tablet:bg-Earth"
      }  
        bg-no-repeat bg-[length:500px_500px] tablet:bg-black bg-[center_top_6rem] sm:bg-[length:550px_550px] sm:bg-[center_top_5rem] tablet:bg-[length:550px_530px] tablet:bg-opacity-60 tablet:py-3 tablet:bg-[center_top_1.2rem]
       bg-no-repeat overflow-hidden laptop:bg-[length:640px_620px] laptop:bg-[center_top_.3rem] desktop:bg-[center_top_.6rem]  profile-border`}
    >
      <Header />
      <>
        {users.length ? (
          <div className="tablet:mb-20 flex tablet:px-8">
            <Suspense fallback={<Spinner />}>
              <UserResults />
            </Suspense>
          </div>
        ) : (
          <motion.main
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-2 flex flex-col items-center justify-center text-center w-full font-Maitree font-regular tablet:container h-3/5 pl-3 mt-60 sm:mt-64 tablet:py-0 tablet:mt-10 laptop:mt-12"
          >
            <div className="space-y-2 sm:space-y-2 text-center w-full flex flex-col items-center">
              <h1 className="text-white text-3xl tracking-[.50em] font-light sm:text-4xl tablet:text-3xl laptop:text-4xl">
                GITHUB
              </h1>
              <hr className="w-36 sm:w-48 opacity-30" />
              <h5 className="text-xs opacity-80 tracking-[.30em] font-regular">
                FINDER
              </h5>
            </div>
          </motion.main>
        )}
      </>
    </section>
  );
}
