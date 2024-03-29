"use client";

import { ReactNode, useEffect, useRef } from "react";

function ShowSectionContainer({ children, sectionName }: { children: ReactNode, sectionName:string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleScrollAnimation = () => {
    const section = elementRef.current;
    const triggerBottom = (window.innerHeight / 5) * 4;
    if (section) {
      const boxTop = section.getBoundingClientRect().top;
      const boxHeight = section.offsetHeight;
      if (boxTop < triggerBottom && boxTop > ((boxHeight * 70) / 100) * -1) {
        section.classList.remove("hidden-section");
        section.classList.add("show");
      } else {
        section.classList.remove("show");
        section.classList.add("hidden-section");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScrollAnimation);

    return () => {
      document.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <section ref={elementRef} id={sectionName} className="hidden-section section textShadow">
      {children}
    </section>
  );
}

export default ShowSectionContainer;
