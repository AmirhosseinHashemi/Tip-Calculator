import { useState } from "react";
import Form from "./Form";
import Result from "./Result";

export default function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  function handleBill(value) {
    setBill(value);
  }

  function handlePeople(value) {
    setPeople(value);
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
        />
        <Result />
      </main>
    </>
  );
}