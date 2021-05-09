/*console.log("Slice");

let a=[1,2,3,4,5];

console.log(a.length);   //5

a.splice(0,2);     

console.log(a.length);  // 3


for(let i=0;i<a.length;i++){
    console.log(a[i]);      // 3 4 5
}

console.log("Slice");
*/

let b=[1,2,3,4,5];

console.log(b.length);   //5

let z=b.slice(0,2);            //new array copy 0 copy 2 elment 1 2 

for(let i=0;i<z.length;i++){
    console.log(z[i]);      // 3 4 5
}

/*
console.log(b.length);   //5

for(let i=0;i<b.length;i++){
    console.log(b[i]);      // 3 4 5