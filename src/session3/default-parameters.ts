export {};

// デフォルトパラメーター、デフォルト引数。今回の場合、第二引数を指定しなければrateに1.1が採用される。
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05)); //1050