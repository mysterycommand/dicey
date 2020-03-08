import React, { FC, useReducer } from 'react';

import './App.css';

const { floor, random } = Math;
const roll = (sides: number) => floor(random() * sides) + 1;
const actions = {
  roll,
};

const initialState = 0;
const reducer = (state: {}, { type, sides }: { type: 'roll'; sides: number }) =>
  actions[type] ? actions[type](sides) : state;

export const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="App-value">{state}</div>
      <div className="App-controls">
        <ul className="App-dice">
          {[20, 12, 10, 8, 6, 4].map(sides => (
            <li>
              <button onClick={() => dispatch({ type: 'roll', sides })}>
                d{sides}
              </button>
            </li>
          ))}
        </ul>
        <button>clear</button>
      </div>
    </div>
  );
};
