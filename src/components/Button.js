export default function Button({ tip, children, dispatch }) {
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
