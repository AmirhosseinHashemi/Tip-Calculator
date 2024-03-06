import Button from "./Button";
import Input from "./Input";

export default function Form({ bill, people, tip, customTip, dispatch }) {
  return (
    <form className="form" id="form">
      <Input name="bill" bill={bill} dispatch={dispatch}>
        Bill
      </Input>

      <div className="form__tips" aria-label="tips">
        <h2 className="form__label">Select Tip %</h2>

        <Button tip={tip} dispatch={dispatch}>
          5
        </Button>
        <Button tip={tip} dispatch={dispatch}>
          10
        </Button>
        <Button tip={tip} dispatch={dispatch}>
          15
        </Button>
        <Button tip={tip} dispatch={dispatch}>
          25
        </Button>
        <Button tip={tip} dispatch={dispatch}>
          50
        </Button>

        <label htmlFor="custom-tip">
          <input
            type="text"
            name="custom"
            id="custom-tip"
            placeholder="Custom"
            value={customTip}
            onChange={(e) =>
              dispatch({
                type: "setCustomTip",
                payload: Number(e.target.value),
              })
            }
          />
        </label>
      </div>

      <Input name="people" people={people} dispatch={dispatch}>
        Number of People
      </Input>
    </form>
  );
}
