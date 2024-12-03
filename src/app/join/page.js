'use client'

import Button from '@/component/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
useRouter
import React from 'react'
useRouter
import { IoIosArrowBack } from "react-icons/io";



const page = () => {
  const router = useRouter();

  return (
    <div id='join'>
      <div className='back'>
        <IoIosArrowBack size={15}/>
        <button onClick={()=>router.back()}>
        뒤로
        </button>
      </div>
      <Image src={'/images/logo.png'} alt='Logo' width={89} height={108.12} />
      <div className='join-wrapper'>
        <div className='cateogry'>
          <h2>회원 구분</h2>
          <hr/>
          <input type='radio' id='korean' name='category' value='korean' />
          <label htmlFor='korean'>
            <span>개인 회원</span>
          </label>
          <input type='radio' id='foreigner'  name='category' value='foreigner' />
          <label htmlFor='foreigner'>
            <span>외국인 회원</span>
          </label>  
        </div>
        <div className='informations'>
          <h2>회원 정보</h2>
          <hr/> 
          <div className='id'>
            <h3>아이디</h3>
            <input type='text' placeholder='아이디'/>
          </div>
          <div className='password'>
            <h3>비밀번호</h3>
            <input type='password' placeholder='비밀번호'/>
          </div>
          <div className='phone'>
            <h3>휴대폰 번호</h3>
            <input type='text' placeholder='010-1234-5678'/>
          </div>
          <div className='email'>
            <h3>이메일</h3>
            <input type='email' placeholder='이메일'/>
          </div>
          
        </div>
        <div className='etc-information'>
          <h2>추가 정보</h2>
          <div className='nickname'>
            <h3>별명</h3>
            <input type='text' placeholder='별명'/>
          </div>
          <div className='sex'>
            <h3>성별</h3>
            <input type='radio' id='male' name='sex' value='male' />
            <label htmlFor='male'>
              <span>남성</span>
            </label>
            <input type='radio' id='female' name='sex' value='female' />
            <label htmlFor='female'>
              <span>여성</span>
            </label>
          </div>
          <div className='birth'>
            <h3>생년월일</h3>
            <input type='date'/>
          </div>
        </div>
        <div className='agree'>
          <h2>이용약관 동의 (필수)</h2>
          <div className='use'>
            lorem
          </div>
          <input type='checkbox' id='agree' />
          <label htmlFor='agree'>
            <span>동의합니다.</span>
          </label>
        </div>
        <Button bg='primary'>회원가입</Button>
      </div>
    </div>
  )
}

export default page