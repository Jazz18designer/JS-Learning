const accountId = 12345 //The value of a "const" can not change in future once declared.
let accountEmail = "aakash@google.com"
var accoundPass = "692081" //The value of a "var" can not change in future once declared.
accountCity = "Jaipur"

let accountState;

/*
Prefer not use var
because of issue in block scope and functional scope
*/


console.log("accountId")

console.table([accountId,accountEmail,accoundPass,accountCity,accountState])