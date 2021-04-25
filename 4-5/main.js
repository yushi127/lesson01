var array = [];
var sub = [];
for (let i = 2; i < 15; i++) {
  const arg1 = process.argv[2];
  const arg2 = process.argv[3];
  const arg3 = process.argv[4];
  const arg4 = process.argv[5];
  const arg5 = process.argv[6];
  const arg6 = process.argv[7];
  const arg7 = process.argv[8];
  const arg8 = process.argv[9];
  const arg9 = process.argv[10];
  const arg10 = process.argv[11];
  const arg11 = process.argv[12];
  const arg12 = process.argv[13];
  const arg13 = process.argv[14];
  array.push (process.argv[i])
}

for (let j = 0; j <= array.length; j++) {
  for (let z = 0; z <= array.length; z++) {
    if (array[j] >= array[z]) {
      sub = array[j];
      console.log('--------'+j+':::::'+z+'---------')
      console.log('sub:' + sub);
      console.log('array[j]:' + array[j]);
      console.log('array[z]:' + array[z]);
      array[j] = array[z];
      console.log('sub:' + sub);
      console.log('array[j]:' + array[j]);
      console.log('array[z]:' + array[z]);
      array[z] = sub;
      console.log('sub:' + sub);
      console.log('array[j]:' + array[j]);
      console.log('array[z]:' + array[z]);
    }
  }
}
console.log(array);






// array3 = [10,20];
//       sub = array3[0];
//       console.log(sub); //1
//       array3[0] = array3[1]; 
//       console.log (array3[0]);  //2
//       console.log (array3[1]); //3
//       array3[1] = sub;
//       console.log (array3[1]);//4


//       console.log(array3)//5



