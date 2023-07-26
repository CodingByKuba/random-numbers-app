import { useCallback, useState } from "react";

function App() {
  const [firstNumbers, setFirstNumbers] = useState<number[]>([]);
  const [secondNumbers, setSecondNumbers] = useState<number[]>([]);

  const getNumbers = useCallback(
    (max: number, count: number) => {
      let numbers: number[] = [];
      let turn: number = 0;
      while (turn < count) {
        let generatedNumber: number = Math.floor(Math.random() * max + 1);
        if (numbers.indexOf(generatedNumber) !== -1) continue;
        numbers.push(generatedNumber);
        turn++;
      }
      return numbers.sort((a, b) => a - b);
    },
    [firstNumbers, secondNumbers]
  );

  const handleClick = useCallback(() => {
    setFirstNumbers(getNumbers(50, 5));
    setSecondNumbers(getNumbers(12, 2));
  }, [firstNumbers, secondNumbers]);

  return (
    <>
      <h1>Losowanie:</h1>
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
