/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { SectionWrapper, MotionWrapper } from "../../wrapper"
import { urlFor, client } from "../../client"
import Button from "./Button"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [testimonials, setTestimonials] = useState([])

  const QUERY = '*[_type == "testimonials"]'
  useEffect(() => {
    client.fetch(QUERY).then((data) => {
      console.log(data);

      setTestimonials(data)
    })
  }, [])

  const handleClick = (name) => {
    const newIndex =
      name === "leftBtn"
        ? currentIndex === 0
          ? testimonials.length - 1
          : currentIndex - 1
        : currentIndex === testimonials.length - 1
          ? 0
          : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <>
      {testimonials.length && (
        <>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full md:w-4/5 lg:w-3/5 min-h-72 bg-white p-6 rounded-xl shadow-hoverShadow transition-all duration-300 ease-in-out min-2xl:min-h-[450px]">
            <img
              className="size-24 m-3 rounded-full object-cover 2xl:size-36 bg-primary"
              src={urlFor(testimonials[currentIndex].imgurl)}
              alt={testimonials[currentIndex].name}
            />
            <div className="flex-1 h-full flex flex-col justify-center items-center md:items-start gap-5">
              <p className="text-base 2xl:text-xl text-black leading-6 mt-1 font-dm text-center md:text-left">
                {testimonials[currentIndex].feedback}
              </p>
              <div>
                <h4 className="text-base 2xl:text-xl font-semibold text-secondary mt-1">
                  {testimonials[currentIndex].name}
                </h4>
                <h5 className="text-base leading-6 font-normal text-gray mt-1">
                  {testimonials[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-4 justify-center items-center">
            <Button name="leftBtn" handleClick={handleClick}>
              <HiChevronLeft className="size-8 2xl:size-10 text-secondary group-hover:text-white" />
            </Button>

            <Button name="rightBtn" handleClick={handleClick}>
              <HiChevronRight className="size-8 2xl:size-10 text-secondary group-hover:text-white" />
            </Button>
          </div>
        </>
      )}
    </>
  )
}

export default SectionWrapper(
  MotionWrapper(Testimonial, "app__testimonial"),
  "testimonials",
  "bg-primary"
)
