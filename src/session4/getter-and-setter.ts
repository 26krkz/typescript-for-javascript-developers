export {};

// owner        所有者を管理するメンバー。 初期化時に設定できる。 途中で変更できない。→private 参照できる。→get ownerを使う。
// secretNumber 個人番号を管理するメンバー。初期化時に設定できる。途中で変更できる。→  参照できない。→private
// get set アクセサー
// メソッドとメンバーでduplicatedのコンパイルエラーが生じるからメンバーには慣習的にアンダースコアを付ける。
class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  
  // ゲッター　privateのメンバーを参照できるようにするためだけのメソッド。
  // getの場合、メソッド名を呼び出す形で扱う。
  get owner() {
    return this._owner;
  }

  // セッター privateのメンバーを変更することができる。ex) card.secretNumber
  // 引数を受け取る。
  // setの後ろに定義することでcard.secretNumberのようなメソッドlikeな書き方をしなくてアクセスできる？　調べる必要あり。どうやらこのアクセス方法であっているらしい。
  // setの場合、メソッド名に値を代入する形で扱う。
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  // decretNumber(secretNumber: number) {
  //   this._secretNumber = secretNumber;
  // }
  
  // デバック用。
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ham', 1234567890);

console.log(card.owner); //ham

console.log(card.debugPrint());
card.secretNumber = 1111111111;
// card.decretNumber(1111111111);
console.log(card.debugPrint());
