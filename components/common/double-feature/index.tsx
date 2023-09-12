import React from 'react';
import Button from '../button';
import Image from 'next/image';

interface DoubleFeatureProps {
  data: {
    title: string;
    desc: string;
    url: string;
    img: {
      desktop: string;
      mobile: string;
    };
  };
  index: number;
}

const DoubleFeature = ({ data, index }: DoubleFeatureProps) => {
  const { title, desc, url, img } = data;
  const isEven = index % 2 === 0;

  return (
    <>
      <section
        key={title}
        className={`flex ${isEven ? 'flex-wrap-reverse' : 'flex-wrap'}`}
      >
        {isEven ? (
          <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-6 md:p-[5%] max-h-[100%] py-[20%]'>
            <h2 className='font-fraunces text-center md:text-start text-[32px] font-black md:text-[40px] mb-6 md:mb-8'>
              {title}
            </h2>
            <p className='text-grey-100 text-lg leading-[1] md:leading-[30px] font-semibold'>
              {desc}
            </p>
            <Button url={url} color={'yellow'} />
          </div>
        ) : (
          ''
        )}
        <div className='w-full md:w-1/2 max-h-[50%] md:max-h-full'>
          <Image
            src={img.desktop}
            alt={title}
            height={600}
            width={720}
            sizes='100%'
            className='h-full w-full'
          />
        </div>
        {!isEven ? (
          <div className='flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-6 md:p-[5%] max-h-[100%] py-[20%]'>
            <h2 className='font-fraunces text-center md:text-start text-[32px] font-black md:text-[40px] mb-6 md:mb-8'>
              {title}
            </h2>
            <p className='text-grey-100 text-lg leading-[1] md:leading-[30px] font-semibold'>
              {desc}
            </p>
            <Button url={url} color='red' />
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  );
};

export default DoubleFeature;
