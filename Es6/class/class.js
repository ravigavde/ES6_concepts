class Human
{
    constructor(gender)
    {
        this.gender = gender;
    }

    showGender()
    {
        console.log("this human is a "+this.gender);
    }
}

class Alien extends Human
{
    constructor(gender,name)
    {
        super(gender);
        this.name = name;
        this.showName();
        super.showGender();
    }

    showName()
    {
        console.log("this is alien name is "+this.name);
    }

    static answer(){
        console.log("this is a nice scenario to use the static method");
    }
}

let jaadu = new Alien("male","rohit");
// console.log( jaadu.__proto__ === (new Alien('male')).__proto__ );
Alien.answer();