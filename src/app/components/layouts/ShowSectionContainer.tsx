"use client";

import { ReactNode, useEffect, useRef } from "react";

function ShowSectionContainer({ children }: { children: ReactNode }) {
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
    <div ref={elementRef} className="hidden-section section textShadow">
      {children}
    </div>
  );
}

export default ShowSectionContainer;
