//primitive
//7 types: string, number, boolean,null, undefined,symbol,BigInt
// refrence (nonprimitive)
// arrays,objects,functions
const score=100
const scorevalue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=symbol('123')
const anotherId=symbol('123')
console.log(id===anotherId)
const bigNumber=345678986543322n
const heros=["shaktiman", "naagraj","doga"]
let myObj={
    name:"nitya",
    age:22
}
const myFunction = function()
{
    console.log("Hello world")
}
console.log(typeof bigNumber);