export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

// 抽象クラス、抽象メソッドを作成することで、継承したクラス内で抽象メソッドを使った具体メソッドを作成しなければならない。
// このコンパイルエラーによって抽象クラス内の抽象メソッドの実装し忘れを起こさなくて済む。大規模なアプリケーションに使える。
// class Tiger extends Animal {}