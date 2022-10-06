let s1=5;
let s2=6;
let s3=7;
let s= s1+s2+s3 / 2;
let a = Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));
console.log("Area of triangle : "+a);

function getFileExtension(filename){
    const ext = filename.split('.').pop();
    return ext;
}
const result1 = getFileExtension('module.js');
console.log(result1);
const result2 = getFileExtension('module.txt');
console.log(result2);

function sumTriple(sum1,sum2){
    if(sum1 == sum2)
    {
        return 3 * (sum1 + sum2);
    }
    else{
        return(sum1 + sum2);
    }
}
console.log(sumTriple(4,6));
console.log(sumTriple(4,4));
