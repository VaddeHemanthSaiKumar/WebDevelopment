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

// string interpolation(${variableName | functionName | ConstructorName})
function toCheckGivenNumberIsDivisibleByThreeAndFive(givenNumber){
    if((givenNumber%3==0)&&(givenNumber%5==0)&&(givenNumber>0)){
        return `${givenNumber} is divisble by 3 and 5`;
    }
    else if((givenNumber%3==0)&&(givenNumber>0)){
        return `${givenNumber} is divisble by 3`;
    }
    else if((givenNumber%5==0)&&(givenNumber>0)){
        return `${givenNumber} is divisble by 3`;
    }
    else{
        return `${givenNumber} is negative,please provide positive.`
    }
}
console.log(`Given Number Divisible Status : ${toCheckGivenNumberIsDivisibleByThreeAndFive(15)}`);
console.log(`Today Date and Time : ${Date()}`)

let colorName=prompt(`Enter color`)
let BenzCar=prompt(`Enter CarName`)
document.getElementById("red_color").innerHTML=` user loves <span style="color:${colorName};">${colorName}</span> color <span style="color:${colorName}>${BenzCar}</span> car`

// string object mutuablity
bagBrandName="Fastrack";
console.log(bagBrandName);