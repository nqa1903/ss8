function squareNumber(value: number | number[]) : number | number[]{
    if(typeof value === 'number'){
        return value*value;
    }else{
        return value.map(num => num * num);
    }
    return 0;
}

console.log(squareNumber([1,2,3,4]));
console.log(squareNumber(10));

