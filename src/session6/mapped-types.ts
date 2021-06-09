export {};

type Profile = {
  name: string;
  age: number;
};

// Partialが引用した型を読み取って新たに作成する。
// Partialの詳細はgo to definitionで調べられる。
type PartialProfile = Partial<Profile>;