'use client';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Header() {
  const [isOpenMenu,setIsOpenMenu]=useState(true);

  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({top: element.offsetTop, behavior: "smooth" });
    }
  };

  const handleClickMenu=()=>{
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header id="Header" className="fixed w-full z-10">
      <nav className="bg-header h-full sm:h-24 text-primary flex flex-col sm:flex-row justify-between items-center p-6">
        <div className="flex items-center w-full sm:w-40 justify-between sm:justify-center ">
        <h2 className="text-2xl font-bold">Aperitivo</h2>
<div className='sm:hidden'>
{isOpenMenu?
<div className='cursor-pointer' onClick={handleClickMenu}>
<MenuIcon fontSize='large'/>
</div>
:
<div className='cursor-pointer' onClick={handleClickMenu}>
<CloseIcon fontSize='large'/>
</div>
}
</div>
        </div>
        <ul className="hidden sm:flex flex-row items-center w-fit">
          <li
            className="sm:px-8 sm:py-2 sm:ml-4 mt-2 sm:mt-0 cursor-pointer nav-link duration-500 uppercase"
            onClick={() => handleScroll("Presentation")}
          >
            Home
          </li>
          <li
            className="sm:px-8 sm:py-2 sm:ml-4 mt-2 sm:mt-0 cursor-pointer nav-link duration-500 uppercase"
            onClick={() => handleScroll("Main")}
          >
            Aperitivo
          </li>
          <li
            className="sm:px-8 sm:py-2 sm:ml-4 mt-2 sm:mt-0 cursor-pointer nav-link duration-500 uppercase"
            onClick={() => handleScroll("Collections")}
          >
            Collections
          </li>
          <li
            className="sm:px-8 sm:py-2 sm:ml-4 mt-2 sm:mt-0 cursor-pointer nav-link duration-500 uppercase"
            onClick={() => handleScroll("Footer")}
          >
            Contact
          </li>
        </ul>
        <ul className={`${!isOpenMenu?"h-full": "h-0"} overflow-hidden flex sm:hidden flex-col text-center max-w-full w-full`}>
          <li
            className="cursor-pointer mt-2 nav-link duration-500 uppercase"
            onClick={() => handleScroll("Presentation")}
          >
            Home
          </li>
          <li
            className="cursor-pointer mt-2 nav-link duration-500 uppercase"
            onClick={() => handleScroll("Main")}
          >
            Aperitivo
          </li>
          <li
            className="cursor-pointer mt-2 nav-link duration-500 uppercase"
            onClick={() => handleScroll("Collections")}
          >
            Collections
          </li>
          <li
            className="cursor-pointer mt-2 nav-link duration-500 uppercase"
            onClick={() => handleScroll("Footer")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
