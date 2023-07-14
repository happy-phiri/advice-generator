import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = useCallback(async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
  }, []);

  useEffect(() => {
    getAdvice();
  }, [getAdvice]);

  const generateNewAdvice = () => {
    return getAdvice();
  };

  return (
    <div className="app">
      <Card advice={advice} generateNewAdvice={generateNewAdvice} />
    </div>
  );
}

export default App;
