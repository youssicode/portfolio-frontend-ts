import React from "react"
import { SectionWrapper, MotionWrapper } from "@/wrappers"
import SectionHeading from "@/components/SectionHeading"
import SkillsSection from "./SkillsSection"
import CertificationsSection from "./CertificationsSection"

const Skills = () => {

  return (
    <>
      <SectionHeading text1="expertise &" text2="credentials" />

      <div className="w-full xl:w-4/5 flex flex-col justify-center items-center gap-16 lg:gap-20 lg:flex-row lg:items-start">
        <SkillsSection />
        <CertificationsSection />
      </div>
    </>
  )
}

export default SectionWrapper(
  MotionWrapper(Skills),
  "skills",
  "bg-white"
)
