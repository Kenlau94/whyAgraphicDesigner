//Inquirer (node package manager) imported
const inquirer = require("inquirer");
//File system module (node package manager) imported
const { writeFile } = require("fs").promises;
//Importing all the classes from the shapes.js file
const { Triangle, Circle, Square } = require("./lib/shapes");
//Importing the generateLogo file
const generateLogo = require("./lib/generateLogo");

startInquirer();
