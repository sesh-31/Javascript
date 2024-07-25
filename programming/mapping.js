let arr=[1,2,3,4,5];
let newarr=[];
for(let index=0; index< arr.length; index++){
    const element=arr[index];
    newarr.push(element**2);

}
console.log(newarr);
//here we are performing operations in the array so this called mapping of array 

// but wait a minute we also can this by the help of new function called as arr.map(); 
// newarr.filter(greaterThanThree);
const greaterThanThree = (e)=>{
    if(e>3){
        return true;
    }
    return false;
}
// newarr.filter(greaterThanThree);
console.log(arr.filter(greaterThanThree));
