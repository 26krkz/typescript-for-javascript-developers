export {};

// 型の互換性。
let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible); //undefined

fooCompatible = barCompatible;

console.log(typeof fooCompatible); // string any型にstring型を代入したから型もstring型に遷移している。

let fooIncompatible: string;
let barIncompatible: number;

// fooIncompatible = barIncompatible; // 型の互換性がないためにコンパイルエラーとなる。

let fooString: string;
let barString: string = "string";

fooString = barString;

// 'fooStringLiteral'という文字列を型とするstringのリテラル型を定義すると、同じ文字列のみ代入することができる。
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
// stringリテラル型はstring型に含まれるためエラーにならない。
fooString = fooStringLiteral;

// number型も同様
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;


interface Animal {
  age: number;
}

class Person1 {
  constructor(public age: number){}
}

class Person2 {
  constructor(public name: string){}
}

// 変数meにAnimal interfaceを定義すると、meではageのプロパティが必要となる。Person1クラスの場合、たまたまageプロパティをもったクラスだから変数meに代入できる。→型の互換性がある。
let me: Animal;
me = new Person1(43);
// Person2の場合、nameプロパティを持っているが、meではageのプロパティが必要となるため、コンパイルエラーとなる。→型の互換性がない。
// me = new Person2('taro')