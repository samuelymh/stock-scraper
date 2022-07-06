import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000)
  }, []);

  return (
    <div className='transition ease-in-out hover:scale-110 p-1 my-auto w-1/4 rounded-md'>
      {time}
    </div>
  );
}