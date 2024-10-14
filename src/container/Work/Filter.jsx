import React from "react"

const Filter = ({ activeFilter, setActiveFilter }) => {
  const activeStyle = { backgroundColor: "#313bac", color: "white" }

  return (
    <div className="flex justify-center items-center flex-wrap gap-4 mt-16 mx-0 mb-8 cursor-pointer">
      {["HTML & CSS only", "Vanilla JS", "React", "Full-Stack", "All"].map(
        (item, index) => (
          <div
            onClick={() => setActiveFilter(item)}
            key={index}
            className="bg-white text-gray hover:!bg-secondary hover:!text-white py-2 px-4 2xl:py-3 2xl:px-6 rounded-lg 2xl:rounded-[0.85rem] font-extrabold transition-all duration-300 flex justify-center items-center text-base 2xl:text-lg text-left leading-6"
            style={activeFilter === item ? activeStyle : {}}
          >
            {item}
          </div>
        )
      )}
    </div>
  )
}

export default Filter
