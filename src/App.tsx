import React from 'react';
import styled from 'styled-components';

import {
  GlobalService,
  useRootGlobalService
} from './app/services/global.service';

import Button from './app/components/Button';
import Panel from './app/components/Panel';

const Wrapper = styled.div`
  width: 200px;
  margin: 88px auto;
`;

const App: React.FC = () => {
  return (
    <GlobalService.Provider value={useRootGlobalService()}>
      <Wrapper>
        <Button />
        <Panel />
      </Wrapper>
    </GlobalService.Provider>
  );
};

export default App;
