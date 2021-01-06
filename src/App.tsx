import React from 'react';
import './App.css';

import { GlobalService, useRootGlobalService } from './services/global.service';

import Button from './components/Button';
import Panel from './components/Panel';

function App() {
  return (
    <GlobalService.Provider value={useRootGlobalService()}>
      <div className="App">
        <Button />
        <Panel />
      </div>
    </GlobalService.Provider>
  );
}

export default App;
