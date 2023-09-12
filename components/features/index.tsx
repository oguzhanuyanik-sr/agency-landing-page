import React from 'react';
import DoubleFeature from '../common/double-feature';
import { featureData } from '@/app/api/response.json';

type Props = {};

const Features = (props: Props) => {
  return (
    <div>
      {featureData.map((item, index) => {
        return <DoubleFeature key={index} data={item} index={index} />;
      })}
    </div>
  );
};

export default Features;
