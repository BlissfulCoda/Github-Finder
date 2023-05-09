import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Layout/Footer";
import { UserInterface } from "../Context/GithubContextData";
import Spinner from "../Components/Shared/Spinner";
import UserRepos from "../Components/Repos/UserRepos";
import ArrowLink from "../Components/Shared/ArrowLink";

import FeedbackBell from "../Components/Shared/FeedbackBell";

import GithubContext from "../Context/GithubContextData";
import { GithubContextInterface } from "../Context/GithubContextData";

export default function Profile(): JSX.Element {
  const { loading, user, getUser, getUserRepos } = useContext(
    GithubContext
  ) as GithubContextInterface;

  const params = useParams();
  const userLogin: string = params.login!;

  const {
    avatar_url,
    followers,
    following,
    public_repos,
    login,
    location,
    hireable,
    website,
    html_url,
  }: UserInterface = user;

  useEffect(() => {
    getUser(userLogin);
    getUserRepos(userLogin);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <section className="relative page-layout h-screen profile-border border-opacity-60 tablet:overflow-hidden tablet:flex bg-[#010101] bg-opacity-0 tablet:bg-opacity-40 transition-class">
        {/* LEFT */}
        <div className="hidden tablet:flex flex-col w-12 justify-start pr-2 h-full justify-between pb-6 laptop:pb-10 items-center pt-12">
          <Link to="/">
            <IoIosArrowRoundBack
              size={25}
              className="arrow hidden tablet:block"
            />
          </Link>
        </div>

        {/* MIDDLE */}
        <div
          className="relative tablet:border tablet:border-x-zinc-500 tablet:border-opacity-40 tablet:px-1 
         tablet:border-y-0 w-full tablet:flex tablet:justify-between tablet:pt-10 
         laptop:pt-11 tablet:space-x-0  tablet:w-full laptop:px-1 desktop:px-4 laptop:w-full "
        >
          {/* IMAGE */}
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative tablet:w-[300px] tablet:order-2 laptop:w-[380px] desktop:w-[400px]"
          >
            <figure>
              <img
                src={avatar_url}
                alt={`image of ${userLogin}`}
                className={`h-1/3 sm:h-[400px] w-full object-cover object-top opacity-80 tablet:h-[490px]
                  laptop:h-[550px] desktop:h-[580px] contrast-100`}
              />
            </figure>
            <div className="w-full absolute top-2 right-0 h-24 pt-1 tablet:pt-1">
              <nav className="flex justify-between">
                <ArrowLink link="/">
                  <IoIosArrowRoundBack
                    size={25}
                    className="text-gray-300 bg-black/20 rounded-full p-1 bg-opacity-80 contrast-100 tablet:hidden "
                  />
                </ArrowLink>

                <div className="flex items-center text-[10px] p-1 relative mb-2 mr-1">
                  <h6 className="text-white">{login}</h6>
                  <span
                    className={`font-light absolute right-0 top-1 h-1 w-1 rounded-full ${
                      Boolean(hireable)
                        ? "bg-green-400 animate-pulse"
                        : "bg-red-400"
                    }`}
                  ></span>
                </div>
              </nav>

              <div className="flex justify-end  text-white text-[8px] space-x-2 border-[0.01px] border-opacity-20 border-y-neutral-50 border-x-0 py-2 font-light w-60 text-end ml-auto mr-2 ">
                <h4>
                  {followers} <span className="opacity-40">Followers</span>
                </h4>
                <h4>
                  {following} <span className="opacity-40">Following</span>
                </h4>
                <h4>
                  {public_repos}{" "}
                  <span className="opacity-40">Public Repos</span>
                </h4>
              </div>
            </div>
          </motion.div>

          {/* REPO DISPLAY */}
          <div className="w-full -mt-6 opacity-90 sm:-bottom-28 tablet:order-1 tablet:w-[340px] tablet:h-[600px] tablet:flex tablet:flex-col justify-between tablet:p-1 tablet:mt-6 laptop:mt-2 laptop:w-[400px] laptop:h-[700px] laptop:p-0 desktop:w-[420px]">
            <div className="space-y-4 mb-1 laptop:space-y-6 tablet:mt-28">
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex text-white text-[10px] sm:text-[11px] justify-between opacity-80 text-thin tablet:text-[10px] "
              >
                <h3 className="opacity-60">Latest Repositories</h3>
                <div className="flex space-x-6 pr-1 opacity-60">
                  {location && <h3>{location}</h3>}
                  {website && <a href={website}>Website</a>}
                  {html_url && (
                    <h3>
                      <a href={html_url} target="_blank" rel="noreferrer">
                        Github
                      </a>
                    </h3>
                  )}
                </div>
              </motion.div>

              {/* REPOSITORIES */}
              <UserRepos />
            </div>
            <Footer />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hidden w-12 h-full tablet:flex flex-col
      justify-between items-center text-xs pt-14"
        >
          <FeedbackBell />
        </div>
      </section>
    );
  }
}
