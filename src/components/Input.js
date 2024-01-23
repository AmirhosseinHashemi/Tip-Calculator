export default function Input({ name, children }) {
  return (
    <div className={`form__${name}`} aria-label={name}>
      <label className="form__label" htmlFor={name}>
        {children}
      </label>
      <input type="text" name={name} id={name} placeholder="0" />
    </div>
  );
}
