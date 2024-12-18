'use client'

import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Header = ({ title, icon }) => {
  const handleBack = (e) => {
    e.preventDefault();
    window.history.back(); // 브라우저의 뒤로 가기
  };

  return (
    <header>
      <h1 className="logo">{title}</h1>
      <div className="utils">
        {icon === '뒤로가기' ? (
          // 뒤로가기 동작 시 Link 대신 버튼 사용
          <a href="#" onClick={handleBack} className="back-button">
            <FaArrowLeft />
          </a>
        ) : (
          // 설정 페이지로 이동 시 Link 사용
          <Link href="/homeset">
              <div className="setting-name">설정</div>
              <IoMdSettings />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
