//Inquirer (node package manager) imported
const inquirer = require("inquirer");
//File system module (node package manager) imported
const { writeFile } = require("fs").promises;
//Importing all the classes from the shapes.js file
const { Triangle, Circle, Square } = require("./lib/shapes");
//Importing the generateLogo file
const generateLogo = require("./lib/generateLogo");

//Declaring colors to use later in choices
const red = "#FF0000";
const blue = "#0000FF";
const green = "#008000";
const white = "#FFFFFF";
const black = "#000000";
const pink = "#ff69b4";

//Starting inquirer.js in the terminal
const startInquirer = async () => {
  console.log("It's Time! Generating your SVG logo!");

  try {
    const userInputs = await inquirer.prompt([]);
    //generate the logo using the data from above and the generateLogo.js file
    const results = generateLogo(userInputs);

    //write the file to be in the ./examples folder
    await writeFile("./examples/logo.svg", results);

    console.log("Your SVG logo is alive!");
  } catch (error) {
    console.log(error);
  }
};

startInquirer();
