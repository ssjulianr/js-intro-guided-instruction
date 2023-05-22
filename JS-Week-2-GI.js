//VERY EASY 

function min(firstNum, secondNum){
    if (firstNum < secondNum)
    return firstNum;
    else 
    return secondNum;
}
console.log("VERY EASY: The min number is: " + min(7, 5));




//EASY 

let students = [
    ["Rebecca", "Adam", "Jamal"],
    [ "Nunez", "Silver", "Perez"],
    [ 22, 19, 23 ],
];

console.log(`EASY: Hello my name is ${students [0][1]} ${students [1][1]}, and I'm ${students [2][1]} years old!`);




//MEDIUM 

function pullMonths(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }
  
console.log("MEDIUM: " + pullMonths(9)); 




//HARD 


//Tom's Height
const tomHeight = (9);

//Tom's Mass 
const tomMass = (8);

//Tom's BMI 
const tomBMI = (tomMass / tomHeight **2);

//Jerry's Height
const jerryHeight = (10);

//Jerry's Mass 
const jerryMass = (45);

//Jerry's BMI 
const jerryBMI = (jerryMass / jerryHeight **2);

//Comparison Function w Ternary Operator 
const compare = (tomBMI > jerryBMI ? console.log("HARD: Tom has a higher BMI") : console.log("HARD: Jerry has a higher BMI"));