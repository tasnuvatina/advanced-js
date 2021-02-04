let friendsAge = [12,23,45,11,6,33,25,62];

let newAge=friendsAge.slice(3,5);
console.log(newAge);//[ 11, 6 ]
console.log(friendsAge);//[12, 23, 45, 11,6, 33, 25, 62]

let newAge1=friendsAge.splice(3,3,0,0,0,0,0);
console.log(newAge1);//[ 11, 6, 33 ]
console.log(friendsAge);//[12, 23, 45,  0,  0, 0,  0,  0, 25, 62]

let friendsName=["sakib","rakib","habib","tamin","jobair"];
let newName=friendsName.join(" and ");
console.log(newName);//sakib and rakib and habib and tamin and jobair