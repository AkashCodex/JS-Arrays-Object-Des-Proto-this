let a=[1,2,3,4,5];

console.log(a.length);    // size=5

a[-67]=87;         
a[-65]=88;
a[-70]=9;     

console.log(a[-67]);    //87
console.log(a[-65]);    //88
console.log(a[-70]);    //9  

console.log(a.length);  //size is 5 how is this possible?