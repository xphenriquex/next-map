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
      <head>
      <script
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
      ></script>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  )
}
