import Button from "./Button";
import Input from "./Input";

export default function Form({
  bill,
  onBill,
  people,
  onPeople,
  onTip,
  tip,
  customTip,
  onCustomTip,
}) {
  return (
    <form className="form" id="form">
      <Input name="bill" bill={bill} handleBill={onBill}>
        Bill
      </Input>

      <div className="form__tips" aria-label="tips">
        <h2 className="form__label">Select Tip %</h2>

        <Button tip={tip} onClick={onTip}>
          5
        </Button>
        <Button tip={tip} onClick={onTip}>
          10
        </Button>
        <Button tip={tip} onClick={onTip}>
          15
        </Button>
        <Button tip={tip} onClick={onTip}>
          25
        </Button>
        <Button tip={tip} onClick={onTip}>
          50
        </Button>

        <label htmlFor="custom-tip">
          <input
            type="text"
            name="custom"
            id="custom-tip"
            placeholder="Custom"
            value={customTip}
            onChange={(e) => onCustomTip(+e.target.value)}
          />
        </label>
      </div>

      <Input name="people" people={people} handlePeople={onPeople}>
        Number of People
      </Input>
    </form>
  );
}
