function oddEvenRowsSquare(n) {
    let str = "";
    for (let i=0;i<n;i++){
        for(let j=0;j<n;j++){
          if(i%2==0){
              str += "1 "
          }else {
              str += "0 "
          }
        }
        str += "\n"
    }
    console.log(str);
}