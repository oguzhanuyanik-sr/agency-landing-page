'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import LogoImage from '@/public/images/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';

type Props = {};

const Navbar = (props: Props) => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  return (
    <header className='flex justify-between pt-8 px-6  md:px-10'>
      <div
        onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
        className={`${
          mobileMenuStatus
            ? 'h-screen w-full fixed left-0 top-0 z-10'
            : 'hidden'
        }`}
      ></div>
      <div className='flex items-center'>
        <Link href='/'>
          <Image
            src={LogoImage}
            alt='Logo'
            width={144}
            height={44}
            sizes='100%'
            className='md:w-[170px] md:h-[35px]'
          />
        </Link>
      </div>
      <div className='flex justify-end w-full'>
        <div
          onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
          className='block md:hidden text-white-100 cursor-pointer text-2xl hover:text-grey-200 transition-all z-20'
        >
          <RxHamburgerMenu />
        </div>
        <nav
          className={`${
            mobileMenuStatus ? 'block' : 'hidden'
          } md:block text-grey-100 md:text-white-100 text-xl md:text-lg font-semibold leading-[25px] max-h-[330px] max-w-[330px] md:max-h-full md:max-w-full w-full h-full fixed md:static top-[106px] flex flex-col items-center justify-center gap-8 bg-white-100 md:bg-[transparent] z-20 md:text-end`}
        >
          <div className='absolute top-[-24px] right-0 triangle md:static'></div>
          {navLinks.map(({ title, url }, index) => (
            <Link
              key={title}
              href={url}
              className={`${
                index === navLinks.length - 1
                  ? 'uppercase px-[34px] py-5 bg-yellow-100 md:bg-white-100 text-blue-100 rounded-[28px] font-fraunces font-bold text-[15px]'
                  : 'md:mr-12'
              } transition-all hover:opacity-80`}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
