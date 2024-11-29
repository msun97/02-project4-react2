'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useRouter } from 'next/navigation';

const page = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handleSlideChange = (Swiper) => {
    setActiveSlideIndex(Swiper.activeIndex);
    if (Swiper.activeIndex === Swiper.slides.length - 1) {
      router.push('/firstLogin');
    }
  };
  const router = useRouter();
  return (
    <div id='setting'>
      <Swiper pagination={{ clickable: true }}  // pagination 설정
        modules={[Pagination]} 
        className="mySwiper"
        onSlideChange={handleSlideChange}>
        <SwiperSlide>
          <div id='wrap'>
            <div className={`title ${activeSlideIndex === 0?'slide-active':''}`}>
              <p className='title-sub'>근처에 강아지 키우는 사람 어디 없나?</p>
              <p className='title-main'>위치 기반<br /> 반려동물 커뮤니티</p>
            </div>
            <div className={`img ${activeSlideIndex === 0?'slide-active':''}`}>
              <Image src={'/images/setting1.png'} alt='commnuity' width={282} height={308} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='wrap'>
            <div className={`title ${activeSlideIndex === 0?'slide-active':''}`}>
              <p className='title-sub'>세상에 나쁜 애완동물은 없다</p>
              <p className='title-main'>애완동물 종류 별<br />맞춤 콘텐츠 제공</p>
            </div>
            <div className={`img ${activeSlideIndex === 0?'slide-active':''}`}>
              <Image className='heart-img' src={'/images/setting3-heart.png'} alt='heart' width={308} height={308} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='wrap'>
            <div className={`title ${activeSlideIndex === 0?'slide-active':''}`}>
              <p className='title-sub'>잘하는 동물병원, 숨겨진 산책코스 등</p>
              <p className='title-main'>우리 동네 애완인<br /> 핫 플레이스 발견하기!</p>
            </div>
            <div className={`map ${activeSlideIndex === 0?'slide-active':''}`}>
              <Image className='map-img' src={'/images/setting2-map.png'} alt='map' width={308} height={308} />
              <Image className='pin1' src={'/images/setting2-pin.png'} alt='pin' width={60} height={60} />
              <Image className='pin2' src={'/images/setting2-pin.png'} alt='pin' width={60} height={60} />
              <Image className='pin3' src={'/images/setting2-pin.png'} alt='pin' width={60} height={60} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
       </SwiperSlide>
      </Swiper>
      <div className='swiper-pagination' />
      <div className='skip'>
        <a href="/login">건너뛰기</a>
      </div>
    </div>
  )
}

export default page
