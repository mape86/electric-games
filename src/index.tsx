import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CharacterProvider from './contexts/CharacterContext';
import GameProvider from './contexts/GameContext';
import GameConsoleProvider from './contexts/GameConsoleContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameConsoleProvider>
      <GameProvider>
        <CharacterProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CharacterProvider>
      </GameProvider>
    </GameConsoleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
