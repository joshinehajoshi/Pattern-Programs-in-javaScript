function downwardRightTrianlge(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += " ";
    }
    for (let k = 0; k < n - i; k++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}


  
