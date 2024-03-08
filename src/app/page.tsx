import ProcessCocktail from "./components/ProcessCocktail";
import BannerMain from "./components/layouts/BannerMain";
import Collections from "./components/layouts/Collections";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Presentation from "./components/layouts/Presentation";
import ShowSectionContainer from "./components/layouts/ShowSectionContainer";

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
      <ShowSectionContainer>
      <section id="Collections" className=" text-center mt-32">
        <Collections />
      </section>
      </ShowSectionContainer>
      <ShowSectionContainer>
      <section
        id="ProcessCocktail"
        className="mt-10 text-center text-primary"
      >
        <ProcessCocktail />
      </section>
      </ShowSectionContainer>
      <footer id="Footer" className="onlyOpacityAnimation pb-10">
      <Footer />
      </footer>
    </>
  );
}
