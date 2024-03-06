import { useCalc, useDispatchCalc } from "./CalcContext";
import ResultRow from "./ResultRow";

export default function Result() {
  const { amount, total } = useCalc();
  const dispatch = useDispatchCalc();

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
