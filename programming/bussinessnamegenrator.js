let rand=Math.random();
let first , second, third
// generating first word
if(rand<0.33){
    // 0 0.33 0.66 1
    first ="crazy"    
}
else if(rand<0.66 &&rand>=0.33){
    first="amazing";

}
else{
    first="fire";
}
//generating second word
// rand = Math.random(); if you want 1st 1st 1st then don't write this other wise it is compulsory
if(rand<0.33){
    // 0 0.33 0.66 1
    second="engine"    
}
else if(rand<0.66 &&rand>=0.33){
    second="foods"
}
else{
    second="garments"
}
//Generating third word 
// rand = Math.random();
if(rand<0.33){
    // 0 0.33 0.66 1
    third="bros"    
}
else if(rand<0.66 &&rand>=0.33){
    third="limited"

}
else{
    third="Hub";
}
console.log(`${first} ${second} ${third}`);