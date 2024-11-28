'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const page = () => {
  const [paginationClass, setPaginationClass] = useState(""); // pagination 애니메이션 상태
  const [slideAnimation, setSlideAnimation] = useState([false, false]); // 슬라이드 애니메이션 상태

  // 슬라이드 변경 시 애니메이션 상태 업데이트
  const handleSlideChange = (swiper) => {
    const newSlideAnimation = [false, false]; // 모든 슬라이드 애니메이션 초기화
    newSlideAnimation[swiper.activeIndex] = true;  // 현재 슬라이드에 애니메이션 활성화
    setSlideAnimation(newSlideAnimation);
    
    // 첫 번째 슬라이드에서만 pagination에 애니메이션 추가
    if (swiper.activeIndex === 0) {
      setPaginationClass("pagination-animation");
    } else {
      setPaginationClass(""); // 다른 슬라이드에서는 애니메이션 제거
    }
  };

  useEffect(() => {
    // 페이지가 로드될 때 첫 번째 슬라이드에 애니메이션 적용
    setSlideAnimation([true, false]); // 첫 번째 슬라이드만 애니메이션 활성화
    setPaginationClass("pagination-animation"); // 첫 번째 슬라이드에서 pagination 애니메이션 활성화
  }, []);


  return (
    <div id='setting'>
      <Swiper pagination={{ clickable: true }}  // pagination 설정
        modules={[Pagination]} 
        className="mySwiper"
        onSlideChange={handleSlideChange}>
        <SwiperSlide>
          <div id='wrap'>
            <div className={`title ${slideAnimation[0] ? 'fade-in' : ''}`}>
              <p className='title-sub'>근처에 강아지 키우는 사람 어디 없나?</p>
              <p className='title-main'>위치 기반<br /> 반려동물 커뮤니티</p>
            </div>
            <div className='img'>
              <Image src={'/images/setting1.png'} alt='commnuity' width={282} height={308} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='map'>
          <div id='wrap'>
            <div className={`title ${slideAnimation[1] ? 'fade-in' : ''}`}>
              <p className='title-sub'>잘하는 동물병원, 숨겨진 산책코스 등</p>
              <p className='title-main'>우리 동네 애완인<br /> 핫 플레이스 발견하기!</p>
            </div>
            <div className='map'>
              <Image className='map-img' src={'/images/setting2-map.png'} alt='map' width={308} height={308} />
              <Image className='pin1' src={'/images/setting2-pin.png'} alt='pin' width={60} height={60} />
              <Image className='pin2' src={'/images/setting2-pin.png'} alt='pin' width={60} height={60} />
              <Image className='pin3' src={'/images/setting2-pin.png'} alt='pin' width={60} height={60} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={`swiper-pagination ${paginationClass}`} />
      <div className='skip'>
        <a href="/login">건너뛰기</a>
      </div>
    </div>
  )
}

export default page
