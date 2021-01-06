import { createContext } from 'react';

export function createService<T>() {
  // @ts-ignore
  return createContext<T>(null);
}
