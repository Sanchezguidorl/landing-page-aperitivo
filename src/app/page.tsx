import Header from "./components/layouts/Header";
import Presentation from "./components/layouts/Presentation";
import BannerMain from "./components/layouts/BannerMain";
import Collections from "./components/layouts/Collections";
import ProcessCocktail from "./components/ProcessCocktail";
import Footer from "./components/layouts/Footer";
import dynamic from "next/dynamic";
const ShowSectionContainer=dynamic(()=>import("./components/layouts/ShowSectionContainer"));

export default function Home() {
  return (
    <>
      <Header />
      <section id="Presentation" className="relative">
        <Presentation />
      </section>
      <main id="Main" className="flex flex-col-reverse sm:flex-row">
        <BannerMain />
      </main>
      <ShowSectionContainer sectionName="Collections">
        <div className=" text-center mt-32">
          <Collections />
        </div>
      </ShowSectionContainer>
      <ShowSectionContainer sectionName="ProcessCocktail">
        <div className="mt-10 text-center text-primary">
          <ProcessCocktail />
        </div>
      </ShowSectionContainer>
      <footer id="Footer" className="onlyOpacityAnimation pb-10">
        <Footer />
      </footer>
    </>
  );
}
