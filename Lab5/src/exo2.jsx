import { useState } from "react";

export default function DisplayTab({ items }) {
  const [list, setList] = useState(items);

  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li
          key={index}
          onClick={() => removeItem(index)}
          style={{ cursor: "pointer" }}
        >
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}
