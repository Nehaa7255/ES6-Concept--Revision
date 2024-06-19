// 1. Write a function that takes a user's age and determines if they are
//    old enough to vote (age 18 or older).
// Your ES6 code here
//console.log(isEligibleToVote(20)) // Eligible to vote
//console.log(isEligibleToVote(18)) // Eligible to vote
//console.log(isEligibleToVote(17)) // Not eligible to vote

const isEligibletovote=(age)=>{
    if (age>=18) 
        return "Eligible to Vote";
    else
    return "Not Eligible to Vote"
}
//console.log(isEligibletovote(23));

/*
 2. Write a function that takes two numbers as input and determines
  which one is greater.
 Your ES6 code here
console.log(isGreater(2, 5)) // 5 is greater than 2
console.log(isGreater(10, 5)) // 10 is greater than 5
*/
const isGreater=(num1,num2)=>{
    if(num1>num2)
        return `${num1} is greater than ${num2}`;
    else 
    return `${num2} is greater than ${num1}`;
}

//console.log(isGreater(2,5));

/*
3.  Write a function that takes a number as input and determines if it is positive or negative.
 Your ES6 code here
console.log(checkNum(9)) // Positive Number
console.log(checkNum(-8)) // Negative Number
console.log(checkNum(22)) // Positive Number
*/

const checkNum=(num)=>{
    if(num>=0)
        return "Positive Number"
    else
    return "Negative Number";
}
//console.log(checkNum(22));
//console.log(checkNum(-8));


/*
4.  Write a function that takes a number as input and determines if it is even  or odd
 Your ES6 code here
console.log(isEvenOdd(5)) // Odd Number
console.log(isEvenOdd(8)) // Even Number
console.log(isEvenOdd(10)) // Even Number
*/

const isEvenOdd=(num)=>{
if(num%2==0)
    return "Even Number"
else
return "Odd Number"; 
}
//console.log(isEvenOdd(5));
//console.log(isEvenOdd(10));

/*
5.  Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
 Your ES6 code here
console.log(checkForAlphabetA('Tanay')) // Includes a
console.log(checkForAlphabetA('Jeep')) // Does not include a
console.log(checkForAlphabetA('Jane')) // Includes a
*/

const checkForAlphabetA=(string)=>{
    if(string.includes("a")|| string.includes("A"))
        return "includes a";
    else
    return "Does not include a"
}
//console.log(checkForAlphabetA("jane"));

/*
6.   Write a function that takes a string as input and determines 
  if it is longer than 5 characters.
/ Your ES6 code here
console.log(checkLength('Programming')) // more than 5 characters
console.log(checkLength('Jeep')) // less than 5 characters
*/
const checkLength=(string) =>{
    if(string.length>5)
        return "more than 5 characters";
    else
    return "less than 5 characters"
}
//console.log(checkLength("jeep"));
//console.log(checkLength("progamming"));

/*
7.  Write a function that takes a number as input and determines 
    if it is between 1 and 10.
   Your ES6 Code here
console.log(isBetweenOneAndTen(5)) // true
console.log(isBetweenOneAndTen(11)) // false
*/
const isBetweenOneAndTen=(number)=>{
if(number>=1 && number<=10)
    return "true";
else
return "false";
}
//console.log(isBetweenOneAndTen(5));
//console.log(isBetweenOneAndTen(11));

/*
8.  Write a function that takes a string as input and determines 
   if it contains the word "hello".
 / Your ES6 code here
console.log(isHelloPresent('Hello World')) // true
console.log(isHelloPresent('World')) // false
*/

const isHelloPresent=(words)=>{
    if(words.includes("hello") || words.includes("Hello"))
        return "true"
    else
    return "false"
}
//console.log(isHelloPresent("Hello World"));
//console.log(isHelloPresent("World"))

/*
9.  Write a function that takes a number as input and determines 
    if it is a multiple of 3.
    / Your ES6 code here
   console.log(isMultipleOfThree(5)) // false
   console.log(isMultipleOfThree(9)) // true
*/

const isMultipleOfThree=(num)=>{
    if(num%3==0)
        return "true";
    else
    return "false";
}

//console.log(isMultipleOfThree(9));
//console.log(isMultipleOfThree(5));

/*
10.  Write a function which takes in a number as input and returns
 it after multiplying by 10.
/ Your ES6 code here
console.log(multiplyByTen(20)) // 200
console.log(multiplyByTen(40)) // 400
*/
const multiplyByTen=(num)=>{
    return num*10;
}
//console.log(multiplyByTen(20));
//console.log(multiplyByTen(40));

/*
11.  Console individual values of the product object using 
 object destructuring.
const product = {
title: 'iPhone',
price: 5999,
description: 'The iPhone is a smartphone developed by Apple',
}
/ Your ES6 code here
console.log(title) // iPhone
console.log(price) // 5999
console.log(description) // The iPhone is a smartphone developed
by Apple
*/

const product = {
title: 'iPhone',
price: 5999,
description: 'The iPhone is a smartphone developed by Apple',
};
const{title, price, description}=product;

//console.log(title);
//console.log(price);
//console.log(description);

/*
12. Create an object book with properties title, author, and  pages.
Create a function getBookDetails that takes a book  object as a 
parameter and returns if the book has more than  100 pages. 
/ Your ES6 code here
console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book)) // logs 'false' if the pages are 100 or below
*/
const book= {
title: 'three men in a boat',
author: 'novel',
pages:155,
};
const getBookDetails=(book)=>{
if(book.pages>100)
    return "true"
else
return "false" 
}
//console.log(getBookDetails(book));

/*
13.  Create a function changeOccupation that takes an object person and a string newOccupation as
parameters, and changes the occupation property of the person object to the newOccupation.
Log the person object to the console before and after calling the function.
/ Your ES6 code here
console.log(person) // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to
changeOccupation(person, 'Product Manager')
console.log(person) // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to t
*/
const person={
name: "Amit",
age:25,
occupation:"Software Engineer",
};
console.log(person);

const changeOccupation=(person,newOccupation)=>{
    return (person.occupation=newOccupation);
};

console.log(changeOccupation(person, "product Manager"));
console.log(person);

