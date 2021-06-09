export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

// 子クラスでもconstructorないの引数でメンバーにアクセス修飾子を付けて初期化を行うことができるが、子クラスで初期化した後に、super()を通して
// 親クラスでも初期化が行われるという状況になる。そこで子クラスでは上記の設計方法を使わずに、新たにメンバーを設定するのでさればconstructorの外側で
// メンバーの定義、アクセス修飾子の付与を行い、constructor内で初期化(this)を行う。見た目もスッキリ。
class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }

  // メソッドないでもsuper()を使える。
  run(): string {
    const parentMessage = super.run(); // I can run.
    return `${super.run()} ${this.speed}km.`;
  }
}

// let animal = new Animal();
// console.log(animal.run()); // I can run

// let lion = new Lion();
// console.log(lion.run()); // I can run 80km

console.log(new Animal("Mickey").run());
console.log(new Lion("Sinba", 80).run());