export {};

// objectでよければなんでも代入できてしまう。
let profile1: object = {name: 'ham'};
profile1 = { birthYear: 1976};

// objectかつ指定されたプロパティであれば代入できる。
let profile2: { name: string }= { name: 'ham' };
// profile2 = { birthYear: 1976};