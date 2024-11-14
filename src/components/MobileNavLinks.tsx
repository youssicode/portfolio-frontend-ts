import React, { CSSProperties } from "react"
import { MdClose } from "react-icons/md"
import { motion } from "framer-motion"
import { navLinks } from "@/helpers/constants"
import DownloadCVButton from "./DownloadCVButton"

const MobileNavLinks = ({ handlClick }: { handlClick: () => void }) => {
    const menuBg: CSSProperties = { backgroundImage: `url('/src/assets/bgWhite.png')` }

    return (
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
                <DownloadCVButton customClass="sm:hidden mt-8" />
            </ul>
        </motion.nav>)
}

export default MobileNavLinks