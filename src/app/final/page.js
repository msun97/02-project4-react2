'use client';

import Button from '@/component/Button';
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import gsap from 'gsap';

const FinalPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const progressBarRef = useRef(null);
  const fillBarRef = useRef(null);

  useEffect(() => {
    // Page load animation
    gsap.from('.final .title h2', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
    gsap.from('.final .title h3', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out',
    });
    gsap.from('.final .question', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.6,
      ease: 'power3.out',
    });
    gsap.from('.final .answer button', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.9,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  useEffect(() => {
    // Animate progress bar fill
    if (fillBarRef.current) {
      gsap.to(fillBarRef.current, {
        width: selectedButton ? '25%' : '0%',
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [selectedButton]);

  const handleButtonClick = (option) => {
    setSelectedButton(option);
    // Button click animation
    gsap.fromTo(
      `.final .answer button:nth-child(${['강아지', '고양이', '기타', '아직없어요'].indexOf(option) + 1})`,
      { scale: 1 },
      { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1, ease: 'power1.out' }
    );
  };

  const getNextPageHref = () => {
    return selectedButton === '아직없어요' ? '/final32' : '/final2';
  };

  return (
    <div className="final">
      <div className="title">
        <h2>반가워요!🎉</h2>
        <h3>맞춤 콘텐츠 추천을 위해 몇 가지만 질문 할게요</h3>
      </div>
      <div className="question">
        <div className="icon" />
        <div className="question-title">키우시는 애완동물이 있으신가요?</div>
      </div>
      <div className="answer">
        <Button
          Bg={` ${selectedButton === '강아지' ? 'primary60' : 'gray'}`}
          onClick={() => handleButtonClick('강아지')}
        >
          강아지
        </Button>
        <Button
          Bg={`${selectedButton === '고양이' ? 'primary60' : 'gray'}`}
          onClick={() => handleButtonClick('고양이')}
        >
          고양이
        </Button>
        <Button
          Bg={`${selectedButton === '기타' ? 'primary60' : 'gray'}`}
          onClick={() => handleButtonClick('기타')}
        >
          기타
        </Button>
        <Button
          Bg={` ${selectedButton === '아직없어요' ? 'primary60' : 'gray'}`}
          onClick={() => handleButtonClick('아직없어요')}
        >
          아직 없어요😥
        </Button>
      </div>
      <a href={getNextPageHref()}>
        <div className="next">
          다음
          <IoIosArrowForward size={15} />
        </div>
      </a>
      <div className="progress">
        <div className="bg-bar" ref={progressBarRef}></div>
        <div className="fill-bar" ref={fillBarRef}></div>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default FinalPage;
