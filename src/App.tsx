import React from 'react';
import './App.css';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar } from './modules/Navbar/components/Navbar';
import { Main } from './modules/Main/components/Main';
import { Login } from './modules/Login/components/Login';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Login />
      </Main>
    </>
  );
}

export default App;
