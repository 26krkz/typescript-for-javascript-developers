export {};

// enum = 列挙型 enumで定義すると自動的に数値が割り当てられる。
// はじめの要素に数字を指定するだけで全ての数字が変換される。
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

enum COLORS {
  RED = '#ff0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green }) // { green: '#008000'}

// enum型に追加することもできる

enum COLORS {
  YELLOW = '#FFFF00'
}