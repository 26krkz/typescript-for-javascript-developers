export {};

class VisaCard {
  // readonly owner: string; //constructorに直接アクセス修飾子を付けることで必要なくなる
  
  // constructorの引数に直接アクセス修飾子を付けると上記と中身のコードがなくてもメンバーにアクセスすることがきる。
  // publicはなくてもいいけど、あったほうがわかりやすいので入れるべき。
  constructor(public readonly owner: string) {
    // this.owner = owner;　//constructorに直接アクセス修飾子を付けることで必要なくなる
  }
}

let myVisaCard = new VisaCard('hamu');
console.log(myVisaCard.owner); // hamu
// myVisaCard.owner = 'bacon'; // readonlyを指定したメンバーには値を新たに代入することはできない。