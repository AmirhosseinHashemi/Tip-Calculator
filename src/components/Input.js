import { useCalc, useDispatchCalc } from "./CalcContext";

export default function Input({ children, name }) {
  const { bill, people } = useCalc();
  const { dispatch } = useDispatchCalc();

  return (
    <div className={`form__${name}`} aria-label={name}>
      <label className="form__label" htmlFor={name}>
        {children}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder="0"
        value={name === "people" ? people : bill}
        onChange={(e) =>
          name === "bill"
            ? dispatch({ type: "setBill", payload: Number(e.target.value) })
            : dispatch({ type: "setPeople", payload: Number(e.target.value) })
        }
      />
    </div>
  );
}
