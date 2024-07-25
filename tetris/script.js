const grid= document.querySelector(".grid");

let squares = Array.from(document.querySelectorAll('.grid div'));

// let count=0;
const width=10;
// for(i=0; i<200; i++){
//     squares[i].textContent=count;
//     count++;
// }



//shapes
const  lShape = [
    [1, width,width*2, width*2+1],
    [width,width+1,width+2,width*2+2],
    [1,width+1,width*2+1,width*2],
    [width,width*2,width*2+1,width*2+2]
];
const zShape = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
];

const tShape = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
];
const oShape = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
];
const iShape = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
];
const theShapes =[lShape,zShape,oShape,tShape,iShape];

let currentPosition =5;
let currentRotation =4;

//Randomly selecting shapes : 

// let currentShape = theShapes[1][2];// first ma z shape ani particular rotation of z shape 

//Draw the shapes : 
let random=Math.floor(Math.random()*theShapes.length)//theShapes.length=4;

let currentShape = theShapes[random][0];
function draw(){
    currentShape.forEach((index) =>{
        squares[currentPosition+index].style.background='red';
    })
}
//erase shape: 
function erase(){
    currentShape.forEach((index)=>{
        squares[currentPosition+index].style.background ='';
    })
}
//movedown 
function moveDown(){
     erase()
    currentPosition += width
}
draw();




