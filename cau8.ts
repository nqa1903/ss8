function Intersec(obj1:any , obj2:any):any{
    return Object.assign({} , obj1 , obj2);
}

let obj1 ={
    name : 'anh',
    address : 'hanoi',
}

let obj2 ={
    age : 21,
    id : 1,
}



console.log(Intersec(obj1, obj2));
