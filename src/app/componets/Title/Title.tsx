'use client'
import Image from 'next/image'

interface TitleProps {
  classNames?: string
  children: string | React.ReactNode
}

const Title = ({ children, classNames }: TitleProps) => {
  return (
    <div className='flex justify-center items-center gap-4'>
      <Image src='/assets/svg/Pepper Red.svg' alt='spicy-pepper' width={100} height={100}></Image>
      <p className={`text-5xl font-light  ${classNames}`}>{children}</p>
      <Image
        className='ml-4'
        src='/assets/svg/Pepper Green.svg'
        alt='spicy-pepper'
        width={70}
        height={100}
      ></Image>
    </div>
  )
}

export default Title
