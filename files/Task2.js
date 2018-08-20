function distributionOfNumbers(A) {
  let B = [];
  let C = [];
    A.forEach(element => {
        if (element > 0) B.push(element);
        if (element < 0) C.push(element);
    });
  
    console.log(`Array with positive elements: ${B}
    and array with negative elements: ${C}`);
}
  
  function disctributionOfSymbols(A) {
    let map = {};
  
    A.forEach((element => {
      if (map[element]) {
        map[element]++;
      }
      else {
        map[element] = 1;
      }
    }))
    for (element in map) {
        console.log(`${element} - ${map[element]}\n`);
    }
}
  
  function isAnagramm(string1, string2) {
    if (string1.split("").sort().join("") === string2.split("").sort().join("")){
      console.log('true');
    }
    else{
      console.log('false');
    }
}