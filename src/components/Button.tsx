import React from 'react';
import { useGlobalService } from '../services/global.service';

const Button: React.FC = () => {
  const { handleAdd } = useGlobalService();
  return <button onClick={() => handleAdd()}>+</button>;
};

export default Button;
