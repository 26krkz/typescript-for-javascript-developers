export {};


type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// pick必要なものだけ取り出す。
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// 特定の物を除去して新たに型を作る。第二引数で除外したいプロパティを指定する。
type SmallProfile = Omit<DetailedProfile, 'height'>;