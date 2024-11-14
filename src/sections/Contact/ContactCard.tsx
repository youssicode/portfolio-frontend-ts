import React from 'react'

const Contact = ({ imgSource, altText, contactInfo }: { imgSource: string, altText: string, contactInfo: string }) => {
    return (
        <div className="hover:shadow-hoverShadow min-w-72 flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-lg cursor-pointer bg-secondary/10 transition-all duration-300 ease-in-out">
            <img className="size-10 my-0 mr-3" src={imgSource} alt={altText} />
            <a
                href={`${altText === "Email" ? "mailto:" : "tel:"}${contactInfo}`}
                className="text-base text-left text-gray leading-6"
            >
                {contactInfo}
            </a>
        </div>
    )
}

export default Contact