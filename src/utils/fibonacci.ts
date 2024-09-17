export function generateFibonacciSequence(limit: number): number[] {
  const sequence = [0, 1]
  while (true) {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    if (next > limit) break
    sequence.push(next)
  }
  return sequence;
}
export function isNumberInFibonacci(number: number): { isInSequence: boolean; sequence: number[] } {
  const sequence = generateFibonacciSequence(number)
  const isInSequence = sequence.includes(number)
  
  return {
    isInSequence,
    sequence
  };
}
