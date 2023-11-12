class Shape {
    constructor({ color, text, textColor }) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Triangle extends Shape {
    constructor(props) {
        super(props);
    }

    render() {
        const textX = 150; 
        const textY = 100; 

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,20 50,180 250,180" fill="${this.color}" />
            <text x="${textX}" y="${textY}" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="16" font-family="Arial">${this.text}</text>
        </svg>`;
    }
}

class Circle extends Shape {
    constructor(props) {
        super(props);
    }

    render() {
        const textX = 150; // Center of the circle
        const textY = 100; // Center of the circle

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.color}" />
            <text x="${textX}" y="${textY}" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="16" font-family="Arial">${this.text}</text>
        </svg>`;
    }
}


class Square extends Shape {
    constructor(props) {
        super(props);
    }

    render() {
        const textX = 150; 
        const textY = 100; 
        const sideLength = 150; 

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="${textX - sideLength / 2}" y="${textY - sideLength / 2}" width="${sideLength}" height="${sideLength}" fill="${this.color}" />
            <text x="${textX}" y="${textY}" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="16" font-family="Arial">${this.text}</text>
        </svg>`;
    }
}

module.exports = { Triangle, Circle, Square };
