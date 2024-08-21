import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { TbMenu2, TbMoon, TbSun, TbX } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const headerOptions = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Characters",
    link: "/characters",
  },

  {
    name: "Episodes",
    link: "/episodes",
  },

  {
    name: "Locations",
    link: "/locations",
  },
];

export const Header = ({
  isDarkMode,
  toggleTheme,
}: {
  isDarkMode: boolean | string;
  toggleTheme: () => void;
}) => {
  const pathname = useLocation().pathname;

  return (
    <header className="flex items-center justify-between w-full px-8 py-6 text-foreground shadow border-b border-muted xl:relative sticky top-0 bg-background z-[999] transition duration-300">
      <h1 className="xl:text-2xl text-base font-bold text-foreground">
        Advanced react-router-dom
      </h1>
      <nav className="hidden gap-4 xl:flex">
        {headerOptions.map((option) => (
          <Link
            key={option.name}
            to={option.link}
            className={cn(
              "text-lg font-medium",
              pathname === option.link ? "text-teal-500" : "text-foreground",
            )}
          >
            {option.name}
          </Link>
        ))}
        {!isDarkMode ? (
          <TbMoon
            size={24}
            className="text-foreground cursor-pointer hover:opacity-95 hover:text-teal-500 transition duration-300"
            onClick={() => toggleTheme()}
          />
        ) : (
          <TbSun
            size={24}
            className="text-foreground cursor-pointer hover:opacity-95 hover:text-teal-500 transition duration-300"
            onClick={() => toggleTheme()}
          />
        )}
      </nav>
      <MobileMenu
        pathname={pathname}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
    </header>
  );
};

const MobileMenu = ({
  pathname,
  isDarkMode,
  toggleTheme,
}: {
  pathname: string;
  isDarkMode: boolean | string;
  toggleTheme: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="block xl:hidden">
      {!isOpen ? (
        <TbMenu2
          className="text-foreground animate-fade"
          onClick={() => setIsOpen(!isOpen)}
          size={20}
        />
      ) : (
        <TbX
          className="text-foreground animate-fade"
          onClick={() => setIsOpen(!isOpen)}
          size={20}
        />
      )}
      <nav
        className={cn(
          "transition duration-300",
          isOpen
            ? "flex gap-4 absolute top-16 left-0 w-full bg-background p-4 shadow-lg h-auto z-[999] justify-between"
            : "h-0 overflow-hidden",
        )}
      >
        <ul className="flex flex-col gap-4">
          {headerOptions.map((option) => (
            <Link
              key={option.name}
              to={option.link}
              className={cn(
                "text-lg font-medium transition duration-500",
                isOpen ? "animate-fade-in" : "hidden",
                pathname === option.link ? "text-teal-500" : "text-foreground",
              )}
            >
              {option.name}
            </Link>
          ))}
        </ul>
        <div
          className={cn(
            "p-2 rounded-full bg-muted border-2  items-center justify-center transition overflow-hidden animate-fade-in w-fit self-start",
            isOpen ? "flex" : "hidden",
          )}
        >
          {!isDarkMode ? (
            <TbMoon
              size={24}
              className="text-foreground cursor-pointer hover:opacity-95 hover:text-teal-500 transition duration-300 animate-fade-in"
              onClick={() => toggleTheme()}
            />
          ) : (
            <TbSun
              size={24}
              className="text-foreground cursor-pointer hover:opacity-95 hover:text-teal-500 transition duration-300 animate-fade-in"
              onClick={() => toggleTheme()}
            />
          )}
        </div>
      </nav>
    </div>
  );
};
