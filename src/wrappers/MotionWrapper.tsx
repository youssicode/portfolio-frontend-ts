/* eslint-disable no-unused-vars */
import React from "react"
import { motion } from "framer-motion"

type MotionWrapperType = (
  Component: React.FC
) => () => JSX.Element
const MotionWrapper: MotionWrapperType = (Component) => {
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-1 w-full flex-col flex justify-center items-center"
      >
        <Component />
      </motion.div>
    )
  }
  return HOC
}
export default MotionWrapper
