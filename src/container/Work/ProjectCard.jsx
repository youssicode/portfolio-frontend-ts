import React from "react"
import { urlFor } from "../../client"
import { AiFillGithub } from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi"
import { FaExpand } from "react-icons/fa"

const ProjectCard = ({ work, handleImageClick }) => {
  return (
    <div className="w-full max-w-[27rem] flex flex-col justify-start items-center bg-white text-black transition-all duration-300 shadow-simpleShadow rounded-md overflow-hidden hover:scale-105">
      <div className="relative w-full h-auto min-h-44 p-1 shadow-simpleShadow">
        <img
          src={urlFor(work.imgUrl)}
          className="w-full rounded-t-sm object-cover"
          alt={work.name}
        />
        <FaExpand
          onClick={() => handleImageClick(urlFor(work.imgUrl))}
          className="absolute p-1 cursor-pointer bottom-2 right-2 size-[1.8rem] rounded text-white bg-secondary/50 hover:bg-secondary"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-start p-[0.8rem] gap-2">
        <div className="w-full flex justify-between items-center my-3">
          <h4 className="text-base text-left min-[450px]:text-lg 2xl:text-xl font-extrabold text-black leading-6">
            {work.title}
          </h4>
          <div className="flex justify-center items-center gap-2">
            <a href={work.projectLink} target="_blank" rel="noreferrer">
              <div className="size-9 flex justify-center items-center rounded-full bg-secondary/50 hover:bg-secondary text-white text-base font-extrabold cursor-pointer transition-all duration-300">
                <BiLinkExternal className="size-2/3 text-white" />
              </div>
            </a>
            <a href={work.codeLink} target="_blank" rel="noreferrer">
              <div className="size-9 flex justify-center items-center rounded-full bg-secondary/50 hover:bg-secondary text-white text-base font-extrabold cursor-pointer transition-all duration-300">
                <AiFillGithub className="size-2/3 text-white" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center gap-1">
          {work.technologies?.map((technologie, index) => (
            <p
              key={index}
              className="text-sm text-left font-medium text-secondary bg-primary leading-6 py-1 px-2 rounded-sm"
            >
              {technologie}
            </p>
          ))}
        </div>

        <p className="text-base text-left text-gray leading-6 mt-2">
          {work.description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
