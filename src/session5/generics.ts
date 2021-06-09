export {};

// const echo = (arg: number):number => {
//   return arg;
// }

// const echo = (arg: string):string => {
//   return arg;
// }

// ジェネリクス関数 <>は抽象的な型を宣言する。Tを型引数とよぶ。ジェネリクス型を使うことを示す。
// 関数実装のコスト削減につながる。
const echo = <T>(arg: T): T => {
  return arg;
}

console.log(echo<number>(100)); // 100
console.log(echo<string>('hello')); // hello
console.log(echo<boolean>(true)); // true


// クラスでもジェネリクス型を適応した実装もできる。<T>の位置に気をつける
class Mirror<T> {
  constructor(public value: T){}

  echo(): T{
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo()) // 123
console.log(new Mirror<string>("hello").echo())
console.log(new Mirror<boolean>(true).echo());

