// anonmyous function
let number=10;
let anonmyousFunction=function (){
    console.log("AnonmyousFunction.");
}
for (let functionCallTimes=1;functionCallTimes<=5;functionCallTimes++){
    anonmyousFunction();
}
anonmyousFunction();

// function without parameters and without return value
let toDoubleNumber=function (){
    let number=10;
    let doubledNumber=number*2;
    console.log(doubledNumber);
}
toDoubleNumber();

// function with parameters and without return value
let toFindAreaOfRightAngledTriangle=function (base,height){
    let areaOfRightAngledTriangle=0.5*base*height;
    console.log(areaOfRightAngledTriangle);
}
toFindAreaOfRightAngledTriangle(10,15);

// function with parameters and return value
let toFindAreaOfRectangle=function (length,breadth){
    let areaOfRectangle=length*breadth;
    return areaOfRectangle;
}
document.getElementById("area_of_rectangle_heading").innerText="Area of Rectangle: "+parseInt(toFindAreaOfRectangle(10,15))+"cm";
document.getElementById("rectangle_area_operational_coding").innerText=toFindAreaOfRectangle;