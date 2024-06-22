/*
1. Write an ES6 function that accepts an array of integers and returns
 the maximum element in the array. Avoid using in-built methods.
 / Your ES6 code here
let array = [4, 78, 8, 3, 6, 0, 12, 34]
console.log(getMaxElement(array)) // 78
*/
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
console.log(getMaxElement(array));

/*
2.  Write an ES6 function that takes an array of numbers and returns 
the average of all the numbers. Avoid using in-built methods.
/ Your ES6 code here
console.log(calculateAverage([1, 2, 3, 4, 5])) // 3
*/
const calculateAverage=(arr)=>{
    let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        let average=sum/arr.length;
        return average;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));

/*
3.  write an ES6 function that takes an array of numbers and converts
    even numbers to odd numbers by adding 1 to that number.
      / Your ES6 code here
    var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(convertEvenToOdd(numArr))
    / [1, 3, 3, 5, 5, 7, 7, 9, 9]*/





    /*
    4. write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.
  / Your ES6 code here
var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community']
console.log(filterWords(words)) // ["repeat", "community"]
*/





/* 
5.  Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.
/ Your ES6 code here
console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']))
/ ["EAT", "SLEEP", "CODE", "REPEAT"]
*/

