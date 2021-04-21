const arg = process.argv[2];

const thi = arg / 100;
const thipain = parseInt(thi, 10);
const sec = (arg - thipain * 100) / 10;
const secpain = parseInt(sec, 10);
const fir = (arg - (thipain * 100) - (secpain * 10)) / 1;  

console.log(`100円玉${thipain}枚, 10円玉${secpain}枚, 1円玉${fir}枚`);