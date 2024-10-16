import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className="absolute left-0 bottom-4 sm:static flex sm:flex-col justify-end items-center gap-2 p-2 pl-4 sm:p-4">
      <a href="https://www.linkedin.com/in/el-hrouzi" target="_blank">
        <div className="group size-10 sm:size-12 rounded-full bg-white/50 border border-lightGray hover:bg-secondary hover:border-secondary flex justify-center items-center transition ease-in-out duration-300">
          <BsLinkedin className="size-[18px] sm:size-5 text-gray group-hover:text-white" />
        </div>
      </a>
      <a href="https://github.com/youssicode" target="_blank">
        <div className="group size-10 sm:size-12 rounded-full bg-white/50 border border-lightGray hover:bg-secondary hover:border-secondary flex justify-center items-center transition ease-in-out duration-300">
          <BsGithub className="size-[18px] sm:size-5 text-gray group-hover:text-white" />
        </div>
      </a>
      <a href="https://facebook.com/youssef.elhrouzi" target="_blank">
        <div className="group size-10 sm:size-12 rounded-full bg-white/50 border border-lightGray hover:bg-secondary hover:border-secondary flex justify-center items-center transition ease-in-out duration-300">
          <FaFacebookF className="size-[18px] sm:size-5 text-gray group-hover:text-white" />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
