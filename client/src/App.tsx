import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black">
      <h1 className="text-red-300">Github Finder</h1>
    </div>
  );
}

export default App;
