const str = "こはるはるここはるここはるはるここはるこはるはるはる"
const str2 = 'こはる';
const str3 = 'はるこ';
let countk = Number([]);
let counth = Number([]);
for (let i = 0; i < str.length; i++) {
 if (str[i] + str[i+1] + str[i+2] === str2) {
  countk += 1;
 }
 if (str[i] + str[i+1] + str[i+2] === str3) {
  counth += 1;
 }  
}
console.log (`こはる:${countk}`);
console.log(`はるこ:${counth}`);

