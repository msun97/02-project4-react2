import React from 'react'
import Link from 'next/link'
import "@/styles/componnent.scss";

const NewList = () => {
  return (
    <Link className='newList' href='/news/1'>
      <div className='news-item'>
        <div className='news-item-img'></div>
        <div className='news-item-txt'>
          <div className='news-item-title'>
            <h2>뉴스제목</h2>
          </div>
          <div className='news-item-content'>
            <p>뉴스내용입니다. 이곳에는 뉴스 내용이 들어갑니다. 글이 많을 경우 ...처리 되어 표시 됩니다.</p>
          </div>
        </div>
      </div>
      <div className='news-item-sub'>
        <div className='news-item-date'>2023-01-01</div>
        <div className='news-item-see'>
          <span>조회수 0회</span>
        </div>
      </div>
  </Link>
  )
}

export default NewList