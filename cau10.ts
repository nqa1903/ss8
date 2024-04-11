interface Person1 {
    name : string,
    age : number,
}

interface Employee extends Person1 {
    employeeId : string, 
}

let employee :Employee = {
    name : 'anh',
    age : 21,
    employeeId : "student",
} 
console.log(employee);
