import React from 'react';
import styled from 'styled-components';

import {
  GlobalService,
  useRootGlobalService,
} from './app/services/global.service';

import Counter from './app/components/Counter';
import Animate from './app/components/Animate/Animate';

const Wrapper = styled.div`
  width: 200px;
  margin: 88px auto;
`;

const App: React.FC = () => {
  return (
    <GlobalService.Provider value={useRootGlobalService()}>
      <Wrapper>
        <Counter />
        <Animate />
      </Wrapper>
    </GlobalService.Provider>
  );
};

export default App;
