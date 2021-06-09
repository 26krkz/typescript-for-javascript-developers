export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// 指定の方のみを全体のunion型から除外する方法。
// Excludeは第一引数に全体のunion型、第二引数に除外したい型を書く。
type FunctionType = Exclude<SomeTypes, string | number>; // DebugTypeとなる。
type NunFunctionType = Exclude<SomeTypes, DebugType>; // string | numberとなる。
// 関数の型のみを除く方法　Functionは関数の型の総称。他にも関数があればまとめて除く。
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // string | numberとなる。

// union型から指定した型のみを抽出する方法。
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// nullとundefinedのみを除外する方法。
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; // 指定のunion型からnullとundefinedを除外する。