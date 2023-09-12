import React from 'react';
import HeroMobile from '@/public/images/mobile/image-header.jpg';
import HeroDesktop from '@/public/images/desktop/image-header.jpg';
import Arrow from '@/public/images/icon-arrow-down.svg';
import Image from 'next/image';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='w-full'>
      <div className='absolute top-0 left-0 w-full -z-10 flex justify-center'>
        <Image
          src={HeroMobile}
          alt='Fruit'
          height={540}
          width={375}
          sizes='100%'
          className='w-full h-[540px] block md:hidden'
        />
        <Image
          src={HeroDesktop}
          alt='Fruit'
          height={540}
          width={375}
          sizes='100%'
          className='w-full min-h-screen hidden md:block'
        />
      </div>
      <div className='w-full flex justify-center pt-[88px]'>
        <h1 className='w-full font-black font-fraunces text-[40px] md:text-[56px] tracking-[6.2px] md:tracking-[8.5px] text-center text-white-100'>
          WE ARE <br className='md:hidden' /> CREATIVES
        </h1>
      </div>
      <div className='w-full flex justify-center mt-12 md:mt-48'>
        <Image src={Arrow} alt='arrow' height={107} width={30} sizes='100%' />
      </div>
    </div>
  );
};

export default Hero;
