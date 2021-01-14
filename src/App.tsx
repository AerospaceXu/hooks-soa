import React from 'react';
import styled from 'styled-components';

import {
  GlobalService,
  useRootGlobalService,
} from './app/services/global.service';

import Button from './app/components/Button';
import Panel from './app/components/Panel';
import Animate from './app/components/Animate/Animate';

const Wrapper = styled.div`
  width: 200px;
  margin: 88px auto;

  > .counter {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const App: React.FC = () => {
  return (
    <GlobalService.Provider value={useRootGlobalService()}>
      <Wrapper>
        <div className="counter">
          <Button />
          <Panel />
        </div>
        <Animate />
      </Wrapper>
    </GlobalService.Provider>
  );
};

export default App;
