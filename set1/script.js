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
6.   Write a function that takes a string as input and determines if it is longer than 5 characters.
/ Your ES6 code here
console.log(checkLength('Programming')) // more than 5 characters
console.log(checkLength('Jeep')) // less than 5 characters
*/
const checkLength=(string)=>{
    

} 