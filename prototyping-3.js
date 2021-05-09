let user1={
    name:"U1"
}

let user2={
    name:"U2"
}


let user3={

}

user3.__proto__=user1;
console.log(user3.name);
user3.__proto__=user2;
