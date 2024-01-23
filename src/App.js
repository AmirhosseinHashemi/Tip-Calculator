export default function App() {
  return (
    <>
      <h1>splitter</h1>
      <main>
        <Form />
      </main>
    </>
  );
}

function Form() {
  return (
    <form className="form" id="form">
      <div className="form__bill" aria-label="bill">
        <label className="form__label" htmlFor="bill">
          Bill
        </label>
        <input type="text" name="bill" id="bill" placeholder="0" />
      </div>

      <div className="form__tips" aria-label="tips">
        <h2 className="form__label">Select Tip %</h2>
        <button className="form__tip" type="button">
          5%
        </button>
        <button className="form__tip" type="button">
          10%
        </button>
        <button className="form__tip selected" type="button">
          15%
        </button>
        <button className="form__tip" type="button">
          25%
        </button>
        <button className="form__tip" type="button">
          50%
        </button>
        <label htmlFor="custom-tip">
          <input
            type="text"
            name="custom"
            id="custom-tip"
            placeholder="Custom"
          />
        </label>
      </div>

      <div className="form__people" aria-label="people">
        <label className="form__label" htmlFor="people">
          Number of People
        </label>
        <input type="text" name="people" id="people" placeholder="0" />
      </div>
    </form>
  );
}
