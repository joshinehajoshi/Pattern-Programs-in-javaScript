function diagonalSquare(n) {
    str = "";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i==j){
                str += "0 "
            }else {
                str += "1 "
            }
        }
        str += "\n";
    }
    console.log(str);
}