import React from 'react'

const Link = ({ link, Icon }: { link: string, Icon: React.ElementType }): JSX.Element => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className="size-9 flex justify-center items-center rounded-full bg-secondary/50 hover:bg-secondary text-white text-base font-extrabold cursor-pointer transition-all duration-300">
                <Icon className="size-2/3 text-white" />
            </div>
        </a>
    )
}

export default Link