import React, { useState } from "react"
import * as Yup from "yup"
import { client } from "@/helpers/client"
import { SectionWrapper, MotionWrapper } from "@/wrappers"
import images from "@/helpers/images"
import SectionHeading from "@/components/SectionHeading"
import { ErrorMsg } from "./ErrorMsg"
import sendNotificationEmail from "./sendNotificationEmail"
import Confirmation from "./Confirmation"
import ContactCard from "./ContactCard"

const Contact = () => {
  type formDataTypes = {
    userName: string
    email: string
    message: string
  }
  type formErrorsTypes = {
    [key: string]: string
  }
  const [formData, setFormData] = useState<formDataTypes>({
    userName: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [submissionMessage, setSubmissionMessage] = useState<string>("")
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const [formErrors, setFormErrors] = useState<formErrorsTypes>({})

  const { userName, email, message } = formData

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  })

  const handleChangeInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void = (e) => {
    const { name, value }: { name: string, value: string } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFormErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false })
      setLoading(true)

      //save user's input on Sanity database
      const contact_info = {
        _type: "contact",
        name: formData.userName,
        email: formData.email,
        message: formData.message,
      }
      client.create(contact_info)

      //send email to my inbox with user's input
      sendNotificationEmail(contact_info)

      setLoading(false)
      setSubmissionMessage("Thank you for getting in touch!")
      setIsFormSubmitted(true)

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = err.inner.reduce((acc: formErrorsTypes, error) => {
          if (error.path !== undefined) {
            acc[error.path] = error.message;
          }
          return acc
        }, {})
        setFormErrors(errors)
      } else {
        setSubmissionMessage("Oops! Something went wrong. Please try submitting the form again.")
        setIsFormSubmitted(true)
      }
    }
  }

  return (
    <>
      <SectionHeading text1="let's create" text2="together" />

      <div className="w-full md:w-3/5 flex justify-evenly items-center flex-wrap m-8 mt-16">
        <ContactCard imgSource={images.email} altText="Email" contactInfo="youssef.el.hrouzi@gmail.com" />
        <ContactCard imgSource={images.mobile} altText="Phone" contactInfo="+212 (663) 020-777" />
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
      ) : <Confirmation message={submissionMessage} />
      }
    </>
  )
}


export default SectionWrapper(
  MotionWrapper(Contact, "app__footer"),
  "contact",
  "bg-white"
)