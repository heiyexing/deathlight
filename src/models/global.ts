import { useLocalStorageState } from 'ahooks';
import { useState } from 'react';

const useGlobal = () => {
  const [totalRecallTime, setTotalRecallTime] = useLocalStorageState(
    'totalRecallTime',
    {
      defaultValue: 30 * 1000,
    },
  );

  const [recallTime, setRecallTime] = useLocalStorageState('recallTime', {
    defaultValue: totalRecallTime,
  });

  const [totalPauseTime, setTotalPauseTime] = useLocalStorageState(
    'totalPauseTime',
    {
      defaultValue: 60 * 1000,
    },
  );

  const [pauseTime, setPauseTime] = useLocalStorageState('pauseTime', {
    defaultValue: totalPauseTime,
  });

  const [isPaused, setIsPaused] = useState(false);

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
