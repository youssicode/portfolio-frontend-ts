import React from "react"
import { TypeAnimation } from "react-type-animation"

const ProfileText = () => {
  const firstParagraph = "front-end developer"
  const secondParagraph = "Meta-certified"

  return (
    <TypeAnimation
      sequence={[firstParagraph, 1200, secondParagraph, 1200]}
      wrapper="span"
      cursor={true}
      preRenderFirstString={true}
      speed={50}
      deletionSpeed={80}
      style={{ display: "inline-block", width: "100%", textAlign: "center" }}
      repeat={Infinity}
    />
  )
}

export default ProfileText
// 'react-type-animation' documentation: https://react-type-animation.netlify.app/
