const arg = process.argv[2];
const div = arg/2;
var num = Math.floor(div);
for (let i = 0; i < arg ; i++) {
  var array = ['*'];
  for (let y = 1; y < arg; y++) {
    array.unshift(' ');
    }

  for (let j = 0; j <= i; j++) {
    if (j !== 0) {
      array.push('*','*');
      array.shift(' ');
    }    
  }

  var result = array.join('');
  console.log(result);
}