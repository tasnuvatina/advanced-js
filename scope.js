function sum(first ,second) {
    let result=first + second;
    return result;

 
}

let output =sum(10,3);
console.log(output);
//console.log(result);//this will give error because let is used to declare scope variable

if(true){
    var mood="happy";
    console.log(mood);
}
console.log(mood);//var creates global variable scope.