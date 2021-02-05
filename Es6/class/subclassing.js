class ConvertedArray extends Array{
    find(value){
        let findIndex = 0;
        this.forEach((element, index) => {
            if(value == element)
            {
               findIndex = index;
            }
        });
        return( findIndex );
    }
    remove(value){
        let number = 0;
        this.forEach((element,index) => {
            if(value == element)
            {
                number = index;
            }
        });
        this.splice(number,1);
    }
}
let array = new ConvertedArray(); 

for(let i =0 ; i < 10 ; i++)
{
    array.push(i);
}
console.log( array.find(9));
array.remove(7);
console.log(array);
