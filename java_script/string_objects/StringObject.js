// string object
// string literals("" | ''):string
let batteryName="Dur'a'cell";
let projectorName='Ep"s"on';
console.log(batteryName,typeof batteryName);
console.log(projectorName,typeof projectorName);

// String():string
let bagBrandName=String("wildcraft");
console.log(bagBrandName,typeof bagBrandName);
let bikeModelName=String("ApacheRTR180");
console.log(bikeModelName,typeof bikeModelName);

// template literals(``):string
let purpose=`The process of designing and developing
the front-end web pages by using the webtechnologies.`
console.log(purpose,typeof purpose);

// new String():StringObject
let courseName=new String(`JavaScript`);// boxing
console.log(courseName,typeof courseName);