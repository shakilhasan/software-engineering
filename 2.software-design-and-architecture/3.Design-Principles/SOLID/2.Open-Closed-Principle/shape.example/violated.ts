class Rectangle {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

class Circle {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
}

function calculateAreasOfMultipleShapes(
    shapes: Array<Rectangle | Circle>
) {
    return shapes.reduce((calculatedArea, shape) => {
        if (shape instanceof Rectangle) return calculatedArea + shape.width * shape.height;
        return calculatedArea + shape.radius * Math.PI;
    }, 0);
}
//The issue with the above approach is that when we introduce a new shape, we need to modify our  calculateAreasOfMultipleShapes function.
// This makes it open for modification and breaks the open-closed principle.
