export default function ResultRow({ children }) {
  return (
    <div className="result__row" aria-label={children}>
      <p className="result__title">
        {children} <span>/ person</span>
      </p>
      <p className="result__value">0</p>
    </div>
  );
}
