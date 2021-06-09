export {};

// アクセス修飾子 publicは書かなくてもいい。
// protectedは継承したクラス内でもアクセスすることができる。privateはできない。
// privateをつけると、インスタンスで指定のメンバーはアクセスできないけど、class内でばアクセスができる。
// profile()ではアクセスできる。
class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name} , age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // super()に引数を渡すことで、そこから親クラスのコンストラクター内にアクセスし、this.を使うことができる。
    super(name, age, nationality)
  }

  // privateなメンバーは親クラスでしかアクセスできない。つまりthis.nameは使えない。protectedは継承先でも使えるのでthis.nationalityは使うことができる。
  profile():string {
    // return `name: ${this.name} , age: ${this.age}, nationality: ${this.nationality}`
    return `name: ${this.name} , nationality: ${this.nationality}`
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.name); // Taro
// console.log(taro.age); // 30 privateを指定するとアクセスできないのでコンパイルエラーが生じる。


// console.log(taro); // Person{ name: 'Taro', age: 30 }
console.log(taro.profile()) // name: Taro, age: 30