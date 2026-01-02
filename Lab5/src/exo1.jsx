import { useState } from "react";

export function ClickButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(!clicked)}>ClickMe</button>
      <p>{clicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}
