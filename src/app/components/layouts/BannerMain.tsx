import imgBarman from "../../../../public/assets/images/barman-aperitivo.webp";
import imgGlassAperitivo from "../../../../public/assets/images/aperitivo-glass.webp";
import imgCopaAperitivo from "../../../../public/assets/images/aperitivo-copa.webp";
import Image from "next/image";

function BannerMain() {
  return (
<>
      <div className="h-72 sm:h-auto overflow-hidden sm:flex-1 relative fadeToLeft">
        <Image
          className="absolute top-1/3 left-1/4 sombraPngLeft"
          src={imgGlassAperitivo}
          alt="Vaso de aperitivo"
        />
        <Image
          className="absolute top-1/3 left-1/3 sombraPngLeft"
          src={imgCopaAperitivo}
          alt="Vaso de aperitivo"
        />
      </div>
      <div className="overflow-hidden sm:flex-1 relative fadeToLeft">
        <div className="absolute z-10 text-center text-white p-6 top-1/3 font-serif ">
          <h2 className="font-bold">Time for aperitive</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
            qui sed officia iste quisquam at quasi adipisci.
          </p>
        </div>
        <Image
          className="brightness-75"
          src={imgBarman}
          alt="Barman sirviendo aperitivo"
        />
      </div>
      </>
  );
}

export default BannerMain;
