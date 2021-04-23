const arg1 = process.argv[2];
const arg2 = process.argv[3];
var array1 = [];
var array2 = [];

let arraySplit1 = arg1.split('');
let arraySplit2 = arg2.split('');

for (let i = 0; i < arraySplit1.length; i++) {
  array1.unshift(arraySplit1[i])
  array2.unshift(arraySplit2[i])
}
const bind1 = array1.join('');
const bind2 = array2.join('');
const num1 = Number( bind1 );
const num2 = Number( bind2 );

console.log(num1 + num2);
