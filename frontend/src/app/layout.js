import { Inter } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Murkiva-Fashion',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700" rel="stylesheet"/>

      </head>
      <body className={inter.className}>
        <div className="relative max-w-7xl bg-white rounded-3xl shadow-md mx-auto my-10">

           

            <Navbar/>
                {children}
            <Footer/>


        </div>
      </body>
    </html>
  )
}
