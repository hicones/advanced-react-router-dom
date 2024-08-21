import Lottie from "react-lottie";
import HomeAnimation from "@/assets/animations/home.json";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";

const navigationFeatures = [
  "URL-based navigation with react-router-dom",
  "Use of search parameters (searchParams) for data filtering",
  "Asynchronous data loading with loader",
  "Location state sharing with location.state",
  "Using OutletContext to pass data between routes",
];

export function HomePage() {
  const isMobile = window.innerWidth < 768;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HomeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex flex-col items-center justify-center w-full xl:gap-8 gap-4">
      <section className="flex md:flex-row flex-col gap-8 p-4 pt-10 items-center justify-center w-fit">
        <Lottie
          options={defaultOptions}
          height={isMobile ? 320 : 500}
          width={isMobile ? 320 : 500}
        />
        <div className="flex flex-col gap-4 w-full max-w-3xl">
          <h1 className="xl:text-6xl text-3xl font-bold text-foreground">
            Advanced use of
            <br />
            react-router-dom
          </h1>
          <p className="xl:text-4xl text-xl text-muted-foreground">
            Rick and Morty API integration
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/hicones/advanced-react-router-dom"
              target="_blank"
              className="hover:scale-105 transition duration-300 hover:text-teal-500"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="hhttps://rickandmortyapi.com"
              target="_blank"
              className="hover:scale-105 transition duration-300 hover:text-teal-500"
              rel="noopener noreferrer"
            >
              <AiOutlineApi size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/henrique-almeida-079867169/"
              target="_blank"
              className="hover:scale-105 transition duration-300 hover:text-teal-500"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.instagram.com/hicones1/"
              target="_blank"
              className="hover:scale-105 transition duration-300 hover:text-teal-500"
              rel="noopener noreferrer"
            >
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-4 border-t-4 bg-muted p-4 py-10 items-center">
        <div className="max-w-5xl w-full flex flex-col gap-4">
          <article className="text-lg text-foreground border-b-2 py-4 font-medium text-justify">
            This project demonstrates the advanced use of the react-router-dom
            library to manage navigation in a React application that consumes
            the Rick and Morty API. The project uses resources such as
            searchParams, loader, location.state, and OutletContext to create a
            rich and dynamic user experience.
          </article>
          <h2 className="text-foreground font-semibold text-2xl">Features</h2>
          <ol className="flex flex-col xl:list-disc xl:pl-10 gap-2">
            {navigationFeatures.map((feature, index) => (
              <li
                key={index}
                className="font-normal text-lg text-muted-foreground"
              >
                {feature}
              </li>
            ))}
          </ol>
          <article className="text-lg text-foreground border-y-2 py-4 font-medium text-justify">
            In this project, we sought to minimize the constant use of{" "}
            <strong> useState </strong>
            and <strong> useEffect</strong> to manage state and side effects.
            Instead, we used react-router-dom functionality to handle:
            <br />
            Data Loading: By using the loader, we avoid the need for multiple
            <strong> useEffect</strong> to fetch data from different components.
            This results in a cleaner and more predictable architecture.
            <br />
            State management: We use location.state and OutletContext to share
            data between components and routes without resorting to excessive
            use of <strong> useState</strong>. This helps avoid the creation of
            unnecessary states and reduces the complexity of state management.
            <br />
            By adopting these practices, the project benefits from a more
            efficient navigation structure that is less prone to problems
            related to the synchronization of states and effects.
          </article>
          <footer className="text-justify font-medium text-sm">
            Contributions are welcome! Please send a pull request or open an
            issue to suggest improvements or report problems.
          </footer>
        </div>
      </section>
    </main>
  );
}
