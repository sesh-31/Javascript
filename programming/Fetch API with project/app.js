//API stands for Application programming interface
//API is a set of rules that allow two software programs to communicate with each other.

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#cats_fact");
const btn=document.querySelector("#catsFactButton");

const getFacts = async()=>{
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    factPara.innerText=data[ Math.floor(Math.random() * 5)].text;
}
btn.addEventListener("click",getFacts);
