//objects Destructoring

const person1={
    name:"Akash",
    postion:"Software Developer Trainee1",
    address:{
       city:"Kurkshetra",
       Houseno:"818/sector-7" 
    }
}


const person2={
    name:"Sanjay",
    postion:"Software Developer Trainee2",
    address:{
       cite:"N/A",
       Housenoo:"N/A" 
    }
}


console.log(person1.address.city);  //kkr
console.log(person1.address.Houseno);  //818

//access using destructoring
console.log("Using destructoring");

const{address:{city},address:{Houseno},name,postion}=person1;
console.log(city);                       //KKR
console.log(Houseno);                    //818/sector-7
console.log(name);                       //Akash  
console.log(postion);                    //Software Developer Trainee1



const{address:{cite},address:{Housenoo},name,postion}=person2;
console.log(cite);                       //N/A
console.log(Housenoo);                    //N/A
console.log(name);                       //Sanjay  
console.log(postion);                    //Software Developer Trainee2

