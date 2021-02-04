let students = [
    {id:21,name:"rakib"},
    {id:31,name:"sakib"},
    {id :42,name:"tamim"},
    {id:51,name:"rumki"}
]
// console.log(students);
// let studentNames =[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const studentName =element.name;
//     studentNames.push(studentName);
// }console.log(studentNames);//[ 'rakib', 'sakib', 'tamim', 'rumki' ]

const studentNames=students.map( students=> students.name );
console.log(studentNames);//[ 'rakib', 'sakib', 'tamim', 'rumki' ]
const studentId =students.map(students =>students.id);
console.log(studentId);//[ 21, 31, 42, 51 ]
const biggers = students.filter(students=>students.id>40);
console.log(biggers);//[ { id: 42, name: 'tamim' }, { id: 51, name: 'rumki' } ]
const big =students.find(students=>students.id>40);
console.log(big);//{ id: 42, name: 'tamim' }
