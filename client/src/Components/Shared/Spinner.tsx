import spinner from "../../assets/spinner.gif";

export default function Spinner(): JSX.Element {
  return (
    <div className=" container mx-auto w-screen h-screen flex justify-center pl-10 items-center ">
      <img
        width={180}
        className="text-center mx-auto w-32 h-32 tablet:h-36 tablet:w-36"
        src={spinner}
        alt="Fetching Users from the database"
      />
    </div>
  );
}
