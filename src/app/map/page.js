
import Button from '@/component/Button'
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
    <div className="map wrapper">
    <Header title='지도' />
    <main>
      <section className='map'>
        <div className="map-content"></div>
        <Button Bg='primary'>필터</Button>
      </section>
    </main>
    <Footer active='map' />
  </div>
  )
}

export default page