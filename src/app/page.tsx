"use client";
import { useEffect, useRef } from "react";
import ProcessCocktail from "./components/ProcessCocktail";
import BannerMain from "./components/layouts/BannerMain";
import Collections from "./components/layouts/Collections";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Presentation from "./components/layouts/Presentation";

export default function Home() {
  const sectionRefs = useRef<null|HTMLDivElement[]>(null);
  sectionRefs.current=[];
  const addRefElement=(el: HTMLDivElement)=>{
    if(el && sectionRefs.current && !sectionRefs.current.includes(el)){
    sectionRefs.current.push(el)}
  }
  const handleScrollAnimation = () => {
    const sections = sectionRefs.current;
    const triggerBottom = window.innerHeight/5*4;
    if (sections) {
      sections.forEach((section) => {
        const boxTop = section.getBoundingClientRect().top;
        const boxHeight = section.offsetHeight;
        if (boxTop < triggerBottom && boxTop > ((boxHeight*70/100)*-1)){
          section.classList.remove("hidden-section");
          section.classList.add("show");
        } else {
          section.classList.remove("show");
          section.classList.add("hidden-section");
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimation);

    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <>
      <Header />
      <section id="Presentation" className="relative">
        <Presentation />
      </section>
      <main id="Main" className="flex flex-col-reverse sm:flex-row">
        <BannerMain />
      </main>
      <section id="Collections" ref={addRefElement} className="section hidden-section text-center mt-32">
        <Collections />
      </section>
      <section
        id="ProcessCocktail"
        ref={addRefElement} className="section hidden-section mt-10 text-center text-primary"
      >
        <ProcessCocktail />
      </section>
      <footer id="Footer" ref={addRefElement} className="section hidden-section">
      <Footer />
      </footer>
    </>
  );
}
