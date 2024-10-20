/* eslint-disable no-unused-vars */
import React, { Fragment } from "react"
import { Tooltip } from "react-tooltip"

interface NavigationDotsProps {
  active: string
}
const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <div className="hidden sm:flex justify-center items-center flex-col p-4 ">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item) => (
          <Fragment key={item}>
            <a
              href={`#${item}`}
              className="size-2.5 rounded-full bg-mediumGray m-2 transition ease-in-out duration-200 hover:bg-secondary 2xl:size-3"
              style={active === item ? { backgroundColor: "#313BAC" } : {}}
              data-tooltip-id={item + "-tooltip"}
              data-tooltip-content={item}
              data-tooltip-place="right"
            />
            <Tooltip className="capitalize" id={item + "-tooltip"} />
          </Fragment>
        )
      )}
    </div>
  )
}

export default NavigationDots
