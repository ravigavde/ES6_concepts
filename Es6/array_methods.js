// for iterating over an array has different methods, 
// filter :- as the name suggest the filter method is used to filter data and create a new array

let orignal = [1,2,3,4,5,6,7,8,9,10];

let evenFiltered = orignal.filter((value)=>{
    if(value % 2 === 0)
    {
        return true;
    }
});
console.log(evenFiltered);
// when the condition is true the value is then returned and then we can create the desired result in an array

// map 
// map will map values and if we want to perform actions we can do on targeted values
// here we are returning the square of all the values returned

let mappedValue = orignal.map( value => value*value );
console.log(mappedValue);

//reduce
let reducedValues = orignal.reduce((a,b) => a+b );
 console.log( reducedValues );


 // let us consider a situation 
 // now we have to calculate the sum of all orders placed by user with id = 1
 // first we will filter out the obj's with id = 1
 // then we will map the amount of each order 
 // lastly we will reduce the final array by adding all the order amount

 let orders = [ 
    {
        id: 1,
        name:"abc",
        amount:20
    },
    {
        id: 2,
        name:"bac",
        amount:30
    },
    {
        id: 1,
        name:"abc",
        amount:40
    },
    {
        id: 2,
        name:"bac",
        amount:50
    },
    {
        id: 1,
        name:"abc",
        amount:60
    },
    {
        id: 2,
        name:"bac",
        amount:70
    }
] 

let totalForFirstUser = orders.filter((order)=>{                   //filter
    if(order.id == 1)
    {
        return true;
    }   
})
.map((order)=> order.amount)                                        //map
.reduce((amount1,amount2)=> amount1 + amount2);                     //reduce

console.log( totalForFirstUser  );


