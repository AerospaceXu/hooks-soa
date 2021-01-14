import React from 'react';
import styled from 'styled-components';

import Button from './AddButton';
import Panel from './Panel';

import { useCounter } from './hooks/useCounter';

const Wrapper = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Counter: React.FC = () => {
  const { count, handleAdd } = useCounter();

  return (
    <Wrapper>
      <Button onAdd={() => handleAdd()} />
      <Panel count={count} />
    </Wrapper>
  );
};

export default Counter;
