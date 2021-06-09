export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "ham",
  age: 43,
};

me.age++;

console.log(me); // { name: "ham", age: 44 }

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "shigeru",
  age: 40,
}

// friend.age++; // readonlyになるため値を変更できない。

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};