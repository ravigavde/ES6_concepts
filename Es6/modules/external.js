let msg = "This message is from external js file";

 function add(one,two)
 {
     console.log("Addition is " , one+two);
 }
 
export { msg,add};