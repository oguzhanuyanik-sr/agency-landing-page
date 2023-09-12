import React from 'react';

interface CardProps {
  data: {
    title: string;
    desc: string;
  };
  index: number;
}

const Card = ({ data, index }: CardProps) => {
  const { title, desc } = data;

  return (
    <div
      className={`${
        index % 2 === 0 ? 'bg-cherry' : 'bg-orange'
      } relative w-full md:w-1/2  min-h-[600px] flex justify-center`}
    >
      <div className='h-full flex flex-col justify-end items-center pt-[90%] md:pt-0 pb-[60px] px-6 '>
        <h3 className='text-blue-100 opacity-70 font-black text-[28px] font-fraunces mb-[27px] text-center'>
          {title}
        </h3>
        <p className='text-blue-100 opacity-80 font-semibold text-base leading-[27px] text-center'>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
