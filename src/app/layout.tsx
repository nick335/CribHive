import Header from '@/Components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/Components/Footer/Footer'
import localFont from '@next/font/local'



export const metadata: Metadata = {
  title: 'CribHive',
  description: 'CribHive id the solution to finding apartments and hostels both on and off the campus and locations around the campus',
  openGraph: {
    title: 'CribHive',
    description: 'CribHive id the solution to finding apartments and hostels both on and off the campus and locations around the campus',
    // images: ['../../public/images']
  }
}

const jhengHei = localFont({
  src: [
    {
      path: '../../public/fonts/JhengHei.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/JhengHeiBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-JhengHei'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${jhengHei.variable} font-sans`}>
      <body >
       <Header />
        {children}
       <Footer />
      </body>
    </html>
  )
}
