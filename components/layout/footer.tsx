import Link from "next/link";

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer className="relative w-full">
      {/* <footer className=" bg-gradient-to-t from-[#3CA0CB] via-[#3CA0CB] relative"> */}
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex flex-col items-center w-full sm:gap-1 lg:gap-2 bg-clear-pl4">
          <p className="text-xs text-slate-300">
            Copyright © {date}{" "}
            <Link className="underline cursor-pointer hover:underline " href={"https://tyfiero.com"}>
              Ty Fiero
            </Link>
          </p>
          <a
            href="https://www.termsfeed.com/live/666072e9-81d8-43ef-8a29-7547a11f7700"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 text-xs text-slate-300 hover:underline hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
