export {};

// typescriptは単一継承なため、クラスは一つしか継承できないが、複数のinterfaceを継承することができる。
// interfaceは全てのメソッドが抽象メソッドのようなクラスのようなもの
class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

// interface側でsignatureを実装。抽象メソッドのようなもの。
interface Kenja {
  ionazun():void;
}
interface Senshi {
  kougeki():void;
}

// 多重継承のようなこと（実装）をできる。
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun(); // ionazun
jiro.kougeki(); // kougeki