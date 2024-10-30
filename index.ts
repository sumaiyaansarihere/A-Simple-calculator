import inquirer from "inquirer";

async function calculate() {
  const answer: { 
      number1: number; 
      number2: number;
      operator: string;
  } = await inquirer.prompt([
      {
          type: "number",
          name: "number1",
          message: "Enter the first number:",
      },
      {
          type: "number",
          name: "number2",
          message: "Enter the second number:",
      },
      {
          type: "list",
          name: "operator",
          message: "Select an operator:",
          choices: ["+", "-", "*", "/"]
      }
  ]);

  const { number1, number2, operator } = answer;

  if (number1 !== undefined && number2 !== undefined && operator) {
      let result: number = 0;
      
      if (operator === "+") {
          result = number1 + number2;
      } else if (operator === "-") {
          result = number1 - number2;
      } else if (operator === "*") {
          result = number1 * number2;
      } else if (operator === "/") {
          result = number2 !== 0 ? number1 / number2 : NaN;  // Avoid division by zero
      }

      if (isNaN(result)) {
          console.log("Error: Division by zero is not allowed.");
      } else {
          console.log("Your result is: " + result);
      }
  } else {
      console.log("Please provide valid inputs.");
  }
}

calculate();
