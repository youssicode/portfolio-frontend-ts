import React, { useState } from "react"
import * as Yup from "yup"
import { client } from "../../client"
import { SectionWrapper, MotionWrapper } from "../../wrapper"
import images from "../../constants/images"
import SectionHeading from "../../components/SectionHeading"
import { ErrorMsg } from "./ErrorMsg"
import sendNotificationEmail from "./sendNotificationEmail"

const Footer = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const { userName, email, message } = formData

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  })

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFormErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false })
      setLoading(true)

      const contact = {
        _type: "contact",
        name: formData.userName,
        email: formData.email,
        message: formData.message,
      }
      //save user's input on Sanity database
      await client.create(contact)
      setLoading(false)
      setIsFormSubmitted(true)
      sendNotificationEmail(contact)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = err.inner.reduce((acc, error) => {
          acc[error.path] = error.message
          return acc
        }, {})
        setFormErrors(errors)
      } else {
        console.log(err)
      }
    }
  }

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <SectionHeading text1="take a" text2="coffee" />
        &nbsp; &nbsp;{" "}
        {/* A non-breaking space, {" "} doesn't work between two jsx elements */}
        <SectionHeading text1="& chat" text2="with me" />
      </div>

      <div className="w-full md:w-3/5 flex justify-evenly items-center flex-wrap m-8 mt-16">
        <div className="hover:shadow-hoverShadow min-w-72 flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-lg cursor-pointer bg-lightGreen transition-all duration-300 ease-in-out">
          <img className="size-10 my-0 mx-3" src={images.email} alt="email" />
          <a
            href="mailto:youssef.elhrouzi@yahoo.com"
            className="text-base text-left text-gray leading-6"
          >
            youssef.el.hrouzi@gmail.com
          </a>
        </div>
        <div className="hover:shadow-hoverShadow min-w-72 flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-lg cursor-pointer bg-secondary/10 transition-all duration-300 ease-in-out">
          <img className="size-10 my-0 mx-3" src={images.mobile} alt="phone" />
          <a
            href="tel:+212 (663) 020-777"
            className="p-text text-base text-left text-gray leading-6"
          >
            +212 (663) 020-777
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="flex justify-center items-center flex-col w-full my-4 mx-0 md:w-3/5 md:mx-8">
          <div className="relative flex justify-center items-center w-full my-3 mx-0 rounded-lg cursor-pointer bg-primary hover:shadow-hoverShadow transition-all duration-300 ease-in-out">
            <input
              className="text-base text-left leading-6 w-full p-4 border-none rounded-md bg-primary font-dm text-secondary outline-none"
              type="text"
              placeholder="Your Name"
              name="userName"
              value={userName}
              onChange={handleChangeInput}
            />
            {formErrors.userName && <ErrorMsg text={formErrors.userName} />}
          </div>
          <div className="relative flex justify-center items-center w-full my-3 mx-0 rounded-lg cursor-pointer bg-primary hover:shadow-hoverShadow transition-all duration-300 ease-in-out">
            <input
              className="text-base text-left leading-6 w-full p-4 border-none rounded-md bg-primary font-dm text-secondary outline-none"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            {formErrors.email && <ErrorMsg text={formErrors.email} />}
          </div>
          <div className="relative w-full my-3 mx-0 rounded-lg cursor-pointer bg-primary transition-all duration-300 ease-in-out hover:shadow-hoverShadow">
            <textarea
              className="text-base text-left leading-6 w-full p-4 border-none rounded-md bg-primary font-dm text-secondary outline-none h-40"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
            {formErrors.message && <ErrorMsg text={formErrors.message} />}
          </div>
          <button
            type="button"
            className="text-base md:text-xl text-white bg-secondary py-4 px-8 rounded-lg border-none font-medium outline-none m-0 mt-8 font-dm transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:outline-4 hover:outline-secondary hover:text-secondary"
            onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="font-medium text-center text-black capitalize text-2xl min-[450px]:text-3xl 2xl:text-4xl mt-10">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default SectionWrapper(
  MotionWrapper(Footer, "app__footer"),
  "contact",
  "bg-white"
)
