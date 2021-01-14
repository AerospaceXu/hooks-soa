import { useCallback, useContext } from 'react';

import { GlobalService } from '../../../services/global.service';

export const useCounter = () => {
  const globalService = useContext(GlobalService);

  const handleAdd = useCallback(() => {
    globalService.handleAdd();
  }, [globalService]);

  return { handleAdd, count: globalService.count };
};
