import Image from "next/image";
import imgLicor1 from "../../../../public/assets/images/licores/licor.webp";
import imgLicor2 from "../../../../public/assets/images/licores/licor1.webp";
import imgLicor3 from "../../../../public/assets/images/licores/licor2.webp";
import imgLicor4 from "../../../../public/assets/images/licores/licor3.webp";

function Footer() {
  return (
<>
      <div className="h-80 relative overflow-hidden flex justify-between">
        <Image
          className="absolute -left-20 top-8 perspective h-fit w-1/4 sm:w-1/5"
          src={imgLicor1}
          alt="Image licor"
        />
        <Image
          className="absolute perspective h-fit w-1/4 sm:w-1/5 left-1/4"
          src={imgLicor2}
          alt="Image licor"
        />
        <Image
          className="absolute perspective h-fit w-1/4 sm:w-1/5 -right-1/4 -top-1/2"
          src={imgLicor3}
          alt="Image licor"
        />
        <Image
          className="absolute perspective h-fit w-1/4 sm:w-1/5 left-1/2 top-1/2"
          src={imgLicor4}
          alt="Image licor"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center text-center pt-20 pb-2">
        <div>
          <p className=" font-semibold text-xl">Contact</p>
          <ul className="mt-4">
            <li className="text-sm mt-1">Ipsum consectetur sibarie</li>
            <li className="text-sm mt-1">Lorem consectetur</li>
            <li className="text-sm mt-1">Lorem ipsum dolor, consectetur</li>
          </ul>
        </div>
        <div className="mt-10">
          <p className=" font-serif text-5xl">Aperitivo</p>
          <ul className="flex flex-col sm:flex-row mt-4">
          <li className="text-sm list-disc sm:mr-6">Lorem consectetur</li>
            <li className="text-sm list-disc">Lorem consectetur</li>
          </ul>
        </div>
        <div className="my-10">
          <p className=" font-semibold text-xl">Service</p>
          <ul className="mt-4">
            <li className="text-sm mt-1">Lorem ipsum dolor, sit amet consectetur</li>
            <li className="text-sm mt-1">Lorem ipsum dolor, sit amet consectetur</li>
            <li className="text-sm mt-1">Lorem ipsum dolor, sit amet consectetur</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-center mt-20 p-2">&copy; Riording consectetur, adipisicing elit. Nobis qui voluptatem excepturi quidem</p>
</>
  );
}

export default Footer;
