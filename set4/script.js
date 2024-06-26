/*
1. Write an ES6 function that accepts an array of integers and returns
 the maximum element in the array. Avoid using in-built methods.
 / Your ES6 code here
let array = [4, 78, 8, 3, 6, 0, 12, 34]
console.log(getMaxElement(array)) // 78  */
const getMaxElement=(array)=>{
let maxElement=array[0];

for(let i=1;i<array.length;i++){
    if(array[i]>maxElement){
        maxElement=array[i];
    }
}
return maxElement;
};
let array = [4, 78, 8, 3, 6, 0, 12, 34]
//console.log(getMaxElement(array));

/*
2.  Write an ES6 function that takes an array of numbers and returns 
the average of all the numbers. Avoid using in-built methods.
/ Your ES6 code here
console.log(calculateAverage([1, 2, 3, 4, 5])) // 3  */
const calculateAverage=(arr)=>{
    let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        let average=sum/arr.length;
        return average;
}
//console.log(calculateAverage([1, 2, 3, 4, 5]));

/*
3.  write an ES6 function that takes an array of numbers and converts
    even numbers to odd numbers by adding 1 to that number.
      / Your ES6 code here
    var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(convertEvenToOdd(numArr))
    / [1, 3, 3, 5, 5, 7, 7, 9, 9]  */
const convertEvenToOdd=(arr)=> {
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
arr[i]+=1;
        }
    }
    return arr;
}
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
   //console.log(convertEvenToOdd(numArr))


    /*
    4. write an ES6 function that takes an array of words and returns 
    an array with all its elements whose length is greater than 5.
  / Your ES6 code here
var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community']
console.log(filterWords(words)) // ["repeat", "community"]  */
const filterWords=(arr)=>{
    return words.filter(words=>words.length>5)  
}
var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community']
//console.log(filterWords(words));

/* 
5.  Write an ES6 function that takes an array of strings and returns 
    a new array with each string capitalized.
/ Your ES6 code here
console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']))
/ ["EAT", "SLEEP", "CODE", "REPEAT"]
*/
const capitalizeWords=(arr)=>{
    return arr.map(word => word.toUpperCase());
}
//console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']));


/*
6.  Wite an ES6 function that takes an array of objects and a property
    name and returns a new array with only the values of that property. 
    Avoid using in-built methods.
/ Your ES6 code here
console.log(
 getValues(
 [
 { name: 'John', age: 21 },
 { name: 'Mary', age: 22 },
 { name: 'Peter', age: 23 },
 ],
 'name',
 ),
) // ["John", "Mary", "Peter"]
*/

const getValues=(arr,property)=>{
    const name=[];
    for(let i=0;i<arr.length;i++){
        name.push(arr[i][property])
    }
    return name;
};
//console.log(getValues( [
  //  { name: 'John', age: 21 },
    //{ name: 'Mary', age: 22 },
    //{ name: 'Peter', age: 23 },
    //],"name",
   // ));

/*
7. Write an ES6 function that takes the users' details and returns the
 data with team ID. Avoid using in-built methods.
/ Your ES6 code here
const userData = { firstName: 'John', lastName: 'Dee' }
console.log(podAndTeamAllocation(userData))
/ {firstName: 'John', lastName: 'Dee', teamId: 667543}
*/
const podAndTeamAllocation=(arr)=>{
    let teamId=667543;
    return `{firstName: '${arr.firstName}', lastName: '${arr.lastName}', teamId: ${teamId}}`;
}
const userData = { firstName: 'John', lastName: 'Dee' }
//console.log(podAndTeamAllocation(userData));

/*
8. Write an ES6 function which checks if a student already has a team.
If team is not given then add them to team “A” and return the object 
else do nothing and return the same object.Avoid using in-built methods.
/ Your ES6 code here
console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
/ {firstName: 'Penn', lastName: 'Ma', team: A}
console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: B }))
/ {firstName: 'John', lastName: 'Dee', team: B}
console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))
/ {firstName: 'Priya', lastName: 'Raj', team: A}
*/

function checkForTeam(student) {
    if(!student.team){
        student.team='A';
    }
    return student;
}
//  console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }));
//console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: 'B' }));
//console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }));
  
  
/*
9. Destructure the following code to get the desired outputs. Avoid 
   using in-built methods.
const book = {
 title: 'JavaScript: The Definitive Guide',
 authors: [
 { name: 'David Flanagan', age: 49 },
 { name: 'Yukihiro Matsumoto', age: 57 },
 ],
 publisher: { name: "O'Reilly Media", location: 'CA' },
}
/ Your ES6 code here
console.log(title) // JavaScript: The Definitive Guide
console.log(author1) // David Flanagan
console.log(author2) // Yukihiro Matsumoto
console.log(publisherName) // O'Reilly Media
*/
const book={
title: 'JavaScript: The Definitive Guide',
 authors: [
 { name: 'David Flanagan', age: 49 },
 { name: 'Yukihiro Matsumoto', age: 57 },
 ],
 publisher: { name: "O'Reilly Media", location: 'CA' },
}

const {title}= book;
const { authors: [{ name: author1 }, { name: author2 }] } = book;
const { publisher: { name: publisherName } } = book;

//console.log(title) // JavaScript: The Definitive Guide
//console.log(author1) // David Flanagan
//console.log(author2) // Yukihiro Matsumoto
//console.log(publisherName) // O'Reilly Media


/*
10.  Write an ES6 function that takes an array of objects and returns 
the sum of all ages.
/ Your ES6 code here
var array = [
 {
 name: 'Jay',
age: 60,
 },
 {
 name: 'Gloria',
 age: 36,
 },
 {
 name: 'Manny',
 age: 16,
 },
 {
 name: 'Joe',
 age: 9,
 },
]
console.log(sumOfAges(array)) // 121
*/
// Your ES6 code here
const sumOfAges = (arr) => {
    return arr.reduce((total, person) => total + person.age, 0);
  }
  
  var arrays = [
    {
      name: 'Jay',
      age: 60,
    },
    {
      name: 'Gloria',
      age: 36,
    },
    {
      name: 'Manny',
      age: 16,
    },
    {
      name: 'Joe',
      age: 9,
    },
  ]

  console.log(sumOfAges(arrays));