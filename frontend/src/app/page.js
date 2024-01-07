import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header/Header'
import BestSellingProducts from '@/components/pages/home/product/BestSellingProducts'

export default function Home() {
  return (
  <div className="">
    <Header/>
    <BestSellingProducts/>


  </div>
  )
}
