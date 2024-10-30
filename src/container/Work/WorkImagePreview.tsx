import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { HiX } from "react-icons/hi"

interface WorkImagePreviewProps {
  closeModal: () => void
  imageSrc: string
}
//* Display a preview view of the work's image
const WorkImagePreview = ({
  closeModal,
  imageSrc,
}: WorkImagePreviewProps) => {

  const imgRef = useRef<HTMLImageElement>(null)

  // Prevent scrolling when Work's image is displayed
  useEffect(() => {
    document.body.style.height = "100vh"
    document.body.style.overflowY = "hidden"
    return () => {
      // Clean up: Restore default styles when component unmounts
      document.body.style.height = ""
      document.body.style.overflowY = ""
    }
  }, [])

  // Close the preview if the user press the 'Esc' key
  const handleEscapePress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal()
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleEscapePress)
    return () => {
      document.removeEventListener("keydown", handleEscapePress)
    }
  }, [])

  // Close the preview if the user click outside the image
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const imgRect = imgRef.current?.getBoundingClientRect()
    if (imgRect && (
      e.clientX < imgRect.left ||
      e.clientX > imgRect.right ||
      e.clientY > imgRect.bottom ||
      e.clientY < imgRect.top
    ))
      closeModal()
  }

  return (
    <motion.div
      onClick={handleModalClick}
      whileInView={{ opacity: [0, 1], scale: [0.1, 1] }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
    >
      <img
        ref={imgRef}
        className="max-w-[96%] max-h-[96%] md:max-w-[90%] md:max-h-[80%] rounded-md"
        src={imageSrc}
        alt="Work preview"
      />
      <HiX
        className="absolute top-1 right-1 md:p-2 size-8 md:size-12 rounded-full text-white text-xl md:text-2xl hover:bg-white/30 cursor-pointer"
        onClick={closeModal}
      />
    </motion.div>
  )
}

export default WorkImagePreview
