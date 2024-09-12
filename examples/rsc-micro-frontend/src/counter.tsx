"use client";

import { useState } from "react";

export default function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
