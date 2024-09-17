import { useState } from 'react';
import './App.css';
import { isNumberInFibonacci } from './utils/fibonacci';

export function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [sequence, setSequence] = useState<number[]>([])

  const handleCheckFibonacci = () => {
    const number = parseInt(inputValue)
    
    if (isNaN(number) || number < 0) {
      setResult('Por favor, insira um número válido e não negativo.')
      setSequence([])
      return;
    }
    
    const { isInSequence, sequence } = isNumberInFibonacci(number)
    setSequence(sequence)
    setResult(isInSequence 
      ? `O número ${number} pertence à sequência de Fibonacci.` 
      : `O número ${number} não pertence à sequência de Fibonacci.`
    );
  };

  return (
    <div>
      <h1>Fibonacci</h1>
      <p>Verificar número na sequência de Fibonacci</p>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Informe um número"
      />
      <button onClick={handleCheckFibonacci}>Verificar</button>
      <h4>{result}</h4>
      {sequence.length > 0 && (
        <div>
          <h4>Sequência de Fibonacci até o número informado:</h4>
          <p>{sequence.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

