var array = [];
var sub = [];
var Newarray = [];


for (let i = 2; i < process.argv.length; i++) {
  array.push(process.argv[i]); 
}

const sprit = array[0].split( ',' );

for (let i = 0; i < sprit.length; i++) {
    const inv = sprit[i].toLowerCase().indexOf(array[1])
    if (inv !== -1) {
      Newarray.push(sprit[i]);
    }
    Newarray.sort(
      function(a,b){
        return (a < b ? -1 : 1);
      }
    );
  }
  const result = Newarray.join();
  console.log(result);
