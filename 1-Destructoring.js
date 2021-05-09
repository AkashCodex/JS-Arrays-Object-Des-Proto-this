//destructoring functions
function  AddMultiplyDiv(a,b) {
   return [a+b,a*b,a/b,"exponential div not possible"]; 
}


const [sum,mul,div,exp]=AddMultiplyDiv(6,3);

console.log(sum);      //9
console.log(mul);      //18 
console.log(div);      //2
console.log(exp);      //exponential div not possible


//destructoring arrays
const arr0=[sum,mul,div,exp];
const arr1=[3,4,5,6,7,8,"jhdjh","jgh"];
let [a,b,...rest]=arr0;
console.log(a);                 //9
console.log(b);                 //18
console.log(rest);              //2 exponential div not possible

//concatenation of 2 arrays using destructoring
let arr3=[...arr0,...arr1];
console.log(arr3);              //concat without concat method 

