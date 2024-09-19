'use client'

interface ButtonProps {
  text: string
  onClick?: () => void
  classNames?: string
}

const Button = ({ text, onClick, classNames }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-black px-6 py-2 p-2 rounded-full text-md hover:bg-black hover:text-white transition duration-150 ease-out hover:ease-in ${classNames}`}
    >
      {text}
    </button>
  )
}

export default Button
