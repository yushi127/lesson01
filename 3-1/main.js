  for (let i = 1; i <= 9; i++) {
    var array = [];
    const numb = i;
    for (let i = 1; i <= 9; i++) {
      const box = (numb * i);
      array.push(`${box} `);
    }
    var result = array.join('');
    console.log(result);
    array.length = 0;
  }




