const arg1= process.argv[2];
const arg2= process.argv[3];
const arg3= process.argv[4];
const arg4= process.argv[5];
const arg5= process.argv[6];
var array = [arg1,arg2,arg3,arg4,arg5];
function compareFunc(a, b) {
  return a - b ;
 }
 array.sort(compareFunc);
 console.log(array[2]);