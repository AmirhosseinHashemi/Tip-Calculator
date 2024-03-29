import { useState } from "react";
import Form from "./Form";
import Result from "./Result";

export default function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");

  const percent = tip || customTip;
  const amount = percent && people ? (Number(bill) * percent) / 100 : 0;
  const total = people ? amount * people : 0;

  function handleBill(value) {
    setBill(value);
  }

  function handlePeople(value) {
    setPeople(value);
  }

  function handleTip(value) {
    setTip(+value.slice(0, -1));
    setCustomTip("");
  }

  function handleCustomTip(value) {
    setCustomTip(value);
    setTip(0);
  }

  function handleReset() {
    setBill("");
    setPeople("");
    setCustomTip("");
    setTip(0);
  }

  return (
    <>
      <h1>splitter</h1>
      <main>
        <Form
          bill={bill}
          onBill={handleBill}
          onPeople={handlePeople}
          people={people}
          onTip={handleTip}
          tip={tip}
          customTip={customTip}
          onCustomTip={handleCustomTip}
        />
        <Result onReset={handleReset} total={total} amount={amount} />
      </main>
    </>
  );
}
