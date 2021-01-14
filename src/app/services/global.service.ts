import { useCallback, useState } from 'react';

import { createService } from '../utils/createService';

interface State {
  count: number;
  handleAdd: () => void
}

export const useRootGlobalService = () => {
  const [count, setCount] = useState<number>(0);
  const handleAdd = useCallback(() => {
    setCount(n => n + 1);
  }, []);

  return {
    count,
    handleAdd
  };
};

export const GlobalService = createService<State>();
