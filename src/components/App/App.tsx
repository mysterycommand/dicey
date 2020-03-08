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

/**
 * MVP:
 * 1. click a "d" button and see a value immediately
 * 2. click a "d" button again and see like: "1 + 2 = 3"
 * 3. click a "clear" button and clear all values
 * 4. double-click a "d" button and do 3. then 1.
 *
 * Nice to have:
 * 5. click a "reroll" button and reroll the existing set
 * 6. click a "save" button and store dice sets under a name (e.g. "battleaxe")
 *
 * Someday:
 * 7. multiple users in the same "room" see the same output
 * 8. turn order/initiative
 * 9. "advantage"?
 */

export const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1 className="App-value">{state}</h1>
      <div className="App-controls">
        <ul className="App-dice">
          {[20, 12, 10, 8, 6, 4].map(sides => (
            <li key={`d${sides}`} className="App-die">
              <button
                className="App-d-button"
                onClick={() => dispatch({ type: 'roll', sides })}
              >
                d{sides}
              </button>
            </li>
          ))}
        </ul>
        <button className="App-clear-button">clear</button>
      </div>
    </div>
  );
};
