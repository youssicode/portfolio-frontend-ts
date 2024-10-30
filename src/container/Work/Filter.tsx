import React from "react"
import { projectsFilterOptions } from "@/constants/constants"

type FilterProps = {
  activeFilter: string
  handleFilter: (item: string) => void
}
const Filter: React.FC<FilterProps> = ({ activeFilter, handleFilter }) => {
  const activeStyle = { backgroundColor: "#313bac", color: "white" }


  return (
    <div className="flex justify-center items-center flex-wrap gap-4 mt-16 mx-0 mb-8 cursor-pointer">
      {projectsFilterOptions.map((item, index) => (
        <div
          onClick={() => handleFilter(item)}
          key={index}
          className="bg-white text-gray hover:!bg-secondary hover:!text-white py-2 px-4 2xl:py-3 2xl:px-6 rounded-lg 2xl:rounded-[0.85rem] font-extrabold transition-all duration-300 flex justify-center items-center text-base 2xl:text-lg text-left leading-6"
          style={activeFilter === item ? activeStyle : {}}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Filter
