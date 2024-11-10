import React from 'react'
import { ErrorMsg } from './ErrorMsg'

type InputFiedProps = {
    placeholder: string,
    name: string, value: string, inputHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, error: string
}
const InputFied = ({ placeholder, name, value, inputHandler, error }: InputFiedProps) => {
    return (
        <div className="relative flex justify-center items-center w-full my-3 mx-0 rounded-lg cursor-pointer bg-primary hover:shadow-hoverShadow transition-all duration-300 ease-in-out">
            <input
                className="text-base text-left leading-6 w-full p-4 border-none rounded-md bg-primary font-dm text-secondary outline-none"
                type="text"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={inputHandler}
            />
            {error && <ErrorMsg text={error} />}
        </div>)
}

export default InputFied