function rectangle(row,col) {
    let str = "";
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            str +="* ";
        }
        str += "\n";
    }
    console.log(str);
}