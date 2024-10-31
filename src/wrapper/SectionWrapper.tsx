import React, { CSSProperties } from "react"
import SocialMedia from "../components/SocialMedia"
import NavigationDots from "../components/NavigationDots"

type SectionWrapperType = (
  Component: React.FC,
  sectionId: string,
  classNames: string
) => () => JSX.Element

// Define a Higher Order Component as a wrapper for a section
const SectionWrapper: SectionWrapperType = (Component, sectionId, classNames) =>
  function HOC() {
    const headerBg: CSSProperties = {
      backgroundImage: `url('/src/assets/bgIMG.png')`,
      backgroundSize: "cover",
      backgroundPosition: "left",
      backgroundRepeat: "repeat",
    }

    return (
      <div
        id={sectionId}
        style={
          sectionId === "home" || sectionId === "testimonials" ? headerBg : {}
        }
        className={`${classNames} relative w-full min-h-screen flex`}
      >
        <div className="container mx-auto flex">
          <SocialMedia />

          <div className="flex-1 w-64 flex flex-col justify-center items-center pt-24 pb-6 min-[450px]:pb-24 px-4 min-[450px]:px-8">
            <Component />

            <div className="w-full mt-12 lg:mt-20 flex flex-col justify-end items-end">
              <p className="uppercase text-black text-[0.8rem] 2xl:text-base text-left">
                @2024 EL-HROUZI
              </p>
              <p className="uppercase text-black text-[0.8rem] 2xl:text-base text-left">
                All rights reserved
              </p>
            </div>
          </div>
          <NavigationDots active={sectionId} />
        </div>
      </div>
    )
  }

export default SectionWrapper
