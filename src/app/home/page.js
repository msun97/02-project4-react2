'use client'

import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IoMdHome, IoMdSettings } from 'react-icons/io';
import { TiWeatherSunny } from "react-icons/ti";
import { IoNewspaperSharp } from "react-icons/io5";
import { RiAccountBoxFill } from 'react-icons/ri';
import { FaMapMarkerAlt } from "react-icons/fa";
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';


const page = () => {
  return (
    <div className="home wrapper">
      <Header title='홈'/>
      <main>
        <section className='profile'>
          <div className='line'></div>
          <div className='profile-image'></div>
          <div className='profile-info'>
            <h2>이름, 3세</h2>
            <div className='todolist'>오늘의 상태 체크하기</div>
          </div>
        </section>
        <section className='weather'>
          <Swiper className="weather-swiper">
            <SwiperSlide>
              <div className='weather-title'>
                <h2>오늘의 날씨</h2>
                <h3>10월 18일</h3>
              </div>
              <div className='weather-card'>
                <div className='weather-icon'>
                  <TiWeatherSunny />
                </div>
                <div className='weather-info'>
                  <h3>20°C/2°C</h3>
                  <p>오늘은 산책가기 좋은 날!</p>
                  <Link href='/sns'>산책 코스 알아보러 가기</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='weather-title'>
                <h2>오늘의 날씨</h2>
                <h3>10월 18일</h3>
              </div>
              <div className='weather-card'>
                <div className='weather-icon'>
                  <TiWeatherSunny />
                </div>
                <div className='weather-info'>
                  <h3>20°C/2°C</h3>
                  <p>오늘은 산책가기 좋은 날!</p>
                  <Link href='/sns'>산책 코스 알아보러 가기</Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
      <Footer active='home' />
    </div>
  )
}

export default page