import React from "react"
import { urlFor } from "../../client"
import { AiFillGithub } from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi"
import { FaExpand } from "react-icons/fa"
import Link from "./Link"

type CardWorkType = {
  imgUrl: { asset: { _ref: string } }
  title: string
  projectLink: string
  technologies: string[]
  codeLink: string
  description: string

}
type ProjectCardProps = {
  work: CardWorkType
  handleImageClick: (url: string) => void
}
const ProjectCard = ({
  work,
  handleImageClick,
}: ProjectCardProps) => {
  const {
    imgUrl,
    title,
    projectLink,
    technologies,
    codeLink,
    description,
  }: CardWorkType = work

  return (
    <div className="w-full max-w-[27rem] flex flex-col justify-start items-center bg-white text-black transition-all duration-300 shadow-simpleShadow rounded-md overflow-hidden hover:scale-105">
      <div className="relative w-full h-auto min-h-44 p-1 shadow-simpleShadow">
        <img
          src={urlFor(imgUrl)}
          className="w-full rounded-t-sm object-cover"
          alt={title}
        />
        <FaExpand
          onClick={() => handleImageClick(urlFor(imgUrl))}
          className="absolute p-1 cursor-pointer bottom-2 right-2 size-[1.8rem] rounded text-white bg-secondary/50 hover:bg-secondary"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-start p-[0.8rem] gap-2">
        <div className="w-full flex justify-between items-center my-3">
          <h4 className="text-base text-left min-[450px]:text-lg 2xl:text-xl font-extrabold text-black leading-6">
            {title}
          </h4>
          <div className="flex justify-center items-center gap-2">
            <Link link={projectLink} Icon={BiLinkExternal} />
            <Link link={codeLink} Icon={AiFillGithub} />
          </div>
        </div>

        <div className="flex justify-center items-center gap-1">
          {technologies?.map((technologie, index) => (
            <p
              key={index}
              className="text-sm text-left font-medium text-secondary bg-primary leading-6 py-1 px-2 rounded-sm"
            >
              {technologie}
            </p>
          ))}
        </div>

        <p className="text-base text-left text-gray leading-6 mt-2">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
