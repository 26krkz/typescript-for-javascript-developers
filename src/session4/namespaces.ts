export {};
// 名前空間は大文字スタート。namespaceによってファイルわけしているような感覚。
// exportしてあげないとPersonを外の空間からアクセスすることができない。
// namespaceないでnamespaceをネストすることができ、それぞれでクラスを指定できる。その場合ネストされたnamespaceをexportする必要あり。
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public middleName: string, public lastName: string) {}
  }
}

const me = new Japanese.Tokyo.Person('ham');
console.log(me.name) // ham

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael); // Person {firstName: 'Michael', middleName: 'Joseph', lastName: 'Jackson'}

const meOsaka = new Japanese.Osaka.Person('hamuyann');
console.log(meOsaka); // hamuyann