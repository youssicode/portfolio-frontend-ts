import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { urlFor } from "@/client"
import { SectionWrapper, MotionWrapper } from "@/wrapper"
import images from "@/constants/images"
import Intro from "./Intro"
import SectionHeading from "@/components/SectionHeading"
import { fetchSanityData } from "@/constants/utils"

const About = () => {

  type SanityAboutType = {
    title: string;
    description: string;
    imgUrl: {
      asset: {
        _ref: string;
        _type: string
      };
    };
    _id: string
    _type: string
    _createdAt: string
    _updatedAt: string
    _rev: string
  };

  type AboutType = {
    title: string;
    description: string;
    imgUrl: {
      asset: {
        _ref: string;
      };
    };
  }

  const [abouts, setAbouts] = useState<AboutType[]>([])

  useEffect(() => {
    const AboutsDataMapper = ({ title, description, imgUrl: { asset: { _ref } } }: SanityAboutType): AboutType => ({ title, description, imgUrl: { asset: { _ref } } })
    fetchSanityData<SanityAboutType, AboutType>('*[_type == "abouts"]', AboutsDataMapper, setAbouts)
  }, [])


  return (
    <>
      <>
        <SectionHeading text1="i know that" text2="good development" />
        <SectionHeading text1="means" text2="good Business" />
      </>
      <Intro
        heading={"Hi again"}
        text={`My name's Youssef El-Hrouzi, a passionate front-end developer based in Morocco.
        I specialize in React, with a keen eye for responsive design.`}
        image={images.working}
      ></Intro>
      <div className="flex justify-center items-start flex-wrap gap-16 lg:gap-24 mt-12 lg:mt-20 mb-8">
        {abouts.length > 0 ? (
          abouts.map(({ title, description, imgUrl }: AboutType, index: number) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="w-[85%] min-[450px]:w-60 flex justify-start items-center flex-col gap-4 2xl:w-[370px]"
              key={index + title}
            >
              <div className="size-24 rounded-full overflow-hidden bg-white border-4 border-blue-500">
                <img
                  src={urlFor(imgUrl)}
                  className="size-full p-1 rounded-full"
                  alt={title}
                />
              </div>
              <h2 className="text-lg md:text-xl 2xl:text-2xl text-extrabold text-black text-center">
                {title}
              </h2>
              <p className="text-[0.9rem] md:text-lg 2xl:text-xl leading-6 2xl:leading-[2.75rem] text-justify text-gray">
                {description}
              </p>
            </motion.div>
          )
          )) : (<span className="text-base text-secondary">Loading...</span>)
        }
      </div>

      <Intro
        heading={"So, let’s connect!"}
        text={`Explore my <a href="#work" class="text-secondary/80 underline font-semibold">projects</a>
        and drop me a <a href="#contact" class="text-secondary/80 underline font-semibold">message</a>.
        I’m excited to collaborate on something amazing!`}
      />
    </>
  )
}

export default SectionWrapper(
  MotionWrapper(About, "app__about"),
  "about",
  "bg-white"
)
