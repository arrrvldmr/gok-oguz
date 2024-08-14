import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex justify-between'>
      <ul className='flex'>
        <li>
          <Link href='/'>Principala</Link>
        </li>
        <li>
          <Link href='/menu'>Meniu</Link>
        </li>
        <li>
          <Link href='/contacts'>Contacte</Link>
        </li>
      </ul>
      <div className='flex'>
        <Image src='/assets/svg/logo.svg' alt='Gok-Oguz' width={80} height={61} />
        <h1>Gök-Oguz</h1>
      </div>
      <div className='flex gap-4'>
        <span>RO</span>
        <span>EN</span>
        <span>RU</span>
      </div>
    </header>
  )
}

export default Header
