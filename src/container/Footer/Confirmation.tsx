import React from "react"

const Confirmation = ({ message }: { message: string }) => {
  return (
    <div>
      <h3 className="font-medium text-center text-black text-2xl min-[450px]:text-2xl 2xl:text-3xl mt-10">
        {message}
      </h3>
    </div>
  )
}

export default Confirmation
