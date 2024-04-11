type Person3 = {
    name : string;
    age : number,
}

type Address = {
    street : string;
    city : string;
}

type Information = Person3 & Address;
let UserInfo :Information = {
    name : 'anh',
    age : 21,
    street : 'Giai Phong',
    city : 'hanoi',
}
console.log(UserInfo);
