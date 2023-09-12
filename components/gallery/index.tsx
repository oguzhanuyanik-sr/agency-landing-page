import React from 'react';
import { gallery } from '@/app/api/response.json';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className='flex flex-wrap md:flex-none'>
      {gallery.map(({ title, img }, index) => (
        <div className='w-1/2 md:w-1/4' key={index}>
          <Image
            className='md:hidden w-full'
            src={img.mobile}
            alt={title}
            height={188}
            width={188}
            sizes='100%'
          />
          <Image
            className='hidden md:block w-full'
            src={img.desktop}
            alt={title}
            height={447}
            width={360}
            sizes='100%'
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
