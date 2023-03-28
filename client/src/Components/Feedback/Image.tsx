import { useContext } from "react";

import GithubContext from "../../Context/GithubContextData";
import { GithubContextInterface } from "../../Context/GithubContextData";

export default function Image(): JSX.Element {
  const { unsplash } = useContext(GithubContext) as GithubContextInterface;

  console.log(unsplash)

  return (
    <>
      {unsplash.map((image) => {
        <>
          <article key={image.id}>
            <img
              alt={image.alt_description}
              src={image.urls}
              className="h-full w-20 object-cover object-top"
            />
          </article>
        </>;
      })}
    </>
  );
}
