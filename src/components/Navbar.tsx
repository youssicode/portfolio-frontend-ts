import React, { CSSProperties, useState } from "react"
import { MdMenu } from "react-icons/md"
import images from "@/helpers/images"
import DownloadCVButton from "./DownloadCVButton"
import { navLinks } from "@/helpers/constants"
import MobileNavLinks from "./MobileNavLinks"

const Navbar = () => {
  const [showMobileNavigation, setShowMobileNavigation] = useState<boolean>(false)
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
        <DownloadCVButton customClass="max-sm:hidden" />
        <div className="size-9 rounded-full relative flex justify-center items-center bg-secondary min-[900px]:hidden">
          <MdMenu
            className="size-[70%] text-white"
            onClick={handlClick}
          />
          {showMobileNavigation && <MobileNavLinks handlClick={handlClick} />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
