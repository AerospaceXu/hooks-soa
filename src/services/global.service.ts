import { createContext, useCallback, useContext, useState } from 'react';

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

export const useGlobalService = () => useContext(GlobalService);

// @ts-ignore
export const GlobalService = createContext<State>(null);
