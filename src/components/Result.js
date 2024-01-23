import ResultRow from "./ResultRow";

export default function Result({ amount, total }) {
  return (
    <section className="result">
      <ResultRow value={amount}>Tip Amount</ResultRow>
      <ResultRow value={total}>Total</ResultRow>

      <button className="result__reset" type="button">
        Reset
      </button>
    </section>
  );
}
