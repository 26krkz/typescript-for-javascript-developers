export {};

// Parametersは容易に変更できない関数の引数の型を取り出したい時に利用することができる。
const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('ham', 43) // {name: 'ham', age: 43 }

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile); // { name: 'Gloria', 76 }