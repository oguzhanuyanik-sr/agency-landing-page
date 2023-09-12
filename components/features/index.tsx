import React from 'react';
import DoubleFeature from '../common/double-feature';
import { featureData } from '@/app/api/response.json';

const Features = () => {
  return (
    <div>
      {featureData.map((item, index) => {
        return <DoubleFeature key={index} data={item} index={index} />;
      })}
    </div>
  );
};

export default Features;
