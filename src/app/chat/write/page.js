import Button from '@/component/Button';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const page = () => {
  return (
  <div className="chatwrite wrapper">
    <Header title='글쓰기'/>
    <main>
      <section className="chat-write">
        <div className='category'>
          카테고리
          <IoIosArrowDown />
        </div>
        <div className='text-area'>
          <textarea className='title' placeholder='제목' />
          <textarea className='content' placeholder='글 내용' />
        </div>
        <div className='upload'>
          <Button Bg='gray'>취소</Button>
          <Button Bg='primary'>작성</Button>
        </div>
      </section>
    </main>
    <Footer active='chat' />
  </div>
  )
}

export default page