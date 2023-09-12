import React from 'react';
import LogoImage from '@/public/images/dark-logo.svg';
import Image from 'next/image';
import { navLinks, socialLinks } from '@/utils/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-green-400 h-[350px]'>
      <div className='w-full flex justify-center pt-16 mb-10'>
        <Link href='/'>
          <Image
            src={LogoImage}
            alt='Logo'
            width={144}
            height={44}
            sizes='100%'
          />
        </Link>
      </div>
      <div className='w-full flex flex-wrap justify-center gap-12'>
        {navLinks.map(({ title, url }, index) => (
          <>
            {index === navLinks.length - 1 ? (
              ''
            ) : (
              <Link
                className='text-green-300 text-lg leading-[25px] font-semibold hover:text-white-100 transition-all'
                key={index}
                href={url}
              >
                {title}
              </Link>
            )}
          </>
        ))}
      </div>
      <div className='w-full flex justify-center text-xl mt-20 gap-6'>
        {socialLinks.map(({ icon, url }, index) => {
          const Icon = icon;

          return (
            <Link
              className='text-green-300 hover:text-white-100 transition-all'
              key={index}
              href={url}
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
