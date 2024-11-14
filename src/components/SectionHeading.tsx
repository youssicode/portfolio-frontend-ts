import React from "react"

type SectionHeadingProps = {
  text1: string
  text2: string
}
const SectionHeading = ({ text1, text2 }: SectionHeadingProps) => {
  return (
    <h2 className="mb-16 font-extrabold text-center text-black capitalize text-[2rem] min-[450px]:text-[2.75rem] 2xl:text-5xl">
      {text1} <span className="text-secondary">{text2}</span>
    </h2>
  )
}

export default SectionHeading
