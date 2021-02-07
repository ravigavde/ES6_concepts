// a new primitive type introduced in es6, it provoides unique identifier(so overwriting can be voided)
//can add properties to object

let symbol = Symbol("age")
let symbol2 = Symbol("id")

let obj = {
    name:"abc",
    [symbol] : 12
}

console.log(obj);