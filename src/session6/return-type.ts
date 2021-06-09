export {};

function add (a: number, b: number) {
  return a + b;
}

console.log(add(1, 2)); // 3


// 関数の戻り値を返してくれる型。ここでは関数の戻り値がnumberだからnumber型となる。
type ReturnTypeFromAdd = ReturnType<typeof add>;