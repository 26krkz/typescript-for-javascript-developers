export {};

let name: any = 'ham';

// nameがanyだとname.lengthもany型となってしまう。lengthはnumberであるべきの時はnumberを型定義してあげる。
// 型アサーションはあらかじめ型を指定してあげる。

// 型アサーションの書き方。下記のいずれでも良い。
// let length = name.length　as number;
// let length = (name as string).length;

// length = 'foo';