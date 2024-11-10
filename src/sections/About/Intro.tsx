import React, { CSSProperties } from "react"
import { FaHandPaper, FaLink } from "react-icons/fa"

type IntroProps = {
  heading: string
  text: string
  image?: string
}
const Intro = ({ heading, text, image }: IntroProps) => {
  // Create a function to convert the HTML string to JSX
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString }
  }
  return (
    <div
      className={`${heading == "Hi again" ? "mt-20 min-h-56" : "mt-12 min-h-24"} w-full xl:w-[85%] mx-auto flex items-center`}
    >
      <div className="flex-[2_1]">
        <h3 className="flex justify-start  text-2xl md:text-3xl 2xl:text-4xl font-extrabold text-secondary">
          {heading == "Hi again" ? (
            <FaHandPaper className="mr-3" />
          ) : (
            <FaLink className="mr-3" />
          )}{" "}
          {heading}
        </h3>
        <p
          className="text-lg md:text-xl 2xl:text-2xl !leading-9 mt-4 text-extrabold text-justify text-black bg-primary p-5 rounded-md relative z-10"
          dangerouslySetInnerHTML={createMarkup(text)}
        ></p>
      </div>
      {image && (
        <div
          className="hidden lg:block flex-1 h-full bg-no-repeat bg-lightGray bg-cover bg-center relative right-6 rounded-xl shadow-simpleShadow"
          style={{ backgroundImage: `url(${image})` } satisfies CSSProperties}
        ></div>
      )}
    </div>
  )
}

export default Intro
