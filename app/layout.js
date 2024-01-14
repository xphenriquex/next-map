import { Inter } from 'next/font/google'
import './globals.css'
import Header from './RootComponents/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ride Reuest App',
  description: 'An app for mastering Next.js, supbase and the Google Maps API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  )
}
