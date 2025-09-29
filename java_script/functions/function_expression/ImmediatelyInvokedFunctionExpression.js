// immediately invoked functionexpression
(function(){
    console.log("Immediately Invoked Function Expression.")
})();

// function with parameters and without return value
((lenght,breadth)=>console.log(length*breadth))(10,15);

// function with parameters and with return values
let squaredNumber=(number=>{return number*number})(625);
console.log(squaredNumber);