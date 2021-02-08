// promises are used whenever async tasks are performed 
// simply if the task is completed promise is fulfilled or else it is rejected

let promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Done!!1");
    }, 2000);
    setTimeout(() => {
        reject("Not Done!! 1");
    }, 3500);
});

let promise2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Done!!2");
    }, 1000);
    setTimeout(() => {
        reject("Not Done!!2");
    }, 1000);
});

// promise1.then((value) => {
//     console.log(value);    
// }).catch((error) => console.log( error) )


// promise2.then((value) => {
//     console.log(value);    
// }).catch((error) => console.log( error) ) 

//all if we want to moniter both the promise to resolved  at one another
Promise.all([promise1,promise2]).then((msg)=> console.log(msg)).catch((msg)=> console.log(msg));

//race if we want to moniter out of two which gets resolved first
Promise.race([promise1,promise2]).then((msg)=> console.log(msg)).catch((msg)=> console.log(msg));

