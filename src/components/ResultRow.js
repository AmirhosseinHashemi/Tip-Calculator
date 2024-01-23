export default function ResultRow({ children, value }) {
  return (
    <div className="result__row" aria-label={children}>
      <p className="result__title">
        {children} <span>/ person</span>
      </p>
      <p className="result__value">{value}</p>
    </div>
  );
}
