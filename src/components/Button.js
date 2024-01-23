export default function Button({ children, onClick, tip }) {
  return (
    <button
      onClick={(e) => onClick(e.target.innerText)}
      className={`form__tip ${String(tip) === children ? "selected" : ""}`}
      type="button"
    >
      {children}%
    </button>
  );
}
