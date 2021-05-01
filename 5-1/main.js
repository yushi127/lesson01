const profiles = {
  profiles: [
    {
      name: "佐藤",
      age: 22
    },
    {
      name: "鈴木",
      age: 34
    },
    {
      name: "高橋",
      age: 42
    },
    {
      name: "田中",
      age: 15
    }
  ]
}

// profiles.profiles.forEach(function (profile) {
//   console.log(`${profile.name}:${profile.age}`);
// });

const profile = profiles.profiles;
profile.forEach(function (profile) {
    console.log(`${profile.name}:${profile.age}`);
  });
// console.log(profile);



// for (let i = 0; i < profiles.profiles.length; i++) {
//   console.log(profiles.profiles.keys);
//   console.log(profiles.profiles.name);
//   console.log(profiles.profiles.age);
//   // console.log(`${profile.name}:${profile.age}`);
// }

// const keys = Object.keys(profiles);
// keys.forEach(key => {
//   console.log(`key:${key}`);
  
// });