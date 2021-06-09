export {};

// 無名関数の場合は代入した変数にも型定義ができる。大体は型推論で正解。
let bmi: (height: number, weight: number) => number = function(height: number, weight: number):number {
  return weight / (height * height);
};

console.log(bmi(1.78, 86)); // 27.14