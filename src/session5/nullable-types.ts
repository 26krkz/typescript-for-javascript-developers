export {};

// nullable型は、nullを代入できるようにする型。union型でnullを許容できるようにする。
let parofile: { name: string; age: number | null } = {
  name: "ham",
  age: null,
}