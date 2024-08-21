import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";
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

export const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <header className="flex items-center justify-between w-full px-8 py-6 text-black shadow border-b border-muted">
      <h1 className="xl:text-2xl text-base font-bold">
        Advanced react-router-dom
      </h1>
      <nav className="hidden gap-4 lg:flex">
        {headerOptions.map((option) => (
          <Link
            key={option.name}
            to={option.link}
            className={cn(
              "text-lg font-medium",
              pathname === option.link ? "text-teal-500" : "text-black",
            )}
          >
            {option.name}
          </Link>
        ))}
      </nav>
      <MobileMenu pathname={pathname} />
    </header>
  );
};

const MobileMenu = ({ pathname }: { pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="block xl:hidden">
      {!isOpen ? (
        <TbMenu2
          className="text-black animate-fade"
          onClick={() => setIsOpen(!isOpen)}
          size={20}
        />
      ) : (
        <TbX
          className="text-black animate-fade"
          onClick={() => setIsOpen(!isOpen)}
          size={20}
        />
      )}
      <nav
        className={cn(
          "transition duration-300",
          isOpen
            ? "flex flex-col gap-4 absolute top-16 left-0 w-full bg-white p-4 shadow-lg h-auto"
            : "h-0 overflow-hidden",
        )}
      >
        {headerOptions.map((option) => (
          <Link
            key={option.name}
            to={option.link}
            className={cn(
              "text-lg font-medium transition duration-500",
              isOpen ? "animate-fade-in" : "hidden",
              pathname === option.link ? "text-teal-500" : "text-black",
            )}
          >
            {option.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
