// let btn1=document.querySelector('#btn1');
// btn1.onclick =()=>{
//     console.log("btn1 was clicked ");
// }

let modeBtn = document.querySelector("#btn1");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    } else {
        currMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
});

