import React, { CSSProperties, useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { motion } from "framer-motion"
import images from "@/helpers/images"
import DownloadCVButton from "./DownloadCVButton"
import { navLinks } from "@/helpers/constants"

const Navbar = () => {
  const [showMobileNavigation, setShowMobileNavigation] = useState<boolean>(false)
  const menuBg: CSSProperties = { backgroundImage: `url('/src/assets/bgWhite.png')` }
  const handlClick: () => void = () => setShowMobileNavigation(!showMobileNavigation)
  return (
    <nav className="w-full p-4 bg-white/25 backdrop-blur-sm shadow-navShadow fixed z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={images.logo} alt="logo" className="w-24 2xl:w-28" />
        <ul className="flex-1 flex justify-center items-center list-none max-[900px]:hidden">
          {navLinks.map(
            (link) => (
              <li
                className="group flex flex-col justify-center items-center mx-4 my-0"
                key={link}
              >
                <div className="group-hover:bg-secondary size-[6px] mb-[5px] rounded-full"></div>
                <a
                  href={`#${link}`}
                  style={{ textShadow: "1px 1px 2px white" } satisfies CSSProperties} // Usfull when the text is on darck backround
                  className="text-base 2xl:text-lg text-brown no-underline uppercase font-medium cursor-pointer transition-all duration-300 ease-in-out hover:text-secondary"
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>
        <DownloadCVButton />
        <div className="size-9 rounded-full relative flex justify-center items-center bg-secondary min-[900px]:hidden">
          <MdMenu
            className="size-[70%] text-white"
            onClick={handlClick}
          />
          {showMobileNavigation && (
            <motion.nav
              style={menuBg}
              className="min-[900px]:hidden w-4/5 h-screen fixed top-0 right-0 bottom-0 z-10 p-4 flex flex-col justify-end items-end bg-white bg-cover bg-center bg-repeat shadow-md"
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <MdClose
                className="size-12 rounded-full text-secondary hover:bg-secondary/10 p-1 my-2 mx-4 cursor-pointer"
                onClick={handlClick}
              />
              <ul className="m-0 p-0 h-full w-full flex flex-col justify-start items-start list-none">
                {navLinks.map((link) => (
                  <li key={link} className="w-full hover:bg-secondary/10">
                    <a
                      className="inline-block cursor-pointer p-4 w-full text-gray text-sm min-[450px]:text-base uppercase no-underline font-medium transition-all duration-300 ease-in-out hover:text-secondary"
                      href={`#${link}`}
                      onClick={handlClick}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
