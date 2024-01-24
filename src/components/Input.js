export default function Input({
  name,
  children,
  bill,
  handleBill,
  people,
  handlePeople,
}) {
  return (
    <div className={`form__${name}`} aria-label={name}>
      <label className="form__label" htmlFor={name}>
        {children}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder="0"
        value={name === "people" ? people : bill}
        onChange={(e) =>
          name === "bill"
            ? handleBill(e.target.value)
            : handlePeople(+e.target.value)
        }
      />
    </div>
  );
}
