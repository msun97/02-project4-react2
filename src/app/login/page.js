import Button from '@/component/Button'
import Image from 'next/image'
import React from 'react'

const login = () => {
  return (
    <div id="login">
      <Image src={'/images/logo.png'} alt='Logo' width={166.33} height={200.88} />
      <div className='id-login'>
        <Button Bg='gray'>아이디</Button>
        <Button Bg='gray'>비밀번호</Button>
        <Button Bg='primary'>로그인</Button>
        <div className='find-id'>
          <a href="/find-id">로그인 정보를 잊으셨나요?</a>
        </div>  
      </div>
      <div className='sns-login'>
        <Button Bg='naver'>네이버 아이디로 로그인</Button>
        <Button Bg='kakao'>카카오 아이디로 로그인</Button>
        <div className='join'>
          <a href="/join">회원가입</a>
        </div>
      </div>
    </div>
  )
}

export default login