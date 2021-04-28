// $.getJSON(users.json, (data) => {
//   // console.log(data);
//  }
// income
const fs = require('fs');

const jsonObject = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
const result = [];

jsonObject.users.forEach((obj) => {
    const case1= 3000 * obj.years + 100000;
    const case2= 3000 * obj.years + 120000;
    const case3= 4000 * obj.years + 140000;
    const case4= 5000 * obj.years + 160000;
    if (obj.rank === 'A' && obj.years < 5) {
        obj["income"] = case1;
        // obj.push(income case1)
    }else if ((obj.rank === 'A' && !obj.years < 5)) {
        obj["income"] = case2;
        // obj.push(case2);
    }else if(obj.rank === 'B') {
        obj["income"] = case3;
        // obj.push(case3);
    }else{
        obj["income"] = case4;
        // obj.push(case4);
    }
    // console.log(obj);
    result.push(obj);

    // console.log(obj.income);
})

for (let i = 0; i < result.length; i++) {
    
    // console.log(result[i].income);

    result.income.sort(
        function(a,b){
          return (a < b ? 1 : -1);
        }
      );
      
      console.log(result[i]);
}


// console.log(jsonObject.users);
// console.log(jsonObject.users.name);
// console.log(`${jsonObject.users.name}:${jsonObject.users.incom}`);



// jsonObject.users.forEach((obj) => {
//     const case1= 3000 * obj.years + 100000;
//     const case2= 3000 * obj.years + 120000;
//     const case3= 4000 * obj.years + 140000;
//     const case4= 5000 * obj.years + 160000;
    // result[obj.name] = obj;
    // console.log(obj.name, obj.rank ,obj.years )

//     if (obj.rank === 'A' && obj.years < 5) {
//         result.push(`${obj.name}: ${case1}`)
//     }else if ((obj.rank === 'A' && !obj.years < 5)) {
//         result.push(`${obj.name}: ${case2}`)
//     }else if(obj.rank === 'B') {
//         result.push(`${obj.name}: ${case3}`)
//     }else{
//         result.push(`${obj.name}: ${case4}`)
//     }
// });
// const result1 = result.join();
// for (let i = 0; i < result1.length; i++) {
//     console.log (result1[i]);
// }

