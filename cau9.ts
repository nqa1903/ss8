function printInput(input : string | number | any[]):number{
    if(typeof input === 'string'){
        return input.length;
    }else if(typeof input === 'number'){
        return input*input;
    }else if(Array.isArray(input)){
        return input.length;
    }else{
        return 0;
    }
}

console.log(printInput(['anh' , 'quang' , 1 , 4]));
