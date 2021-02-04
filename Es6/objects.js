// // understanding objects 

// let person = {
//     name : "Price",
//     role : "gunner",
//     show(){
//         console.log(this.name +" is a " + this.role );
//     }
// }
// console.log("this is a example of a simple object with name and role as properties \n\n");
// console.log( person);
// person.show();


// // now we will share the function show of person objetc with the person 2 

// let person2  = {
//     name: "Soap ",
//     role: "Sniper"
// }
// person.show.call(person2);

// // another feature is adding a new property 
//     //to add a new property prototype is used, here in case we added nationality 
// function human(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
  
//   human.prototype.nationality = "English";

//   let zoonotics = new human("aa", "bb", 23, "blue")
//   console.log(zoonotics.nationality);

