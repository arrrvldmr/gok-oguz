'use client'

import Image from 'next/image'
import Button from './componets/Button/button'

export default function Home() {
  return (
    <>
      <section className='flex justify-between pt-28'>
        <div className='mt-12'>
          <h1 className='flex text-5xl w-[600px] leading-normal font-semibold '>
            Restaurant de bucătărie Găgăuză şi Bulgară
          </h1>
          <p className='flex text-2xl w-[500px] my-6 font-light '>
            Întâmpinăm oaspeții cu o ambianță autentică și ospitalitate sinceră.
          </p>
          <div className='flex gap-8'>
            <Button text='Vezi Meniul' onClick={() => alert('Vezi Meniul')} />
            <Button text='Rezervare' onClick={() => alert('Rezervare')} />
          </div>
        </div>
        <div className='flex items-center bg-burgundy w-2/5 h-[450px] rounded-tl-full rounded-bl-full absolute right-0'>
          <Image
            src='/assets/images/surpa.png'
            alt='Surpa'
            width={350}
            height={350}
            className='ml-12'
          />
        </div>
      </section>

      <section className='flex mt-36'>
        <div className='w-2/5 flex'>
          <Image src='/assets/images/Wine-bottle.svg' alt='Wine-bottle' width={400} height={400} />
        </div>
        <div className='w-2/5 flex items-center'>
          <div>
            <h2 className='flex text-4xl font-medium mb-4 leading-tight'>
              Tradiții Găgăuze în orașul Chișinău
            </h2>

            <h4 className='flex text-medium pb-4 font-light'>
              În bucătăria găgăuză, carnea de miel joacă un rol important și este folosită în
              diverse feluri. Găgăuzii apreciază mielul pentru gustul său delicat și pentru că face
              parte din tradiția lor culinară încă din vechime.
            </h4>
            <p className='font-light'>
              {' '}
              Iată câteva vinuri care se potrivesc excelent cu preparatele din carne de miel:
            </p>
            <ul className='list-disc pl-4 pt-4 leading-loose font-light'>
              <li>
                <h3>Cabernet Sauvignon</h3>
              </li>
              <li>
                <h3>Merlot</h3>
              </li>
              <li>
                <h3>Syrah/Shiraz</h3>
              </li>
              <li>
                <h3>Pinot Noir</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='mt-40'>
        <div className='w-full h-[750px] bg-burgundy -left-0 absolute z-0 pt-12' />
        <div className='z-10 relative'>
          <p className='text-white text-4xl text-center pb-12 pt-12'>
            Relaxați-vă într-o ambianță unică
          </p>
          <div className='flex gap-20'>
            <div className=''>
              <Image
                className='max-w-none'
                src='/assets/images/restaurant-photo1.png'
                alt='restaurant-photo1'
                width={400}
                height={600}
              ></Image>
            </div>
            <div className='text-white'>
              <Image
                className=''
                src='/assets/images/restaurant-photo3.png'
                alt='restaurant-photo3'
                width={400}
                height={400}
              ></Image>
              <p className='pt-6 leading-loose font-light'>
                Restaurantul este decorat cu elemente tradiționale găgăuze. Acestea includ mobilier
                din lemn sculptat, țesături colorate, și motive tradiționale.
              </p>
              <p className='pt-6'>
                Atmosfera este caldă și primitoare, reflectând ospitalitatea găgăuzilor.
              </p>
            </div>
            <div className='text-white'>
              <Image
                className=''
                src='/assets/images/restaurant-photo2.png'
                alt='restaurant-photo2'
                width={450}
                height={400}
              ></Image>
              <p className='pt-6 leading-loose font-light'>
                În caz că aveți nevoie de liniște pentru lucru sau studii , sunt disponibile locuri
                mai puțin gălăgioase. La fel sunt disponibile mese pentru conferințe sau pentru o
                ședere plăcută între colegi.
              </p>
              <p className='pt-6'>
                Chelnerii noștri vă vor ajuta mereu să alegeți un loc potrivit.
              </p>
              <div className='flex justify-end '>
                <Button
                  classNames='mt-8 border-white hover:text-black hover:bg-white'
                  text='Vezi locația'
                  onClick={() => alert('Vezi locația')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex mt-36'>
        <div className='w-2/5'>
          <Image src='/assets/svg/Moldova.svg' alt='Moldova' width={500} height={400} />
        </div>
        <div className='flex items-center w-2/5'>
          <div>
            <p className='text-xl font-bold'>O cultură distinctă în sudul Moldovei</p>
            <p className='my-8'>
              Găgăuzia este o regiune autonomă situată în sudul Republicii Moldova, cunoscută pentru
              populația sa predominant găgăuză, un grup etnic de origine turcică.
            </p>
            <p>
              Cultura găgăuză este unică și distinctă, îmbinând influențe turcice cu tradițiile
              locale moldovenești. Limba găgăuză, parte a familiei limbilor turcice, este vorbită
              alături de limba română și rusă. Regiunea este renumită pentru obiceiurile sale
              tradiționale, festivalurile culturale și bucătăria specifică, care reflectă o
              combinație de arome și tehnici culinare moștenite de la strămoșii turcici și adaptate
              condițiilor locale.
            </p>
            <p className='mt-8'>
              Găgăuzia este un exemplu de diversitate etnică și culturală în Moldova, contribuind la
              bogăția culturală a țării.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
