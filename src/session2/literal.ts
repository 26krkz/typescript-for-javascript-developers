export {};


let dayOfTheWeek: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31';

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;


// let dayOfTheWeek: '日' = '日'; 文字列のliteral型。特定の文字列をアノテーションすることができる。
// その代わり特定の文字列以外を許容しなくなる。union型を使うことで複数の文字列を指定できる。