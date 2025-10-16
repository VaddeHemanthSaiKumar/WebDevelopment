//array object
let studentRollNumber=101;
let studentName="RajKumar";
let studentAge=25;
// variables limitations:variables can store only data at a time,it cannot store multiple data and
//  even if we create multiple variables to store multiple data,it will a code elongated  way, thats why we go for array object.

// array literals([elements]):object
let studentRollNumbers=[101,102,103,104,105];
let studentNames=["Raj","Kumar","RajKumar"];
let studentAges=[32,16,45,35,10];
let studentInformations=["SaiKumar",23,101,false,true,63785463215874521n];
console.log(studentInformations,typeof studentInformations);

// empty array literals:object
let colors=[];//0
colors[0]="red";
colors[1]="green";
colors[2]="greenyellow"
colors[5]="blue";
console.log(colors,typeof colors);
console.log(colors[2])

// Array():object
let courses=Array();
console.log(courses,typeof courses);

// Array(arrayLength):object
let courseNames=Array(5);
courseNames[0]="OopsConcept";
courseNames[1]="Python";
courseNames[2]="JavaLibrary";
courseNames[3]="SQL";
courseNames[4]="Aptitude";
courseNames[5]="JavaScript";
courseNames[6]="HTML | CSS";
console.log(courseNames,typeof courseNames);
// Array(elements):object
let bagBrands=Array("SkyBags","WildCraft","AmericanTourister","VIP");
console.log(bagBrands,typeof bagBrands);

// new Array():object
let laptopBrands=new Array();
console.log(laptopBrands,typeof laptopBrands);
// new Array(arrayLength):object
let shoes=new Array(3);
shoes[0]="Sparx";
shoes[1]="PUMA";
shoes[2]="adidas";
shoes[3]="Nike";
console.log(shoes,typeof shoes);

// new Array(elements):object
let classRoomNumbers=new Array("401","402","403","404","405");
console.log(classRoomNumbers);