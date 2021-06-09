export {};

// ４３が返ってくるからnumber型をつける
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10; // コンパイルエラー

// if文の中ではnumberunknownがnumber型であることが保証されている。ためコンパイルエラーが発生しない。
// 型ガード（タイプガード）と言われる。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}