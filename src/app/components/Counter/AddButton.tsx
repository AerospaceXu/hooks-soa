import React from 'react';

interface Props {
  onAdd: () => void;
}

const AddButton: React.FC<Props> = ({ onAdd }) => {
  console.log('重新执行');

  return <button onClick={() => onAdd()}>+</button>;
};

export default AddButton;
