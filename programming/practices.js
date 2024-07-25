
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

function listArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}
listArrayItems(colors); //display all items in the array at once

//arrow function :
const sum = (a, b) => {
    return a + b;
}
console.log("the sum is sum", sum(9, 4));
//   create a function using the “function “ keyword that takes a string as an argument and
//  returns the number of vowels in the strings.

// vowels=['a','e','i','o','u'];
// function countVowels(str) {
//     let count = 0;
//    for(var i=0; i<str.length; i++){
//     if(vowels.indexOf(str[i])>-1){
//         count++;    
//         }
//    }
//    console.log(count);
// }
// countVowels("hello");

// by using arrow function
const countVowels = (str) => {
    let count = 0;
    for (const char of str) {
       if (char == 'a'|| char=='e'|| char=='i' || char=='o'|| char=='u'){
        count++;
       }
    }
    console.log(count);
}
countVowels("hello");
    console.log();

let array =[1,2,3,4,5,6];
array.forEach(val =>{
    console.log(val);
})
let arr1=["hello","master", "king"];

arr1.forEach((val,idx)=>{
    console.log(val.toUpperCase(),idx);
    });
    
 let newArr=array.map((val)=>{
        return val*3;
    })
    
console.log(newArr);
    //filter: 
let newArra = array.filter((val)=>{
    return val%2===0;
   });   
   console.log(newArra);
   
const array1=[1,3,5,7];
const initialValue =0;
const sumWithInitial = array1.reduce((res,currVal)=>{  
 return res+currVal;
 });
 console.log(sumWithInitial);
//  const array2=[1,3,5,7];
 const findMaxElement = array1.reduce((prev,currVal)=>{
   if(prev>currVal){
    return prev;
   }
   else{
    return currVal;
    }
 });
 console.log(findMaxElement);

 //we are given array of marks of the students. Filter out of the marks of students that scored 90 + . 
 let marks=[94,98,70,6,93,40,30,92,10];
 let newMarks = marks.filter((result)=>{
   if(result>90){
    return result;
   }
});
console.log(newMarks);

// take a number n as input from user . Create an array of numbers from 1 to n. use a reduce method to calcute the 
// sum of all the numbers in the array.
// product of all numbers in the array.
let n=prompt("enter the number: ");
let array3=[];
for(let i=0; i<n; i++){
     array3[i-1]= i;
}
console.log(array3);
// sum of all the numbers in the array.
let sumOf = array3.reduce((prev,currVal)=>{   
    return prev+currVal;
    });
    console.log(sumOf);   
    // product of all numbers in the array.
    let product = array3.reduce((prev,currVal)=>{
         return prev*currVal;
         });
        
         console.log(product);
//DOM (Document object model ): 
// sabai thok indexDOM1.html ma afharit xa !
