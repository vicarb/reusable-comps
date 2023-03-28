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
const inter = Inter({ subsets: ['latin'] })
import MetaData from '@/components/MetaData/MetaData'


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

      <Login/>
      <Register/>
      <Footer/>
    </>
  )
}
