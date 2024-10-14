import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { client, urlFor } from "../../client"
import { SectionWrapper, MotionWrapper } from "../../wrapper"
import { BiLinkExternal } from "react-icons/bi"
import SectionHeading from "../../components/SectionHeading"

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    const QUERY = '*[_type == "skills"]'
    const certif_QUERY = '*[_type == "certifications"]'

    client.fetch(QUERY).then((data) => {
      setSkills(data)
    })

    client.fetch(certif_QUERY).then((data) => {
      setCertifications(data)
    })
  }, [])

  const sub_cert_style =
    "ml-[2.6rem] before:content-['--'] before:absolute before:left-[-1.1rem]"

  return (
    <>
      <>
        <SectionHeading text1="check out my" text2="skills" />
        <SectionHeading text1="&" text2="certifications" />
      </>

      <div className="app__skills-container w-full lg:w-4/5 mt-12 flex flex-col justify-center items-center gap-14 lg:gap-24 lg:flex-row">
        <motion.div
          className="app__skills-list flex-1 flex flex-wrap justify-center items-cenetr lg:justify-start lg:items-start min-w-56 max-w-4xl gap-8"
          whileInView={{ opacity: [0, 1] }}
          transition={{ delayChildren: 0.5 }}
        >
          {/* sorting the skills'icons using skill's 'index' property before mapping */}
          {skills
            .sort((a, b) => a.index - b.index)
            .map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1], y: [50, 0] }}
                transition={{ duration: 0.5 }}
                className="w-24 2xl:w-28 p-2 rounded-2xl bg-[white] border border-solid border-lightGray hover:shadow-simpleShadow"
                key={skill.name}
              >
                <img
                  className="size-10 2xl:size-12 block mx-auto my-[5px]"
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                />
                <p className="text-base 2xl:text-xl text-center text-gray leading-6 mt-1">
                  {skill.name}
                </p>
              </motion.div>
            ))}
        </motion.div>

        <div
          className="relative h-[26rem] before:content-[''] before:w-0 before:h-[78%] before:border-l before:absolute before:left-[2.5rem] before:bottom-4
        shadow-simpleShadow bg-black/5 backdrop-blur-sm rounded-3xl min-w-full min-[450px]:min-w-[24rem] py-2 px-4 mt-8 min-[900px]:mt-0"
        >
          <h2 className="font-semibold text-2xl text-center my-3">
            Certifications
          </h2>
          {certifications
            .sort((a, b) => a.index - b.index)
            .map((credential) => (
              <motion.div
                className={
                  (credential.index == 0 ? "" : sub_cert_style) +
                  " group relative bg-black/5 rounded-lg flex justify-start items-center p-2 mx-0 hover:before:content-[''] hover:bg-white hover:scale-110 min-[450px]:hover:scale-125 my-2 hover:my-[-12px] hover:shadow-simpleShadow hover:z-10 transition-all duration-300 ease-linear"
                }
                key={credential.credentialId}
              >
                <img
                  src={urlFor(credential.icon)}
                  className={
                    (credential.index == 0 ? "size-8 bg-gray " : "size-6 ") +
                    "group-hover:size-12 mr-4"
                  }
                  alt="credential logo"
                />
                <div>
                  <h4
                    className={
                      (credential.index == 0 ? "text-xl " : "text-base ") +
                      "font-medium"
                    }
                  >
                    {credential.certificate}
                  </h4>
                  <p className="text-sm text-left text-gray leading-6 hidden group-hover:block">
                    <span className="font-extrabold">{credential.from}</span> -{" "}
                    {credential.issued} -{" "}
                    <a
                      href={credential.certificateLink}
                      className="text-secondary  cursor-pointer"
                      target="_blank"
                    >
                      show
                      <BiLinkExternal className="inline-block w-4 ml-1" />
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(
  MotionWrapper(Skills, "app__skills"),
  "skills",
  "bg-white"
)
