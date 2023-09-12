import React from 'react';
import { doubleCard } from '@/app/api/response.json';
import Card from '../common/card';

const Cards = () => {
  return (
    <section className='flex flex-wrap md:flex-none w-full'>
      {doubleCard.map((data, index) => (
        <Card key={index} data={data} index={index} />
      ))}
    </section>
  );
};

export default Cards;
