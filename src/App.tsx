import { useState } from "react";

function App() {
  const [lossType, setLossType] = useState<number>(0);
  const [firstNumbers, setFirstNumbers] = useState<number[]>([]);
  const [secondNumbers, setSecondNumbers] = useState<number[]>([]);

  const getNumbers = (max: number, count: number) => {
    let numbers: number[] = [];
    let turn: number = 0;
    while (turn < count) {
      let generatedNumber: number = Math.floor(Math.random() * max + 1);
      if (numbers.indexOf(generatedNumber) !== -1) continue;
      numbers.push(generatedNumber);
      turn++;
    }
    return numbers.sort((a, b) => a - b);
  };

  const handleClick = () => {
    setFirstNumbers(getNumbers(lossType === 1 ? 42 : 50, 5));
    setSecondNumbers(lossType === 1 ? [] : getNumbers(12, 2));
  };

  const handleSwitchLossType = () => {
    setLossType((prev) => (!prev ? prev + 1 : 0));
  };

  return (
    <>
      <h1>Losowanie:</h1>
      <button onClick={handleSwitchLossType}>
        Typ losowania: {lossType ? "Mini Lotto" : "Euro Jackpot"}
      </button>
      <section>
        {firstNumbers.map((el: number, index: number) => (
          <article key={index}>{el}</article>
        ))}
      </section>
      <section>
        {secondNumbers.map((el: number, index: number) => (
          <article key={index} className="secondary">
            {el}
          </article>
        ))}
      </section>
      <button onClick={handleClick}>
        Losuj{firstNumbers.length > 0 && " ponownie"}
      </button>
    </>
  );
}

export default App;
