// // imports the shapes from the shapes file
// const { Circle, Square, Triangle, Shapes } = require("./shapes.js");

// // runs the describe function => test
// describe("Testing shapes and color come out with the prompts answered", () => {
//   test("should set color correctly", () => {
//     const shapes = new Shapes();
//     shapes.setColor("red");
//     expect(shapes.color).toBe("red");
//   });
//   // more test
//   test("should gen a circle with the given color", () => {
//     const circle = new Circle();
//     circle.setColor("blue");
//     const renderedCircle = circle.render();
//     expect(renderedCircle).toBe(
//       '<circle cx="150" cy="110" r="80" fill="blue" />'
//     );
//   });
//   // more test
//   test("should gen a square with the given color", () => {
//     const square = new Square();
//     square.setColor("green");
//     const renderedSquare = square.render();
//     expect(renderedSquare).toBe(
//       '<rect x="65" y="28" width="160" height="160" fill="green"/>'
//     );
//   });
//   // final test
//   test("should gen a triangle with the given color", () => {
//     const triangle = new Triangle();
//     triangle.setColor("purple");
//     const renderedTriangle = triangle.render();
//     expect(renderedTriangle).toBe(
//       '<polygon points="150,15 243,176 57,176" fill="purple" />'
//     );
//   });
// });

//atempt 4
//

const { Triangle, Circle, Square } = require("./shapes");

// Jest.js test codes
describe("Shapes", () => {
  // Triangle class
  describe("Triangle", () => {
    it("creates a new Triangle object & sets color when the inherited setColor() method from the parent class is called", () => {
      const triangle = new Triangle();
      triangle.setColor("dodgerblue");
      expect(triangle.color).toEqual("dodgerblue");
    });
    it("when render() method is called, the object returns a triangle SVG element, with the correct fill attribute", () => {
      const triangle = new Triangle();
      triangle.setColor("rgba(0, 0, 0, 0.5)");
      expect(triangle.render()).toEqual(
        `<polygon points="150,15 243,176 57,176" fill="${triangle.color}" />`
      );
      expect(triangle.render()).toEqual(
        '<polygon points="150,15 243,176 57,176" fill="rgba(0, 0, 0, 0.5)" />'
      );
    });
  });

  // Circle class
  describe("Circle", () => {
    it("creates a new Circle object & sets color when the inherited setColor() method from the parent class is called", () => {
      const circle = new Circle();
      circle.setColor("red");
      expect(circle.color).toEqual("red");
    });
    it("when render() method is called, the object returns a circle SVG element, with the correct fill attribute", () => {
      const circle = new Circle();
      circle.setColor("hsl(4.71239rad, 60%, 70%)");
      expect(circle.render()).toEqual(
        `<circle cx="150" cy="110" r="80" fill="${circle.color}" />`
      );
      expect(circle.render()).toEqual(
        `<circle cx="150" cy="110" r="80" fill="hsl(4.71239rad, 60%, 70%)" />`
      );
    });
  });

  // Square class
  describe("Square", () => {
    it("creates a new Square object & sets color when the inherited setColor() method from the parent class is called", () => {
      const square = new Square();
      square.setColor("#33FF3F");
      expect(square.color).toEqual("#33FF3F");
    });
    it("when render() method is called, the object returns a square SVG element, with the correct fill attribute", () => {
      const square = new Square();
      square.setColor("#D1FF33");
      expect(square.render()).toEqual(
        `<rect x="68" y="30" width="160" height="160" fill="${square.color}" />`
      );
      expect(square.render()).toEqual(
        `<rect x="68" y="30" width="160" height="160" fill="#D1FF33" />`
      );
    });
  });
});
