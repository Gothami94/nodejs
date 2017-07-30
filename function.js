function addNumbers(a,b) {
    return (a+b);

}

function equation(a,b,c) {

    //equation is (a+b)*c
    x=addNumbers(a,b);
    return(x*c);

}

console.log(addNumbers(5,7));
console.log(equation(5,7,2));


function printModule(){

    console.log("This is module 1 testing");
}

module.exports.module1=printModule;