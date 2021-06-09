export {};

// new演算子。constructorメソッド：初期化処理
// クラスでの型定義はトップレベルで行う。
// constructorはreturnしないので型定義はしない。
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name} , age: ${this.age}`
  }
}

let taro = new Person('Taro', 30);
console.log(taro); // Person{ name: 'Taro', age: 30 }
console.log(taro.profile()) // name: Taro, age: 30