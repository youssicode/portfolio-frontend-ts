/* eslint-disable no-unused-vars */
import React from "react"
import { motion, Variants } from "framer-motion"
import images from "@/constants/images"
import { specialTechs } from "@/constants/constants"
import SectionWrapper from "@/wrapper/SectionWrapper"
import ProfileText from "./ProfileText"


const Hero = () => {
  const whileInViewAnimation = {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  };
  const scaleVariants: Variants = {
    whileInView: whileInViewAnimation,
  }

  return (
    <div className="relative size-full flex justify-center items-center flex-1 flex-col xl:flex-row gap-12 bg-transparent px-0 min-[450px]:px-4 pt-8 2xl:pt-24">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.85] flex flex-col justify-start items-start h-full my-0 max-xl:w-full"
      >
        <div className="w-full flex flex-col justify-start xl:justify-end items-start xl:items-end">
          <div className="flex justify-center items-center py-4 2xl:py-8 px-8 mb-8 bg-white rounded-xl w-auto shadow-hoverShadow">
            <span className="text-4xl 2xl:text-6xl">👋</span>
            <div className="ml-6">
              <p className="text-base 2xl:text-[1.75rem] text-left text-gray leading-6 min-[450px]:leading-8 2xl:mb-4">
                Hello, I am
              </p>
              <h1 className="font-extrabold leading-[3rem] text-center text-black capitalize text-3xl min-[450px]:text-[2.75rem]">
                Youssef
              </h1>
            </div>
          </div>

          <div className=" w-auto min-w-64 min-[450px]:min-w-80 text-lg min-[450px]:text-[1.6rem] font-extrabold text-secondary leading-6 capitalize py-4 px-6 bg-white rounded-xl shadow-hoverShadow">
            <ProfileText />
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 relative flex justify-end items-end h-full max-w-96 md:max-w-md"
      >
        <img
          className="w-full object-contain z-10"
          src={images.profile}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="absolute bottom-0 z-0 w-full h-[90%]"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={whileInViewAnimation}
        className="flex-[0.75] flex flex-row xl:flex-col flex-wrap justify-evenly items-start h-full max-xl:w-full"
      >
        {specialTechs.map((circle: string, index: number) => (
          <div
            className="flex justify-center items-center size-32 first:size-24 last:size-20 2xl:size-48 2xl:first:size-36 2xl:last:size-28 bg-white shadow-hoverShadow rounded-full m-4 xl:m-7"
            key={`circle-${index}`}
          >
            <img
              className="w-full h-auto p-[18%] "
              src={circle}
              alt="technologie"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Hero, "home", "bg-primary")
