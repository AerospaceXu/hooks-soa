import React from 'react';
import { useGlobalService } from '../services/global.service';

const Panel: React.FC = () => {
  const { count } = useGlobalService();
  return <h2>{count}</h2>;
};

export default Panel;
