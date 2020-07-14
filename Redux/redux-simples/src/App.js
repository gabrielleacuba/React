import React , {useState} from 'react';

import './App.css';

import Intervalo from './Components/Intervalo'
import Media from './Components/Media'
import Soma from './Components/Soma'
import Sorteio from './Components/Sorteio'

function App() {

  return (
    <div className = 'App'>
      <h1>Exercício React-Redux</h1>
      <div className = 'linha'> 
        <Intervalo> </Intervalo>
      </div>
      <div className = 'linha'>
        <Media   ></Media>
        <Soma    ></Soma>
        <Sorteio ></Sorteio>
      </div>
    </div>
  );
}

export default App;
