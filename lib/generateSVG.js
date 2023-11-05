// //Importing all classes from the shapes.js file
// const { Triangle, Circle, Square } = require("./shapes");

// // //Creating instances of the imported classes
// // const triangle = new Triangle();
// // const circle = new Circle();
// // const square = new Square();

// //Defining function named generateLogo that takes an object as a param to store the text, textColor, shape, and shapeColor
// const generateLogo = ({ text, textColor, shape, shapeColor }) => {
//   //Storing the final SVG markup string
//   let markup = "";

//   //Creating a SVG file using markup file with inquirer.js
//   markup += //w3 for the win again!
//     '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

//   //Creating an instance of the Circle class object and set the shape color. Calling the render() method on object to return the string
//   if (shape === "Circle") {
//     circle.setColor(shapeColor);
//     const results = circle.render();
//     markupFile += results;

//     //Creating an instance of the Square class object and set the shape color. Calling the render() method on object to return the string
//   } else if (shape === "Square") {
//     square.setColor(shapeColor);
//     const results = square.render();
//     markupFile += results;

//     //Creating an instance of the Triangle class object and set the shape color. Calling the render() method on object to return the string
//   } else {
//     triangle.setColor(shapeColor);
//     const results = triangle.render();
//     markupFile += results;
//   }

//   //Set all the inquirer text input to all uppercase and adding font family
//   markup += `<text x="150" y="100" font-size="35" text-anchor="middle" style="font-family: 'Open Sans', sans-serif;" fill="${textColor}">${text.toUpperCase()}</text></svg>`;

//   //returning the markup file
//   return markup;
// };

//atempt 4
// const { Triangle, Circle, Square } = require("./shapes");

// // Generates an SVG markup; inquirer.js object keys destructored in function parameters
// const generateSVG = ({ text, textColor, shape, shapeColor }) => {
//   // Variable to store final SVG markup string
//   let markupFile = "";

//   markupFile +=
//     '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

//   // Create an instance of the class object accordingly, and set the shape color; call render() method on object to return string
//   if (shape === "Triangle") {
//     const triangle = new Triangle();
//     triangle.setColor(shapeColor);
//     const result = triangle.render();
//     markupFile += result;
//   } else if (shape === "Circle") {
//     const circle = new Circle();
//     circle.setColor(shapeColor);
//     const result = circle.render();
//     markupFile += result;
//   } else {
//     const square = new Square();
//     square.setColor(shapeColor);
//     const result = square.render();
//     markupFile += result;
//   }

//   // Set the text input from inquirer data to all uppercase for display; font-family changed
//   markupFile += `<text x="150" y="125" font-size="35" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" fill="${textColor}">${text.toUpperCase()}</text></svg>`;

//   return markupFile;
// };

// module.exports = generateSVG;

const { Triangle, Circle, Square } = require("./shapes");

// Generates an SVG markup; inquirer.js object keys destructored in function parameters
const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  // Variable to store final SVG markup string
  let markupFile = "";

  markupFile +=
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  // Create an instance of the class object accordingly, and set the shape color; call render() method on object to return string
  if (shape === "Triangle") {
    const triangle = new Triangle();
    triangle.setColor(shapeColor);
    const result = triangle.render();
    markupFile += result;
  } else if (shape === "Circle") {
    const circle = new Circle();
    circle.setColor(shapeColor);
    const result = circle.render();
    markupFile += result;
  } else {
    const square = new Square();
    square.setColor(shapeColor);
    const result = square.render();
    markupFile += result;
  }

  // Set the text input from inquirer data to all uppercase for display; font-family changed
  markupFile += `<text x="150" y="125" font-size="35" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" fill="${textColor}">${text.toUpperCase()}</text></svg>`;

  return markupFile;
};

module.exports = generateSVG;
