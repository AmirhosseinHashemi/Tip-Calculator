import { createContext, useContext, useReducer } from "react";

// state managment
const initialState = {
  bill: "",
  people: "",
  tip: "",
  customTip: "",
};

const reducer = function (state, action) {
  switch (action.type) {
    case "setBill":
      return {
        ...state,
        bill: action.payload,
      };

    case "setPeople":
      return {
        ...state,
        people: action.payload,
      };

    case "setTip":
      return {
        ...state,
        tip: Number(action.payload.slice(0, -1)),
        customTip: "",
      };

    case "setCustomTip":
      return {
        ...state,
        customTip: action.payload,
        tip: "",
      };

    case "reset":
      return {
        bill: "",
        people: "",
        tip: "",
        customTip: "",
      };

    default:
      throw new Error("Action type not defined");
  }
};

// context
const CalcContext = createContext(null);
const CalcDispatchContext = createContext(null);

function CalcProvider({ children }) {
  const [{ bill, people, tip, customTip }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const percent = tip || customTip;
  const amount = percent && people ? (bill * percent) / 100 : 0;
  const total = people ? amount * people : 0;

  return (
    <CalcContext.Provider
      value={{
        bill,
        people,
        tip,
        customTip,
        amount,
        total,
      }}
    >
      <CalcDispatchContext.Provider value={dispatch}>
        {children}
      </CalcDispatchContext.Provider>
    </CalcContext.Provider>
  );
}

// custom hooks
function useCalc() {
  return useContext(CalcContext);
}

function useDispatchCalc() {
  return useContext(CalcDispatchContext);
}

export {
  CalcContext,
  CalcDispatchContext,
  CalcProvider,
  useCalc,
  useDispatchCalc,
};
