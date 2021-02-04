//lets look at some of the loops for the arrays 
let array = [ 1,2,3,4,5,5,6,7]

//tradional for loop
for (let i = 0 ; i < array.length ; i++)
{
    console.log(array[i]);
    break;
}
console.log("\n\n");
// for each , optionally we can have index as a paramater with element  and we cannot break or continue the forEach loop

array.forEach((element)=>{
    console.log(element);
})

console.log("\n\n");
// for of loop -- we can use break or continue statments for this loop

for(let item of array )
{
    console.log(item);
}


// destructuring array
//we need some data of array 

let someData = [1,2,3, 4];

let [a, , b, c, d="default" ] = someData; // defaults can also be used if the array positions does not exists

console.log(a,b,c,d);

// swapping two numbers
let a1 = 10;
let b1 = 20;

[b1, a1] = [a1, b1]

console.log(a1, b1);


// destructuring objects
    // but here we need to specify the property name correctly, in destructuring, or else if we need another name we can use alias for the property
let COD = {
    version: 1,
    release: 2001,
    characters: "lutfafe"
};

let { version : ver, release, characters = "Price, Ingram, Vazilli " } = COD;

console.log(ver , release, characters);

// for array we use the position and for the object we use the property name for the destructuring
