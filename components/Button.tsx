import React from 'react'

interface ButtonProps {
    isLoding?: boolean;
    content: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({ isLoding = false, content, width = "w-[6rem]" }) => {
  return (
    <button className={`font-semibold bg-[#1b73e8] h-10 flex justify-center items-center gap-3 rounded-xl ${width} text-background`}>
        {isLoding ? <span className='loader'></span> : <>{content}</>}
    </button>
  )
}

export default Button