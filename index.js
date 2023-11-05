// //Inquirer (node package manager) imported
// const inquirer = require("inquirer");
// //File system module (node package manager) imported
// const { writeFile } = require("fs").promises;
// //Importing all the classes from the shapes.js file
// const { Triangle, Circle, Square } = require("./lib/shapes");
// //Importing the generateLogo file
// const generateLogo = require("./lib/generateLogo");

// //Declaring colors to use later in choices
// const red = "#FF0000";
// const blue = "#0000FF";
// const green = "#008000";
// const white = "#FFFFFF";
// const black = "#000000";
// const pink = "#ff69b4";

// //Starting inquirer.js in the terminal
// const startInquirer = async () => {
//   console.log("It's Time! Generating your SVG logo!");

//   try {
//     const userInputs = await inquirer.prompt([
//       //First question to ask the shape the user wants to use for the logo
//       {
//         name: "shape",
//         type: "list",
//         message:
//           "What shape would you like your logo to be? Please choose one of the following:",
//         choices: [Circle, Square, Triangle],
//       },
//       //Second question for the color of the logo
//       {
//         name: "shapeColor",
//         type: "list",
//         message:
//           "Please select the color you would like your logo shape to be:",
//         choices: ["Red", "Blue", "Green", "White", "Black", "Pink"],
//       },
//       //Third question for the logo for characters
//       {
//         name: "text",
//         type: "input",
//         message:
//           "Please enter the text you would like to display inside the logo (1-3 characters only):",
//         validate: (letters) => {
//           //Adding a check to validate that the text entered is not longer than 3 characters
//           if (letters && letters.length <= 3) {
//             return true;
//           } else {
//             console.log(
//               "Please only enter a max of 3 characters for your logo"
//             );
//             return false;
//           }
//         },
//       },
//       //Fourth question for the logo for color of the logo
//       {
//         name: "textColor",
//         type: "list",
//         message:
//           "Please select the color you would like your text color to be:",
//         choices: ["Red", "Blue", "Green", "White", "Black", "Pink"],
//       },
//     ]);
//     //generate the logo using the data from above and the generateLogo.js file
//     const results = generateLogo(userInputs);

//     //write the file to be in the ./examples folder
//     await writeFile("./examples/logo.svg", results);

//     console.log("Your SVG logo is alive!");
//   } catch (error) {
//     console.log(error);
//   }
// };

// startInquirer();

//p
// import("inquirer")
//   .then((inquirer) => {
//     const { writeFile } = require("fs").promises;
//     const generateSVG = require("./lib/generateSVG");
//     const validateColor = require("validate-color").default;

//     // Function to start inquirer.js in terminal
//     const promptInquirer = async () => {
//       console.log("Generate an SVG logo!");

//       try {
//         const data = await inquirer.prompt([
//           // ... (rest of your code remains the same)
//         ]);

//         const result = generateSVG(data);

//         // fs.promises.writeFile() to the ./dist folder
//         await writeFile("./dist/logo.svg", result);

//         console.log("SVG logo generated!");
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     promptInquirer();
//   })
//   .catch((error) => {
//     console.error(error);
//   });=]

// CommonJS import statements; validate-color package installed for HTML color validation
// const inquirer = require("inquirer");
// const { writeFile } = require("fs").promises;
// const generateSVG = require("./lib/generateSVG");
// const validateColor = require("validate-color").default;

//atempt code 3
// import { writeFile } from "fs/promises";
// import generateSVG from "./lib/generateSVG.js";
// import validateColor from "validate-color";

// // Function to start inquirer.js in terminal
// const promptInquirer = async () => {
//   console.log("Generate an SVG logo!");

//   try {
//     const inquirer = await import("inquirer");
//     const data = await inquirer.prompt([
//       {
//         name: "text",
//         type: "input",
//         message:
//           "Enter a text you would like to display in the logo. (Please enter 1-3 characters):",
//         validate: (letters) => {
//           // Checks to see if text inputed is within 3 characters
//           if (letters && letters.length <= 3) {
//             return true;
//           } else {
//             console.log(
//               "\nPlease enter a text for your logo (between 1-3 characters)"
//             );
//             return false;
//           }
//         },
//       },
//       {
//         name: "textColor",
//         type: "input",
//         message: "What color would you like the text to be?",
//         validate: (textColor) => {
//           // Checks color validation for text input using validate-color
//           const colorCheck = validateColor(textColor);

//           if (textColor && colorCheck) {
//             return true;
//           } else {
//             console.log(
//               "\nPlease enter a valid HTML color, hex, rgb, hsl, hwb, etc."
//             );
//             return false;
//           }
//         },
//       },
//       {
//         name: "shape",
//         type: "list",
//         message: "Shape of the logo? Choose one of the following:",
//         choices: ["Triangle", "Circle", "Square"],
//       },
//       {
//         name: "shapeColor",
//         type: "input",
//         message: "What color would you like the shape to be?",
//         validate: (shapeColor) => {
//           // Checks color validation for shape color using validate-color
//           const colorCheck = validateColor(shapeColor);

//           if (shapeColor && colorCheck) {
//             return true;
//           } else {
//             console.log("\nPlease a valid HTML color, hex, rgb, hsl, hwb, etc");
//             return false;
//           }
//         },
//       },
//     ]);
//     const result = generateSVG(data);

//     // fs.promises.writeFile() to the ./dist folder
//     await writeFile("./dist/logo.svg", result);

//     console.log("SVG logo generated!");
//   } catch (error) {
//     console.log(error);
//   }
// };

// promptInquirer();

// CommonJS import statements; validate-color package installed for HTML color validation
const inquirer = require("inquirer");
//import("inquirer").then((inquirer) => {
const { writeFile } = require("fs").promises;
const generateSVG = require("./lib/generateSVG");
const validateColor = require("validate-color").default;
//});

// Function to start inquirer.js in terminal
const promptInquirer = async () => {
  console.log("Generate an SVG logo!");

  try {
    const data = await inquirer.prompt([
      {
        name: "text",
        type: "input",
        message:
          "Enter a text you would like to display in the logo. (Please enter 1-3 characters):",
        validate: (letters) => {
          // Checks to see if text inputed is within 3 characters
          if (letters && letters.length <= 3) {
            return true;
          } else {
            console.log(
              "\nPlease enter a text for your logo (between 1-3 characters)"
            );
            return false;
          }
        },
      },
      {
        name: "textColor",
        type: "input",
        message: "What color would you like the text to be?",
        validate: (textColor) => {
          // Checks color validation for text input using validate-color
          const colorCheck = validateColor(textColor);

          if (textColor && colorCheck) {
            return true;
          } else {
            console.log(
              "\nPlease enter a valid HTML color, hex, rgb, hsl, hwb, etc."
            );
            return false;
          }
        },
      },
      {
        name: "shape",
        type: "list",
        message: "Shape of the logo? Choose one of the following:",
        choices: ["Triangle", "Circle", "Square"],
      },
      {
        name: "shapeColor",
        type: "input",
        message: "What color would you like the shape to be?",
        validate: (shapeColor) => {
          // Checks color validation for shape color using validate-color
          const colorCheck = validateColor(shapeColor);

          if (shapeColor && colorCheck) {
            return true;
          } else {
            console.log("\nPlease a valid HTML color, hex, rgb, hsl, hwb, etc");
            return false;
          }
        },
      },
    ]);
    const result = generateSVG(data);

    // fs.promises.writeFile() to the ./dist folder
    await writeFile("./dist/logo.svg", result);

    console.log("SVG logo generated!");
  } catch (error) {
    console.log(error);
  }
};

promptInquirer();
