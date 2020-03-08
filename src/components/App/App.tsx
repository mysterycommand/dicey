import React, { FC } from 'react';

import './App.css';

export const App: FC = () => (
  <div className="App">
    <div className="App-controls">
      <ul className="App-dice">
        <li>
          <button>d20</button>
        </li>
        <li>
          <button>d12</button>
        </li>
        <li>
          <button>d10</button>
        </li>
        <li>
          <button>d8</button>
        </li>
        <li>
          <button>d6</button>
        </li>
        <li>
          <button>d4</button>
        </li>
      </ul>
      <button>clear</button>
    </div>
  </div>
);
