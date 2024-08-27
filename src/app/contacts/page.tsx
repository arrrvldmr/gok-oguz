'use client'

import Image from 'next/image'
import Title from '../componets/Title/Title'
import { useTranslation } from 'react-i18next'

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Contacts = () => {
  const { t } = useTranslation()
  const todayDate = new Date()
  const europeanDate = !todayDate.getDay() ? 6 : todayDate.getDay()
  const hour = todayDate.getHours()
  const isOpen = hour >= 10 && hour < 22

  return (
    <>
      <div className='pt-8'>
        <Title classNames='text-center'>{t('contacts.title')}</Title>
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
          <h1 className=''>str. Calea Orheiului 19A, Chișinău, Moldova</h1>
        </div>
      </div>
      <div>
        <div className='flex gap-4 text-xl items-center mt-12'>
          <Image src='/assets/svg/clock.svg' alt='clock' width={32} height={32}></Image>
          <p>Orele de lucru</p>
        </div>
        <ul className='mt-4 '>
          {week.map((day, index) => {
            return (
              <li key={index} className='flex items-center gap-4'>
                <span className='bg-black rounded w-6 text-center mb-1 text-white'>
                  {t(`week.${day}`)}
                </span>
                10:00 - 22:00{' '}
                {europeanDate === index + 1 &&
                  (isOpen ? (
                    <span className='text-green-500'>{t('contacts.open')}</span>
                  ) : (
                    <span className='text-red-500'>{t('contacts.closed')}</span>
                  ))}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Contacts
