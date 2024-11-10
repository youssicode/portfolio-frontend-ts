/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { SectionWrapper, MotionWrapper } from "../../wrappers"
import { urlFor } from "../../helpers/client"
import Button from "./Button"
import { fetchSanityData } from "@/helpers/utils"

type sanityTestimonialsType = {
  name: string
  feedback: string
  company: string
  imgurl: { asset: { _ref: string, _type: string } }
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

type testimonialsType = {
  name: string
  feedback: string
  company: string
  imgurl: { asset: { _ref: string } }
}

export enum BtnName { leftBtn, rightBtn }

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [testimonials, setTestimonials] = useState<testimonialsType[]>([])

  useEffect(() => {
    const testimonialsMapper = ({
      name, feedback, company, imgurl: { asset }
    }: sanityTestimonialsType
    ): testimonialsType => ({
      name, feedback, company, imgurl: { asset }
    })
    fetchSanityData<sanityTestimonialsType, testimonialsType>('*[_type == "testimonials"]', testimonialsMapper, setTestimonials)
  }, [])

  const handleClick: (btnName: BtnName) => void = (btnName) => {
    const newIndex =
      btnName === BtnName.leftBtn
        ? currentIndex === 0
          ? testimonials.length - 1
          : currentIndex - 1
        : currentIndex === testimonials.length - 1
          ? 0
          : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const TestimonialCardClasses = "mt-8 flex flex-col md:flex-row justify-center items-center gap-4 w-full md:w-4/5 lg:w-3/5 min-h-72 bg-white p-6 rounded-xl shadow-hoverShadow transition-all duration-300 ease-in-out min-2xl:min-h-[450px]"
  const currentTestimonial = testimonials.length > 0 ? testimonials[currentIndex] : null

  // If the testimonials not fetched yet, show a loading message
  if (!currentTestimonial) {
    return (
      <div className={TestimonialCardClasses}>
        <span className="text-base text-secondary">Loading...</span>
      </div>
    )
  }

  const { name, imgurl, feedback, company }: testimonialsType = testimonials[currentIndex]
  return (
    <>
      <div className={TestimonialCardClasses}>
        <>
          <img
            className="size-24 m-3 rounded-full object-cover 2xl:size-36 bg-primary"
            src={urlFor(imgurl)}
            alt={name}
          />
          <div className="flex-1 h-full flex flex-col justify-center items-center md:items-start gap-5">
            <p className="text-base 2xl:text-xl text-black leading-6 mt-1 font-dm text-center md:text-left">
              {feedback}
            </p>
            <div>
              <h4 className="text-base 2xl:text-xl font-semibold text-secondary mt-1">
                {name}
              </h4>
              <h5 className="text-base leading-6 font-normal text-gray mt-1">
                {company}
              </h5>
            </div>
          </div>
        </>
      </div>

      <div className="flex flex-row mt-4 justify-center items-center">
        <Button name={BtnName.leftBtn} handleClick={handleClick}>
          <HiChevronLeft className="size-8 2xl:size-10 text-secondary group-hover:text-white" />
        </Button>

        <Button name={BtnName.rightBtn} handleClick={handleClick}>
          <HiChevronRight className="size-8 2xl:size-10 text-secondary group-hover:text-white" />
        </Button>
      </div >
    </>
  )
}

export default SectionWrapper(
  MotionWrapper(Testimonial, "app__testimonial"),
  "testimonials",
  "bg-primary"
)
