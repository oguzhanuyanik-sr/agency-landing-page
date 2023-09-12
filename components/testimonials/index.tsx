import React from 'react';
import { testimonials } from '@/app/api/response.json';
import Comment from '../common/comment';

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className='w-full flex flex-col items-center justify-center my-16 md:my-40 md:px-0'>
      <h5 className='w-full text-center text-base font-black font-fraunces tracking-[4px] text-grey-200 md:text-[20px] md:tracking-[5px] mb-[60px] md:mb-[80px]'>
        CLIENT TESTIMONIALS
      </h5>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6'>
        {testimonials.map((data, index) => (
          <Comment key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
