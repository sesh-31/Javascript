// console.log("one");
// console.log("two");


// function hello(){
//     console.log("Hello");
// }
// setTimeout(hello, 2000)//timeout 2s= 2000 just work on millisecond 

// console.log("three");


// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// }
// calculator(2,3,sum);//sum ma without parenthesis pass garnu parnea xa . 


//  the nested means : 

// let age = prompt("Enter your age");
// age = Number(age); // Convert the input to a number

// if (age >= 18) {
//     if (age >= 60) {
//         console.log("You are old");
//     } else {
//         console.log("Middle-aged");
//     }
// } else {
//     console.log("You are a child");
// }

// when we are dealing with callbacks nested then a problem may arise and known as callback hell 

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1,()=>{
//     getData(2);
// });



// let promise = new Promise((resolve , reject )=>{
//     console.log("i am a promise")
//     resolve(123);
// });

// const getPromise = ()=>{
//     return new Promise((resolve , reject )=>{
//         console.log("i am a promise")
//         resolve("success");
//         // reject("error");
//     });
// }

// let promise=getPromise();
// promise.then(()=>{
//     console.log("promise fullfilled");
// })

// promise.catch(()=>{
//      console.log("promise rejected");
//  })

// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1")
//             resolve("success"); 
//             },2000);
//             });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2")
//             resolve("success"); 
//             },2000);
//             });
// }
// console.log("fetching data1")
// let p1= asyncFunc();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2")
//     let p2= asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//         })
// });


//Async awiats : 
function getData(dataId){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
    }, 2000);
});
}

// getData(1)
// .then(()=>{
//     console.log("data1");
//     getData(2)
//     .then(()=>{
//         console.log("data2");
//     });
// });

async function getAllData(){
    console.log("getting Data 1");
    await getData(1);
    console.log("getting Data 2");
    await getData(2);
    console.log("getting Data 3");
    await getData(3);

}

getAllData();