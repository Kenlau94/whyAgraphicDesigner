# Object-oriented Programming Challenge: SVG Logo Maker

## Objective

Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file to an external site. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file. The main issue I faced was to the inquirer. The dependencies that is required is inquirer 8.2.4, no other. I was stuck on this for literally weeks but thanks to my fellow classmates and a lot of youtube, I present my work.

## Acceptance Criteria

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg`
  AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Grading Requirments

### Deliverables: 15%

At least one sample SVG file generated using the application must be submitted.

Your GitHub repository containing your application code.

### Walkthrough Video: 32%

A walkthrough video that demonstrates the functionality of the SVG logo maker and passing tests must be submitted.

The README.md file must include a link to the walkthrough video.

The walkthrough video must show all tests passing from the command line.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated SVG file, showing the file being opened in the browser. The image in the browser must reflect the choices made by the user (text, shape, and colors).

### Technical Acceptance Criteria: 40%

Satisfies all of the preceding acceptance criteria plus the following:

Uses the Inquirer packageLinks to an external site..

Uses the Jest packageLinks to an external site. for a suite of unit tests.

The application must have Triangle, Square, and Circle classes.

### Repository Quality: 13%

Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality readme with description and a link to a walkthrough video.

## Link GitHub

[GitHub Repo](https://github.com/Kenlau94/whyAgraphicDesigner)

## Demonstration
https://github.com/Kenlau94/whyAgraphicDesigner/assets/134185724/adefecef-d3f4-4f47-992e-462c0c7d1bcd
