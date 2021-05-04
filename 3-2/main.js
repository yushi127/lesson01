const arg1 = process.argv[2];
const arg2 = process.argv[3];

for(let j = 0; j < arg1; j++) {
  var array = [];
  const t = [j];
  for(let i = 0; i < arg2; i++) {
    const y = [i];
    if (t % 2 === 1) {
      if (y % 2 === 1) {
        array.push('*');
      }else{
        array.push('-');
      }
    }else{
      if (y % 2 === 1) {
        array.push('-');
      }else{
        array.push('*');
      }
    }
  }
  var result = array.join('');
  console.log(result);
}