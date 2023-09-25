"use strict";
class Rectangle_1 {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Circle_1 {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * Math.PI;
    }
}
function calculateAreasOfMultipleShapes_1(shapes) {
    return shapes.reduce((calculatedArea, shape) => {
        return calculatedArea + shape.getArea();
    }, 0);
}
//Now when we introduce a new shape, we don’t need to modify our  calculateAreasOfMultipleShapes function.
// We make it open for extension but closed for modification.
