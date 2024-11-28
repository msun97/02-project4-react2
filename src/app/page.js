'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
useRouter

const Intro = () => {
  const [loading, setLoading] = useState(true);
  const router=useRouter(); //페이지 이동을 위한 history hook

  // 로딩 후 3초 후에 main 페이지로 이동
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      router.push('/setting');
    }, 3000);
  }, [router]);

    return (
      <div id='intro'>
        {loading ? ( 
          <>
            <h1 className='logo'>멍?냥! 애완동물 커뮤니티</h1>
            <Image src={'/images/logo.png'} alt='Logo' width={166.33} height={200.88} />
          </>
        ):(
          <>
            <h1 className='logo'>멍?냥! 애완동물 커뮤니티</h1>
            <Image src={'/images/logo.png'} alt='Logo' width={166.33} height={200.88} />
          </>
        )}
        </div>
    );
  }

  export default Intro;

