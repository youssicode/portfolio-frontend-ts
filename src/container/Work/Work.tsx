import React, { useState, useEffect } from "react"
import { client } from "../../client"
import { SectionWrapper, MotionWrapper } from "../../wrapper"
import SectionHeading from "../../components/SectionHeading"
import WorkImagePreview from "./WorkImagePreview"
import ProjectCard from "./ProjectCard"
import Filter from "./Filter"
import { motion } from "framer-motion"

function Work() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [works, setWorks] = useState([])
  const [filtredWorks, setFiltredWorks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImgUrl, setModalImgUrl] = useState("")
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  useEffect(() => {
    const QUERY = '*[_type == "works"]'
    client.fetch(QUERY).then((data) => {
      setWorks(data)
      setFiltredWorks(data)
    })
  }, [])

  useEffect(() => {
    const filteredItems = works.filter((item) =>
      item.tags?.includes(activeFilter)
    )
    setFiltredWorks(filteredItems.length > 0 ? filteredItems : works)
  }, [activeFilter])

  const handleImageClick = (imgUrl) => {
    setModalImgUrl(imgUrl)
    setIsModalOpen(true)
  }

  const handleWorksFilter = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setActiveFilter(item)
      setAnimateCard([{ y: 0, opacity: 1 }])
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
          {filtredWorks.map((work, index) => (
            <ProjectCard
              work={work}
              key={index}
              handleImageClick={handleImageClick}
            />
          ))}
        </motion.div>
      </div>

      {isModalOpen && (
        <WorkImagePreview
          closeModal={() => setIsModalOpen(false)}
          imageSrc={modalImgUrl}
          visible={isModalOpen}
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
