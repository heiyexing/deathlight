import { useState } from 'react';

const useGlobal = () => {
  const [isPaused, setIsPaused] = useState(false);

  return {
    isPaused,
    setIsPaused,
  };
};

export default useGlobal;
