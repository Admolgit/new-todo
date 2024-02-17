import React, { ReactElement, useReducer } from "react";
import "./App.css";
import SetTimer from "./SetTimer";
import { reducer } from "./store/Reducers";

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

function App(): ReactElement<State> {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    dispatch({
      type: "setCount",
      value: state.count + 1,
    });
  };

  const handleMinus = () => {
    if (state.count < 1) return;

    dispatch({
      type: "removeCount",
      value: state.count - 1,
    });
  };

  const handleReset = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <div className="App">
      {/* <div>
        <h1>This is a Button</h1>
        <CreateButton title="Create Button" />
      </div> */}
      <div style={{marginBottom: "2rem"}}>
        <h1>This is a Counter App</h1>
        <p>{state.count}</p>
        <div>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleMinus}>Minus</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <SetTimer />
    </div>
  );
}

export default App;
