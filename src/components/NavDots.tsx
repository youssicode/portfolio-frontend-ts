import { navLinks } from "@/helpers/constants"
import React, { Fragment } from "react"
import { Tooltip } from "react-tooltip"

type NavDotsProps = {
  active: string
}
const NavDots = ({ active }: NavDotsProps) => {
  return (
    <div className="hidden sm:flex justify-center items-center flex-col p-4 ">
      {navLinks.map(
        (dot) => (
          <Fragment key={dot}>
            <a
              href={`#${dot}`}
              className="size-2.5 rounded-full bg-mediumGray m-2 transition ease-in-out duration-200 hover:bg-secondary 2xl:size-3"
              style={active === dot ? { backgroundColor: "#313BAC" } : {}}
              data-tooltip-id={dot + "-tooltip"}
              data-tooltip-content={dot}
              data-tooltip-place="right"
            />
            <Tooltip className="capitalize" id={dot + "-tooltip"} />
          </Fragment>
        )
      )}
    </div>
  )
}

export default NavDots
