'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import gsap from 'gsap';

const Page = () => {
  const router = useRouter();
  const titleRef = useRef(null);
  const figRef = useRef(null);
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

    gsap.from(nextButtonRef.current, {
      y: 20,
      opacity: 0,
      duration: 2,
      delay: 1.8,
      ease: 'power3.out',
    });

    // Auto navigate to /home after 10 seconds
    const timeout = setTimeout(() => {
      router.push('/home');
    }, 3500); // 3.5 seconds

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeout);
  }, [router]);

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
    <div className="final4">
      <div className="back">
        <IoIosArrowBack size={15} />
        <button onClick={() => router.back()}>뒤로</button>
      </div>
      <div className="final4-wrapper">
        <div className="title" ref={titleRef}>
          <h2>반갑습니다, 닉네임님!</h2>
          <h3>가입이 완료 되었어요.</h3>
        </div>
        <div className="fig" ref={figRef}>
          <div className="profile-fig"></div>
          <div className="profile-description">이름, 1세</div>
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
