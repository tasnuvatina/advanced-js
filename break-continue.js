let num1=[1,2,3,4,5,6,7,8,9];
for (let i = 0; i < num1.length; i++) {
    const element = num1[i];
    if (element>5) {
        break;//thash kore bondho kore dibe loop
    }
    console.log(element);//1 2 3 4 5
    
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let num2=[2,-2,4,-5,7,-3,-8,9,-50,11,-5,];
for (let i = 0; i < num2.length; i++) {
    const element = num2[i];
    if (element<0) {
        continue;//ae condition true hoile skip kore jabe
    }
    console.log(element);//2 4 7 9 11
}