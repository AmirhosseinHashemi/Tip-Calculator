import ResultRow from "./ResultRow";

export default function Result() {
  return (
    <section className="result">
      <ResultRow>Tip Amount</ResultRow>
      <ResultRow>Total</ResultRow>

      <button className="result__reset" type="button">
        Reset
      </button>
    </section>
  );
}
