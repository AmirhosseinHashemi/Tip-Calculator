export default function App() {
  return (
    <>
      <h1>splitter</h1>
      <main>
        <Form />
        <Result />
      </main>
    </>
  );
}

function Form() {
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

function Result() {
  return (
    <section className="result">
      <div className="result__row" aria-label="tip amount">
        <p className="result__title">
          Tip Amount <span>/ person</span>
        </p>
        <p className="result__value">0</p>
      </div>

      <div className="result__row" aria-label="total">
        <p className="result__title">
          Total <span>/ person</span>
        </p>
        <p className="result__value">0</p>
      </div>

      <button className="result__reset" type="button">
        Reset
      </button>
    </section>
  );
}

function Input({ name, children }) {
  return (
    <div className={`form__${name}`} aria-label={name}>
      <label className="form__label" htmlFor={name}>
        {children}
      </label>
      <input type="text" name={name} id={name} placeholder="0" />
    </div>
  );
}

function Button({ children }) {
  return (
    <button className="form__tip" type="button">
      {children}
    </button>
  );
}
