export default function Button({ children, onClick }) {
  return (
    <button
      onClick={(e) => onClick(e.target.innerText)}
      className="form__tip"
      type="button"
    >
      {children}
    </button>
  );
}
