import inquirer from "inquirer";

const answer:{number1:number,
   number2:number,operator:string}= await inquirer.prompt([
{
    type:"number",
    name:"number1",
    message:"Enter your first number:"
},
{
    type:"number",
    name:"number2",
    message:"Enter your second number:"
},
{
    type:"list",
    name:"operator",
choices: ["+","-","/","*","**","%"],
message:"select operator"
}
])
const {number1,number2,operator}=answer
if(number1&&number2&&operator){
    let result=0;
    if(operator==="+"){
        result=number1+number2
    }else if(operator==="-"){
        result=number1-number2
    }else if(operator==="*"){
        result=number1*number2
    }else if(operator==="/"){
        result=number1/number2
    }else if(operator==="%"){
        result=(number1/number2)*100
    }else if(operator==="**"){
        result=number1**number2
    }console.log("Your result is:",result);
    }

else{console.log("Please enter the valid value");
}





















