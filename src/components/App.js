import { useReducer } from "react";
import Form from "./Form";
import Result from "./Result";

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

export default function App() {
  const [{ bill, people, tip, customTip }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const percent = tip || customTip;
  const amount = percent && people ? (bill * percent) / 100 : 0;
  const total = people ? amount * people : 0;

  return (
    <>
      <h1>splitter</h1>
      <main>
        <Form
          bill={bill}
          people={people}
          tip={tip}
          customTip={customTip}
          dispatch={dispatch}
        />
        <Result dispatch={dispatch} total={total} amount={amount} />
      </main>
    </>
  );
}
