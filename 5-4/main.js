// const jsonObjectarray = []; //dataの格納配列
const object = require('./kobe.json');
let array = [];

// for (let i = 0; i < jsonObject.length; i++) {
//   console.log(i);
// }

// console.log(JSON.stringify(object))

function search(object) {
    for (let key in object) { 
      const value = object[key];
    if (key === 'kobe') {
      array.push(object[key]);
    }else if(typeof value === "object"){
      search(value);
    }
  }
}
  search(object);
  console.log(array.join(''));























// const jsonObjectarray = jsonObject;
// console.log(Object.keys(jsonObjectarray));

// for (let i = 0; i < array.length; i++) {
// }
// console.log(Object.keys(jsonObject))


// function search(obj) {
//   return ;
// }
// function checkObject2(_obj){
//   for(var key in _obj){
//     document.write(key +" : "+_obj[key] + "<br>");
//     if(_obj[key] instanceof Array || _obj[key] instanceof Object){
//       arguments.callee(_obj[key]);
//     }
//   }
//   return;
// }
// for (const item in jsonObject) {
//   console.log( jsonObject.item );
// }

// for (const property in jsonObject) {
//   if (Object.hasOwnProperty.call(jsonObject, property)) {
//     const element = jsonObject[property];
    
//   }
// }
// if (jsonObjectarray.key ) {
  
// }
// for (let i = 0; i < 10; i++) { 
//   for (const property in jsonObjectarray) {
//     console.log(property);
//   }
// }

// console.log(jsonObject)

// for (const kobe in jsonObject) {
  // if (jsonObject.hasOwnProperty.call(jsonObject, kobe)) {
    // console.log(kobe)
    // console.log(`${kobe}: ${jsonObject[kobe]}`);
    // console.log(`${jsonObject[kobe]}`);
    // console.log(element);
  // }
// }

// jsonObject.forEach((obj) => {
//   jsonObjectarray.push(obj);
//   console.log(jsonObjectarray)
// })

// const result = jsonObject.reduce((prev, current) => {
//   return [...prev, ...current];
// }, {});
// console.log(result); 





// const mergeAry = (ary) => {
//   const result = ary.reduce((prev, current) => {
//     return prev.concat(current);
//   }, {});
//   return result;
// };

// /**
//  * 配列要素の中に配列があるか
//  */
// const hasArray = (ary) => ary.some(item => Array.isArray(item));

// /**
//  * 配列がある限り再帰で配列を結合する
//  */
// const mergeAll = (ary) => {
//   if (!hasArray(ary)) {
//     return ary; 
//   }
//   const result = mergeAry(ary);
//   return mergeAll(result);
// };

// console.log(mergeAll(data)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]