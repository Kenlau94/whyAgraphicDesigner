const { Triangle, Circle, Square } = require("./shapes");

const triangle = new Triangle();
const circle = new Circle();
const square = new Square();

const generateLogo = ({ text, textColor, shape, shapeColor }) => {
  let markup = "";

  markup +=
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  if (shape === "Circle") {
    circle.setColor(shapeColor);
    const results = circle.render();
    markup += results;
  } else if (shape === "Square") {
    square.setColor(shapeColor);
    const results = square.render();
    markup += results;
  } else {
    triangle.setColor(shapeColor);
    const results = triangle.render();
    markup += results;
  }

  markup += `<text x="150" y="100" font-size="35" text-anchor="middle" style="font-family: 'Open Sans', sans-serif;" fill="${textColor}">${text.toUpperCase()}</text></svg>`;

  return markup;
};

module.exports = generateLogo;
