import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserInterface } from "../../Context/GithubContextData";

type UserProps = {
  user: UserInterface;
};
// docker run --rm --name test-redis redis:6.2-alpine redis-server --loglevel warning
export default function User({ user }: UserProps): JSX.Element {
  const [hoverText, setHoverText] = useState<boolean>(false);

  const { login, avatar_url } = user;
  return (
    <Link to={`/user/${login}`}>
      <section className="p-1 ">
        <div
          className="clip-path-myPolygon
        hover:border-[3.7px] hover:border-indigo-600 h-36 w-48 sm:w-52 sm:h-52 hover:ml-2 tablet:h-48 tablet:w-52 laptop:w-68 laptop:h-48 relative hover:duration-500 sm:hover:w-[200px] overflow-hidden "
        >
          <img
            src={avatar_url}
            alt="Profile"
            className={`brightness-75 hover:brightness-100 object-top h-full w-full object-cover duration-1000 contrast-75 hover:contrast-75`}
            onMouseEnter={() => setHoverText(true)}
            onMouseLeave={() => setHoverText(false)}
            loading="lazy"
          />
          <h4
            className={`text-white absolute left-4 sm:left-2 bottom-6 md:left-2 -rotate-90 text-xs sm:text-[10px] ${
              hoverText
                ? "hover:opacity-100 duration-600 touch-auto"
                : "opacity-0 duration-600"
            } `}
          >
            {login}
          </h4>

          <span
            className={`absolute flex top-2 right-16 sm:right-4 tablet:right-3 space-x-[2px] ${
              hoverText ? "opacity-100" : "opacity-0"
            }`}
          >
            {[1, 2, 3].map((item, index) => (
              <span
                key={index}
                className="bg-white rounded-full h-[.2rem] w-[.2rem]"
              ></span>
            ))}
          </span>
        </div>
      </section>
    </Link>
  );
}
