interface Shape {
    getArea(): number;
}

class Rectangle_1 implements Shape {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getArea() {
        return this.width * this.height;
    }
}

class Circle_1 implements Shape {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getArea() {
        return this.radius * Math.PI;
    }
}

function calculateAreasOfMultipleShapes_1(
    shapes: Shape[]
) {
    return shapes.reduce(
        (calculatedArea, shape) => {
            return calculatedArea + shape.getArea();
        },
        0
    );
}

//Now when we introduce a new shape, we don’t need to modify our  calculateAreasOfMultipleShapes function.
// We make it open for extension but closed for modification.
