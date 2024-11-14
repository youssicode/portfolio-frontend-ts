import React from "react"
import { SectionWrapper, MotionWrapper } from "@/wrappers"
import SectionHeading from "@/components/SectionHeading"
import SkillsSection from "./SkillsSection"
import CertificationsSection from "./CertificationsSection"

const Skills = () => {

  return (
    <>
      <SectionHeading text1="expertise &" text2="credentials" />

      <div className="w-full lg:w-4/5 flex flex-col justify-start items-center gap-14 lg:gap-24 lg:flex-row">
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
