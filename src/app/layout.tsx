import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import Header from './componets/Header'
import Footer from './componets/Footer'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gok-oguz',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={onest.className}>
        <Header />
        <main className='bg-beige h-full'>
          <div className="bg-[url('/assets/svg/ornt.svg')] bg-repeat-y bg-right h-auto w-full container mx-auto">
            {children}

            <Footer className='' />
          </div>
        </main>
      </body>
    </html>
  )
}
