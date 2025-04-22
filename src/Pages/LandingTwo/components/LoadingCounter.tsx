import { useEffect, useState } from 'react';

const LoadingCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : prev));
    }, 50); // 5000ms / 100 counts = 50ms per count

    const timer = setTimeout(() => clearInterval(interval), 5000); // 5000ms timer

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <h1 className="text-4xl font-bold">
        {count < 10 ? `0${count}` : count}%
      </h1>
    </div>
  );
};

export default LoadingCounter;