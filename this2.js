///this compiled 
//this run time



let user={ 
 name:"Akash",
 a:[1,2,3,4],
 accessArray:()=>{
   console.log(this.name);  
 },
 normalfunction(){
  console.log(this.name);
 }
}

user.accessArray();
user.normalfunction();