import React, { useState, useEffect } from "react"
import { client } from "../../client"
import { SectionWrapper, MotionWrapper } from "../../wrapper"
import SectionHeading from "../../components/SectionHeading"
import WorkImagePreview from "./WorkImagePreview"
import ProjectCard from "./ProjectCard"
import Filter from "./Filter"
import { motion } from "framer-motion"

type sanityWorksType = {
  title: string
  codeLink: string
  projectLink: string
  description: string
  technologies: string[],
  tags: string[]
  imgUrl: { asset: { _ref: string, _type: string } }
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

type WorksType = {
  title: string
  codeLink: string
  projectLink: string
  description: string
  technologies: string[],
  tags: string[]
  imgUrl: { asset: { _ref: string } }
}
function Work() {
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [works, setWorks] = useState<WorksType[]>([])
  const [filtredWorks, setFiltredWorks] = useState<WorksType[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImgUrl, setModalImgUrl] = useState("")
  const [animateCard, setAnimateCard] = useState<{ y: number, opacity: number }>({ y: 0, opacity: 1 })

  useEffect(() => {
    const QUERY = '*[_type == "works"]'
    client.fetch<sanityWorksType[]>(QUERY).then((data) => {
      const usedWorksData: WorksType[] = data.map(({
        codeLink,
        projectLink,
        description,
        title,
        technologies,
        tags,
        imgUrl: { asset: { _ref } } }) => ({
          codeLink,
          projectLink,
          description,
          technologies,
          title,
          tags,
          imgUrl: { asset: { _ref } }
        }))
      setWorks(usedWorksData)
      setFiltredWorks(usedWorksData)
    })
  }, [])

  useEffect(() => {
    const filteredItems: WorksType[] = works.filter((item: WorksType) =>
      item.tags?.includes(activeFilter)
    )
    setFiltredWorks(filteredItems.length > 0 ? filteredItems : works)
  }, [activeFilter])

  const handleImageClick: (imgUrl: string) => void = (imgUrl) => {
    setModalImgUrl(imgUrl)
    setIsModalOpen(true)
  }

  const handleWorksFilter: (item: string) => void = (item) => {
    setAnimateCard({ y: 100, opacity: 0 })

    setTimeout(() => {
      setActiveFilter(item)
      setAnimateCard({ y: 0, opacity: 1 })
    }, 500)
  }

  return (
    <>
      <SectionHeading text1="my creative" text2="portfolio" />

      <Filter activeFilter={activeFilter} handleFilter={handleWorksFilter} />

      <div className="min-h-[550px] w-full">
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5, ease: "linear" }}
          className="grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))] justify-items-center gap-x-10 gap-y-14 mt-8"
        >
          {filtredWorks.length > 0 ?
            filtredWorks.map((work: WorksType, index: number) => (
              <ProjectCard
                work={work}
                key={index}
                handleImageClick={handleImageClick}
              />
            )) : ("Loading...")}
        </motion.div>
      </div>

      {isModalOpen && (
        <WorkImagePreview
          closeModal={() => setIsModalOpen(false)}
          imageSrc={modalImgUrl}
        />
      )}
    </>
  )
}

export default SectionWrapper(
  MotionWrapper(Work, "app__work"),
  "work",
  "bg-primary"
)
