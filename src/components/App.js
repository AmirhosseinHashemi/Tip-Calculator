import { CalcProvider } from "./CalcContext";
import Form from "./Form";
import Result from "./Result";

export default function App() {
  return (
    <>
      <h1>splitter</h1>
      <main>
        <CalcProvider>
          <Form />
          <Result />
        </CalcProvider>
      </main>
    </>
  );
}
