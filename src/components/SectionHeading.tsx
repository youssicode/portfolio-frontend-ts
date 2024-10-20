import React from "react"

interface SectionHeadingProps {
  text1: string
  text2: string
}
const SectionHeading = ({ text1, text2 }: SectionHeadingProps) => {
  return (
    <h2 className="text-[2rem] font-extrabold text-center text-black capitalize min-[450px]:text-[2.75rem] 2xl:text-5xl">
      {text1} <span className="text-secondary">{text2}</span>
    </h2>
  )
}

export default SectionHeading
