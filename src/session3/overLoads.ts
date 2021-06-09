export {};

// シグネチャー。関数の概略。関数の引数、戻り値を変更することができる
// オーバーロードでは実態の関数の方では型を定義しなくて良い。つまりanyでok。それでも型制約はできている。

function double(value: number): number;
function double(value: string): string; // signatureが型制約を守ってくれる。

function double(value: any): any {
  console.log(typeof value)
  if (typeof value === "number"){
    return value * 2;
  } else {
    return value + value;
  }
}


console.log(double(100));
console.log(double('G0 '));
// console.log(double(true)); // signatureによって型制約されているからそもそも指定以外の型では通らない。