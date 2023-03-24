import { BsArrowLeftShort, BsDot } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Layout/Footer";
import { UserInterface } from "../Context/GithubContextData";
import Spinner from "../Components/Shared/Spinner";
import UserRepos from "../Components/Repos/UserRepos";
import ArrowLink from "../Components/Shared/ArrowLink";

import Button from "../Components/Shared/Button";

import { ReactComponent as Bell } from "../assets/Bell.svg";

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
    bio,
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
      <section className="relative page-layout h-screen profile-border border-opacity-60 tablet:overflow-hidden tablet:flex bg-[#010101] bg-opacity-0 tablet:bg-opacity-40 ">
        {/* LEFT */}
        <div className="hidden tablet:flex flex-col w-14 tablet:items-center laptop:w-20 desktop:w-20 h-full justify-between pb-20 laptop:pb-14 items-center pt-12">
          <Link to="/">
            <BsArrowLeftShort
              size={25}
              className="text-white bg-zinc-500 rounded-full p-1 bg-opacity-60 contrast-50 outline outline-white/5 hidden tablet:block"
            />
          </Link>
        </div>

        {/* MIDDLE */}
        <div
          className="relative tablet:border tablet:border-x-zinc-500 tablet:border-opacity-60 tablet:px-1 
         tablet:border-y-0 w-full tablet:flex tablet:justify-between tablet:pt-10 
         laptop:pt-11 tablet:space-x-0  tablet:w-full laptop:px-1 desktop:px-4 laptop:w-full "
        >
          {/* IMAGE */}
          <div className="relative tablet:w-[300px] tablet:order-2 laptop:w-[380px] desktop:w-[400px]">
            <figure>
              <img
                src={avatar_url}
                alt={`image of ${userLogin}`}
                className={` h-1/2 sm:h-[400px] w-full object-cover object-top opacity-80 tablet:h-[490px]
                  laptop:h-[550px]`}
              />
            </figure>
            <div className="w-full absolute top-2 right-0 h-24 p-1 tablet:pt-2">
              <nav className="flex justify-between">
                <ArrowLink link="/">
                  <BsArrowLeftShort
                    size={25}
                    className="text-white bg-white/60 rounded-full p-1 bg-opacity-90 contrast-50 outline outline-white/5 tablet:hidden "
                  />
                </ArrowLink>

                <div className="flex items-center text-[10px] p-1   relative mb-2">
                  <h6 className="text-white">{login}</h6>
                  <BsDot
                    size={20}
                    className={`font-light absolute -right-2 -top-2 ${
                      Boolean(hireable)
                        ? "text-green-400 animate-pulse"
                        : "text-red-400"
                    }`}
                  />
                </div>
              </nav>

              <div className="flex text-white text-[8px] space-x-2 border-[0.2px] border-opacity-40 border-y-neutral-50 border-x-0 py-2 font-light w-56 text-right ml-auto pl-7 ">
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
          </div>

          {/* REPO DISPLAY */}
          <div className="w-full -mt-6 opacity-90 sm:-bottom-28 tablet:order-1 tablet:w-[340px] tablet:h-[600px] tablet:flex tablet:flex-col justify-between tablet:p-1 tablet:mt-6 laptop:mt-2 tablet:pr-2 laptop:w-[410px] laptop:h-[700px] laptop:p-0 ">
            <div className="flex space-x-3 items-center text-[9px] p-1 hidden tablet:flex tablet:justify-end "></div>
            <div className="space-y-4 mb-1 laptop:space-y-6">
              <div className="flex pl-1 text-white text-[12px] justify-between opacity-80 text-thin tablet:text-[9px] tablet:opacity-60 laptop:text-[10px]">
                <h3 className="">Latest Repositories</h3>
                <div className="flex space-x-6 pr-2">
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
              </div>

              {/* REPOSITORIES */}
              <UserRepos />
            </div>
            <Footer />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hidden w-14 laptop:w-20 desktop:w-20 h-full tablet:flex flex-col
      justify-between items-center text-xs pt-16"
        >
          <Button className="flex relative justify-center items-center">
            <Bell className="h-5 w-4 " />
            <BsDot
              size={21}
              className="absolute -right-2 -top-3 pt-1"
              color={"red"}
            />
          </Button>
        </div>
      </section>
    );
  }
}
