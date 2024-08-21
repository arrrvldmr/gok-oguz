import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='border-b-2 border-black bg-beige h-18'>
      <div className='flex justify-between mx-auto container'>
        <ul className='flex items-center gap-12 grow-[0.7] font-medium'>
          <li className='hover:underline hover:underline-offset-8'>
            <Link href='/'>Principala</Link>
          </li>
          <li className='hover:underline hover:underline-offset-8'>
            <Link href='/menu'>Meniu</Link>
          </li>
          <li className='hover:underline hover:underline-offset-8'>
            <Link href='/contacts'>Contacte</Link>
          </li>
        </ul>
        <div className='flex items-center py-2 gap-4 text-xl grow font-bold'>
          <Image src='/assets/svg/logo.svg' alt='Gok-Oguz' width={65} height={50} />
          <h1>Gök-Oguz</h1>
        </div>
        <div className='flex px-8 gap-8 bg-black text-white items-center grow-0 font-light'>
          <span className='cursor-pointer opacity-70 hover:opacity-100 transition duration-150 ease-out hover:ease-in hover:underline hover:underline-offset-8'>
            RO
          </span>
          <span className='cursor-pointer opacity-70 hover:opacity-100 transition duration-150 ease-out hover:ease-in hover:underline hover:underline-offset-8'>
            EN
          </span>
          <span className='cursor-pointer opacity-70 hover:opacity-100 transition duration-150 ease-out hover:ease-in hover:underline hover:underline-offset-8'>
            RU
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
