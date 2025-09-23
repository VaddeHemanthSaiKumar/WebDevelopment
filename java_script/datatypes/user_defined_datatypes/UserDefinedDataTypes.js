// user-defined datatypes
// java script components:object

// Number():number
// new Number():NumberObject
var numberObject=new Number(10); //boxing
console.log(numberObject,typeof numberObject);
var number=numberObject.valueOf(); //unboxing
console.log(number,typeof number);

// string():string
// new String():StringObject
var stringObject=new String("Java"); //boxing
console.log(stringObject,typeof stringObject);
var string=stringObject.valueOf(); //unboxing
console.log(string,typeof string)

// Boolean():boolean
// new Boolean():BooleanObject
var booleanObject=new Boolean(true);//boxing
console.log(booleanObject,typeof booleanObject)
var boolean=booleanObject.valueOf(); //unboxing
console.log(boolean,typeof boolean);

// Array():ArrayObject
// new Array():ArrayObject
var courses=Array("Java","Javascript");
console.log(courses,typeof courses);
var colors=new Array("DarkBlue","Gray");
console.log(colors,typeof colors);

// BigInt():bigint
var gpayTransactionID=BigInt(1844851816848186955n);
console.log(gpayTransactionID,typeof gpayTransactionID);
var phonePeTransactionID=BigInt(468164618416848461354n);
console.log(phonePeTransactionID,typeof phonePeTransactionID);

// Symbol():symbol
var username=Symbol("Username");
console.log(username,typeof username);
var password=Symbol("username");
console.log(password,typeof password);

// clarity
console.log(new Number(10),typeof new Number(10));//Number{10} 'object'
console.log(new String("JavaScript"),typeof new String("JavaScript"));//String{'JavaScript} 'object'
console.log(new Boolean(true),typeof new Boolean(true));//Boolean{true} 'object'
console.log(new Array("Java","JavaScript"),typeof new Array("Java","JavaScript"));//(2)['Java','JavaScript']
console.log(10,typeof 10);//10 'number'
console.log("Java",typeof "Java");//Java string
console.log(true,typeof true);//true 'boolean'