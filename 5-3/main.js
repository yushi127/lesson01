const jsonObjectarray1 = []; //dataの格納配列
const jsonObjectarray2 = []; //songsの格納配列
const fs1 = require('fs');
const fs2 = require('fs');
let count =1;



const jsonObject1 = JSON.parse(fs1.readFileSync('./playdata.json', 'utf8'));
const jsonObject2 = JSON.parse(fs2.readFileSync('./songs.json', 'utf8'));
jsonObject1.data.forEach((obj) => {
  jsonObjectarray1.push(obj);
})
jsonObject2.songs.forEach((obj) => {
  jsonObjectarray2.push(obj);
})
  
//dataをcountの順番で降順にする
  for (let i = 0; i < jsonObjectarray1.length; i++) {
    jsonObjectarray1[i].count = Number(jsonObjectarray1[i].count)
   jsonObjectarray1.sort(
     function(a,b){
       return (a.count < b.count ? 1 : -1);
     }
     );
    //  console.log(jsonObjectarray1[i].count); //countの降順表示
}

// forを回してdataとsongsのIDが同じなら出力
for (let j = 0; j < jsonObjectarray1.length; j++) {
  for (let z = 0; z < jsonObjectarray2.length; z++) { 
    // console.log(jsonObjectarray1[j].id);
    // console.log(jsonObjectarray2[z].id);
    if(Number(jsonObjectarray1[j].id) === jsonObjectarray2[z].id){
      console.log(`${count}:${jsonObjectarray2[z].title}\t${jsonObjectarray1[j].count}`)
      count ++;
    }
  }
}











// ///////////////////////////////////////////////////////////////////////

// // $.getJSON(users.json, (data) => {
// //   // console.log(data);
// //  }
// // income
// const fs = require('fs');

// const jsonObject = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
// const result = [];

// jsonObject.users.forEach((obj) => {
//     const case1= 3000 * obj.years + 100000;
//     const case2= 3000 * obj.years + 120000;
//     const case3= 4000 * obj.years + 140000;
//     const case4= 5000 * obj.years + 160000;
//     if (obj.rank === 'A' && obj.years < 5) {
//         obj["income"] = case1;
//     }else if ((obj.rank === 'A' && !obj.years < 5)) {
//         obj["income"] = case2;
//     }else if(obj.rank === 'B') {
//         obj["income"] = case3;
//     }else{
//         obj["income"] = case4;
//     }
//     result.push(obj);
//     // console.log(obj);

//     // console.log(obj.income);
// })

// for (let i = 0; i < result.length; i++) {
    
//     // console.log(result[i].income);

//     result.sort(
//         function(a,b){
//           return (a.income < b.income ? 1 : -1);
//         }
//       );
//       console.log(`${result[i].name}: ${result[i].income}`)
// }


// // console.log(jsonObject.users);
// // console.log(jsonObject.users.name);
// // console.log(`${jsonObject.users.name}:${jsonObject.users.incom}`);



// // jsonObject.users.forEach((obj) => {
// //     const case1= 3000 * obj.years + 100000;
// //     const case2= 3000 * obj.years + 120000;
// //     const case3= 4000 * obj.years + 140000;
// //     const case4= 5000 * obj.years + 160000;
//     // result[obj.name] = obj;
//     // console.log(obj.name, obj.rank ,obj.years )

// //     if (obj.rank === 'A' && obj.years < 5) {
// //         result.push(`${obj.name}: ${case1}`)
// //     }else if ((obj.rank === 'A' && !obj.years < 5)) {
// //         result.push(`${obj.name}: ${case2}`)
// //     }else if(obj.rank === 'B') {
// //         result.push(`${obj.name}: ${case3}`)
// //     }else{
// //         result.push(`${obj.name}: ${case4}`)
// //     }
// // });
// // const result1 = result.join();
// // for (let i = 0; i < result1.length; i++) {
// //     console.log (result1[i]);
// // }

