const arg = process.argv[2];
const sprit = arg.split( ':' );

for (let i = 0; i < sprit.length; i++) {
  sprit[i] = Number(sprit[i]);
}
sprit[1] = sprit[1] + 45;
if (sprit[1] >= 60) {
  sprit[1] = sprit[1] - 60;
  sprit[0] = sprit[0] + 1;
}
sprit[0] = sprit[0] % 24;
console.log(sprit[0]);
console.log(sprit[1]);