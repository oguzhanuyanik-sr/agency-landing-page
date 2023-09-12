import Link from 'next/link';
import React from 'react';

type Props = {};

const styles = {
  yellow: 'bg-yellow-100',
  red: 'bg-red-100',
};

const Button = ({ url, color }: Props) => {
  return (
    <Link
      href={url}
      className='font-fraunces text-[15px] font-black leading-[25px] relative learn-button whitespace-nowrap mt-8 md:mt-10'
    >
      LEARN MORE
      <div
        className={`${styles[color]} cool-underscore opacity-50 transition-all`}
      ></div>
    </Link>
  );
};

export default Button;
