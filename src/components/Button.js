import { useCalc, useDispatchCalc } from "./CalcContext";

export default function Button({ children }) {
  const { tip } = useCalc();
  const { dispatch } = useDispatchCalc();

  return (
    <button
      onClick={(e) => dispatch({ type: "setTip", payload: e.target.innerText })}
      className={`form__tip ${String(tip) === children ? "selected" : ""}`}
      type="button"
    >
      {children}%
    </button>
  );
}
