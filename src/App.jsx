import React from 'react';
import './App.scss';
import {Header} from './componets/Header/Header'
import { Main } from './componets/Main/Main';
import {Footer} from './componets/Footer/Footer'

function App() {

  return (
    <div className="App page">
      <Header/>
      <Main/>
      <Footer/>
    </div >
  );
}

export default App;
