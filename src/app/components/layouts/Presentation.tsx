import imgAperitivo from "../../../../public/assets/images/aperitivo.webp";
import imgPalmeras from "../../../../public/assets/images/palmeras.webp";
import Image from "next/image";

function Presentation() {
  return (
    <>
      <Image
        quality={80}
        className="absolute -left-1/3 sm:-left-1/4 -top-1/3 palmera sombraPngRight contrast-200"
        src={imgPalmeras}
        alt="Imagen de hojas de palmera"
        sizes="(max-width:600px) 600px, 831px"
      />
      <div
        id="Presentation-content"
        className="absolute left-12 sm:left-1/3 top-1/3 sm:top-1/4"
      >
        <div className="relative">
          <div className="h-60 sm:h-80 rounded-full py-10 bg-aperitivo">
            <Image
              quality={90}
              src={imgAperitivo}
              alt="Imagen de Aperitivo"
              className="h-full w-fit"
              sizes="(max-width:600px) 300px, 500px"
            />
          </div>
          <div className="absolute top-1/4 left-1/3 sm:left-1/2 w-68  sm:w-80">
            <h1 className="text-aperitivo text-6xl sm:text-7xl font-serif text-right">
              Aperitivo
            </h1>
            <p className="text-md sm:text-lg text-end font-mono">
              Finest, cocktail, delivery
            </p>
            <button className="btn-primary px-4 py-2 float-right mt-2 rounded-2xl font-mono text-sm sm:text-md">
              Order Online
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
