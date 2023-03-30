import spinner from "../../assets/spinner.gif";

export default function Spinner(): JSX.Element {
  return (
    <div className=" container mx-auto flex justify-center  items-center h-96 mt-24 tablet:mt-4">
      <img
        width={180}
        className="text-center mx-auto w-32 h-32 tablet:h-28 tablet:w-28"
        src={spinner}
        alt="Fetching Users from the database"
      />
    </div>
  );
}
