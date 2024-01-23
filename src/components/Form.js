import Button from "./Button";
import Input from "./Input";

export default function Form() {
  return (
    <form className="form" id="form">
      <Input name="bill">Bill</Input>

      <div className="form__tips" aria-label="tips">
        <h2 className="form__label">Select Tip %</h2>

        <Button>5%</Button>
        <Button>10%</Button>
        <Button>15%</Button>
        <Button>25%</Button>
        <Button>50%</Button>

        <label htmlFor="custom-tip">
          <input
            type="text"
            name="custom"
            id="custom-tip"
            placeholder="Custom"
          />
        </label>
      </div>

      <Input name="people">Number of People</Input>
    </form>
  );
}
