type State = {
  count: number;
};

type CounterActions =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }
  | { type: "removeCount"; value: State["count"] };

const initialState: State = {
  count: 0,
};

export const reducer = (state: State, action: CounterActions) => {
  switch (action.type) {
    case "setCount":
      return { ...state, count: action.value };
    case "removeCount":
      return { ...state, count: action.value };
    case "reset":
      return initialState;
  }
};