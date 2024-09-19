import Image from 'next/image'

interface CardMenuProps {
  title: string
  imagePath?: string
  weight: number
  description: string
  price: number
}

const CardMenu = ({ title, imagePath, weight, description, price }: CardMenuProps) => {
  return (
    <div className='rounded-2xl w-[350px] h-[315px] border border-[#882727] overflow-hidden'>
      {(imagePath && (
        <Image
          src={imagePath}
          alt={title}
          className='h-[200px] w-full object-cover '
          width={65}
          height={50}
        />
      )) || (
        <Image
          src='/assets/svg/peppers.svg'
          alt={title}
          className='h-[200px] w-full border-b  border-[#882727]'
          width={65}
          height={50}
        />
      )}

      <h3 className='pl-4 font-light text-xl mt-4'>{title}</h3>
      <div className='flex items-center justify-between font-light mt-2 px-4'>
        <div className='font-extralight'>
          <p>{weight} gr</p>
          <p>{description}</p>
        </div>
        <div>
          <span className='text-xl font-medium'>{price} mdl</span>
        </div>
      </div>
    </div>
  )
}

export default CardMenu
