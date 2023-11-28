import imgCocktail1 from "../../../../public/assets/images/cocktailImg2.webp";
import imgCocktail2 from "../../../../public/assets/images/cocktailImg7.webp";
import imgCocktail3 from "../../../../public/assets/images/cocktailImg6.webp";
import imgBrindis from "../../../../public/assets/images/brindis-glasses.svg";
import Image from "next/image";

function Collections() {
  return (
<>
      <h2 className="text-xl font-bold">Cocktail Collections</h2>
      <p className=" w-80 mx-auto mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor elit.
      </p>
      <div className="flex flex-col sm:flex-row mt-8 justify-around">
        <div className="px-1 py-10 lg:p-10">
          <div className="mx-auto w-60 relative h-96 flex justify-center items-center overflow-hidden cocktail-container">
            <Image
              src={imgCocktail3}
              className=" cocktail-image contrast-150 absolute h-full object-cover"
              alt="Coctail image"
            />
          </div>
          <h4 className="text-5xl text-aperitivo font-serif mt-5">
            Cocktail name
          </h4>
          <button className="mt-4 px-8 btn-primary py-0.5 rounded-2xl">Consult</button>
        </div>
        <div className="px-1 py-10 lg:p-10">
          <div className="mx-auto w-60 relative h-96 flex justify-center items-center overflow-hidden cocktail-container">
            <Image
              src={imgCocktail1}
              className=" cocktail-image contrast-150 absolute h-full object-cover"
              alt="Coctail image"
            />
          </div>
          <h4 className="text-5xl text-aperitivo font-serif mt-5">
            Cocktail name
          </h4>
          <button className="mt-4 px-8 btn-primary py-0.5 rounded-2xl">Consult</button>
        </div>
        <div className="px-1 py-10 lg:p-10">
          <div className="mx-auto w-60 relative h-96 flex justify-center items-center overflow-hidden cocktail-container">
            <Image
              src={imgCocktail2}
              className=" cocktail-image contrast-150 absolute h-full object-cover"
              alt="Coctail image"
            />
          </div>
          <h4 className="text-5xl text-aperitivo font-serif mt-5">
            Cocktail name
          </h4>
          <button className="mt-4 px-8 btn-primary py-0.5 rounded-2xl">Consult</button>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center flex-wrap">
        <Image src={imgBrindis} className="" alt="Brindis Image" />
        <h4 className="font-bold mt-4 text-xl">Lorem ipsum amet consec.</h4>
        <p className="w-96 sm:w-5/12 mt-3 text-base font-semibold">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque quibusdam inventore ex dolore, doloribus, quo molestias aperiam nam neque tempora, iusto sunt facilis deserunt reiciendis.
        </p>
        <button className="btn-primary w-40 rounded-full  mt-6 py-1">
          Read More
        </button>
      </div>
      </>
  );
}

export default Collections;
