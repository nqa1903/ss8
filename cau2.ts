type Person = {
    name : string,
    age : number,
    address : object,
}

function validatePerson(people:object){
    if('name' in people && typeof people.name === 'string' &&'age' in people && typeof people.age === 'number' && 'address' in people && typeof people.address === 'object' && !Array.isArray(people.address)){
        return true;
    }else{
        return false;
    }
}

const person1 : Person = {
    name : 'Anh',
    age : 21,
    address : {
        street : 'Ha noi',
    }
}
const person2 = {
    age : 20,
}
console.log(validatePerson(person1));
console.log(validatePerson(person2));


