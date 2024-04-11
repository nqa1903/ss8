interface Rectangle {
    height : number;
    width : number;
}

interface Square {
    sideLength : number;
}

interface Circle{
    radius : number;
}

function calculateArea(shape : Rectangle | Square | Circle) : number {
    if('height' in shape && 'width' in shape){
        return shape.height * shape.width;
    }else if('sideLength' in shape){
        return shape.sideLength*shape.sideLength;
    }else if('radius' in shape){
        return Math.PI * shape.radius * shape.radius;
    }
    return 0;
}

let rectangleArea : Rectangle = {height : 15 , width : 10};
console.log(calculateArea(rectangleArea));

