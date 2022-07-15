import React from 'react';
import './App.css';
import { CurrentWeather } from './components/CurrentWeather';
import { ApiContextProvider } from './context/ApiContext';
import { ListDays } from './components/ListDays';
import { NextHours } from './components/NextHours';

function App() {
  return (
    <ApiContextProvider>
      <div className="ContainerGeneral">
        <CurrentWeather />
        <div className="ContainerGeneral__box">
          <NextHours />
          <ListDays />
        </div>
      </div>
    </ApiContextProvider>
  );
}

export default App;
