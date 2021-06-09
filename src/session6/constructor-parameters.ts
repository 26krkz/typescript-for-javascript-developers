export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);

console.log(taro); // Person { name: 'Taro', age: 30}

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>; // コンストラクターの引数を取得することができる。

const profile: Profile = ['ham', 43];
const ham = new Person(...profile);
console.log(ham); // Person { name: 'ham', age: 43 }