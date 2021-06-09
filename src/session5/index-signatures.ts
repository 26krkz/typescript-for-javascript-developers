export {};

// 型アノテーションが長いのでinterfaceに移動。
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "ham", underTwenty: false};

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

// index signatureによってさまざまなプロパティを追加できる。
profile.name = 'ham';
profile.age = 42;
profile.nationality = "Japan";