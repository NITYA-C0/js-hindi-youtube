// //primitive
// //7 types: string, number, boolean,null, undefined,symbol,BigInt
// // refrence (nonprimitive)
// // arrays,objects,functions
// const score=100
// const scorevalue=100.3
// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;

// let mySymbol = Symbol("id");
// console.log(typeof mySymbol); // symbol
// console.log(id===anotherId)
// const bigNumber=345678986543322n
// const heros=["shaktiman", "naagraj","doga"]
// let myObj={
//     name:"nitya",
//     age:22
// }
// const myFunction = function()
// {
//     console.log("Hello world")
// }
// console.log(typeof bigNumber);
// memory in javascript there are two types of memory allocation (stack,heap)
// stack(primitive) and heap (nonprimitive)
let myyoutubename="nitya.com"
let anothername=myyoutubename

anothername="chai aur code"
console.log(myyoutubename)
console.log(anothername)

let userone={
    email:"nnityadubey@gmail.com",
    upiid:"user@ybl"
}
let usertwo=userone
usertwo.email="keshav08@gmail.com"
console.log(userone.email)
console.log(usertwo.email)