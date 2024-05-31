import { useReducer } from 'react';

export const useIrreversibleFlag = (base: boolean = false) => {
  return useReducer(() => !base, base);
};
