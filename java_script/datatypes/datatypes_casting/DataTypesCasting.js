// Data Types Casting 
// implicit datatype casting
let numberOne="25";
let numberTwo=2;
console.log(numberOne+numberTwo,typeof(numberOne+numberTwo)); //252
console.log(numberOne-numberTwo,typeof(numberOne-numberTwo)); //23
console.log(numberOne*numberTwo,typeof(numberOne*numberTwo)); //50
console.log(numberOne/numberTwo,typeof(numberOne/numberTwo)); //12.5

// explicit datatype casting
// any datatype to number datatype
// Number(anyData):number
let scienceMark="94";
let socialScienceMark=78;
let averageMark=(Number(scienceMark)+Number(socialScienceMark)/2);
console.log(averageMark,typeof averageMark);//86 'number'
let isUserNameValid=true;
console.log(Number(isUserNameValid),typeof Number(isUserNameValid));
let isPasswordValid=false;
console.log(Number(isPasswordValid),typeof Number(isPasswordValid));
let waterBottleQuantity="2litres";
console.log(Number(waterBottleQuantity),typeof Number(waterBottleQuantity));

// parseInt(string):number
let oilPackQuantity="5l";
console.log(parseInt(oilPackQuantity),typeof parseInt(oilPackQuantity));//5 'number'
let isMobileNumberValid=false;
console.log(parseInt(isMobileNumberValid),typeof parseInt(isMobileNumberValid));// NaN number

// parseFloat(string):number
let academicCGPA="8.65CGPA";
console.log(parseFloat(academicCGPA),typeof parseFloat(academicCGPA));//8 'number'
let isAgeValid=false;
console.log(parseFloat(isAgeValid),typeof parseFloat(isAgeValid));//NaN number

// any datatype to string datatype
// string(anyData):string
var mobileNumber=9550060945;
console.log(String(mobileNumber),typeof String(mobileNumber)); //9550060945 string
var isSunRiseWest=false;
console.log(String(isSunRiseWest),typeof String(isSunRiseWest));// false string

// toString():string
var mobileNumber=9492022635;
console.log(mobileNumber.toString(),typeof mobileNumber.toString());//9492022635 string
var isSunRiseEast=true;
console.log(isSunRiseEast.toString(),typeof isSunRiseEast.toString());// true string

// any datatype into boolean datatype
// Boolean(anyData):boolean
let username='';
console.log(Boolean(username),typeof Boolean(username)); //false 'boolean'