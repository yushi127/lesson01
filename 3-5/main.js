const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60];
var array1 = []; //切り捨てした後の数値格納
var array2 = [10,20,30,40,50,60,70,80,90,100]; //度数
var array3 = []; //回数格納用
var array4 = []; //最後の空白と※をいれる
let sum = 0;

for (let i = 0; i < students.length; i++) {
  const num = Math.floor(students[i] / 10) * 10;
  array1.push(num);
}

// array1 = [ 10, 30, 100, 90, 20, 60, 70, 40, 60, 80, 80, 50, 40, 30, 60 ]
for (let i = 0; i < array2.length; i++) {
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] === array2[i]) {
       sum ++;
      }
    }
    array3.push(sum);
    sum = 0;
}

// array3 = [ 1, 1, 2, 2, 1, 3, 1, 2, 1, 1 ]
const max = Math.max(...array3);
for (let z = 0; z < max; z++) {
  for (let x = 0; x < array3.length; x++) {
    if (array3[x] >= max-z) {
      array4.push(' * ')
    }else{
      array4.push('   ')
    }
  }
  var result = array4.join('');
  console.log(result);
  array4.length = 0;
}
console.log('---------------------------------------');
console.log('10 20 30 40 50 60 70 80 90 100');
