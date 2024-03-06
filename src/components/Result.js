import ResultRow from "./ResultRow";

export default function Result({ amount, total, dispatch }) {
  return (
    <section className="result">
      <ResultRow value={amount}>Tip Amount</ResultRow>
      <ResultRow value={total}>Total</ResultRow>

      <button
        onClick={() => dispatch({ type: "reset" })}
        className="result__reset"
        type="button"
      >
        Reset
      </button>
    </section>
  );
}
