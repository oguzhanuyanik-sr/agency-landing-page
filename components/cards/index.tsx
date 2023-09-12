import React from 'react';
import { doubleCard } from '@/app/api/response.json';
import Card from '../common/card';

type Props = {};

const Cards = (props: Props) => {
  return (
    <section className='flex flex-wrap md:flex-none w-full'>
      {doubleCard.map((data, index) => (
        <Card key={index} data={data} index={index} />
      ))}
    </section>
  );
};

export default Cards;
