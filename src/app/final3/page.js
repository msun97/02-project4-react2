'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import gsap from 'gsap';
import Button from '@/component/Button';

const Page = () => {
  const router = useRouter();
  const titleRef = useRef(null);
  const figRef = useRef(null);
  const fileBoxRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    // Page load animations
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
    });

    gsap.from(figRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.5,
      delay: 0.8,
      ease: 'power3.out',
    });

    gsap.from(fileBoxRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.5,
      delay: 1.2,
      ease: 'power3.out',
    });

    gsap.from(nextButtonRef.current, {
      y: 20,
      opacity: 0,
      duration: 2,
      delay: 1.8,
      ease: 'power3.out',
    });
  }, []);

  const handleNextClick = () => {
    // Button click animation
    gsap.fromTo(
      nextButtonRef.current,
      { scale: 1 },
      { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1, ease: 'power1.out' }
    );
    router.push('/final4');
  };

  return (
    <div className="final3">
      <div className="back">
        <IoIosArrowBack size={15} />
        <button onClick={() => router.back()}>뒤로</button>
      </div>
      <div className="final3-wrapper">
        <div className="title" ref={titleRef}>
          <h2>프로필 설정</h2>
          <h3>사진도 자랑해주세요!</h3>
        </div>
        <div className="fig" ref={figRef}>
          <div className="profile-fig"></div>
          <div className="profile-description">이름, 1세</div>
          <div className="filebox" ref={fileBoxRef}>
            <label htmlFor="file">
              <Button Bg="gray">파일찾기</Button>
            </label>
            <input type="file" id="file" />
          </div>
        </div>
        <div
          className="next"
          ref={nextButtonRef}
          onClick={handleNextClick}
        >
          다음
          <IoIosArrowForward size={15} />
        </div>
        <div className="progress">
          <div className="bg-bar"></div>
          <div className="fill-bar"></div>
          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;