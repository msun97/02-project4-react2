
import Image from 'next/image'
import React from 'react'
import Button from '@/component/Button'

const firstLogin = () => {
  return (
    <div id='wrap' className='first-login'>
      <div className='title'>
        <p className='title-sub'>애완인끼리 모여요</p>
        <p className='title-main'>다양한 놀거리가 가득한<br /> 멍냥에서 놀아요</p>
      </div>
      <div className='img'>
        <Image className='walk' src={'/images/setting3-walk.png'} alt='walk' width={160} height={160} />
        <Image className='talk' src={'/images/setting3-talk.png'} alt='talk' width={160} height={160} />
        <Image className='coffee' src={'/images/setting3-coffee.png'} alt='coffee' width={160} height={160} />
      </div>
      <div className='btn'>
        <Button Bg='primary'>
          <a href='/login'>로그인</a>
        </Button>
        <Button Bg='gray'>          
          <a href='/join'>회원가입</a>
        </Button>
      </div>
    </div>
  )
}

export default firstLogin