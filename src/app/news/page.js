import NewList from '@/component/NewList'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Link from 'next/link'
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdHome, IoMdSettings } from 'react-icons/io'
import { IoNewspaperSharp } from 'react-icons/io5'
import { RiAccountBoxFill } from 'react-icons/ri'

const page = () => {
  return (
    <div className="newletter wrapper">
      <Header title='뉴스레터' />
      <main>
        <section className='news-list'>
          <NewList />
          <NewList />
          <NewList />
          <NewList />
          <NewList />
        </section>
      </main>
      <Footer active='news' />
    </div>
  )
}

export default page