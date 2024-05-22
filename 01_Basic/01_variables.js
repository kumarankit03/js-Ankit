const accountId = 144558
let accountEmail = "Ankitkr7677@gmail.com"
var accountPassword = "23456"
accountCity = "jaipur"
let accountState;
/*
preser not to use var
because of the issue of block scope and functional scope
*/

//accountId = 2 // not allowed to change becaues it is constant variables
console.log(accountId);
accountEmail = "ravi@gmail.com"
accountCity = "ranchi"
console.table([accountId,accountEmail,accountCity,accountPassword,accountState])