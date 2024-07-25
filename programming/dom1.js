console.log("hello world !");
window.console.log("hello2");

//we don't specify window object it is already avialable in browser .
//we can use window object to access global variables, functions ......
// console.log(window.document);
// console.log(window.html);

// let heading=document.getElementById("header");//h1;
// console.log(heading);
// let headings=document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);
// // let para=document.getElementsByTagName("p");
// // console.log("para");
// let elements=document.querySelector("p");
// console.log(elements);
// let para=document.querySelector("p");
// console.log(para);

let newbtn=document.createElement("button");
newbtn.innerHTML="click me";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.getElementById("learning").after(newbtn);