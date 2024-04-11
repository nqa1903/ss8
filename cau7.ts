function checkTypeOf(type : number | number[] | string[] | object):void{
    if(Array.isArray(type)){
        console.log('array');
    }else{
        console.log(typeof type);
    }
}

checkTypeOf([1,2,3,'anh']);