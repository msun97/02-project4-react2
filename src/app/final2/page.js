'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import gsap from 'gsap';

const Page = () => {
  const router = useRouter();
  const titleRef = useRef(null);
  const questionRefs = useRef([]);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    // Page load animations
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
    });

    questionRefs.current.forEach((ref, index) => {
      gsap.from(ref, {
        y: 20,
        opacity: 0,
        duration: 1.5,
        delay: 1.1 + index * 0.7,
        ease: 'power3.out',
      });
    });

    gsap.from(nextButtonRef.current, {
      y: 20,
      opacity: 0,
      duration: 2,
      delay: 3,
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
    router.push('/final3');
  };

  return (
    <div className="final2">
      <div className="back">
        <IoIosArrowBack size={15} />
        <button onClick={() => router.back()}>뒤로</button>
      </div>
      <div className="final2-wrapper">
        <div className="title" ref={titleRef}>
          <h2>프로필 설정</h2>
          <h3>너무 귀여울 것 같아요!</h3>
        </div>
        <div className="question">
          <div className="question-name" ref={(el) => (questionRefs.current[0] = el)}>
            <div className="question-title">애완동물의 이름은 무엇인가요?</div>
            <div className="answer">
              <h3>이름</h3>
              <input type="text" placeholder="이름" />
            </div>
          </div>
          <div className="question-age" ref={(el) => (questionRefs.current[1] = el)}>
            <div className="question-title">나이는 몇살인가요?</div>
            <div className="answer">
              <h3>나이</h3>
              <input type="number" placeholder="나이" />
            </div>
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
