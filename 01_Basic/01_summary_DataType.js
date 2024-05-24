/*
Data type is of two type primitive type and non primitive type(reference type

)
*/


// primitive type
//7 types :string , Number , Boolean,null,undefined,symbol,BingInt



//reference (Non-primitive)type
//Array , Object ,Function

// How we define symbol
const id = symbol('123')
const anotherid = symbol('123')
console.log(id==anotherid)//symbole cannot be same it always have unique identity


//how we denote bingInt

const BigNumber = 234567890234567892345678923456789n//with the help of n

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stcak memory(primitive data type mai use hoti) , Heap (non-primitive data type)
 let myname = "ANkit"
 let anothername = myname
anothername = "Rohit"
console.log(myname)
console.log(anothername)
//in these value of my name doesnot change because it give the copy of oorignal name

//heap
let userOne = {
    email: "kumarankitak@gmail.com",
      upi :"saadcjn@ybl"
}
let userTwo = userOne
userTwo.email = "ankitkr9899@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
//value change because it done no create the copy it deal with the  main number

