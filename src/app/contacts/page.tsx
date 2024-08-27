'use client'

import Image from 'next/image'
import { useEffect } from 'react'

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const Contacts = () => {
  const todayDate = new Date()
  console.log(todayDate.getFullYear())
  console.info(`Date is`, todayDate.getDay())

  return (
    <>
      <div>
        <p className='flex justify-center text-5xl font-light mb-32 '>Contacte</p>
      </div>
      <div className='flex flex-col leading-loose gap-2'>
        <div className='flex gap-4'>
          <Image src='/assets/svg/phone.svg' alt='phone' width={25} height={25}></Image>
          <p>079468852</p>
        </div>
        <div className='flex gap-4'>
          <Image src='/assets/svg/instagram.svg' alt='instagram' width={25} height={25}></Image>
          <p>@gok_oguz_restaurant</p>
        </div>
        <div className='flex gap-4'>
          <Image src='/assets/svg/facebook.svg' alt='facebook' width={25} height={25}></Image>
          <p>https://www.facebook.com/restaurant.Gok.Oguz</p>
        </div>
        <div className='flex gap-4'>
          <Image src='/assets/svg/tiktok.svg' alt='tiktok' width={25} height={25}></Image>
          <p>@gok.oguz.restaurant</p>
        </div>
        <div className='flex gap-4'>
          <Image src='/assets/svg/mail.svg' alt='email' width={25} height={25}></Image>
          <p>gok-oguz.md@yandex.ru</p>
        </div>
        <div className='flex gap-4'>
          <Image src='/assets/svg/vector.svg' alt='location' width={25} height={25}></Image>
          <h1 className=''>str. Calea Orheiului 19A, Chisinau, Moldova</h1>
        </div>
      </div>
      <div>
        <div className='flex gap-4 text-xl items-center mt-12'>
          <Image src='/assets/svg/clock.svg' alt='clock' width={32} height={32}></Image>
          <p>Orele de lucru</p>
        </div>
        <ul className=''>
          {week.map((day) => {
            return (
              <li className='flex gap-4'>
                <span>{day}</span>
                10:00 - 22:00
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Contacts
