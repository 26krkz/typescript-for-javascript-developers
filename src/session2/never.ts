export {};

function error(message: string): never {
  throw new Error(message);
}
// this function never return 呼び戻しが起きない

try {
  let result = error('test');
  console.log({result})
} catch (error) {
  console.log({ error })
}

let foo: void = undefined;
// let bar: never = undefined; // never型には値を代入することができない。undefinedでもnullでも値になるのでだめ。
let bar: never = error('only me');