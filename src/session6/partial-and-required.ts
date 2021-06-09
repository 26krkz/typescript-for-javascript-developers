export {};

// utility型　引用した型を読み取って新たに作成する。
type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// Profileと全く同じプロパティが定義される。 全てのプロパティがオプショナルに変更される。
type PartialType = Partial<Profile>;

// Profileと全く同じプロパティを持つ。かつ全てのプロパティは必須となる。
// Profileのプロパティにオプショナルなプロパティが含まれる場合でも全て必須となる。
type RequiredType = Required<Profile>;