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
import ProfilePage from '@/components/ProfilePage/ProfilePage'
import Post from '@/components/Post/Post'
import Cart from '@/components/Cart/Cart'

import Landing from '@/components/Landing/Landing'
import Swipe from '@/components/Swipe/Swipe'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const cartItems = [
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 20, quantity: 1 },
    { id: 3, name: 'Item 3', price: 5, quantity: 4 },
  ];
  return (
    <>
      <MetaData/>

      <Navbar cartItems={5} />
      <Landing/>

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
      <ProfilePage/>
      <Post
  title="My Awesome Post"
  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a odio elit. Pellentesque vitae elit nulla. Sed eget ipsum id metus rhoncus malesuada. In hac habitasse platea dictumst. Donec et massa auctor, interdum velit eu, iaculis mi."
  author="John Doe"
  date="March 27, 2023"
/>

      <DeliveryForm/>
      <Cart items={cartItems} />

      <Footer/>
    </>
  )
}
