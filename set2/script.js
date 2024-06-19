/*
Create an object person with two properties, "name" and "age" and
 then updates the "age"
property to a new value. Initial age should be 30.
/ Your code here
console.log(person.age) // Output: 35
*/
const person={
    name:"neetu",
    age:30,
};
person.age=35;
//console.log(person.age);

/*
2.  Write a function that takes an object car and returns true if the
 car is a sports car (i.e. has a horsepower property greater than or
  equal to 300)
  /Your ES6 code here
const car1 = { make: 'Porsche', model: '911', horsepower: 450 }
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 }
console.log(isSportsCar(car1)) // true
console.log(isSportsCar(car2)) // false
*/
const car1 = { make: 'Porsche', model: '911', horsepower: 450 }
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 }
const isSportsCar=(car)=>{
if(car.horsepower>=300)
    return "true";
else
return "false";
}
//console.log(isSportsCar(car1));
//console.log(isSportsCar(car2));

/*
3.  Write a function that takes an object person and a number num as 
arguments and returns true if the person's age plus num is 
greater than 21. Otherwise, it should return false.
/ Your ES6 code here
const person1 = { name: 'Ajay', age: 20 }
console.log(isEligible(person1, 1)) // false
console.log(isEligible(person1, 2)) // true
*/
const person1 = { name: 'Ajay', age: 20 }
const isEligible=(person,num)=>{
    if(person.age+num>21)
        return "true";
    else
    return "false";
}
//console.log(isEligible(person1,1));
//console.log(isEligible(person1,2));

/*
. Write a function that takes an object blog and returns true if the
 blog has more than 1000 views
(i.e. has a views property greater than 1000)
/ Your ES6 code here
const blog1 = {
 title: 'How to Learn JavaScript',
 author: 'John Doe',
 views: 1430,
}
const blog2 = {
 title: '10 Reasons to Start a Blog',
 author: 'Jane Smith',
 views: 500,
}
console.log(getViews(blog1)) // true
console.log(getViews(blog2)) // false
*/
const blog1 = {
 title: 'How to Learn JavaScript',
 author: 'John Doe',
 views: 1430,
}
const blog2 = {
 title: '10 Reasons to Start a Blog',
 author: 'Jane Smith',
 views: 500,
}
const getViews=(blog)=>{
    if(blog.views>1000)
        return "true";
    else
    return "false";
}
//console.log(getViews(blog1))
//console.log(getViews(blog2))

/*
5.  Swap the values of two variables using array destructuring
let a = 1
let b = 2
/ Your ES6 Code here
console.log(a) // 2
console.log(b) // 1
*/
const numbers=[1,2]
const [b,a]=numbers;
//console.log(a);
//console.log(b);

/*
6. Convert this function into ES6 with least amount of characters.
function add(a = 30, b = 0) {
 return a + b
}
console.log(add(2, 3))
*/

