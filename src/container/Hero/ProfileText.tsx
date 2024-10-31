import React from "react"
import { TypeAnimation } from "react-type-animation"
import { firstDefinition, secondDefinition } from "@/constants/constants"

const ProfileText = () => {
  const animationStyle: React.CSSProperties = { display: "inline-block", width: "100%", textAlign: "center" }
  return (
    <TypeAnimation
      sequence={[firstDefinition, 1200, secondDefinition, 1200]}
      wrapper="span"
      cursor={true}
      preRenderFirstString={true}
      speed={50}
      deletionSpeed={80}
      style={animationStyle}
      repeat={Infinity}
    />
  )
}

export default ProfileText
// 'react-type-animation' documentation: https://react-type-animation.netlify.app/
