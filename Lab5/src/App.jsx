import { ClickButton, Counter } from "./exo1";
import DisplayTab from "./exo2";
import AuthForm from "./exo3";
import DynamicDiv from "./exo4";

export default function App() {
  const table1 = ["hello", "world", "from", "react"];
  const table2 = ["one", "two", "three"];

  return (
    <div>
      <h2>Exercise 1</h2>
      <ClickButton />
      <Counter />

      <h2>Exercise 2</h2>
      <DisplayTab items={table1} />
      <DisplayTab items={table2} />

      <h2>Exercise 3</h2>
      <AuthForm />

      <h2>Exercise 4</h2>
      <DynamicDiv />
    </div>
  );
}
