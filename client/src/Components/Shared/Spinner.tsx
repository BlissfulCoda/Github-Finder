import spinner from "../../assets/gifs/spinner.gif";

export default function Spinner(): JSX.Element {
  return (
    <div className="container mx-auto  flex flex-col items-center justify-center mt-72  tablet:mt-56">
      <img
        width={180}
        className="text-center mx-auto w-20 h-20 tablet:w-12 tablet:h-12"
        src={spinner}
        alt="Loading Spinner"
      />
    </div>
  );
}
