// named function
for(let functionCallTimes=1;functionCallTimes<=200;functionCallTimes++){
    namedFunction();
}
function namedFunction(){
    // operational codes
    console.log("NamedFunction");
}

// function without parameters and without return value
function toProductTwoNumbers(){
    let numberOne=10;
    let numberTwo=20;
    let productValue=numberOne*numberTwo;
    console.log(productValue);
}
toProductTwoNumbers();

// function with parameters and without return value
function toProductThreeNumbers(numberOne,numberTwo,numberThree){
    let productValue=numberOne*numberTwo*numberThree;
    console.log(productValue);
}
toProductThreeNumbers(10,20,30);
toProductThreeNumbers(40,50,60);
toProductThreeNumbers(70,80,90);

// function with parameters and return value
function toSquareradius(radius){
    let squaredRadius=radius*radius;
    return squaredRadius;
}
function toFindAreaOfCircle(){
    const piValue=3.142;
    let areaOfCircle=piValue*toSquareradius(7.5);
    return areaOfCircle;
}
document.getElementById("area_of_circle").innerText="Area of Circle : "+parseInt(toFindAreaOfCircle())+"cm";
document.getElementById("paragraph").innerText=toFindAreaOfCircle;