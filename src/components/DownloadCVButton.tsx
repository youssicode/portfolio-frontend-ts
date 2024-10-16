import React from "react"
import { FiDownload } from "react-icons/fi"

const DownloadCVButton = () => {
  const cvUrl = "/documents/el-hrouzi-cv.pdf"

  return (
    <a
      href={cvUrl}
      download="el-hrouzi-cv.pdf"
      className="min-w-[9.5rem] inline-flex items-center justify-center px-3 py-1 bg-transparent text-secondary ring-2 ring-secondary hover:ring-secondary/60 hover:text-secondary/80 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 no-underline"
    >
      <FiDownload className="h-5 w-5" />
      <span className="ml-2">Download CV</span>
    </a>
  )
}

export default DownloadCVButton
