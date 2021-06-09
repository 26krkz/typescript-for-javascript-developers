export {};
// 型エイリアスは頭文字は大文字
type Mojiretsu = string;

const fooString: Mojiretsu = 'hello';

const example1: Profile = {
  name: "ham",
  age: 43,
};

type Profile = {
  name: string,
  age: number,
}


// 指定のデータの型を読み取り、別の型エイリアスとして指定することができる。複数が連動するので便利。
type Profile2 = typeof example1;