// The block  level  scope
//let 
let age = 20;

if(true)
{
    let age = 27;
    console.log(age);
}

console.log(age);

// const 

const AGE = 27;

if(true)
{
    const   AGE = 20;
    console.log(AGE);
}
console.log(AGE);


// while const of primituve type throws error on change but not in reference type

const ARRAY = [ 1,2,4,5 ];
ARRAY.push(6);
console.log(ARRAY);


// hoisting in var type

name = "soap";
console.log(name);
var name;
