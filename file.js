let a=8;
let b=9;
let c=10;
s=a+b+c;
console.log(Math.sqrt(s*((s-a)*(s-b)*(s-c))));

//Get File Extension
filename="java.html";
console.log(filename.split('.').pop());

//if_else
function sumortriple(x,z){
if(x==z){
    return 3*(x+z);
}
else{
    return (x+z);
}
}
console.log(sumortriple(10, 30));
console.log(sumortriple(4,4));
console.log(sumortriple(12,12))
