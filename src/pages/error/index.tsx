import Lottie from "react-lottie";
import { Header } from "@/components/app";
import NotFoundAnimation from "@/assets/animations/404.json";
import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";

export function ErrorPage() {
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 768;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
 
  return (
    <main className="w-full flex flex-col gap-4 items-center">
      <Header />
      <section className="flex flex-col lg:flex-row gap-4 items-center lg:items-end lg:py-20 w-full max-w-5xl p-4">
        <Lottie
          options={defaultOptions}
          height={isMobile ? 320 : 500}
          width={isMobile ? 320 : 500}
        />
        <div className="flex flex-col gap-2 justify-center w-3/4 items-center max-w-sm">
          <h1 className="text-7xl font-bold text-foreground">4O4</h1>
          <p className="text-4xl text-muted-foreground">Page not found</p>
          <Button
            className="w-full px-10 py-6 flex items-center gap-2 mt-10"
            onClick={() => navigate("/")}
          >
            <TbArrowBack size={20} />
            Back to home
          </Button>
        </div>
      </section>
    </main>
  );
}
