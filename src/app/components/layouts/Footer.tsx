import Image from "next/image";
import imgLicor1 from "../../../../public/assets/images/licores/licor.webp";
import imgLicor2 from "../../../../public/assets/images/licores/licor1.webp";
import imgLicor3 from "../../../../public/assets/images/licores/licor2.webp";
import imgLicor4 from "../../../../public/assets/images/licores/licor3.webp";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="h-80 relative z-0 flex justify-between">
        <Image
          className="absolute  opacity-20 -left-20 top-8 perspective h-fit w-1/4 sm:w-1/5"
          src={imgLicor1}
          alt="Image licor"
          sizes="(max-width:400px) 300px, 500px"
        />
        <Image
          className="absolute  opacity-20 perspective h-fit w-1/4 sm:w-1/5 left-1/4"
          src={imgLicor2}
          alt="Image licor"
          sizes="(max-width:400px) 350px, 500px"
        />
        <Image
          className="absolute  opacity-20 perspective h-fit w-1/4 sm:w-1/5 -right-1/4 top-1/3 sm:top-0"
          src={imgLicor3}
          alt="Image licor"
          sizes="(max-width:400px) 350px, 500px"
        />
        <Image
          className="absolute  opacity-20 perspective h-fit w-1/4 sm:w-1/5 left-1/2 top-3/4"
          src={imgLicor4}
          alt="Image licor"
          sizes="(max-width:400px) 350px, 500px"
        />
      </div>
      <div className="textShadowFooter relative z-10 flex flex-col md:flex-row justify-around items-center text-center pt-20 pb-2">
        <div>
          <p className=" font-semibold text-xl">Contact</p>
          <ul className="mt-4 ">
            <li className="text-sm mt-1 li-footer">
              <Link href="#">
                <span className="transition-all duration-200 simbolList">
                  &#9679;
                </span>
                Ipsum consectetur sibarie
              </Link>
            </li>
            <li className="text-sm mt-1 li-footer">
              <Link href="#">
                <span className="transition-all duration-200 simbolList">
                  &#9679;
                </span>
                Lorem consectetur
              </Link>
            </li>
            <li className="text-sm mt-1 li-footer">
              <Link href="#">
                <span className="transition-all duration-200 simbolList">
                  &#9679;
                </span>
                Lorem ipsum dolor, consectetur
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <p className=" font-serif text-5xl">Aperitivo</p>
          <ul className="flex flex-col sm:flex-row mt-4">
            <li className="text-sm li-footer  sm:mr-6">
              <Link href="#">
                <span className="transition-all duration-200 simbolList">
                  &#9679;
                </span>
                Lorem consectetur
              </Link>
            </li>

            <li className="text-sm li-footer ">
              <Link href="#">
                <span className="transition-all duration-200 simbolList">
                  &#9679;
                </span>{" "}
                Lorem consectetur
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-10">
          <p className=" font-semibold text-xl">Service</p>
          <ul className="mt-4">
            <li className="text-sm li-footer mt-1">
              <Link href="#">
                <span className="transition-all duration-200 simbolList">
                  &#9679;
                </span>{" "}
                Lorem ipsum dolor, sit amet consectetur
              </Link>
            </li>
            <li className="text-sm li-footer mt-1">
              <Link href="#">
                <span className="transition-all duration-200 simbolList">
                  &#9679;
                </span>{" "}
                Lorem ipsum dolor, sit amet consectetur
              </Link>
            </li>
            <li className="text-sm li-footer mt-1">
              <Link href="#">
                <span className="transition-all duration-200 simbolList">
                  &#9679;
                </span>{" "}
                Lorem ipsum dolor, sit amet consectetur
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-center mt-20 p-2">
        &copy; Riording consectetur, adipisicing elit. Nobis qui voluptatem
        excepturi quidem
      </p>
    </>
  );
}

export default Footer;
