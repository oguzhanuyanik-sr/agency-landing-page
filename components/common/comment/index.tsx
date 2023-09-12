import Image from 'next/image';
import React from 'react';

type Props = {};

const Comment = ({ data }: Props) => {
  const { title, subtitle, desc, img } = data;

  return (
    <div className='max-w-[350px] mb-16 md:mb-0'>
      <div className='w-full flex justify-center mb-[32px] md:mb-[58px]'>
        <Image
          src={img}
          alt={title}
          height={72}
          width={72}
          sizes='100%'
          className='rounded-full'
        />
      </div>
      <div className='mb-[32px] md:mb-[69px] text-center'>
        <p className='font-semibold text-lg leading-8 text-grey-300'>{desc}</p>
      </div>
      <div className='w-full flex flex-col items-center'>
        <p className='font-black text-lg font-fraunces text-blue-100'>
          {title}
        </p>
        <p className='font-semibold text-sm leading-[25px] text-grey-200'>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Comment;
