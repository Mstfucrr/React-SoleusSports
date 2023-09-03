
import { useEffect, useState } from "react";

import { SelectedPage } from "./types";
import Link from "./Link";


import soleusTitleLogo from "@/assets/images/soleusTitleLogo.png";
import { motion } from "framer-motion";

const index = (
  { selectedPageState, setSelectedPageState }: { selectedPageState: SelectedPage, setSelectedPageState: (page: SelectedPage) => void }
) => {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const links = [
    { page: "Galeri", setSelectedPageState: setSelectedPageState },
    { page: "Iletişim", setSelectedPageState: setSelectedPageState },

  ]

  return (
    <div className="sticky flex -mx-4 px-3 top-0 z-40 bg-soleus-grey border-b-[1px] border-gray-700">
      <div className="flex flex-col md:py-7 py-5 w-full">
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

            <nav className="md:ml-auto flex flex-wrap items-center justify-center text-lg
              hover:text-gray-300 font-semibold
            ">

              {links.map((link, index) => (
                <Link key={index} {...link} selectedPageState={selectedPageState} />
              ))}

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

      </div>
      {/* for mobile */}

      <motion.div
        className={`
          md:hidden flex w-3/5 h-screen fixed right-0 bottom-0 py-16 pl-9 flex-col bg-soleus-dark-grey top-0
          `}
        initial={{
          x: 300,
          y: -100,
          scale: 0.5,
          borderRadius: "100%",
          originX: 1,
          originY: 0,
        }}
        animate={{
          x: isMobileMenuOpen ? 0 : 300,
          y: isMobileMenuOpen ? 0 : -100,
          scale: isMobileMenuOpen ? 1 : 0.5,
          borderRadius: isMobileMenuOpen ? "0%" : "100%",
          originX: isMobileMenuOpen ? 0 : 1,
          originY: isMobileMenuOpen ? 0 : 0,
        }}
        transition={{ duration: .6, type: "spring", bounce: .25 }}
      >
        {/* close button */}
        <button
          className="flex justify-end m-5 rounded-md text-gray-400"
          aria-expanded="false"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Icon when menu is closed. */}
          <svg className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>

        </button>

        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-1/3 flex flex-col gap-6 text-xl">
          {links.map((link, index) => (
            <Link key={index} {...link} selectedPageState={selectedPageState} />
          ))}


        </div>

      </motion.div>



    </div>
  )
}

export default index