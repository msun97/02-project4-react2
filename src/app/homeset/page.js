import Header from '@/layout/Header'
import Link from 'next/link'
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdHome } from 'react-icons/io'
import { IoNewspaperSharp } from 'react-icons/io5'
import { RiAccountBoxFill } from 'react-icons/ri'
import { MdEdit } from "react-icons/md";
import Footer from '@/layout/Footer'

const page = () => {
  return (
    <div className="homeset wrapper">
    <Header title='설정' icon='뒤로가기' />
    <main>
      <section className='profile'>
        <div className='img'>
          <div className='img-profile'></div>
          <div className='upload'>
            <MdEdit />
          </div>
        </div>
        <div className='info'>
          <h2>닉네임</h2>
          <div className='pet'>
            강아지, 3세
          </div>
        </div>
        <div className='follow'>
            <span>팔로워 1,234</span>
            <span>팔로잉 1,234</span>
        </div>
      </section>
      <section className='setting-menu'>
        <div className='setting-menu-personel'>
          <ul>
            <li>작성한 글/댓글</li>
            <li>즐겨찾기 관리</li>
          </ul>
        </div>
        <div className='setting-menu-app'>
          <ul>
            <li>공지사항</li>
            <li>이벤트</li>
            <li>로그아웃</li>
            <li>회원 탈퇴</li>
          </ul>
        </div>
      </section>
    </main>
    <Footer active='' />
  </div>
  )
}

export default page