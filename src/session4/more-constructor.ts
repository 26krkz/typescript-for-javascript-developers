export {};

// アクセス修飾子をコンストラクターメソッドに付けるとクラス内で初期化処理を行わなくても、自動で初期化処理が行われる。
// この書き方であれば初期化処理を書く必要がない。
class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('hamu', 43);

console.log(me); // Person{ name: 'ham', age: 43 }