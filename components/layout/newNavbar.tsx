import Link from "next/link";
import React, { useRef, useState } from "react";
import { TbMenu, TbX } from "react-icons/tb";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { useRouter } from "next/router";

const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [selected, setSelected] = React.useState("home");

  const router = useRouter();

  const landingItems = [
    { name: "Home", url: "/" },
    { name: "Posts", url: "/posts" },
    { name: "Newsletter", url: "/newsletter" },
    { name: "Manifesto", url: "/manifesto" },
  ];

  React.useEffect(() => {
    if (router.asPath === "/") {
      setSelected("Home");
    } else if (router.asPath === "/posts") {
      setSelected("Posts");
    } else if (router.asPath === "/manifesto") {
      setSelected("Manifesto");
    }
  }, [router.asPath]); //eslint-disable-line

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="flex items-center w-full gap-4 px-2 py-1 transition duration-500 rounded-lg md:hover:ring-2 ring-slate-300 group "
          onClick={() => {
            const htmlTag = document.documentElement;
            htmlTag.setAttribute("data-theme", "light");
            setTheme("light");
          }}
        >
          <BsMoon
            className="w-5 h-5 text-white transition duration-500 group-hover:text-p-200"
            role="button"
          />
        </button>
      );
    } else {
      return (
        <button
          className="flex items-center w-full gap-4 px-2 py-1 transition duration-500 rounded-lg md:hover:ring-2 ring-slate-300 group"
          onClick={() => {
            const htmlTag = document.documentElement;
            htmlTag.setAttribute("data-theme", "dark");

            setTheme("dark");
          }}
        >
          <BsSun
            className="w-5 h-5 transition duration-500 lg:text-yellow-500 sm:text-yellow-300 group-hover:text-yellow-700"
            role="button"
          />
        </button>
      );
    }
  };
  return (
    <header className="!z-50 relative">
      <nav className="flex flex-wrap items-center justify-between w-full px-4 py-2 text-lg text-gray-700 md:py-0 !z-[400]">
        <Link
          href="/"
          className="flex items-center transition duration-1000 hover:scale-110"
        >
          <div className="w-5 h-5 mr-2 rounded-full shadow-md bg-p-500"></div>
          <p className="-ml-0 text-2xl font-bold f1 text-p-500 dark:text-p-400">
            Satirical Silicon
          </p>
        </Link>

        <button
          className="block w-6 h-6 cursor-pointer md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <TbX className="text-2xl text-p-900 dark:text-p-200" />
          ) : (
            <TbMenu className="text-2xl text-p-900 dark:text-p-200" />
          )}
        </button>

        <div
          className={
            " w-full md:flex md:items-center md:w-auto " +
            (isOpen ? "block" : "hidden")
          }
        >
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:py-2 md:items-center">
              <>
              
                {landingItems.map((item) => (
                  <li key={item.name} className="block py-2 md:px-2 group">
                    <Link
                      className={`px-2 py-1 transition duration-300 rounded-lg hover:bg-p-500 hover:!text-white f1   ${
                        item.name === selected
                          ? " dark:text-p-400 text-p-600 font-semibold"
                          : " dark:text-p-200"
                      }`}
                      href={item.url}
                      onClick={() => {
                        if (isOpen) setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

              </>
            <li>
              <div className={"flex  justify-center ml-1 "}>
                {renderThemeChanger()}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NewNav;
