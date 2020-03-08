import React, { FC, useReducer, Reducer } from 'react';

import './App.css';

type AppState = {
  rolls: number[];
  total: number;
};

type AppAction = {
  type: string;
  payload?: any;
};

const { floor, random } = Math;
const rollDie = (sides: number) => floor(random() * sides) + 1;
const totalRolls = (rolls: number[]) =>
  rolls.reduce((acc, roll) => acc + roll, 0);

const roll = (state: AppState, payload: number) =>
  total({
    ...state,
    rolls: [...state.rolls, rollDie(payload)],
  });

const total = (state: AppState) => ({
  ...state,
  total: totalRolls(state.rolls),
});

const clear = () => ({
  rolls: [],
  total: 0,
});

const actions: {
  [action: string]: (state: AppState, payload?: any) => AppState;
} = {
  roll,
  clear,
};

const reducer: Reducer<AppState, AppAction> = (state, { type, payload }) =>
  actions[type] ? actions[type](state, payload) : state;

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
  const [state, dispatch] = useReducer(reducer, clear());

  return (
    <div className="App">
      <h1 className="App-value">
        {state.rolls.length > 1
          ? `${state.rolls.join(' + ')} = ${state.total}`
          : state.total}
      </h1>
      <div className="App-controls">
        <ul className="App-dice">
          {[20, 12, 10, 8, 6, 4].map(sides => (
            <li key={`d${sides}`} className="App-die">
              <button
                className="App-d-button"
                onClick={() => dispatch({ type: 'roll', payload: sides })}
              >
                d{sides}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="App-clear-button"
          onClick={() => dispatch({ type: 'clear' })}
        >
          clear
        </button>
      </div>
    </div>
  );
};
