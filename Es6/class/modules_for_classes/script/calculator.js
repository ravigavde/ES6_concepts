 export class Calculator{
    constructor()
    {
        this.number1 = 0;
        this.number2 = [];
    }

    addNumbers(number1, ...number2)
    {
        let result = number1;
        number2.forEach((element) => {
            result += element;
        });
        return(result);
    }
    
    multiplyNumbers(number1, ...number2)
    {
        let result = number1;
        number2.forEach((element) => {
            result *= element;
        });
        return(result);
    }

    subtractTwoNumber(number1,number2)
    {
        return(number1 - number2);
    }

    divideTwoNumbers(number1,number2)
    {
        if(numeber2 <= 0 )
        {
            console.log("Enter second number non zero");
        }
        else
        {
            return(number1/number2);
        }
    }

}
