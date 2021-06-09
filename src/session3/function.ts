export {};

// returnが計算したbmiだからfunctionの型もnumber
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86)); // 27.14