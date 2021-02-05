class Employee{
    constructor(id,name,address){
         this._id  = id;
         this._name = name;
         this._address = address;
    }

    getName(){
        return(this._name);
    }
    getId(){
        return(this._id);
    }
    getAddress(){
        return(this._address);
    }

    setName(name){
        this._name = name;
    }
    setId(id){
        this._id = id;
    }
    setAddress(address){
        this._address = address;
    }
}

let first = new Employee();
first.setName("Price");
first.setId(12);
first.setAddress("KIA");

console.log( first.getName());
console.log( first.getId());
console.log( first.getAddress());

console.log( first.name);
