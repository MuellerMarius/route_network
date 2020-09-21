import React from 'react';
import MainContainer from './components/MainContainer';
import { GlobalProvider } from './context/GlobalState';

const App = () => (
  <GlobalProvider>
    <MainContainer />
  </GlobalProvider>
);

export default App;
