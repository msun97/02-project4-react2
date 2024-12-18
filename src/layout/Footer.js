import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { IoNewspaperSharp } from 'react-icons/io5';
import { RiAccountBoxFill } from 'react-icons/ri';
import Link from 'next/link'; // Next.js Link 사용

const Footer = ({ active }) => {
  return (
    <footer>
      <nav className="footer-nav">
        <ul>
          <li className={active === 'home' ? 'home active' : 'home'}>
            <Link href="/home">
                <IoMdHome />
                홈
            </Link>
          </li>
          <li className={active === 'news' ? 'news active' : 'news'}>
            <Link href="/news">
                <IoNewspaperSharp />
                뉴스
            </Link>
          </li>
          <li className={active === 'chat' ? 'chat active' : 'chat'}>
            <Link href="/chat">
                <RiAccountBoxFill />
                게시글
            </Link>
          </li>
          <li className={active === 'map' ? 'map active' : 'map'}>
            <Link href="/map">
                <FaMapMarkerAlt />
                지도
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
