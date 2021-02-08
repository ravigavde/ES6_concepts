//tasks which need to execute parallely or async to the normal execution, we use async
    //await gives priority to the other statments and after all stack is clear then sees the await is done or not

function doSomething(msg)
{
    return new Promise((resolve,reject)=>{
        if(msg == "done")
        {
            resolve("all work is done");
        }
        else
        {
            reject("that didn't went well!!");
        }
    });
}    

//this way we can work with promises

doSomething("done").then((response)=>{
    console.log("work is done paramaters are correct");
}).catch((error)=>{
    console.log("work is not finished try again");
});

//but this seems to have a bit of complexity, to make it simple we use async

async function doWork(){
    try{
        console.log("in async function");
        let response = await doSomething("somenthing else ");
        console.log(response);
        console.log("exited async function");
    } 
    catch (error) {
        console.log(error);
    }

}
console.log("see the console for this statement when it gets executed!!!");
doWork();
