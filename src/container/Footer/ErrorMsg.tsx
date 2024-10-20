import React from "react"

interface ErrorMsgProps {
  text: string
}
export const ErrorMsg = ({ text }: ErrorMsgProps) => {
  return (
    <div className="absolute w-40 top-3 right-3 text-right text-red-500 text-sm mt-1">
      {text}
    </div>
  )
}
