// variables
// variable_declaration_keyword variable_name = data/value

//difference between var let const
// clarity one: declaration and initialization(var let const)
var numberOne=10;
console.log(numberOne);
let mobileBrandName="SAMSUNG";
console.log(mobileBrandName);
const pi=3.142;
console.log(pi);

//clarity two:re-initialization(var let)
numberOne=20;
console.log(numberOne);
mobileBrandName="APPLE";
console.log(mobileBrandName);
// pi=3.142; 
console.log(pi);

//clarity three:only-declaration(var let)
var numberTwo;
console.log(numberTwo);
let mobileModelName;
console.log(mobileModelName);
const earthOrderPosition=3; 
console.log(earthOrderPosition);

// clarity four:re-declaration(var)
var bagBrandName="WildCraft";
var bagBrandName="American Tourister";
console.log(bagBrandName);
let classRoomNumber=202;
// let classRoomNumber=203; 
console.log(classRoomNumber);
// const gravity=9.8; 
// const gravity=10; 
console.log(gravity);

//clarity five:block-scoped variables(let const)
{
    var laptopBrandName="hp";
    let laptopModelName="Pavilion";
    console.log(laptopModelName);
    const laptopRam=8;
    console.log(laptopRam);
}
console.log(laptopBrandName);

// clarity six:function-scoped variables(var let const)
function functionname(){
    var studentName="John";
    console.log(studentName);
    let studentRollNumber=101;
    console.log(studentRollNumber);
    const studentGender="Male";
    console.log(studentGender);
}

//clairty seven:variable hoisting(var)
console.log(noteBookBrandName);
var noteBookBrandName="ClassMate";
// console.log(speakerBrandName);
let speakerBrandName="JBL";
// console.log(isSunRiseEast);
const isSunRiseEast=true;