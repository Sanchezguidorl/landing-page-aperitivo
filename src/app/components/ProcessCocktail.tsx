import Image from "next/image";
import imgCocktailsBar from "../../../public/assets/images/cocktailsBar.webp";
import iconStep1 from "../../../public/assets/images/cocktailProcess1.svg";
import iconStep2 from "../../../public/assets/images/cocktailProcess2.svg";
import iconStep3 from "../../../public/assets/images/cocktailProcess3.svg";

function ProcessCocktail() {
  return (
    <>
      <div className="h-96 relative flex justify-center items-center overflow-hidden">
        <Image
        quality={60}
          
          src={imgCocktailsBar}
          alt="CocktailsBar"
          className="absolute h-full object-cover"
          sizes="(max-width:600) 600px"
        />
      </div>
      <h3 className="text-primary font-bold text-xl mt-12">
        It&apos;s Cocktail O&apos;clock
      </h3>
      <div className="flex flex-col sm:flex-row justify-around items-center mt-16">
        <div className="flex flex-col items-center w-80 px-4 py-6">
          <div className=" h-44 w-32 border-primary flex justify-center items-center">
            <Image  src={iconStep1} alt="Icon step process" />
          </div>
          <h4 className="font-bold mt-4 text-lg">Cocktail text</h4>
          <p className=" font-semibold mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni
            provident exercitationem inventore cum et aliquid vero velit
          </p>
        </div>
        <div className="flex flex-col items-center w-80 px-4 py-6">
          <div className=" h-44 w-32 border-primary flex justify-center items-center">
            <Image  src={iconStep2} alt="Icon step process" />
          </div>
          <h4 className="font-bold mt-4 text-lg">Cocktail text</h4>
          <p className=" font-semibold mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni
            provident exercitationem inventore cum et aliquid vero velit
          </p>
        </div>
        <div className="flex flex-col items-center w-80 px-4 py-6">
          <div className=" h-44 w-32 border-primary flex justify-center items-center">
            <Image  src={iconStep3} alt="Icon step process" />
          </div>
          <h4 className="font-bold mt-4 text-lg">Cocktail text</h4>
          <p className=" font-semibold mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni
            provident exercitationem inventore cum et aliquid vero velit
          </p>
        </div>
      </div>
    </>
  );
}

export default ProcessCocktail;
