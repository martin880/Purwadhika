// shallow copy
//wajib spread pada saat menciptakan intance
//apapun yg kita lakukan terhadap arrCopyNUm tidak akan mempengaruhi arrNum
let arrNum = [1, 2, 3, 4, 5];

let arrCopyNum = [...arrNum];

let arrRefNUm = arrNum;
// arrRefNum sebagai referens dari arrNum
