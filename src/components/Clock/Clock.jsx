import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000)
  }, []);

  return (
    <div className='border-4 border-[#7f5af0] p-1 my-auto w-1/4 rounded-md'>
      {time}
    </div>
  );
}