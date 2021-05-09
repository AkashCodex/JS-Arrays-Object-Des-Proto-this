let a=[1,2,3,4,5];

console.log(a.length);   //5

for(let i=-20;i<=0;i++){
   a[i]=i; 
}
for(let i=-20;i<a.length;i++){
    console.log(a[i]);      // -20,-19......to 5 prints 
 }

 // I push 20 elements on negative indices still size of array is 5?

 console.log(a.length);  //5