const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');

async function getUserInput() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for your logo:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color of your logo (color keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter the shape color of your logo (color keyword or hexadecimal number):',
        },
    ]);

    return response;
}

async function generateSVG({ text, textColor, shape, color }) {
    let svgShape = '';

    if (shape === 'circle') {
        const circle = new Circle({ color, text, textColor });
        svgShape = circle.render();
    } else if (shape === 'triangle') {
        const triangle = new Triangle({ color, text, textColor });
        svgShape = triangle.render();
    } else if (shape === 'square') {
        const square = new Square({ color, text, textColor });
        svgShape = square.render();
    }

    const svgfinal = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${svgShape}
        </svg>`;

    fs.writeFileSync('logo.svg', svgfinal);
}


async function main() {
    const userInput = await getUserInput();
    await generateSVG(userInput);
}

main();
