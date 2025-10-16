// java script object functions

let studentObject={
    studentName:"Naseer",
    age:22,
    isGraduated:true,
    isMarried:false,
    javaFullStack:{
        1:"CoreJava",
        2:"AdvancedJava",
        3:"WebDevelopment",
        4:"SQL"
    },
    residentialAddress:{
        plotName:"SriSaiRam Mens Pg",
        plotNumber:"123C",
        streetNumber:"Road-4",
        areaName:"HMT Hills",
        colonyName:"KPHB Colony",
        cityName:"Hyderabad",
        postalCode:"5000072"
    }
}
console.log(studentObject);

// Object()functions
// Object.keys(object):keysArray
console.log(Object.keys(studentObject));

// Object.values(object):valuesArray
console.log(Object.values(studentObject));

// Object.entries(object):entriesArray
console.log(Object.entries(studentObject).flat());

// Object.seal(object):sealedObject
Object.seal(studentObject);
// modification
studentObject.isGraduated=false;
console.log(studentObject.isGraduated);
// addition
// deletion