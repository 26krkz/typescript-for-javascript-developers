export {};

// 引数や戻り値に型定義、アノテーションすることができる。
let bmi: (height: number, weight: number) => number = (height: number, weight: number):number => weight / (height * height);

console.log(bmi(1.78, 86));