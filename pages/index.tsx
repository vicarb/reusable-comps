import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import Content from '@/components/Content/Content'
import Children from '@/components/Children/Children'
import ChildrenHeader from '@/components/ChildrenHeader/ChildrenHeader'
import ChildrenLayout from '@/components/ChildrenLayout/ChildrenLayout'
import MetaData from '@/components/MetaData/MetaData'
import TextImage from '@/components/TextImage/TextImage'
import ProductPage from '@/components/ProductPage/ProductPage'
import DeliveryForm from '@/components/DeliveryForm/DeliveryForm'

import Swipe from '@/components/Swipe/Swipe'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MetaData/>
      <Navbar/>
      <ChildrenLayout header="Header title" subheader="Subheader text" />
      
      <Content>
      <ChildrenHeader title="Header title" subtitle="Subheader text" />
      <Children />
      
      </Content>
      <div className='m-16'>
        <Swipe/>
      </div>
      <TextImage/>
      <ProductPage/>

      <Login/>
      <Register/>
      <DeliveryForm/>
      <Footer/>
    </>
  )
}
