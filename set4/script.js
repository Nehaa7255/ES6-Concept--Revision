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
    */
   