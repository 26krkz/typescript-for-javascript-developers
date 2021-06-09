export {};

// staticを使うとインスタンスを作らなくてもクラスのメンバーを呼び出すことがきる。
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static word() {
    // return 'Hey, guys! Are you interested in TypeScript?'
    return `Hey, guys! this is ${this.firstName}Are you interested in TypeScript?`
  }
}

// let me = new Me();
// console.log(me.isProgrammer) // staticを付けるとアクセスできなくなる
console.log(Me.isProgrammer) // true インスタンスを作成しなくても、クラス.メンバーでアクセスすることができる。