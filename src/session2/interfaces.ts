export {};

// 型エイリアスにはイコールが必要。それぞれにセミコロン。別名だからイコールをつける
type ObjectType = {
  name: string;
  age: number;
};

// interfaceにはイコールは不必要。
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'hamu',
  age: 43,
}


