
import { useEffect, useState } from "react";

import { SelectedPage } from "./types";


import soleusTitleLogo from "@/assets/images/soleusTitleLogo.png";
import { motion } from "framer-motion";

const index = (
  { selectedPage }: { selectedPage?: SelectedPage }
) => {

  const [selectedPageState, setSelectedPageState] = useState<SelectedPage>(selectedPage ? selectedPage : SelectedPage.header);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedPageState(selectedPage ? selectedPage : SelectedPage.header);
  }, [selectedPage]);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPageState(SelectedPage.header)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <>
      <div className="flex flex-col  md:py-7 py-5 w-full sticky top-0 z-10 bg-[#212529]
        border-b-[1px] border-gray-700
      ">

        <div className="flex justify-between w-full items-center">

          <a href={`#${SelectedPage.header}`}

            className="flex title-font font-medium items-center mb-4 md:mb-0"
            onClick={(e) => {
              setSelectedPageState(SelectedPage.header)
              e.preventDefault();
              window.scrollTo(0, 0);
            }}
          >
            <img src={soleusTitleLogo} alt="Soleus Logo" className={`${isTopOfPage ? "w-28" : "w-20"}
            transition-all duration-500 ease-in-out
          `} />
          </a>
          {/* for pc */}
          <div className="md:block hidden">

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

              <a href={`#${SelectedPage.AboutUs}`}
                className={`mr-5 transition-all duration-200 ease-in-out hover:text-gray-400
                    ${selectedPageState === SelectedPage.AboutUs ? "text-soleus-green" : "text-gray-500"}
                    `}
                onClick={(e) => {
                  setSelectedPageState(SelectedPage.AboutUs)
                  e.preventDefault();
                }
                }
              >About</a>

              <a href={`#${SelectedPage.Services}`}
                className=
                {`mr-5 transition-all duration-200 ease-in-out hover:text-gray-400 
                    ${selectedPageState === SelectedPage.Services ? "text-soleus-green" : "text-gray-500"}`}
                onClick={() => setSelectedPageState(SelectedPage.Services)}
              >Services</a>

              <a href={`#${SelectedPage.ContactUs}`} className={`mr-5 transition-all duration-200 ease-in-out hover:text-gray-400
              
              ${selectedPageState === SelectedPage.ContactUs ? "text-soleus-green" : "text-gray-500"}`}
                onClick={() => setSelectedPageState(SelectedPage.ContactUs)}
              >Contact</a>
            </nav>
          </div>
          {/* for mobile */}
          <div className="md:hidden block">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open. */}
              <svg className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>

          </div>

        </div>

        {isMobileMenuOpen && (

          <motion.div
            className={`md:hidden w-full flex bg-[#212529]`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}

          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a

                href={`#${SelectedPage.AboutUs}`}
                className={`block px-3 py-2 rounded-md text-base font-medium
            ${selectedPageState === SelectedPage.AboutUs ? "text-soleus-green" : "text-gray-500"}`}
                onClick={(e) => {
                  setSelectedPageState(SelectedPage.AboutUs)
                  e.preventDefault();
                }
                }
              >About</a>

              <a href={`#${SelectedPage.Services}`}
                className=
                {`block px-3 py-2 rounded-md text-base font-medium  
            ${selectedPageState === SelectedPage.Services ? "text-soleus-green" : "text-gray-500"}`}
                onClick={() => setSelectedPageState(SelectedPage.Services)}
              >Services</a>

              <a href={`#${SelectedPage.ContactUs}`} className={
                `block px-3 py-2 rounded-md text-base font-medium
            ${selectedPageState === SelectedPage.ContactUs ? "text-soleus-green" : "text-gray-500"}`}
                onClick={() => setSelectedPageState(SelectedPage.ContactUs)}
              >Contact</a>

            </div>

          </motion.div>
        )}


      </div>
      {/* for mobile */}




    </>
  )
}

export default index