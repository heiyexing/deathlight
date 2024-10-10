import { useLocalStorageState } from 'ahooks';
import { useEffect, useRef, useState } from 'react';

const useGlobal = () => {
  const [totalRecallTime, setTotalRecallTime] = useLocalStorageState(
    'totalRecallTime',
    {
      defaultValue: 30 * 60 * 1000,
    },
  );

  const [recallTime, setRecallTime] = useLocalStorageState('recallTime', {
    defaultValue: totalRecallTime,
  });

  const [totalPauseTime, setTotalPauseTime] = useLocalStorageState(
    'totalPauseTime',
    {
      defaultValue: 60 * 60 * 1000,
    },
  );

  const [pauseTime, setPauseTime] = useLocalStorageState('pauseTime', {
    defaultValue: totalPauseTime,
  });

  const [isPaused, setIsPaused] = useState(false);

  const intervelRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) {
      intervelRef.current = setInterval(() => {
        setPauseTime((pauseTime) => {
          const newPauseTime = (pauseTime ?? 0) - 1000;
          return newPauseTime < 0 ? 0 : newPauseTime;
        });
      }, 1000) as unknown as number;
    } else {
      if (intervelRef.current) {
        clearInterval(intervelRef.current);
        intervelRef.current = null;
      }
    }
  }, [isPaused]);

  return {
    isPaused,
    setIsPaused,
    totalPauseTime,
    setTotalPauseTime,
    totalRecallTime,
    setTotalRecallTime,
    recallTime,
    setRecallTime,
    pauseTime,
    setPauseTime,
  };
};

export default useGlobal;
