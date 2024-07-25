console.log("we use a loop to perform a repeated action!");

let obj = {
    name: "shesh raj",
    role: "programmer",
    company: "leo the GOAT web development"
}

// Looping through the object properties
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// Defining a string to loop through its characters
let harry = "Harry Potter";

for (const c of harry) {
    console.log(c);
}
