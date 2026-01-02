import { useState } from "react";

export default function DynamicDiv() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Width (e.g. 200px)"
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          placeholder="Height (e.g. 100px)"
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          placeholder="Color (e.g. red)"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {show && (
        <div
          style={{
            width,
            height,
            backgroundColor: color,
            marginTop: "10px",
          }}
        />
      )}
    </div>
  );
}
