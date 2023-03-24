export default function Footer(): JSX.Element {
  const year: number = new Date().getFullYear();
  return (
    <div className="sm:mb-2 pt-2 md:mb-6">
      <p className="text-zinc-400 text-[7px] text-center">
        Copyright &copy; {year}
      </p>
    </div>
  );
}
