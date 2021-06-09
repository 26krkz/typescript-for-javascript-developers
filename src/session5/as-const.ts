export {};

// const assertion
let name = 'Atsushi';

name = 'ham';

// as constを使うと代入した値が型になる。ここでは'ham'型。
let nickname = 'ham' as const;

// objectでも以下のような書き方でas constを付けることができ、objectにas constを付けるとreadonlyになる。
// objectを全てreadonlyにしたい時はas constを使えば良い。ネストされたものでも全てreadonlyにすることができる。
let profile = {
  name: 'atsushi',
  height: 179
} as const;

// profile.name = 'ham';　
// profile.height = 180;