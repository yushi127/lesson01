var array = [];
var sub = [];

 for (let i = 2; i < process.argv.length; i++) {
    array.push(Number(process.argv[i])); 
    }

console.log(array);

for (let j = 0; j <= array.length-1; j++) {
  for (let z = j; z <= array.length; z++) {
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



// var array = [];
// var sub = [];
// for (let i = 2; i < process.argv.length; i++) {
//   array.push(Number(process.argv[i])); 
//   }



// for (let j = 0; j <= array.length; j++) {
//   for (let z = 0; z <= array.length; z++) {
//     if (array[j] >= array[z]) {
//       sub = array[j];
//       console.log('--------'+array[j]+':::::'+array[z]+'---------')
//       array[j] = array[z];
//       array[z] = sub;
//       console.log(array);
//     }
//   }
// }
// console.log(array);