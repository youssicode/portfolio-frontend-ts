import React from "react"
import { socialMediaLinks, SocialMediaLink } from "@/helpers/constants"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"

type SocialMediaIconsType = {
  [key: string]: React.ReactElement
}
const SocialMedia = () => {
  const ICON_CLASS_NAME = "size-5 sm:size-6 text-gray group-hover:text-white"

  const socialMediaIcons: SocialMediaIconsType = {
    LinkedIn: <BsLinkedin className={ICON_CLASS_NAME} />,
    GitHub: <BsGithub className={ICON_CLASS_NAME} />,
    Facebook: <FaFacebookF className={ICON_CLASS_NAME} />,
    // Add more popular social media icons as needed
  }

  return (
    <div className="absolute left-0 bottom-4 sm:static flex sm:flex-col justify-end items-center gap-2 p-2 pl-4 sm:p-4">
      {socialMediaLinks.map(({ name, url }: SocialMediaLink) => (
        <a href={url} target="_blank" rel="noreferrer" key={name}>
          <div className="group size-10 sm:size-12 rounded-full bg-white/50 border border-lightGray hover:bg-secondary hover:border-secondary flex justify-center items-center transition ease-in-out duration-300">
            {socialMediaIcons[name] || null}
          </div>
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
