var user =require("readline-sync").question("enter the action:")
var computer =require("readline-sync").question("enter the action:")
if (user==computer){
    console.log("both players are selected:'its a tie");
}
else if (user=="paper"){
    if(computer=="rock")
        console.log("paper cover the rock'user(paper) win'")
    else 
        console.log("scssior cuts the  paper 'user(paper) lose'")
}
else if (user=="scissor"){
    if(computer=="paper")
        console.log(" scissor cut the paper 'user(scissor) wins'")
    else
        console.log("rock beats the scssior'user(scissor) lose")
}
else if (user=="rock"){
    if(computer=="scissor")
        console.log("rock beats scissor 'user(rock) wins'")
    else
        console.log("paper cover the rock'user(rock) lose")
}

