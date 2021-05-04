  for (let j = 1; j <= 9; j++) {
    var array = [];
    for (let i = 1; i <= 9; i++) {
      const box = (j * i);
      array.push(`${box} `);
    }
    var result = array.join('');
    console.log(result);
    array.length = 0;
  }




