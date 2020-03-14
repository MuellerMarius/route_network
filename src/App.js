import React from "react";
import MainContainer from "./components/MainContainer";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <MainContainer />
    </GlobalProvider>
  );
}

export default App;
