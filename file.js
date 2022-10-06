//Area of a triangle when the three sides are given

let a = 5;
let b = 6;
let c = 7;
let s = (a+b+c)/2
let arin= s*(s-a)*(s-b)*(s-c) 
let area =Math.sqrt(arin)

console.log("The Area of the triangle with three sides is:"+area);

//Filename Extension

function getextension(filename){
    const extension = filename.split('.').pop();
    return extension;
}

let res = getextension('index.html');
console.log(res);

let res1 = getextension('Inherited.java')
console.log(res1)


//Triple the sum

let a1 = 20;
let b1 = 30;

let c1 = 3*(a1+b1);

console.log("The Thripled Sum of the 20 and 30 is: "+c1);
