import Chatlist from '@/component/ChatList'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Link from 'next/link'
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosArrowDown, IoMdHome, IoMdSettings } from 'react-icons/io'
import { IoNewspaperSharp } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'
import { RiAccountBoxFill } from 'react-icons/ri'

const page = () => {
  return (
    <div className="chat wrapper">
    <Header title='게시글'/>
    <main>
      <section className='chat-header'>
        <div className='chat-list-header'>
          <div className='chat-list-nav'>
            <nav>
              <ul>
                <li className='active'>수다</li>
                <li>정보</li>
                <li>질문</li>
                <li>꿀팁</li>
              </ul>
            </nav>
          </div>
          <div className='chat-list-filter'>
            최신순
            <IoIosArrowDown />
          </div>
        </div>
      </section>
      <section className='chat-list'>
        <div className='new'>
          <Link href='/chat/write'>
            <div className='new-btn'>
              <MdEdit />
            </div>
          </Link>
        </div>
        <Chatlist />
        <Chatlist />
        <Chatlist />
        <Chatlist />
        <Chatlist />
        <Chatlist />
      </section>
    </main>
    <Footer active='chat' />
  </div>
  )
}

export default page