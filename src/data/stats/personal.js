import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1980-02-05T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 1,
    link:
      'https://www.google.com/maps/place/Alg%C3%A9rie/@27.8188023,-7.3606363,5z/data=!3m1!4b1!4m5!3m4!1s0xd7e8a6a28037bd1:0x7140bee3abd7f8a2!8m2!3d28.033886!4d1.659626',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Tunisia , TN',
  },
];

export default data;
