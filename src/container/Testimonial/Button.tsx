import React from "react"
import { BtnName } from "./Testimonial"

type ButtonProps = {
  name: BtnName
  handleClick: (name: BtnName) => void
  children: React.ReactNode
}
const Button = ({ name, children, handleClick }: ButtonProps) => {
  return (
    <div
      className="flex justify-center items-center size-12 rounded-full bg-white border border-secondary/50 m-4 transition-all duration-300 ease-in-out hover:bg-secondary group hover:cursor-pointer 2xl:w-20 2xl:h-20"
      onClick={() => handleClick(name)}
    >
      {children}
    </div>
  )
}

export default Button
